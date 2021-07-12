import React from 'react'
import { getinfo } from '../../actions/userinfo';
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';

export const SidebarData = () => {
    
    const sidebardata = [
    {
        title: 'Turmas',
        path: '/turmas',
        icon: <FaIcons.FaBookOpen />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
        ]
    },

    {
        title: 'Relatórios',
        path: '/reports',
        icon: <FaIcons.FaPenAlt />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    },
    
    {
        title: 'Configurações',
        path: '/settings',
        icon: <FaIcons.FaUserCog />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
       
    }
    ]
    
       
        // console.log(user_info.keys())
       /*  for (let index = 0; index < user_info["classes_registered"].lenght; index++) {
            sidebardata[0].subNav.push({
                title: user_info.classes_registered[index].name,
                path: '/overview/users',
                icon: <IoIcons.IoIosPaper />,
            },)
        } */
        
    
    


    
    return sidebardata;
}

/* export default SidebarData; */