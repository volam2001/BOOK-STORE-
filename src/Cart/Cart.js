import React, { useState }  from 'react';


const Cart = () => {
    const [count, setCount]=useState(1)
    const handleClick = () =>{
        setCount(count+1)
    }
    const disClick = () =>{
        if(count>0){
            setCount(count-1)
        }
        
    }
    return (
        <div className='mb-[100px]'>
            <div className='flex h-[100px] items-center justify-between shadow-lg'>

                   <div className='ml-[90px]'>
                        <i class=" mr-[10px] fa-solid fa-bag-shopping text-[#EE4D2D] text-[40px]"></i>
                        <span className='text-[25px] text-[#EE4D2D] mr-[15px] font-medium pr-[15px]  border-r-[1px] border-r-[#EE4D2D]'>Dinobook</span>
                        <span className='  text-[25px] text-[#EE4D2D]'>Giỏ hàng</span>
                   </div>
                   <div className='w-1/2 bg-white h-[40px] flex justify-between items-center rounded-sm border-2 border-red-500  mr-[90px] '>
                        <input className='h-full w-5/6 outline-none	pl-[10px] rounded-sm' type='text' placeholder='Nhập vào tìm kiếm'/>
                        <div className='w-[60px] h-[33px] bg-[#FB6445] mr-[3px] flex items-center justify-center rounded-sm'>
                            <i class=" text-white fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                
            </div>
            <div className='bg-[#F5F5F5] h-[600px]   '>
                <div className='  h-[42px] mx-[76px]  bg-white flex items-center border-[1px] border-[#F3DB97] mt-[20px] '>
                  
                    <img className='w-[26px] h-[20px] mx-[10px]' src='https://bizweb.dktcdn.net/100/377/231/articles/freeship.png?v=1588928233387' alt=''/>
                    <span>Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận chuyển bạn nhé!</span>
                  
                </div>
                <div className='h-[55px] mx-[76px]  bg-white mt-[15px] shadow-lg flex justify-between px-[40px] items-center '>
                    <div>
                        <input type='checkbox'/>
                        <span className='ml-[20px]'>Sản Phẩm</span>
                    </div>
                    <ul className='flex mr-[60px] '>
                        <li className='ml-[115px] opacity-80'>Đơn giá</li>
                        <li className='ml-[115px] opacity-80'>Số Lượng</li>
                        <li className='ml-[115px] opacity-80'>Số Tiền</li>
                        <li className='ml-[115px] opacity-80'>Thao Tác</li>
                    </ul>
                
                </div>
                <div className='h-[62px] mx-[76px]  bg-white mt-[15px] shadow-lg flex justify-between px-[40px] items-center border-[1px] border-b-[#E8E8E8] '>
                    <div>
                        <input type='checkbox'/>
                        <span className='ml-[20px] bg-[#EE4D2D] w-[70px] h-[15px] rounded-sm text-center px-[5px] text-white cursor-pointer text-[13px]'>Yêu Thích+</span>
                        <span className='mx-[10px]'> BÁN BUÔN GIÁ TẬN XƯỞNG</span>
                        <i className="fa-solid fa-check-to-slot text-[#EE4D2D]"></i>
                    </div>
                     
                </div>
                <div className='h-[136px] mx-[76px]  bg-white  flex justify-between px-[40px] items-center border-[1.5px] border-b-[#E8E8E8] '>
                    <div className='flex'>
                        <input type='checkbox'/>
                        <div className='ml-[20px] flex items-center  '>
                            <div className='flex items-center justify-center'>
                                <img className='w-[80px] h-[80px]' src='https://salt.tikicdn.com/cache/280x280/ts/product/ba/11/15/57ef97f70915d695cb3b9d9ab05e3571.jpg.webp' alt='' />
                                <div className='ml-[10px]'>
                                    <p>Trí Tuệ do Thái</p>
                                    <button className='border-[1px] border-[#EE4D2D] text-[10px] w-[68px] h-[20px] text-red-500 rounded-sm'>Special Price</button>

                                    
                                </div>
                                <span className=' opacity-70 ml-[30px] '>Phân loại hàng:</span>
                            </div>

                            <div className='ml-[100px] flex items-center'>
                                <span className='mr-[15px]'>130000đ</span>
                                <span>1000đ</span>
                                <div className='mx-[60px] flex'>
                                    <button onClick={disClick} className=' text-[30px] flex items-center justify-center w-[30px] h-[34px] border-[1.5px] border-[#E8E8E8]' >-</button>
                                    <button className='w-[58px] h-[34px] border-[1.5px] border-[#E8E8E8] '>{count}</button>
                                    <button onClick={handleClick}  className='w-[30px] flex items-center justify-center text-[25px] h-[34px] border-[1.5px] border-[#E8E8E8]' >+</button>
                                </div>
                                <span className='text-red-500 mr-[60px]'>{count*120000}đ </span>
                                <span>Xóa, tìm sản phẩm tương tự</span>
                            </div>
                        </div>
                    </div>
                     
                </div>
                <div className='h-[62px] mx-[76px]  bg-white flex items-center border-[1.5px] border-[#E8E8E8]  '>
                  
                  <img className='w-[26px] h-[20px] mx-[10px]' src='https://bizweb.dktcdn.net/100/377/231/articles/freeship.png?v=1588928233387' alt=''/>
                  <span>Giảm ₫40.000 phí vận chuyển đơn tối thiểu 0đ     <span className='text-blue-900'>Tìm hiểu thêm</span></span>
                
                </div>

                <div className='  flex items-center justify-end mt-[30px] shadow-lg h-[62px] mx-[76px]  bg-white   border-[1.5px] border-[#E8E8E8]  '>
                  
                    <div className=' flex  mr-[32px]'>
                        <span className='mr-[215px]'>
                            <i className="fa-solid fa-rug mr-[5px] text-red-500 "></i>
                            Shopee Voucher
                        </span>
                        <span className='text-blue-900 cursor-pointer'>Chọn Hoặc Nhập Mã</span>
                    </div>
                </div>
                <div className='h-[62px] mx-[76px]  bg-white mt-[10px] shadow-lg flex justify-between items-center px-[40px] border-[1px] border-b-[#E8E8E8] ] '>
                    <div>
                        <input type='checkbox'/>
                        <span className='ml-[20px] '>Chọn Tất Cả (1)</span>
                        <span className='mx-[10px]'> Xóa</span>
                        
                    </div>
                    <div>
                        <span className='mr-[20px]'>Tổng thanh toán (0 Sản phẩm):<span className='text-red-500 text-[20px]'> 0đ</span></span>
                        <button className='w-[210px] h-[40px] bg-[#F05D40] text-white'> Mua hàng</button>
                    </div>
                     
                </div>
            </div>
        </div>
    );
};

export default Cart;