import React from 'react';

const Footer = () => {
    return (
        <div className='mx-[50px] mb-[100px] mt-[50px]'>
            <div className='grid grid-cols-5'>
                <div>
                    <h1 className='font-semibold mb-[10px]'>Hỗ trợ khách hàng</h1>
                    <ul>
                        <li className=' mt-[5px] '>Câu hỏi thường gặp</li>
                        <li className=' mt-[5px] '>Yêu cầu hỗ trợ</li>
                        <li className=' mt-[5px] '>Hướng dẫn đặt hàng</li>
                        <li className=' mt-[5px] '>Phương thức vận chuyển</li>
                        <li className=' mt-[5px] '>Chính sách đổi trả</li>
                        <li className=' mt-[5px] '>Hướng dẫn trả góp</li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-semibold mb-[10px]'>Về chúng tôi</h1>
                    <ul>
                        <li className='mt-[5px]'>Giới thiệu</li>
                        <li className='mt-[5px]'>Tuyển dụng</li>
                        <li className='mt-[5px]'>Tuyển dụng</li>
                        <li className='mt-[5px]'>Chính sách bảo mật thanh toán</li>
                        <li className='mt-[5px]'>Bán hành doanh nghiệp</li>
                        <li className='mt-[5px]'>Điều kiện vận chuyển</li>
                        <li className='mt-[5px]'>Tiếp thị</li>
                        <li className='mt-[5px]'>Điều kiện sử dụng</li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-semibold mb-[10px]'>Hợp tác và liên kết</h1>
                    <ul>
                        <li className='mt-[5px]'>Quy chế hoạt động của SDDTMĐT</li>
                        <li className='mt-[5px]'>Bán hàng cùng Bookstore</li>

                    </ul>
                    <p className='font-medium mt-[20px]'>Chứng nhận bởi</p>
                    <div className='flex  items-center '>
                        <img className='w-[50px] h-[50px]' src='https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png' alt=''/>
                        <img className=' ml-[40px] w-[100px] h-[100px]' src='https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg' alt=''/>
                    </div>
                </div>
                <div>
                    <h1 className='font-semibold mb-[10px]'>Phương thức thanh toán</h1>
                    <ul>
                        <li className='mt-[5px] ml-[40px]'>ATM</li>
                        <li className='mt-[5px] ml-[40px]'>MOMO</li>
                        <li className='mt-[5px] ml-[40px]'>ZALOPAY</li>
                        <li className='mt-[5px] ml-[40px]'>TRẢ GÓP</li>
                        <li className='mt-[5px] ml-[40px]'>VNPAY</li>
                        
                    </ul>

                </div>
                <div>
                    <h1 className='font-semibold mb-[10px] '>Kết nối với chúng tôi</h1>
                    <div>
                        <i className="fa-brands text-3xl mr-[8px] fa-facebook text-[#45619D]"></i>
                        <i className="fa-brands text-3xl mr-[8px] fa-youtube text-[#FF0D0D]"></i>
                        <i className="fa-brands text-3xl mr-[8px] fa-instagram text-[#A50064]"></i>
                    </div>
                    <p className='mt-[20px] font-medium'>Tải ứng dụng trên điện thoại</p>
                    <div className='flex mt-[20px]'>
                        <img className='w-[100px] h-[100px]' src='https://frontend.tikicdn.com/_desktop-next/static/img/footer/qrcode.png' alt=''/>
                        <div className='ml-[10px]'>
                            <img className='w-[150px] mb-[10px]' src='https://frontend.tikicdn.com/_desktop-next/static/img/icons/appstore.png' alt=''/>
                            <img className='w-[150px]' src='https://frontend.tikicdn.com/_desktop-next/static/img/icons/playstore.png' alt=''/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;