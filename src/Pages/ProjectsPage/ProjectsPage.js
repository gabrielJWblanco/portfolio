import "./ProjectsPage.css";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Flex, Image, Modal } from "antd";
import imageLogo from "../../Images/Capture.png";
import imageProject from "../../Images/projectImage.jpg";

export default function ProjectsPage() {
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [loading3, setLoading3] = useState(true);
  const [currentProject, setCurrentProject] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    setTimeout(() => {
      setLoading2(false);
    }, 2500);
    setTimeout(() => {
      setLoading3(false);
    }, 2700);
  }, []);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const numRows = 1;
  const numCols = 3;

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${numCols}, 200px)`,
    gridTemplateRows: `repeat(${numRows}, 200px)`,
    gap: "20px",
    margin: "50px auto",
    position: "absolute",
  };

  const itemStyle = {
    backgroundColor: "white",
    color: "black",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  };

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
        initial={{ y: 2000 }}
        animate={{ y: loading2 ? 2000 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Flex
          style={{ width: "70%", height: "100%", position: "relative" }}
          justify="center"
          align="center"
        >
          <Image
            src={imageProject}
            preview={false}
            style={{
              position: "relative",
              filter: "blur(5px)",
              borderRadius: "24px",
            }}
          />
          {!loading3 && (
            <div style={containerStyle}>
              {[...Array(numRows * numCols)].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -200 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  style={{ ...itemStyle, cursor: "pointer" }}
                  onClick={() => {
                    setCurrentProject(index + 1);
                    setIsModalOpen(true);
                  }}
                >
                  {index + 1}
                </motion.div>
              ))}
            </div>
          )}
        </Flex>
      </motion.div>
      
    </>
  );
}
