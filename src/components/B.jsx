const B = ({ forRef }) => {
  return (
    <div className="w-full h-[100px] flex relative justify-center items-center bg-gray-400">
      <div
        ref={(el) => {
          forRef.current["B"] = el;
        }}
        className="w-[50px] flex h-[50px] bg-black text-white justify-center items-center"
      >
        B
      </div>
    </div>
  );
};

export default B;
