import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import {BsFillGrid3X3GapFill} from 'react-icons/bs'

export const SidebarData = [

  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Categories',
    path: '/Mutiple',
    icon: < BsFillGrid3X3GapFill   />,
    cName: 'nav-text'
  },
  {
    title: 'Dry-cleaning',
    path: '/DryClean',
    icon: <IoIcons.IoMdShirt />,
    cName: 'nav-text'
  },
  {
    title: 'Shop',
    path: '/Shop',
    icon: <FaIcons.FaShoppingBag />,
    cName: 'nav-text'
  },
  {
    title: 'Contact Us',
    path: '/Contact',
    icon: <FaIcons.FaPhoneAlt />,
    cName: 'nav-text'
  },
  {
    title: 'About US',
    path: '/About',
    icon: <FaIcons.FaInfoCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Setting',
    path: '/Profile',
    icon: <FaIcons.FaRegSun />,
    cName: 'nav-text'
  },
  {
    title: 'Contact Detail',
    path: '/Setting',
    icon: "",
    cName: 'nav-text'
  
},
{
  title: '9508201198',
  path: '/Setting',
  icon: <FaIcons.FaPhoneAlt />,
  cName: 'nav-text'
},
{
  title: 'darzi0133@gmail.com',
  path: '/https://www.gmail.com',
  icon: <FaIcons.FaMailBulk />,
  cName: 'nav-text'
}

 
]