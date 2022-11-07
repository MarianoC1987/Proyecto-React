import {
  Box,
  Text,
  Image,
  Flex,
  Center,
  Grid,
  GridItem,
  SliderTrack,
  SliderFilledTrack,
  Slider,
} from "@chakra-ui/react";
import React from "react";
import arrowleft from "../../../public/Imagenes/arrowleft.png";
import Pokeball from "../../../public/Imagenes/Pokeball.png";
import Weight from "../../../public/Imagenes/Weight.svg";
import Height from "../../../public/Imagenes/Height.svg";
import pokemon from "../../datos";
import { Link, useNavigate, useParams } from "react-router-dom";

function Modal() {
  const { id } = useParams();
  const navigate = useNavigate();

  const poke = pokemon.find((item) => {
    return item.id === id;
  });

  const indexPoke = pokemon.findIndex((item) => {
    return item.id === id;
  });

  return (
    <>
      <Image
        position="absolute"
        objectFit="cover"
        w="100vw"
        h="100vh"
        src="../../../public/Imagenes/bosque5.jpg"
        zIndex="-20"
      ></Image>
      <Flex
        position="relative"
        maxW="390px"
        maxH="844px"
        borderRadius="12px"
        alignItems="center"
        justifyContent="space-around"
        bgColor={poke.color}
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
          zIndex="0"
          opacity="0.1"
          src={Pokeball}
        ></Image>

        <Flex justify="space-between" w="90%">
          <Flex zIndex="10" gap="10px">
            <Link to={`/`}>
              <Image src={arrowleft}></Image>
            </Link>
            <Text h="20%" color="white">
              {poke.nombre}
            </Text>
          </Flex>
          <Text color="white" h="20%" textAlign="right">
            {"#" + poke.id}
          </Text>
        </Flex>
        <Flex
          align="center"
          justify="space-around"
          w="100%"
          mb="-100px"
          h="30%"
          zIndex="10"
        >
          <Link to={`modal/${poke.id}`}>
            <Image
              h="10%"
              src="/Imagenes/arrow-24-16.png"
              transform="rotate(180deg)"
            ></Image>
          </Link>
          <Image src={poke.imagen} />
          <Link to={`modal/${poke.id}`}>
            <Image h="10%" src="/Imagenes/arrow-24-16.png"></Image>
          </Link>
        </Flex>
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
              bg={poke.color}
              color="white"
              mb="10px"
            >
              {poke.tipo[0]}
            </Box>
            {poke.tipo[1] && (
              <Box
                lineHeight="28px"
                w="70px"
                textAlign="center"
                borderRadius="9px"
                bg={poke.color2}
                color="white"
                mb="10px"
              >
                {poke.tipo[1]}
              </Box>
            )}
          </Flex>
          <Center
            fontWeight="bold"
            fontSize="22px"
            color={poke.color}
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
              <Text>{poke.peso}</Text>
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
              <Text>{poke.altura}</Text>
            </GridItem>
            <GridItem
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Text>{poke.movimientos[0]}</Text>
              <Text>{poke.movimientos[1]}</Text>
            </GridItem>
            <GridItem
              borderRight="1px"
              borderColor="gray.300"
              textAlign="center"
            >
              Weight
            </GridItem>
            <GridItem
              borderRight="1px"
              borderColor="gray.300"
              textAlign="center"
            >
              Height
            </GridItem>
            <GridItem textAlign="center">Moves</GridItem>
          </Grid>

          <Flex w="100%" h="16%">
            <Text m="auto" p="10px" fontSize="14px">
              {poke.descripcion}
            </Text>
          </Flex>

          <Center
            fontWeight="bold"
            w="100%"
            fontSize="22px"
            color={poke.color}
            h="8%"
          >
            Base Stats
          </Center>

          <Flex w="90%" h="25%">
            <Flex
              direction="column"
              fontWeight="bold"
              fontSize="13px"
              color={poke.color}
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
              <Text>{poke.estadisticas.HP}</Text>
              <Text>{poke.estadisticas.ATK}</Text>
              <Text>{poke.estadisticas.DEF}</Text>
              <Text>{poke.estadisticas.SATK}</Text>
              <Text>{poke.estadisticas.SDEF}</Text>
              <Text>{poke.estadisticas.SPD}</Text>
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
                aria-label={poke.id}
                defaultValue={poke.estadisticas.HP}
                max={200}
                isDisabled
                h="7px"
              >
                <SliderTrack h="6px" bg={poke.color + 66}>
                  <SliderFilledTrack bg={poke.color} opacity="1" />
                </SliderTrack>
              </Slider>
              <Slider
                aria-label={poke.id}
                defaultValue={poke.estadisticas.ATK}
                max={200}
                isDisabled
                h="7px"
              >
                <SliderTrack h="6px" bg={poke.color + 66}>
                  <SliderFilledTrack bg={poke.color} opacity="1" />
                </SliderTrack>
              </Slider>
              <Slider
                aria-label={poke.id}
                defaultValue={poke.estadisticas.DEF}
                max={200}
                isDisabled
                h="7px"
              >
                <SliderTrack h="6px" bg={poke.color + 66}>
                  <SliderFilledTrack bg={poke.color} opacity="1" />
                </SliderTrack>
              </Slider>
              <Slider
                aria-label={poke.id}
                defaultValue={poke.estadisticas.SATK}
                max={200}
                isDisabled
                h="7px"
              >
                <SliderTrack h="6px" bg={poke.color + 66}>
                  <SliderFilledTrack bg={poke.color} opacity="1" />
                </SliderTrack>
              </Slider>
              <Slider
                aria-label={poke.id}
                defaultValue={poke.estadisticas.SDEF}
                max={200}
                isDisabled
                h="7px"
              >
                <SliderTrack h="6px" bg={poke.color + 66}>
                  <SliderFilledTrack bg={poke.color} opacity="1" />
                </SliderTrack>
              </Slider>
              <Slider
                aria-label={poke.id}
                defaultValue={poke.estadisticas.SPD}
                max={200}
                isDisabled
                h="7px"
              >
                <SliderTrack h="6px" bg={poke.color + 66}>
                  <SliderFilledTrack bg={poke.color} opacity="1" />
                </SliderTrack>
              </Slider>
            </Flex>
          </Flex>
          <Flex w="100%" h="8%"></Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default Modal;
