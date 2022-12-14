import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Box = styled(motion.div)`
	width: 200px;
	height: 200px;
	display: grid;
	background-color: rgba(255, 255, 255, 0.2);
	border-radius: 20px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVarient = {
	hover: { scale: 1.5, rotateZ: 90 },
	click: { scale: 1, borderRadius: "100px" },
};

const Gestures = () => {
	return <Box variants={boxVarient} whileHover="hover" whileTap="click" />;
};

export default Gestures;
