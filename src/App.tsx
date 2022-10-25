import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	width: 50vw;
	gap: 10px;

	div:first-child,
	div:last-child {
		grid-column: span 2;
	}
`;

const Box = styled(motion.div)`
	height: 200px;
	border-radius: 40px;
	background-color: rgba(255, 255, 255, 1);
	display: flex;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Overlay = styled(motion.div)`
	width: 100%;
	height: 100%;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const overlay = {
	hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
	visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
	exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

function App() {
	//Layout
	const [id, setId] = useState<null | string>(null);

	return (
		<Wrapper>
			<Grid>
				{["1", "2", "3", "4"].map((n) => (
					<Box onClick={() => setId(n)} key={n} layoutId={n} />
				))}
			</Grid>
			<AnimatePresence>
				{id ? (
					<Overlay
						variants={overlay}
						onClick={() => setId(null)}
						initial="hidden"
						animate="visible"
						exit="exit"
					>
						<Box layoutId={id} style={{ width: 400, height: 200 }} />
					</Overlay>
				) : null}
			</AnimatePresence>
		</Wrapper>
	);
}

export default App;
