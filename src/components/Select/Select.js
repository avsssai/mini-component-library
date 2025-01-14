import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
	const displayedValue = getDisplayedValue(value, children);

	return (
		<Wrapper>
			<NativeSelect value={value} onChange={onChange}>
				{children}
			</NativeSelect>
			<PresentationalBit>{displayedValue}</PresentationalBit>
			<IconWrapper>
				<Icon id='chevron-down' strokeWidth={1} size={24} />
			</IconWrapper>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: relative;
	width: max-content;
`;

const NativeSelect = styled.select`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	opacity: 0;
`;

const PresentationalBit = styled.div`
	background-color: ${COLORS.transparentGray15};
	padding: 12px 16px;
	padding-right: 52px;
	border-radius: 8px;
	color: ${COLORS.gray700};
	font-size: ${16 / 16}rem;

	${NativeSelect}:focus + & {
		outline: 1px dotted #212121;
		outline: 5px auto -webkit-focus-ring-color;
	}
	${NativeSelect}:hover + & {
		color: ${COLORS.black};
	}
`;

const IconWrapper = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	right: 10px;
	margin: auto;
	height: 24px;
	width: 24px;
	pointer-events: none;
`;

export default Select;
