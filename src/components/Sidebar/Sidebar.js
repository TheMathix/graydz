import React, { useEffect, useState } from 'react';
import '../../App.css';
import { getinfo } from '../../actions/userinfo';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import {SidebarData} from './SidebarData';
import Submenu from './Submenu';
import { useDispatch, useSelector } from 'react-redux';
import * as IoIcons from 'react-icons/io'

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

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getinfo(user?.result.email,'', ''));
  
    }, [dispatch]);
  
    useEffect(()=>{
        localStorage.removeItem(`class_c`)
      },[])
      
    const [sidebar,setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    const user_info = useSelector((state) => state.info)
    
    const SidebarData_dic = SidebarData()

    if (Object.keys(user_info)?.length > 0){
        
        for (let index = 0; index < user_info.classes_registered.length; index++) {
            SidebarData_dic[0].subNav.push({
                title: user_info.classes_registered[index].name,
                path: '/turmas/'+user_info.classes_registered[index].name,
                icon: <IoIcons.IoIosPaper />,
            })
        }
    }
    return(
        <>
            <Nav>
                <NavIcon>
                    <FaIcons.FaBars onClick={showSidebar}/>
                </NavIcon>
            </Nav>

            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                    <NavIcon>
                        <FaIcons.FaWindowClose onClick={showSidebar}/>
                    </NavIcon>
                    {SidebarData_dic.map((item, index) => {
                        return <Submenu item={item} key={index} />
                    })}
                </SidebarWrap>
            </SidebarNav>
        </>
    );
}

export default Sidebar;