import React from 'react'
import styled, {css} from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { menuData } from '../../data/MenuData';
import {Button}  from '../styled/Button';
import {FaBars} from 'react-icons/fa'
const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`;



const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    position: fixed;
    z-index:100;
    padding: 1rem 2rem;
    background: #000;
    color: #fff;
    width: 100%;
`;

const Logo = styled(Link)`
    ${NavLink}
    font-style: italic;
`;


const MenuBars = styled(FaBars)`
    display:none;
    @media screen and (max-width: 760px){
        display: block;
        background-image: url${(FaBars)};
        background-size: contain;
        height:40px;
        width: 40px;
        cursor: pointer;
        position: absolute;
        top: 0;
        right:0;
        transform: translate(-50%, 25%);
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;

    @media screen and (max-width: 760px){
        display: none;
    }
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
`;

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;
    
    @media screen and (max-width: 760px){
        display: none;
    }
`;


function NavBar() {
    return (
        <Nav>
            <Logo>ELIXR</Logo>
            <MenuBars/>
            <NavMenu>
                {menuData.map((item,index)=>(
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button  to="/contact" primary='true'>
                    Contact
                </Button>
            </NavBtn>
        </Nav>
       
    )
}

export default NavBar
