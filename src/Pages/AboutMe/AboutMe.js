import React, { useEffect, useState } from "react";
import "./AboutMe.css";
import { motion } from "framer-motion";
import { Flex, Image } from "antd";
import imageLogo from "../../Images/Capture.png";
import imageMe from "../../Images/Picture(Me)2.jpg";
import { TypeAnimation } from "react-type-animation";

export default function AboutMe() {
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    setTimeout(() => {
      setLoading2(false);
    }, 2700);
  }, []);

  if (loading) {
    return (
      <div style={{ top: 50, position: "relative" }}>
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Image src={imageLogo} style={{ height: 640 }} preview={false} />
        </motion.div>
      </div>
    );
  }

  return (
    <Flex style={{ width: "100%", height: "100%" }} justify="center" vertical>
      <motion.div
        initial={{ x: -2000 }}
        animate={{ x: loading ? -2000 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>About Me</h1>
      </motion.div>
      <motion.div
        initial={{ x: -2000 }}
        animate={{ x: loading2 ? -2000 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ width: "100%", height: "100%" }}
      >
        <Flex
          style={{ width: "100%", height: "100%" }}
          justify="center"
          align="center"
          gap={50}
        >
          <Flex style={{ width: "50%", height: "100%" }}>
            <TypeAnimation
              sequence={[
                2000,
                "My name is Gabriel Blanco, and I am a certified Full Stack Developer by FLAG School. My skills cover a variety of technologies including Angular, mongoDB, fastapi, python, HTML5, CSS, SASS, PHP, SQL, Laravel, JavaScript, with special prominence and familiarity in React. I am deeply committed looking for opportunities that allow me to expand my knowledge and professional experience. I firmly believe in the importance of a learning continues, and I am always ready to face challengesthat allow me to grow and improve my skills. I am ready to contribute meaningfully in any environment of work, for offering my experience and dedication to achieve results.",
              ]}
              wrapper="span"
              speed={70}
              style={{ display: "inline-block" }}
              repeat={0}
            />
          </Flex>
          <Flex>
            <Image src={imageMe} style={{ height: 540 }} preview={false} />
          </Flex>
        </Flex>
      </motion.div>
    </Flex>
  );
}
