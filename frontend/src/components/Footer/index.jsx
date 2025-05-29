import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturnLight } from "react-icons/pi";
import { BsWallet2 } from "react-icons/bs";
import { CiGift } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";
import { Link, Links } from "react-router-dom";
import { BsChatRightDots } from "react-icons/bs";
import { Button } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { CiFacebook } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaPinterestSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="py-6 bg-[#fafafa]">
        <div className="container">
          <div className="flex items-center justify-center gap-2 py-8 pb-8 ">
            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <LiaShippingFastSolid className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
              <h3 className="text-[16px] font-[600] mt-3">free Shipping</h3>
              <p className="text-[12px] font-[500]">For all Orders Over ₹100</p>
            </div>
            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <PiKeyReturnLight className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
              <h3 className="text-[16px] font-[600] mt-3">30 Days Returns</h3>
              <p className="text-[12px] font-[500]">For an Exchange Product</p>
            </div>
            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <BsWallet2 className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
              <h3 className="text-[16px] font-[600] mt-3">Secured Payment</h3>
              <p className="text-[12px] font-[500]">Payment Cards Accepted</p>
            </div>
            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <CiGift className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
              <h3 className="text-[16px] font-[600] mt-3">Special Gifts</h3>
              <p className="text-[12px] font-[500]">Our First Product Order</p>
            </div>
            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <BiSupport className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
              <h3 className="text-[16px] font-[600] mt-3">Support 24/7</h3>
              <p className="text-[12px] font-[500]">Contact us Anytime</p>
            </div>
          </div>
          <br />

          <hr className="text-[rgba(0,0,0,0.2)]" />

          <div className="footer flex py-8">
            <div className="part1 w-[25%] border-r border-[rgba(0,0,0,0.1)]">
              <h2 className="text-[18px] font-[600] mp-4">Contact us</h2>
              <p className="text-[13px] font-[400] pb-4">
                Pick N Go - Mega Super Store <br />
                Kakkanad, Kochi, Kerala
              </p>
              <Link
                className="link text-[13px]"
                to="mailto:someone@example.com"
              >
                pickngo@gmail.com
              </Link>
              <span className="text-[22px] font-[600] block w-full mt-3 mb-5 text-primary">
                (+91) 8606-543-890
              </span>
              <div className="flex items-center gap-2 ">
                <BsChatRightDots className="text-[40px] text-primary" />
                <span className="text-[16px] font-[600]">
                  Online chat <br />
                  Get expert Help
                </span>
              </div>
            </div>
            <div className="part2 w-[40%] flex pl-8">
              <div className="part2_col1 w-[50%]">
                <h2 className="text-[18px] font-[600] mb-4">Products</h2>
                <ul className="lis">
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Price drop
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      New products
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Best sales
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Contact us
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Sitemap
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Stores
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="part2_col2 w-[50%]">
                <h2 className="text-[18px] font-[600] mb-4">Our Company</h2>
                <ul className="lis">
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Delivery
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Legal Notice
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Terms and conditions for use
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      About us
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Secure Payments
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="part2 w-[35%] flex pl-8 flex-col pr-8">
              <h2 className="text-[18px] font-[600] mb-4">
                Subscribe to newsletter
              </h2>
              <p className="text-[13px]">
                Subscribe to our latest newsletter to get <br /> news about
                special discount
              </p>
              <form className="mt-5">
                <input
                  type="text"
                  className="w-[75%] block h-[45px] border-1 border-[rgba(0,0,0,0.1)] outline-none pl-4 pr-4 rounded-sm mb-4 focus:border-[#000]"
                  placeholder="Your Email Address"
                />
                <Button className="btn-org">Subscribe</Button>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="I agree to terms and conditions and the privacy policy"
                />
              </form>
            </div>
          </div>
        </div>
      </footer>
      <div className="bottomStrip border-t border-[rgba(0,0,0,0.2)] py-3 bg-white">
        <div className="container flex item-center justify-between">
          <ul className="flex item-center gap-2">
            <li className="list-none">
              <Link to='/' className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all">
                <CiFacebook className="text-[30px] group-hover:text-white"/>
              </Link>
            </li>
            <li className="list-none">
              <Link to='/' className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all">
                <AiOutlineYoutube className="text-[25px] group-hover:text-white"/>
              </Link>
            </li>
            <li className="list-none">
              <Link to='/' className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all">
                <FaPinterestSquare className="text-[25px] group-hover:text-white"/>
              </Link>
            </li>
            <li className="list-none">
              <Link to='/' className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all">
                <FaInstagram className="text-[25px] group-hover:text-white"/>
              </Link>
            </li>
          </ul>

          <p className="text-[13px] text-center mb-0">© 2025 pickNgo Templet</p>

          <div className="flex items-center gap-1">
            <img src="./footer/carte_bleue.png" alt="image" />
            <img src="./footer/master_card.png" alt="image" />
            <img src="./footer/paypal.png" alt="image" />
            <img src="./footer/visa.png" alt="image" />
            <img src="./footer/american_express.png" alt="image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
