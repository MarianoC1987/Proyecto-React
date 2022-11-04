import React from "react";

import { Image, Box } from "@chakra-ui/react";

function Body() {
  return (
    <Image
      position="absolute"
      objectFit="cover"
      w="100vw"
      h="100vh"
      src="./Imagenes/bosque5.jpg"
      zIndex="-20"
    ></Image>
  );
}

export default Body;
