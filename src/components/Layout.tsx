import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background: linear-gradient(120deg, rgb(161, 196, 253) 0%, rgb(194, 233, 251) 100%);
`;

const Box = styled(motion.div)`
	width: 400px;
	height: 400px;
	border-radius: 40px;
	background-color: rgba(255, 255, 255, 0.2);
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 28px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
	width: 100px;
	height: 100px;
	border-radius: 50px;
	background-color: #00a5ff;
`;

const Layout = () => {
	const [clicked, setClicked] = useState(false);
	const toggledClicked = () => setClicked((prev) => !prev);

	return (
		<Wrapper onClick={toggledClicked}>
			<Box>{!clicked ? <Circle layoutId="circle" style={{ borderRadius: 50 }} /> : null}</Box>
			<Box>
				{clicked ? <Circle layoutId="circle" style={{ borderRadius: 0, scale: 2 }} /> : null}
			</Box>
		</Wrapper>
	);
};

export default Layout;
