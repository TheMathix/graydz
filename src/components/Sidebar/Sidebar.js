import React, { useState } from 'react';
import '../../App.css';

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from './SidebarData';
import Submenu from './Submenu';

const Nav = styled.div`
    background: #fff;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    alight-items: center;

`;

const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    z-index: 9
`;

const SidebarNav = styled.nav`
    background: #151515;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 80px;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 10;
    
`;

const SidebarWrap = styled.div`
    width: 100%;
`;



const Sidebar = () =>{

    const [sidebar,setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return(
        <>
            <Nav>
                <NavIcon to='#'>
                    <FaIcons.FaBars onClick={showSidebar}/>
                </NavIcon>
            </Nav>

            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                    <NavIcon>
                        <FaIcons.FaWindowClose onClick={showSidebar}/>
                    </NavIcon>
                    {SidebarData.map((item, index) => {
                        return <Submenu item={item} key={index} />
                    })}
                </SidebarWrap>
            </SidebarNav>
        </>
    );
}

export default Sidebar;