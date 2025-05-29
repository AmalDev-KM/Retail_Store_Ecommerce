import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";


const BlogItem = () => {
  return (
    <div  className='blogItem group'>
        <div className="imgWrpper w-full overflow-hidden rounded-md cursor-pointer relative">
            <img src="./Blog/Blog.jpg" alt="blogImage" srcset="" className='w-full transition-all group-hover:scale-105 group-hover:rotate-1'/>
            <span className="flex items-center justify-center text-white absolute bottom-[15px] right-[15px] z-50 bg-primary rounded-md p-1 text-[11px] font-[500] gap-1">
              <IoMdTime className='text-[18px]' /> 20 May 2025
            </span>
        </div>
        <div className="info py-4">
          <h2 className='text-[15px] font-[600] text-black'>
            <Link to={'/'} className="link">sustainable living through cutting-edge prefabricated homes</Link>
          </h2>
          <p className='text-[13px] font-[400] text-[rgba(0,0,0,0.8)]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Modi inventore hic suscipit dolorum quod odit provident in libero.....
          </p>
          <Link to={'/'} className="link font-[500] text-[14px] flex items-center gap-1">Read more<IoIosArrowForward />
          </Link>
        </div>
    </div>
  )
}


export default BlogItem;