import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { GoRocket } from "react-icons/go";
import CategoryPanel from './CategoryPanel';
import "../Navigation/style.css"

const Navigation = () => {
    const [isOpenCatPanel, setIsOpenCatPanel] = useState(false)
    const openCategorypanel=()=>{
        setIsOpenCatPanel(true)
    }
  return (
    <>
        <nav>
            <div className="container flex items-center justify-end gap-8">
                <div className="col1 w-[20%] ">
                    <Button className="!text-black !font-[550] gap-2 w-full" onClick={openCategorypanel}>
                        <RiMenu2Fill className='text-[18px]' />
                        Shop By Categories
                        <LiaAngleDownSolid className='text-[13px] ml-auto font-bold' />
                    </Button>
                </div>
                <div className="col2 w-[60%]">
                    <ul className="flex items-center gap-5 nav">
                        <li className='list-none'>
                            <Link to="/" className="link transition text-[14px] font-[500]">
                                <Button className='link transition !font-[550] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4'>Home</Button>
                            </Link>
                        </li>

                        <li className='list-none relative'>
                            <Link to="/" className="link transition text-[14px] font-[500]">
                            <Button className='link transition !font-[550] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4'>Electronics</Button>
                            </Link>

                            <div className="submenu absolute top-[120%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                                <ul>
                                    <li className="list-none w-full relative">
                                        {/* <Link to="/" className='w-full'> */}
                                            <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]'>Smart Phones</Button>
                                            <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                                                <ul>
                                                    <li className="list-none w-full">
                                                        <Link to="/" className='w-full'>
                                                            <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]'>Vivo</Button>
                                                        </Link>
                                                    </li>

                                                    <li className="list-none w-full">
                                                        <Link to="/" className='w-full'>
                                                            <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]'>Oppo</Button>
                                                        </Link>
                                                    </li>

                                                    <li className="list-none w-full">
                                                        <Link to="/" className='w-full'>
                                                            <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]'>Redmi</Button>
                                                        </Link>
                                                    </li>

                                                    <li className="list-none w-full">
                                                        <Link to="/" className='w-full'>
                                                            <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]'>Poco</Button>
                                                        </Link>
                                                    </li>

                                                    <li className="list-none w-full">
                                                        <Link to="/" className='w-full'>
                                                            <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]'>Realmi</Button>
                                                        </Link>
                                                    </li>
                                                </ul>

                                            </div>
                                        {/* </Link> */}
                                    </li>

                                    <li className="list-none w-full">
                                         <Link to="/" className='w-full'>
                                            <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]'>Laptops</Button>
                                        </Link>
                                    </li>

                                    <li className="list-none w-full">
                                         <Link to="/" className='w-full'>
                                            <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]'>Smart Watches</Button>
                                        </Link>
                                    </li>

                                    <li className="list-none w-full">
                                        <Link to="/" className='w-full'>
                                            <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]'>Tablets</Button>
                                        </Link>
                                    </li>

                                    <li className="list-none w-full">
                                         <Link to="/" className='w-full'>
                                            <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]'>Earphones</Button>
                                        </Link>
                                    </li>
                                </ul>

                            </div>


                        </li>

                        <li className='list-none'>
                            <Link to="/" className="link transition text-[14px] font-[500]">
                            <Button className='link transition !font-[550] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4'>Bags</Button>
                            </Link>
                        </li>

                        <li className='list-none'>
                            <Link to="/" className="link transition text-[14px] font-[500]">
                            <Button className='link transition !font-[550] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4'>Footwear</Button>
                            </Link>
                        </li>

                        <li className='list-none'>
                            <Link to="/" className="link transition text-[14px] font-[500]">
                            <Button className='link transition !font-[550] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4'>Groceries</Button>
                            </Link>
                        </li>

                        <li className='list-none'>
                            <Link to="/" className="link transition text-[14px] font-[500]">
                            <Button className='link transition !font-[550] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4'>Beauty</Button>
                            </Link>
                        </li>

                        <li className='list-none'>
                            <Link to="/" className="link transition text-[14px] font-[500]">
                            <Button className='link transition !font-[550] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4'>Wellness</Button>
                            </Link>
                        </li>

                        <li className='list-none'>
                            <Link to="/" className="link transition text-[14px] font-[500]">
                            <Button className='link transition !font-[550] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4'>Jewellery</Button>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col3 w-[20%]">
                    <p className='text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0'>
                        <GoRocket className='text-[18px]'/>
                    Free international delivery</p>
                </div>
            </div>
        </nav>

    {/*Category panel component */}
    <CategoryPanel  setIsOpenCatPanel={setIsOpenCatPanel} isOpenCatPanel={isOpenCatPanel} />
    </>
  )
}

export default Navigation
