import {
  Box,
  Flex,
  Image,
  Icon,
  Center,
  Input,
  Checkbox,
} from "@chakra-ui/react";
import logo from "../asset/spotify-logo2.png";
import { BsApple, BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { TbAlertCircleFilled } from "react-icons/tb";

export default function LoginPage() {
  return (
    <>
      <Center flexDir={"column"} w={"100vw"} gap={"40x"}>
        <Center
          width={"100%"}
          paddingTop={"25px"}
          pb={"12px"}
          borderBottom={"1px solid #D9DaDC"}
          color={"whiteAlpha.800"}
          gap={"20px"}
        >
          <Image src={logo} w={"143px"} h={"44px"} />
        </Center>

        <Center
          w={"100%"}
          maxW={"450px"}
          fontSize={"14px"}
          color={"white"}
          flexDir={"column"}
          gap="10px"
        >
          <Center
            w={"100%"}
            bgColor={"#1877F2"}
            h={"48px"}
            fontWeight={"700"}
            borderRadius={"25px"}
            gap={"10px"}
            border={"1px solid #A5A5A5"}
          >
            <Icon w={"20px"} h={"20px"} as={BsFacebook}></Icon>
            <Center>CONTINUE WITH FACEBOOK</Center>
          </Center>

          <Center
            w={"100%"}
            bgColor={"black "}
            h={"48px"}
            fontWeight={"700"}
            borderRadius={"25px"}
            gap={"10px"}
            border={"1px solid #A5A5A5"}
          >
            <Icon w={"20px"} h={"20px"} as={BsApple}></Icon>
            <Center>CONTINUE WITH FACEBOOK</Center>
          </Center>

          <Center
            w={"100%"}
            h={"48px"}
            fontWeight={"700"}
            borderRadius={"25px"}
            gap={"10px"}
            color={"blackAlpha.500"}
            border={"1px solid #A5A5A5"}
            bgColor={"white"}
          >
            <Icon w={"20px"} h={"20px"} as={FcGoogle}></Icon>
            <Center>CONTINUE WITH GOOGLE</Center>
          </Center>

          <Center
            w={"100%"}
            h={"48px"}
            fontWeight={"700"}
            borderRadius={"25px"}
            gap={"10px"}
            color={"blackAlpha.500"}
            border={"1px solid #A5A5A5"}
            bgColor={"white"}
          >
            <Icon w={"20px"} h={"20px"} as={FcGoogle}></Icon>
            <Center>CONTINUE WITH GOOGLE</Center>
          </Center>

          <Center
            w={"100%"}
            h={"48px"}
            color={"black"}
            gap={"12px"}
            fontWeight={"700"}
          >
            <Center w={"100%"}>
              <Box h="1px" w={"100%"} bgColor={"#D9DADC"}></Box>
            </Center>
            OR
            <Center w={"100%"}>
              <Box h="1px" w={"100%"} bgColor={"#D9DADC"}></Box>
            </Center>
          </Center>

          <Flex
            w={"100%"}
            pt={"20px"}
            gap={"20px"}
            flexDir={"column"}
            color={"black"}
          >
            <Flex flexDir={"column"} gap={"5px"}>
              <Box fontWeight={"700"}>Email address or username</Box>
              {/* <Input placeholder="Email addrress or username"></Input> */}
            </Flex>

            <Flex flexDir={"column"} gap={"5px"}>
              <Box fontWeight={"700"}>Password</Box>
              {/* <Input placeholder="Email addrress or username"></Input> */}
            </Flex>

            <Flex flexDir={"column"} gap={"5px"}>
              <Box fontWeight={"700"}>Forgot password</Box>
              {/* <Input placeholder="Email addrress or username"></Input> */}
            </Flex>
          </Flex>
        </Center>
      </Center>
    </>
  );
}
