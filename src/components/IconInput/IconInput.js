import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
	small: {
		borderWidth: 1,
		iconSize: 16,
		fontSize: 14,
		paddingLeft: 22.33,
		strokeWidth: 1,
		height: 24,
	},
	large: {
		borderWidth: 2,
		iconSize: 20,
		fontSize: 18,
		paddingLeft: 26.33,
		strokeWidth: 2,
		height: 36,
	},
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
	const currentSize = SIZES[size];
	console.log(SIZES["small"]);
	return (
		<InputWrapper>
			<IconWrapper
				style={{
					"--size": currentSize.iconSize + "px",
				}}>
				<Icon id={icon} size={currentSize.iconSize} strokeWidth={currentSize.strokeWidth} />
			</IconWrapper>
			<VisuallyHidden>{label}</VisuallyHidden>
			<Input
				placeholder='Search'
				style={{
					"--width": width + "px",
					"--fontSize": currentSize.fontSize + "px",
					"--borderWidth": currentSize.borderWidth + "px",
					"--paddingLeft": currentSize.paddingLeft + "px",
					"--height": currentSize.height / 16 + "rem",
				}}
			/>
		</InputWrapper>
	);
};

const InputWrapper = styled.label`
	position: relative;
	width: max-content;
`;

const IconWrapper = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;

	margin: auto 0;
	height: var(--size);
	color: ${COLORS.gray700};
	pointer-events: none;
`;

const Input = styled.input`
	border: none;
	border-bottom-width: var(--borderWidth);
	border-bottom-color: black;
	border-bottom-style: solid;
	padding-left: var(--height);
	height: var(--height);
	width: var(--width);
	outline-offset: 2px;
	font-weight: ${COLORS.gray700};
	&::placeholder {
		color: ${COLORS.gray500};
		font-weight: 400;
	}
	&:hover {
		font-weight: bold;
	}
`;

export default IconInput;
