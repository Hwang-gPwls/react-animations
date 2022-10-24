import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	background: linear-gradient(120deg, rgb(161, 196, 253) 0%, rgb(194, 233, 251) 100%);
`;

const Box = styled(motion.div)`
	width: 200px;
	height: 200px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	background-color: rgba(255, 255, 255, 0.2);
	border-radius: 20px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
	initial: { opacity: 0, scale: 0 },
	visible: { opacity: 1, scale: 1, rotateZ: 360 },
	leaving: { opacity: 0, y: 50 },
};

function App() {
	const [showing, setShowing] = useState(false);
	const toggleShowing = () => setShowing((prev) => !prev);

	return (
		<Wrapper>
			<button onClick={toggleShowing}>Click</button>
			<AnimatePresence>
				{showing ? (
					<Box variants={boxVariants} initial="initial" animate="visible" exit="leaving" />
				) : null}
			</AnimatePresence>
		</Wrapper>
	);
}

export default App;
