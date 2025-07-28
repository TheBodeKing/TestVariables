import {
  getEmailJsKey,
  getTokenLocal,
  getTokenVercel,
  getTokenVercelEnv,
} from "../utils/config";

const A = ({ forRef }) => {
  const email = getEmailJsKey();
  const local = getTokenLocal();
  const vercel = getTokenVercel();
  const env = getTokenVercelEnv();

  return (
    <div className="w-full h-[100px] flex relative justify-center items-center bg-gray-400">
      <div
        ref={(el) => {
          forRef.current["A"] = el;
        }}
        className="w-[50px] flex h-[50px] bg-black text-white justify-center items-center"
        onClick={() => {
          console.log(email);
          console.log(local);
          console.log(vercel);
          console.log(env);
        }}
      >
        A
      </div>
    </div>
  );
};

export default A;
