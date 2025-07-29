export const getEmailJsKey = () => {
  return (
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY ||
    import.meta.env.EMAILJS_PUBLIC_KEY ||
    "a"
  );
};

export const getTokenLocal = async () => {
  const localToken = import.meta.env.VITE_LOCAL_TOKEN;
  if (localToken) return localToken;

  try {
    const res = await fetch("/api/getTestKey");
    if (!res.ok) throw new Error("API error");
    const data = await res.json();
    if (data.key) return data.key;
  } catch (err) {
    console.error("Fetch attempt failed:", err);
  }
};

export const getTokenVercel = () => {
  return import.meta.env.VERCEL_ENV;
};
export const getTokenVercelEnv = () => {
  return import.meta.env.ENV;
};
