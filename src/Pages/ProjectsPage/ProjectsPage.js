import "./ProjectsPage.css"
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Flex, Image } from "antd";
import imageLogo from "../../Images/Capture.png";

export default function ProjectsPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div style={{top:50, position:"relative"}}>
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
    <div>ProjectsPage</div>
  )
}
