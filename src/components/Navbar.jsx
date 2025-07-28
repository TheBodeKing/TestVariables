import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { nav } from "../constants";
import { gsap } from "gsap";

const Navbar = ({ tarRef }) => {
  const [bloco, setBloco] = useState(null);
  const navRef = useRef({});
  const prevIdRef = useRef(null);

  useGSAP(() => {
    const prev = prevIdRef.current;

    if (prev && tarRef.current[bloco]) {
      gsap.to(prev, {
        x: 0,
      });
    }
    if (bloco) {
      gsap.to(tarRef.current[bloco], {
        x: 100,
      });
    }

    prevIdRef.current = tarRef.current[bloco];
  }, [bloco]);

  return (
    <nav className="w-full">
      <div className="w-full h-full justify-center items-center flex">
        {nav.map(({ nome, id }) => (
          <div
            ref={(el) => (navRef.current[id] = el)}
            key={id}
            className="hover:bg-black hover:text-white cursor-pointer p-5 m-5"
            onClick={() => {
              setBloco(id);
            }}
          >
            {nome}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
