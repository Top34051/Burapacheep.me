import React from "react";
import { ThemeProvider, CSSReset, Flex, Heading } from "@chakra-ui/core";
import { Header, Footer } from "../components";
import Emoji from "../emoji";

const capitalize = (name) => {
  return name[0].toUpperCase() + name.slice(1);
};

const NoMatchPage = (props) => {
  const name = capitalize(props.location.pathname.split("/")[1]);
  document.title = name + " | Burapacheep.me";
  return (
    <ThemeProvider>
      <CSSReset />
      <Flex align="center" direction="column" h="100%">
        <Header />
        <Flex h="100%" mt="100px" alignItems="center">
          <Heading as="h1">
            Oops, there is nothing here. <Emoji symbol="😭" />
          </Heading>
        </Flex>
        <Footer />
      </Flex>
    </ThemeProvider>
  );
};

export default NoMatchPage;
