import React from "react";
import Image from "next/image";

const CustomImage = (props) => {
  return (
    <Image
      src={props.src}
      alt={props.src}
      width="100%"
      height="100%"
      {...props}
    />
  );
};
export const MDXComponents = {
  img: CustomImage,
};
