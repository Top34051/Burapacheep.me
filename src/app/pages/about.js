import React from "react";
import {
  ThemeProvider,
  CSSReset,
  Divider,
  Flex,
  Grid,
  Heading,
  Text,
  Image,
  Box,
  Badge,
} from "@chakra-ui/core";
import { Header, Footer } from "../components";
import AboutData from "../../data/about.json";
import { BsFillCircleFill } from "react-icons/bs";
import Emoji from "../emoji";

const Hello = () => {
  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      gap="10%"
      pt="100px"
      pb="35px"
      pl="10%"
      pr="10%"
      minH="70%"
      overflow="auto"
    >
      <Flex alignItems="center">
        <Box>
          <Heading as="h1">
            Sawasdee krub! <Emoji symbol="👋" />
          </Heading>
          <Text pt={3}>
            My name is{" "}
            {
              <span style={{ color: "teal", fontWeight: "10px" }}>
                Jirayu Burapacheep
              </span>
            }
            , and my nick name is Top. I'm originally from Bangkok, Thailand,
            and currently a rising sophomore majoring in computer science (and
            probably data science) at the University of Wisconsin-Madison.
          </Text>
          <Text pt={3}>
            There is a lot of things that I'm passionate about, especially music
            and cartoons. Through this website, I hope that I can share many
            aspects of me. Nice to meet you all! <Emoji symbol="🥰" />
          </Text>
        </Box>
      </Flex>
      <Flex alignItems="center" justify="center">
        <Image src="/images/me-river.jpg" rounded="md" maxH="100%" />
      </Flex>
    </Grid>
  );
};

const EduCard = (props) => {
  const { title, level, year, location } = props.data;
  return (
    <Flex
      rounded="md"
      borderWidth="1px"
      borderColor="gray.300"
      padding={3}
      h="100%"
      direction="column"
    >
      <Flex align="baseline">
        <Badge rounded="md" px="2" variantColor="red">
          {level}
        </Badge>
        <Text ml="auto" fontSize={12} verticalAlign="center">
          {year}
        </Text>
      </Flex>
      <Text mt={3} fontSize="xl" fontWeight="semibold" lineHeight="short">
        {title}
      </Text>
      <Text mt={3}>{location}</Text>
    </Flex>
  );
};

const SkillCard = (props) => {
  const { title, experience, rating } = props.data;
  return (
    <Flex
      rounded="md"
      borderWidth="1px"
      borderColor="gray.300"
      padding={3}
      h="100%"
      direction="column"
    >
      <Text fontSize="xl" fontWeight="semibold" h="30%">
        {title}
      </Text>
      <Text fontSize="sm" mt={1}>
        {experience}
      </Text>
      <Flex mt={3} alignItems="center" gap={2} ml="auto">
        {Array(5)
          .fill("")
          .map((_, i) => (
            <Box
              as={BsFillCircleFill}
              pl={1}
              key={i}
              color={i < rating ? "green.500" : "gray.300"}
            />
          ))}
      </Flex>
    </Flex>
  );
};

const AchieCard = (props) => {
  const { title, title_desc, desc, note } = props.data;
  return (
    <Flex
      rounded="md"
      borderWidth="1px"
      borderColor="gray.300"
      padding={3}
      h="100%"
      direction="column"
    >
      <Text fontSize="xl" fontWeight="bold" h="30%">
        {title}
      </Text>
      <Text fontSize={15} mt={0.5}>
        {title_desc}
      </Text>
      <Box d="flex" alignItems="baseline" pt={3} mt="auto">
        <Badge rounded="full" px="2" variantColor="blue">
          Result
        </Badge>
        <Text fontSize="md" ml={2} fontWeight="semibold">
          {desc}
        </Text>
      </Box>
      {note && <Text fontSize="sm">{note}</Text>}
    </Flex>
  );
};

const Content = (props) => {
  const { name, minH } = props;
  const title = AboutData[name].title;
  const dataList = AboutData[name].list;

  return (
    <Flex
      direction="column"
      pt="35px"
      pb="35px"
      pl="10%"
      pr="10%"
      minH={minH}
      overflow="auto"
    >
      <Heading as="h1">{title}</Heading>
      <Grid
        templateColumns="repeat(auto-fit, minmax(255px, 1fr))"
        gap="2%"
        pt={5}
        h="100%"
      >
        {dataList.map((data, index) => {
          switch (name) {
            case "education":
              return <EduCard data={data} key={index} />;
            case "skills":
              return <SkillCard data={data} key={index} />;
            case "achievements":
              return <AchieCard data={data} key={index} />;
            default:
          }
          return null;
        })}
      </Grid>
    </Flex>
  );
};

const About = () => {
  document.title = "About | Burapacheep.me";
  return (
    <ThemeProvider class="App">
      <CSSReset />
      <Flex direction="column" h="100%">
        <Header />
        <Hello />
        <Divider />
        <Content name="education" minH="40%" />
        <Divider />
        <Content name="skills" minH="35%" />
        <Divider />
        <Content name="achievements" minH="40%" />
        <Divider />
        <Footer />
      </Flex>
    </ThemeProvider>
  );
};

export default About;
