import React from "react";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
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
	background-color: rgba(255, 255, 255);
	border-radius: 20px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const MotionValues = () => {
	const x = useMotionValue(0);
	const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
	const gradient = useTransform(
		x,
		[-800, 800],
		[
			"linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))",
			"linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))",
		],
	);
	const { scrollYProgress } = useScroll();
	const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

	return (
		<Wrapper style={{ background: gradient }}>
			<Box style={{ x, rotateZ, scale }} drag="x" dragSnapToOrigin />
		</Wrapper>
	);
};

// MotionValues는 애니메이션 값의 상태(state)와 속도(velocity)를 추적
// 모든 모션 컴포넌트는 내부적으로 MotionValues를 사용하여 애니메이션 값의 상태와 속도를 추적
// 일반적으로 이들은 자동으로 생성 (MotionValue는 React State가 아니기 때문에 Motion Value값이 바뀌어도 리랜더링이 일어나지 않는다.)

export default MotionValues;
