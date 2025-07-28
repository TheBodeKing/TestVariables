const A = ({ forRef }) => {
  const getKey = async () => {
    try {
      const res = await fetch("/api/getTestKey");
      const data = await res.json();
      console.log("Key from Vercel:", data.key);
    } catch (err) {
      console.error("Error fetching key:", err);
    }
  };

  return (
    <div className="w-full h-[100px] flex relative justify-center items-center bg-gray-400">
      <div
        ref={(el) => {
          forRef.current["A"] = el;
        }}
        className="w-[50px] flex h-[50px] bg-black text-white justify-center items-center"
        onClick={() => {
          getKey();
        }}
      >
        A
      </div>
    </div>
  );
};

export default A;
