import {
  Box,
  Text,
  Image,
  Flex,
  Center,
  Icon,
  Grid,
  GridItem,
  Stack,
  Progress,
  SliderTrack,
  SliderFilledTrack,
  Slider,
} from "@chakra-ui/react";
import React from "react";
import bulbasaur from "../../../public/Imagenes/bulbasaur.png";
import arrowleft from "../../../public/Imagenes/arrowleft.png";
import Pokeball from "../../../public/Imagenes/Pokeball.png";
import Weight from "../../../public/Imagenes/Weight.svg";
import Height from "../../../public/Imagenes/Height.svg";

function Modal() {
  return (
    <Flex
      position="relative"
      maxW="390px"
      maxH="844px"
      borderRadius="12px"
      alignItems="center"
      justifyContent="space-around"
      bgColor="#74C848"
      flexDirection="column"
      w="100vw"
      h="100vh"
      m="auto"
      gap="3%"
    >
      <Image
        position="absolute"
        top="1vh"
        right="4vw"
        align="right"
        zIndex="5"
        opacity="0.1"
        src="/Imagenes/Pokeball.png"
      ></Image>
      <Flex justify="space-between" w="90%">
        <Flex zIndex="10" gap="10px">
          <Image src={arrowleft}></Image>
          <Text h="20%" color="white">
            Bulbasaur
          </Text>
        </Flex>
        <Text color="white" h="20%" textAlign="right">
          #001
        </Text>
      </Flex>

      <Image h="30%" w="60%" zIndex="10" src={bulbasaur} mb="-100px" />
      <Flex
        flexDirection="column"
        borderRadius="12px"
        h="70%"
        w="95%"
        bgColor="white"
        align="center"
      >
        <Flex
          flexDirection="columns"
          align="flex-end"
          justify="center"
          gap="5px"
          w="100%"
          h="19%"
        >
          <Box
            lineHeight="28px"
            w="70px"
            textAlign="center"
            borderRadius="9px"
            bg="#74C848"
            color="white"
            mb="10px"
          >
            TipoOne
          </Box>

          <Box
            lineHeight="28px"
            w="70px"
            textAlign="center"
            borderRadius="9px"
            bg="black"
            color="white"
            mb="10px"
          >
            TipoTwo
          </Box>
        </Flex>
        <Center
          fontWeight="bold"
          fontSize="22px"
          color="#74C848"
          w="100%"
          h="8%"
        >
          About
        </Center>

        <Grid
          m="auto"
          h="16%"
          w="85%"
          templateRows="2fr 1fr"
          templateColumns="repeat(3, 1fr)"
          rowgap="4px"
        >
          <GridItem
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="7px"
            borderRight="1px"
            borderColor="gray.300"
          >
            <Image h="20px" w="20px" src={Weight}></Image>
            <Text>W</Text>
          </GridItem>
          <GridItem
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="7px"
            borderRight="1px"
            borderColor="gray.300"
          >
            <Image h="20px" w="20px" src={Height}></Image>
            <Text>H</Text>
          </GridItem>
          <GridItem
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Text>Move1</Text>
            <Text>Move2</Text>
          </GridItem>
          <GridItem borderRight="1px" borderColor="gray.300" textAlign="center">
            Weight
          </GridItem>
          <GridItem borderRight="1px" borderColor="gray.300" textAlign="center">
            Height
          </GridItem>
          <GridItem textAlign="center">Moves</GridItem>
        </Grid>

        <Flex w="100%" h="16%">
          <Text m="auto" p="10px" fontSize="14px">
            There is a plant seed on its back right from the day this Pokémon is
            born. The seed slowly grows larger.
          </Text>
        </Flex>

        <Center
          fontWeight="bold"
          w="100%"
          fontSize="22px"
          color="#74C848"
          h="8%"
        >
          Base Stats
        </Center>

        <Flex w="90%" h="25%">
          <Flex
            direction="column"
            fontWeight="bold"
            fontSize="13px"
            color="#74C848"
            w="15%"
            align="flex-end"
            borderRight="1px"
            borderColor="gray.300"
            justify="space-around"
            pr="15px"
          >
            <Text>HP</Text>
            <Text>ATK</Text>
            <Text>DEF</Text>
            <Text>SATK</Text>
            <Text>SDEF</Text>
            <Text>SPD</Text>
          </Flex>
          <Flex
            align="center"
            fontWeight="600"
            direction="column"
            fontSize="13px"
            w="15%"
            justify="space-around"
          >
            <Text>045</Text>
            <Text>058</Text>
            <Text>032</Text>
            <Text>029</Text>
            <Text>057</Text>
            <Text>062</Text>
          </Flex>
          <Flex
            justify="center"
            align="center"
            h="100%"
            w="70%"
            flexDirection="column"
            gap="18px"
          >
            <Slider
              aria-label="slider-ex-1"
              defaultValue={30}
              max={200}
              isDisabled
              h="7px"
            >
              <SliderTrack h="6px" bg="#74cb4866">
                <SliderFilledTrack bg="#74cb48" opacity="1" />
              </SliderTrack>
            </Slider>
            <Slider
              aria-label="slider-ex-1"
              defaultValue={30}
              max={200}
              isDisabled
              h="7px"
            >
              <SliderTrack h="6px" bg="#74cb4866">
                <SliderFilledTrack bg="#74cb48" opacity="1" />
              </SliderTrack>
            </Slider>
            <Slider
              aria-label="slider-ex-1"
              defaultValue={30}
              max={200}
              isDisabled
              h="7px"
            >
              <SliderTrack h="6px" bg="#74cb4866">
                <SliderFilledTrack bg="#74cb48" opacity="1" />
              </SliderTrack>
            </Slider>
            <Slider
              aria-label="slider-ex-1"
              defaultValue={30}
              max={200}
              isDisabled
              h="7px"
            >
              <SliderTrack h="6px" bg="#74cb4866">
                <SliderFilledTrack bg="#74cb48" opacity="1" />
              </SliderTrack>
            </Slider>
            <Slider
              aria-label="slider-ex-1"
              defaultValue={30}
              max={200}
              isDisabled
              h="7px"
            >
              <SliderTrack h="6px" bg="#74cb4866">
                <SliderFilledTrack bg="#74cb48" opacity="1" />
              </SliderTrack>
            </Slider>
            <Slider
              aria-label="slider-ex-1"
              defaultValue={30}
              max={200}
              isDisabled
              h="7px"
            >
              <SliderTrack h="6px" bg="#74cb4866">
                <SliderFilledTrack bg="#74cb48" opacity="1" />
              </SliderTrack>
            </Slider>
          </Flex>
        </Flex>
        <Flex w="100%" h="8%"></Flex>
      </Flex>
    </Flex>
  );
}

export default Modal;
