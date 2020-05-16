import React from "react";
import { Heading, Box, Flex, Button, Text, Link } from "@chakra-ui/core";
import { AiFillHeart } from "react-icons/ai";
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const Header = (props) => {
  const history = useHistory();

  function changeRoute(to) {
    history.push(to);
  }

  function ButtonTo(props) {
    const { to, url } = props;
    return (
      <Button
        mr={3}
        size="sm"
        onClick={() => changeRoute(url ? url : to.toLowerCase())}
      >
        {to}
      </Button>
    );
  }

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={3}
      bg="white"
      color="black"
      position="fixed"
      width="100%"
      borderBottom="1px solid"
      borderBottomColor="gray.200"
      style={{ zIndex: 1000 }}
      {...props}
    >
      <Flex align="center" mr={5} ml={2}>
        <Button
          onClick={() => changeRoute("/")}
          variantColor="white"
          variant="ghost"
        >
          <Box as={AiFillHeart} mr={2} size={5} fill="red.500" />
          <Heading as="h1" size="lg" letterSpacing={"-0.1rem"}>
            Burapacheep.me
          </Heading>
        </Button>
      </Flex>

      <Box align="center" justify="space-between">
        <ButtonTo to="Home" url="/" />
        <ButtonTo to="About" />
        <ButtonTo to="Projects" />
        <ButtonTo to="Blogs" />
      </Box>
    </Flex>
  );
};

const Footer = (props) => {
  return (
    <Box
      as="footer"
      align="center"
      padding={10}
      bg="white"
      color="black"
      width="100%"
      textAlign="center"
      mt="auto"
      style={{ zIndex: 1000 }}
      {...props}
    >
      <Heading as="h1" fontSize="md" mb={3}>
        Contact me!
      </Heading>

      <Text fontSize="xs">Jirayu Burapacheep &bull; Bangkok, Thailand</Text>

      <Text fontSize="xs" mb={2}>
        <Link color="teal.500" href="mailto:top34051@gmail.com">
          top34051@gmail.com
        </Link>
      </Text>

      <Flex justify="center">
        <Link href="https://github.com/Top34051" mr={5}>
          <Box as={FaGithub} color="gray.500" size={5} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/jirayu-burapacheep-422718165/"
          mr={5}
        >
          <Box as={FaLinkedin} color="gray.500" size={5} />
        </Link>
        <Link
          href="https://www.facebook.com/profile.php?id=100001355565592"
          mr={5}
        >
          <Box as={FaFacebook} color="gray.500" size={5} />
        </Link>
        <Link href="https://www.instagram.com/top.jbu/">
          <Box as={FaInstagram} color="gray.500" size={5} />
        </Link>
      </Flex>
    </Box>
  );
};

export { Header, Footer };
