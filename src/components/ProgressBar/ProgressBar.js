/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
	small: {
		height: 8,
		padding: 0,
		borderRadius: 4,
	},
	medium: {
		height: 12,
		padding: 0,
		borderRadius: 4,
	},
	large: {
		height: 16,
		padding: 4,
		borderRadius: 8,
	},
};

const ProgressBar = ({ value, size }) => {
	const sizeStyles = SIZES[size];

	return (
		<Wrapper
			size={size}
			style={{
				"--padding": sizeStyles.padding + "px",
				"--borderRadius": sizeStyles.borderRadius + "px",
			}}
			role='progressbar'
			aria-valuenow={value}
			aria-valuemin={0}
			aria-valuemax={100}>
			<VisuallyHidden>{value}</VisuallyHidden>
			<BarWrapper>
				<Progress
					value={value}
					style={{
						"--width": value + "%",
						"--height": sizeStyles.height + "px",
					}}
				/>
			</BarWrapper>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background: ${COLORS.transparentGray15};
	box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
	border-radius: var(--borderRadius);
	padding: var(--padding);
	overflow: hidden;
`;

const BarWrapper = styled.div`
	border-radius: 4px;
	overflow: hidden;
`;

const Progress = styled.div`
	background: ${COLORS.primary};
	width: var(--width);
	height: var(--height);
	border-radius: 4px 0 0 4px;
`;

export default ProgressBar;

/* border-top-left-radius: var(--progressBarBorderRadius);
border-top-right-radius: ${(p) => (Math.floor(p.value) > 98 ? "var(--progressBarBorderRadius)" : "none")};
border-bottom-right-radius: ${(p) => (Math.floor(p.value) > 98 ? "var(--progressBarBorderRadius)" : "none")};
border-bottom-left-radius: var(--progressBarBorderRadius); */
