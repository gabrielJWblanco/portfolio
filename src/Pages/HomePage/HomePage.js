import { Flex, Image } from "antd";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import imageLogo from "../../Images/Capture.png";

export default function HomePage() {
  return (
    <Flex vertical style={{overflow:"hidden", height:"100%", width:"100%",}}>
      <Flex flex={1} justify="center" align="center">
        <TypeAnimation
          sequence={[
            2000,
            "Bem-vindo ao meu portfolio",
            1000,
            "Welcome to my portfolio",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "3rem", display: "inline-block" }}
          repeat={0}
        />
      </Flex>

      <Flex align="center" justify="center" flex={1}>
        <Image src={imageLogo} style={{height:640}} preview={false}/>
      </Flex>
    </Flex>
  );
}
