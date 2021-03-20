import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
function Header() {
	return (
		<HeaderContainer>
			{/* Header left */}
			{/* <h1>Test</h1> */}
			<HeaderLeft>
				<HeaderAvatar />
				<AccessTimeIcon />
			</HeaderLeft>
			{/* Header Search */}
			<HeaderSearch>
				<SearchIcon />
				<input placeholder="Search PAPAFAM" />
			</HeaderSearch>

			{/* Header Rig?ht */}
			<HeaderRight>
				<HelpOutlineIcon />
			</HeaderRight>
		</HeaderContainer>
	);
}

export default Header;

const HeaderSearch = styled.div`
	flex: 0.4;
	opacity: 1;
	border-radius: 6px;
	background-color: #421f44;
	text-align: center;
	display: flex;
	padding: 0 50px;
	color: gray;
	border: 1px gray solid;

	> input {
		border: none;
		text-align: center;
		background-color: transparent;
		min-width: 30vw;
		outline: 0;
		color: white;
	}
`;
const HeaderContainer = styled.div`
	display: flex;
	position: fixed;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	padding: 10px 0;
	background-color: var(--purple);
	color: white;
`;

const HeaderLeft = styled.div`
	flex: 0.3;
	display: flex;
	align-items: center;
	margin-left: 20px;
	> .MuiSvgIcon-root {
		margin-right: 30px;
		margin-left: auto;
	}
`;
const HeaderRight = styled.div`
	flex: 0.3;
	display: flex;
	align-items: flex-end;

	> .MuiSvgIcon-root {
		margin-left: auto;
		margin-right: 20px;
	}
`;

const HeaderAvatar = styled(Avatar)`
	cursor: pointer;
	:hover {
		color: var(--purple);
		opacity: 0.8;
	}
`;