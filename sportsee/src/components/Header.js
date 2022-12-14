import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
	return (
		<PageHeader>
			<NavLink to='/'>
				<img src="/assets/logo.svg" alt='Logo SportSee' />
			</NavLink>
			<Nav>
				<NavLink to='/'>Accueil</NavLink>
				<NavLink to='#'>Profil</NavLink>
				<NavLink to='#'>Réglages</NavLink>
				<NavLink to='#'>Communauté</NavLink>
			</Nav>
		</PageHeader>
	);
}

const PageHeader = styled.header`
	position: relative;
	display: flex;
	width: 100%;
	height: 91px;
	background: #020203;
	padding: 0 87px 0 29px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	z-index: 1;
	@media (max-width: 1025px) {
		height: 70px;
	}
	img {
		width: 178px;
		margin-right: 150px;
		margin-top: 14px;
		@media (max-width: 1025px) {
			width: 130px;
		}
	}
`;

const Nav = styled.nav`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
        color: white;
        font-weight: 500;
        font-size: 24px;
		@media (max-width: 1025px) {
			font-weight: 400;
        	font-size: 17px;
		}
    }
`;