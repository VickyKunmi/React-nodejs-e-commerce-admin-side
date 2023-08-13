import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"


export const Sidebar = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',
    },
    {
        title: 'Products',
        path: '/Products',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text',
    }, 
    {
        title: 'Users',
        path: '/users',
        icon: <FaIcons.FaUsers />,
        cName: 'nav-text',
    }, 
    {
        title: 'Orders',
        path: '/orders',
        icon: <FaIcons.FaShoppingBag />,
        cName: 'nav-text',
    },
    {
        title: 'Logout',
        path: '/',
        icon: <FaIcons.FaPowerOff />,
        cName: 'nav-text',
    },
]