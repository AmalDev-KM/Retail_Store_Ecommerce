import React from 'react'
import { Link } from 'react-router-dom';
import Search from '../Search';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoGitCompareSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import Navigation from './Navigation';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Header = () => {
  return (
    <div>
      <header className='bg-white'>
        {/* top strip */}
        <div className="top-strip py-2  border-gray-200 border-t-[1px] border-b-[1px]">
            <div className="container">
                <div className="flex items-center justify-between">
                    <div className="col1 w-[50%]">
                        <p className='text-[12px] font-[500]'>Get upto 50% off on new season styles, limited time only</p>
                    </div>

                    <div className="col2 flex items-center justify-end">
                      <ul className='flex items-center gap-2'>
                        <li className="list-none">
                          <Link to={'/help-center'} className='text-[13px] link font-[500] transition'>Help Center</Link>
                        </li>
                        <li>
                          <Link to={'/order-tracking'} className='text-[13px] link font-[500] transition'>Order Tracking</Link>
                        </li>
                      </ul>
                    </div>
                </div>
            </div>
        </div>

        {/* Header */}
        <div className="header py-4 border-gray-200 border-b-[1px]">
          <div className="container flex items-center justify-between">
            <div className="col1 w-[25%]">
              <Link to={'/'}><img src='logo/Logo1.jpg'></img></Link>
            </div>
            <div className="col2 w-[45%]">
              <Search/>
            </div>
            <div className="col3 w-[30%] flex items-center pl-7">
              <ul className='flex items-center justify-end gap-3 w-full'>
                <li className="list-none">
                  <Link to='/login' className='link transition text-[15px] font-[500]'>Login</Link> | 
                  &nbsp;
                  <Link to='/register' className='link transition text-[15px] font-[500]'>Register</Link>
                </li>
                
                <li>
                <Tooltip title="WishList">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                    <FaRegHeart  className='link'/>
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
                </li>

                <li>
                <Tooltip title="Compare">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                    <IoGitCompareSharp className='link'/>
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
                </li>

                <li>
                <Tooltip title="Cart">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <MdOutlineShoppingCart className='link' />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
        <Navigation/>

      </header>
    </div>
  )
}

export default Header;
