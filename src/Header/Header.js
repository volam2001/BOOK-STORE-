import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo3.png'
const Header = () => {
    return (
        <div>

            <div className='h-[119px] bg-[#F7462E]' >
                <div className='mx-[70px] flex justify-between '>
                    <ul className='flex text-white mt-[5px] '>
                        <li className='mr-[18px]'>Kênh người bán</li>
                        <li className='mr-[18px]'>Trở thành người bán</li>
                        <li className='mr-[18px] '>Tải ứng dụng</li>
                        <li className=''>
                            Kết nối
                            <i className="fa-brands fa-facebook px-[8px]"></i>
                            <i className="fa-brands fa-instagram"></i>
                        </li>
                    </ul>
                    <ul className='flex mt-[5px] text-white'>
                        <li className='mr-[15px]'>
                            <i className=" pr-[4px] fa-regular fa-bell"></i>
                            Thông báo
                        </li>
                        <li className='mr-[15px]'>
                            <i className=" pr-[4px] fa-regular fa-circle-question"></i>
                            Hỗ trợ
                        </li>
                        <li className='mr-[15px]'>
                            <i class="fa-solid fa-globe pr-[4px]    "></i>
                            Tiếng việt
                        </li>
                        <Link to = '/login' className='mr-[15px]'>
                            Đăng nhập
                        </Link>
                        <Link to='/signup' className='mr-[15px]'>
                            Đăng kí
                        </Link>
                    </ul>
                </div>
                <div className='mx-[80px] mt-[10px] flex justify-around items-center'>
                    <img className='h-[70px] ' src={logo} alt=''/>
                    <div className='w-2/3 bg-white h-[40px] flex justify-between items-center rounded-sm  '>
                        <input className='h-full w-5/6 outline-none	pl-[10px] rounded-sm' type='text' placeholder='Nhập vào tìm kiếm'/>
                        <div className='w-[60px] h-[33px] bg-[#FB6445] mr-[3px] flex items-center justify-center rounded-sm'>
                            <i class=" text-white fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                    <Link to='cart' className=" text-[25px] text-white  fa-solid fa-cart-shopping"></Link>
                </div>
            </div>

           
            <div className='w-full m-auto bg-[#EAECF2] h-[50px] flex items-center '>
                <ul className=' w-11/12 m-auto flex items-center justify-between text-lg font-semibold '>
                    <Link className= ' w-[150px] text-center rounded-lg hover:hover:bg-[#5eead4] '  to ='/'>
                        Trang chủ
                    </Link>
                    <Link className= ' w-[150px] text-center rounded-lg hover:hover:bg-[#5eead4] '  to='Sachtiengviet'>Sách Tiếng Việt</Link>
                    <Link className= ' w-[150px] text-center rounded-lg hover:hover:bg-[#5eead4] ' to='english' >Sách Tiếng Anh</Link>
                    <Link className= ' w-[150px] text-center rounded-lg hover:hover:bg-[#5eead4] ' to='tool' >Văn phòng phẩm</Link>
                    <Link className= ' w-[150px] text-center rounded-lg hover:hover:bg-[#5eead4] ' to='souvenir' >Quà lưu niệm</Link>
                </ul>
            </div>
        </div>

    );
};

export default Header;