export const getEmailJsKey = () => {
  return (
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY || process.env.EMAILJS_PUBLIC_KEY
  );
};
