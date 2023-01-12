import React from 'react';

const Signup = () => {
    return (
        <div className='h-[500px] bg-[#EE4D2D]'>
            <div className='mx-[200px] flex justify-between '>
                <div>
                   
                </div>

                <div className='w-[400px] h-[430px] bg-white mt-[20px]'>
                    <div className='mx-[32px] my-[35px]'>
                        <h1 className='text-semibold text-[20px] mb-[33px]'>Đăng kí</h1>
                        <input className= 'pl-[10px] mb-[33px] h-[40px] bg-[#e2e8f0] border-[1px] border-neutral-300 outline-none w-full ' type="text" placeholder="Số điện thoại" name="uname" required /><br></br>
                        <button className='bg-[#04AA6D] text-center text-white w-full mb-[20px] h-[43px] ' type="submit">Tiếp theo</button><br></br>
                        <div className='flex items-center opacity-50  mb-[20px]  '>
                            <span className='w-3/4 h-[1px] bg-black '></span>
                            <span className='mx-[10px] text-[13px]'>HOẶC</span>
                            <span className='w-3/4 h-[1px] bg-black'></span>
                        </div>
                        <div className='flex justify-between mb-[40px]'>
                            <div className='w-[160px] h-[40px] items-center justify-center flex border-[1px] border-[#B9B9B9]'>
                                <i className="fa-brands fa-facebook mr-[8px] text-[#1877F2] text-[20px]"></i>
                                <span>Facebook</span>
                            </div>

                            <div className='w-[160px] h-[40px] items-center justify-center flex border-[1px] border-[#B9B9B9]'>
                                <i className="fa-brands fa-google mr-[8px] text-[#FBBC05] text-[20px]"></i>
                                <span>Google</span>
                            </div>
                        </div>
                        <div className='mx-[40px] text-[15px] flex items-center justify-center'>
                            <p className=' '>Bạn đã có tài khoản? <span className='text-[#EE4D2D] cursor-pointer '>Đăng nhập </span></p>
                        </div>
                        
                       
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Signup;