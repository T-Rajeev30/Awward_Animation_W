import React from "react";
import { useRef, useState } from "react";
const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handelMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientX - top) / height;
    const tiltX = (relativeX - 0.5) * 8;
    const tiltY = (relativeY - 0.5) * -8;

    const newTransfrom = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) 
    scale3d(0.98,0.98,0.98)`;

    setTransformStyle(newTransfrom);
  };
  const handeMouseLeave = () => {
    setTransformStyle("");
  };
  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handelMouseMove}
      onMouseLeave={handeMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export default BentoTilt;
