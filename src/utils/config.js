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
    const data = await res.json();
    return data.key;
  } catch (err) {
    console.error("Failed to get key from API:", err);
    return null;
  }
};

export const getTokenVercel = () => {
  return import.meta.env.VERCEL_ENV;
};
export const getTokenVercelEnv = () => {
  return import.meta.env.ENV;
};
