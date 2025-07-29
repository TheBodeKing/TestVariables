import { getTokenLocal } from "../utils/config";

const A = ({ forRef }) => {
  return (
    <div className="w-full h-[100px] flex relative justify-center items-center bg-gray-400">
      <div
        ref={(el) => {
          forRef.current["A"] = el;
        }}
        className="w-[50px] flex h-[50px] bg-black text-white justify-center items-center"
        onClick={async () => {
          console.log(await getTokenLocal());
        }}
      >
        A
      </div>
    </div>
  );
};

export default A;
