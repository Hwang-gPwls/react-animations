import React, { useRef } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const BiggerBox = styled.div`
	width: 600px;
	height: 600px;
	background-color: rgba(255, 255, 255, 0.2);
	border-radius: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	/* overflow: hidden; */
`;

const Box = styled(motion.div)`
	width: 200px;
	height: 200px;
	display: grid;
	background-color: rgba(255, 255, 255);
	border-radius: 20px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVarient = {
	hover: { scale: 1.5, rotateZ: 90 },
	click: { scale: 1, borderRadius: "100px" },
	drag: { backgroundColor: "rgb(46, 204, 113)", transition: { duration: 10 } },
};

const Drag = () => {
	const biggerBoxRef = useRef<HTMLDivElement>(null);

	return (
		<BiggerBox ref={biggerBoxRef}>
			<Box
				drag
				dragSnapToOrigin //true인 경우 드래그 가능한 요소는 드래그를 놓을 때, 원점으로 다시 애니메이션
				dragElastic={0.5} //외부 제약 조건에서 허용되는 이동 정도. 0 = 움직임 없음, 1 = 전체 움직임. 기본적으로 0.5로 설정
				// dragConstraints={{ top: -200, bottom: 200, left: -200, right: 200 }} //허용된 드래그 가능 영역에 제약 조건을 적용
				dragConstraints={biggerBoxRef}
				variants={boxVarient}
				whileHover="hover"
				whileDrag="drag"
				whileTap="click"
			/>
		</BiggerBox>
	);
};

export default Drag;
