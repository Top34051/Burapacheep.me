import React from "react";
import { Heading, Box, Flex, Button, Text, Link } from "@chakra-ui/core";
import { useHistory } from "react-router-dom";

import { AiFillHeart } from "react-icons/ai";
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Header = () => {
  const history = useHistory();

  function changeRoute(to) {
    history.push(to);
  }

  return (
    <Box>
      <Flex
        justify="space-between"
        wrap="wrap"
        align="center"
        padding={3}
        borderBottom="1px solid"
        borderBottomColor="gray.200"
        position="fixed"
        w="100%"
        zIndex={1000}
        bg="white"
        className="header"
      >
        <Button
          onClick={() => changeRoute("/")}
          variantColor="white"
          variant="ghost"
          ml={2}
        >
          <Box as={AiFillHeart} mr={2} size={5} fill="red.500" />
          <Heading size="lg" letterSpacing={"-0.1rem"}>
            Burapacheep.me
          </Heading>
        </Button>

        <Box ml="auto" mr={{ base: 2 }}>
          <Button onClick={() => changeRoute("/")} mr={3} size="sm">
            Home
          </Button>
          <Button onClick={() => changeRoute("/about")} mr={3} size="sm">
            About
          </Button>
          <Button onClick={() => changeRoute("/projects")} mr={3} size="sm">
            Projects
          </Button>
          <Button onClick={() => changeRoute("/blogs")} size="sm">
            Blogs
          </Button>
        </Box>
      </Flex>
      <Box pt={{ base: "95px", md: "65px" }}></Box>
    </Box>
  );
};

const Footer = () => {
  return (
    <Box textAlign="center" align="center" padding={5} w="100%" mt="auto">
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
