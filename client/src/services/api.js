import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

/* ── 1. CORE HTTP FETCH FUNCTIONS ── */

export const fetchLocation = async (slug) => {
  const res = await fetch(`${BASE_URL}/locations/${slug}`);
  if (!res.ok) {
    const error = new Error(`Location ${slug} not found`);
    error.status = res.status;
    throw error;
  }
  return res.json();
};

export const fetchLocations = async () => {
  const res = await fetch(`${BASE_URL}/locations`);
  if (!res.ok) throw new Error("Failed to fetch locations");
  return res.json();
};

export const submitQuote = async (payload) => {
  const currentHost = typeof window !== 'undefined' ? window.location.hostname.replace(/^www\./, '') : 'teflondam.com';
  const finalPayload = { sourceWebsite: currentHost, ...payload };

  const res = await fetch(`${BASE_URL}/forms/quote`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(finalPayload),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.errors?.[0]?.msg || data.message || "Failed to submit quote.");
  return data;
};

export const submitContact = async (payload) => {
  const currentHost = typeof window !== 'undefined' ? window.location.hostname.replace(/^www\./, '') : 'teflondam.com';
  const finalPayload = { sourceWebsite: currentHost, ...payload };

  const res = await fetch(`${BASE_URL}/forms/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(finalPayload),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.errors?.[0]?.msg || data.message || "Failed to submit message.");
  return data;
};

/* ── 2. QUERY KEYS ── */

export const QUERY_KEYS = {
  locations: ["locations"],
  location: (slug) => ["location", slug],
  adminStats: ["admin", "stats"],
  adminSubmissions: (params) => ["admin", "submissions", params],
  adminLocations: ["admin", "locations"],
};

/* ── 3. TANSTACK CUSTOM HOOKS ── */

/** Hook: Fetch all active locations with auto-seeding of individual city caches */
export const useLocations = (options = {}) => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: QUERY_KEYS.locations,
    queryFn: async () => {
      const data = await fetchLocations();
      if (Array.isArray(data)) {
        // Automatically seed individual city caches for 0ms transitions
        data.forEach((loc) => {
          if (loc && loc.slug) {
            queryClient.setQueryData(QUERY_KEYS.location(loc.slug), loc);
          }
        });
      }
      return data;
    },
    staleTime: 1000 * 60 * 30,
    ...options,
  });
};

/** Hook: Fetch single location with instant initialData derivation */
export const useLocation = (slug, options = {}) => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: QUERY_KEYS.location(slug),
    queryFn: () => fetchLocation(slug),
    initialData: () => {
      if (!slug) return undefined;
      const cachedDirect = queryClient.getQueryData(QUERY_KEYS.location(slug));
      if (cachedDirect) return cachedDirect;

      const allLocations = queryClient.getQueryData(QUERY_KEYS.locations);
      if (Array.isArray(allLocations)) {
        return allLocations.find((loc) => loc.slug === slug);
      }
      return undefined;
    },
    initialDataUpdatedAt: () => {
      return (
        queryClient.getQueryState(QUERY_KEYS.location(slug))?.dataUpdatedAt ||
        queryClient.getQueryState(QUERY_KEYS.locations)?.dataUpdatedAt
      );
    },
    staleTime: 1000 * 60 * 30,
    ...options,
  });
};

/** Hook: Hover prefetch for individual city */
export const usePrefetchLocation = () => {
  const queryClient = useQueryClient();
  return (slug) => {
    if (!slug) return;
    queryClient.prefetchQuery({
      queryKey: QUERY_KEYS.location(slug),
      queryFn: () => fetchLocation(slug),
    });
  };
};

/** Hook: Hover prefetch for all locations */
export const usePrefetchLocations = () => {
  const queryClient = useQueryClient();
  return () => {
    queryClient.prefetchQuery({
      queryKey: QUERY_KEYS.locations,
      queryFn: fetchLocations,
    });
  };
};

export const useSubmitQuote = (options = {}) => useMutation({ mutationFn: submitQuote, ...options });
export const useSubmitContact = (options = {}) => useMutation({ mutationFn: submitContact, ...options });

/* ── 4. ADMIN FUNCTIONS ── */

export const adminLogin = async (username, password) => {
  const res = await fetch(`${BASE_URL}/admin/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Login failed");
  return data;
};

export const verifyToken = async (token) => {
  const res = await fetch(`${BASE_URL}/admin/verify`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("Invalid token");
  return res.json();
};

export const fetchStats = async (token) => {
  const res = await fetch(`${BASE_URL}/admin/stats`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("Failed to fetch stats");
  return res.json();
};

export const fetchSubmissions = async (type, page = 1, limit = 10, token) => {
  const res = await fetch(
    `${BASE_URL}/admin/submissions?type=${type}&page=${page}&limit=${limit}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch submissions");
  return res.json();
};

export const markSubmissionRead = async (id, token) => {
  const res = await fetch(`${BASE_URL}/admin/submissions/${id}/read`, {
    method: "PUT",
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("Failed to update status");
  return res.json();
};

export const deleteSubmission = async (id, token) => {
  const res = await fetch(`${BASE_URL}/admin/submissions/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("Failed to delete submission");
  return res.json();
};
