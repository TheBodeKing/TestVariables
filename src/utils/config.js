export const getEmailJsKey = () => {
  return (
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY ||
    import.meta.env.EMAILJS_PUBLIC_KEY ||
    "a"
  );
};

export const getTokenLocal = () => {
  return import.meta.env.VITE_LOCAL_TOKEN;
};

export const getTokenVercel = () => {
  return import.meta.env.VERCEL_ENV;
};
export const getTokenVercelEnv = () => {
  return import.meta.env.ENV;
};
