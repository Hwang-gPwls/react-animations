import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: linear-gradient(120deg, rgb(161, 196, 253) 0%, rgb(194, 233, 251) 100%);
`;

const Box = styled(motion.div)`
	width: 200px;
	height: 200px;
	border-radius: 40px;
	background-color: rgba(255, 255, 255, 0.2);
	position: absolute;
	top: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 28px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
	entry: (isBack: boolean) => ({
		x: isBack ? -500 : 500,
		opacity: 0,
		scale: 0,
	}),
	center: {
		x: 0,
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.3,
		},
	},
	exit: (isBack: boolean) => ({
		x: isBack ? 500 : -500,
		opacity: 0,
		scale: 0,
		transition: { duration: 0.3 },
	}),
};

const Slider = () => {
	const [visible, setVisible] = useState(1);
	const [back, setBack] = useState(false);

	const nextPlease = () => {
		setBack(false);
		setVisible((prev) => (prev === 10 ? 10 : prev + 1));
	};

	const prevPlease = () => {
		setBack(true);
		setVisible((prev) => (prev === 1 ? 1 : prev - 1));
	};

	return (
		<Wrapper>
			<AnimatePresence exitBeforeEnter custom={back}>
				<Box
					custom={back}
					variants={boxVariants}
					initial="entry"
					animate="center"
					exit="exit"
					key={visible}
				>
					{visible}
				</Box>
			</AnimatePresence>
			<button onClick={prevPlease}>prev</button>
			<button onClick={nextPlease}>next</button>
		</Wrapper>
	);
};

export default Slider;
