import "./ProjectsPage.css";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Flex, Image } from "antd";
import imageLogo from "../../Images/Capture.png";

export default function ProjectsPage() {
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    setTimeout(() => {
      setLoading2(false);
    }, 2500);
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
    <>
      <motion.div
        initial={{ x: -2000 }}
        animate={{ x: loading ? -2000 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Projects</h1>
      </motion.div>
      <motion.div
        initial={{ x: -2000 }}
        animate={{ x: loading2 ? -2000 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Projects</h1>
      </motion.div>
    </>
  );
}
