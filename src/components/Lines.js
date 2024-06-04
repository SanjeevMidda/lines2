import React from "react";
import { motion } from "framer-motion";

const Lines = ({ color }) => {
  let styles = {
    backgroundColor: color,
  };

  return <motion.div className="lines" drag style={styles}></motion.div>;
};

export default Lines;
