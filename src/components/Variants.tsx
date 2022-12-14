import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Box = styled(motion.div)`
	width: 200px;
	height: 200px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	background-color: rgba(255, 255, 255, 0.2);
	border-radius: 20px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
	background-color: white;
	height: 70px;
	width: 70px;
	place-self: center;
	border-radius: 35px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVatiants = {
	start: { opacity: 0, scale: 0.5 },
	end: {
		opacity: 1,
		scale: 1,
		transition: {
			type: "spring",
			duration: 0.5,
			bounce: 0.5,
			delayChildren: 0.5,
			staggerChildren: 0.2,
		},
	},
};

const circleVatiants = {
	start: { opacity: 0, y: 10 },
	end: {
		opacity: 1,
		y: 0,
	},
};

const Varients = () => {
	return (
		<Box variants={boxVatiants} initial="start" animate="end">
			<Circle variants={circleVatiants} />
			<Circle variants={circleVatiants} />
			<Circle variants={circleVatiants} />
			<Circle variants={circleVatiants} />
		</Box>
	);
};

export default Varients;
