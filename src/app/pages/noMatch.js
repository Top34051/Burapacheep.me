import React from "react";
import {
  ThemeProvider,
  CSSReset,
  Flex,
  Heading,
  Divider,
} from "@chakra-ui/core";
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
      <Header />
      <Flex h="100%" justify="center" align="center">
        <Heading>
          Oops, there is nothing here. <Emoji symbol="😭" />
        </Heading>
      </Flex>
      <Divider />
      <Footer />
    </ThemeProvider>
  );
};

export default NoMatchPage;
