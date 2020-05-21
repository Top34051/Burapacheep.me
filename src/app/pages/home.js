import React from "react";
import {
  ThemeProvider,
  CSSReset,
  Divider,
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Image,
} from "@chakra-ui/core";
import { useHistory } from "react-router-dom";
import { Header, Footer } from "../components";
import Emoji from "../emoji";

const Body = () => {
  const history = useHistory();

  function changeRoute(to) {
    history.push(to);
  }

  return (
    <Box
      display="grid"
      gridTemplateColumns={{ base: "1fr", md: "repeat(2,1fr)" }}
      gridGap={{ base: 10, md: "10%" }}
      pt={10}
      pb={10}
      pl={{ base: 10, lg: 150 }}
      pr={{ base: 10, lg: 150 }}
    >
      <Flex alignItems="center">
        <Image src="/images/me.jpg" rounded="md" />
      </Flex>
      <Flex alignItems="center">
        <Box>
          <Heading as="h1" fontSize={60}>
            Welcome! <Emoji symbol="🎉" />
          </Heading>
          <Heading as="h2" fontSize={30}>
            This is{" "}
            <span style={{ color: "teal", fontWeight: "bold" }}>
              Jirayu Burapacheep
            </span>
            .
          </Heading>
          <Text mt={3}>Explore this website and my life!</Text>
          <Button
            mt={30}
            variantColor="facebook"
            variant="solid"
            onClick={() => {
              changeRoute("/about");
            }}
          >
            About me
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

const Home = () => {
  document.title = "Burapacheep.me";
  return (
    <ThemeProvider class="App">
      <CSSReset />
      {/* <Flex direction="column" h="100%"> */}
      <Header />
      <Body />
      <Divider />
      <Footer />
      {/* </Flex> */}
    </ThemeProvider>
  );
};

export default Home;
