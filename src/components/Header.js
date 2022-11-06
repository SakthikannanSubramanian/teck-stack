import React from "react";
import { motion } from "framer-motion";

const Header = (props) => {
  return (
    <motion.div
      className="App-header"
      initial={{ y: "100vw" }}
      animate={{ y: "0" }}
      transition={{ delay: 0.7 }}
    >
      <p>{props.homedata}</p>
    </motion.div>
  );
};
export default Header;
