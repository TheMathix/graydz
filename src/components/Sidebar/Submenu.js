import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
    display: flex;
    color: #fff;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;

    &:hover {
        background: #252831;
        border-left: 4px solid #fff;
        cursor: pointer;
    }
`;

const SidebarLabel = styled.span`
    margin-left: 16px;
`;

const DropdownLink = styled(Link)`
    background: #414757;
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;

    &:hover{
        background: #313747;
        cursor: pointer;
    }
`;

function class_click(name_class) {

    if ((name_class !== null) && (name_class)){
        localStorage.setItem('class', JSON.stringify(name_class))
        console.log("escrevendo outra class "+name_class)   
    }
    
}

const Submenu = ({ item }) => {

    const [subnav, setSubnav] = useState(false)

    const showSubnav = () =>setSubnav(!subnav)
    return (
        <>
            <SidebarLink onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>

                <div>
                    {item.subNav && subnav
                        ? item.iconOpened
                        : item.subNav
                        ? item.iconClosed
                        : null}
                </div>
            </SidebarLink>           
            {subnav && item.subNav.map((item, index) => {
                return (
                    <DropdownLink to= {{pathname: '/class', state: {class_name: item.title}}} key={index} onClick={() => {class_click(item.title)}} >
                        {item.icon}
                        <SidebarLabel>{item.title}</SidebarLabel>
                    </DropdownLink>
                )
            })}
        </>
    )
}

export default Submenu;
