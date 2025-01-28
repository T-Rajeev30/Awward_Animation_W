import React from "react";

const BentoCard = ({ src, title, description }) => {
  return (
    <>
      <div className="relative size-full">
        <video
          src={src}
          className="absolute object-center left-0 top-0 object-cover size-full "
          loop
          autoPlay
          muted
        />
        <div className="relative z-10 flex size-full flex-col   p-5 text-blue-50">
          <div>
            <h1 className="bento-title special-font">{title}</h1>
          </div>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default BentoCard;
