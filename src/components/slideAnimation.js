import { motion } from "framer-motion";

const slideAnimation = () => {
  return (
    <motion.div
      style={{
        width: "200px",
        height: "100px",
        backgroundColor: "blue",
      }}
      animate={{ x: [-0, -100] }} // Simula translateX
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
    />
  );
};

export default slideAnimation;
