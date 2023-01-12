import React from 'react';

const Sachtiengviet = () => {
    return (
        <div className='mx-[50px] mt-[50px]  '>
            <div className='grid grid-cols-5 gap-4  '>
                <div>
                    <h1 className='font-medium '>DANH MỤC SẢN PHẨM</h1>
                    <ul className='bg-[#f1f5f9]  rounded-lg' >
                        <li className='pl-[20px] rounded-lg  mt-[5px] hover:bg-[#5eead4]' >Thơ</li>
                        <li className='pl-[20px]  mt-[5px] hover:bg-[#5eead4]'>Tiểu thuyết</li>
                        <li className='pl-[20px]  mt-[5px] hover:bg-[#5eead4]'>Truyện tranh</li>
                        <li className='pl-[20px]  mt-[5px] hover:bg-[#5eead4]'>Truyện cười</li>
                        <li className='pl-[20px]  mt-[5px] hover:bg-[#5eead4]'>Truyện kinh dị</li>
                        <li className='pl-[20px]  mt-[5px] hover:bg-[#5eead4]'>Truyện dài</li>
                        <li className='pl-[20px]  mt-[5px] hover:bg-[#5eead4]'>Truyện kiếm hiệp</li>
                        <li className='pl-[20px]  mt-[5px] hover:bg-[#5eead4]'>Truyện trinh thám</li>
                        <li className='pl-[20px]  mt-[5px] hover:bg-[#5eead4]'>Truyện ngôn tình</li>
                        <li className='pl-[20px]  mt-[5px] hover:bg-[#5eead4]'>Ca dao tục ngữ</li>
                        <li className='pl-[20px]  mt-[5px] hover:bg-[#5eead4]'>Phê bình</li>
                        <li className='pl-[20px]  mt-[5px] hover:bg-[#5eead4]'>Lý luận</li>
                        <li className='pl-[20px]  mt-[5px] hover:bg-[#5eead4]'>Văn học</li>
                        <li className='pl-[20px]  mt-[5px] rounded-lg hover:bg-[#5eead4]'>Sách ảnh</li>

                    </ul>
                </div>


                <div className='col-span-4'>
                    <div className='bg-[#f1f5f9] flex justify-around h-[50px] items-center font-medium'>

                        <button className='bg-[#5eead4] h-[40px] w-[150px] rounded-lg'>Sắp xếp theo</button>
                        <button className='bg-[#5eead4] h-[40px] w-[150px] rounded-lg' >Phổ biến</button>
                        <button className='bg-[#5eead4] h-[40px] w-[150px] rounded-lg'>Mới nhất</button>
                        <button className='bg-[#5eead4] h-[40px] w-[150px] rounded-lg'>Bán chạy</button>
                        <button className='bg-[#5eead4] h-[40px] w-[150px] rounded-lg'>Giá: Thấp đến Cao</button>
                        <button >1/14</button>
                        <div className='flex '>
                            
                            <i className=" mr-[5px] rounded-lg cursor-pointer  w-[30px] h-[30px] bg-[#5eead4] flex items-center justify-center  fa-solid fa-chevron-left"></i>
                            <i className=" w-[30px] rounded-lg cursor-pointer h-[30px] bg-[#5eead4] flex items-center justify-center  fa-solid fa-chevron-right"></i>
                            
                        
                        </div>
                    </div>

                    <div className='grid grid-cols-4 gap-4 mt-[20px] mb-[100px] '>
                        <div className='border border-slate-400 relative '>
                            <img className='w-full' src='https://salt.tikicdn.com/cache/280x280/ts/product/ef/6c/b1/e14d862b8a24c546dce69c71582089de.jpg.webp' alt=''/>
                            <p className='mt-[10px] font-medium mx-[5px] h-[30px]  '>NẾU BIẾT TRĂM NĂM LÀ HỮU HẠN</p>
                            <div className='w-2/3 flex justify-between mt-[10px] mx-[5px]'>
                                <span className='font-semibold '>12000đ</span>
                                <span className='font-semibold text-red-500'>135000đ</span>
                            </div>
                            <div className='flex justify-between mt-[10px] items-center'>
                                <i className=" ml-[5px] fa-regular fa-heart"></i>
                                <div className='mr-[20px]'>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </div>
                            </div>
                            <div className='mt-[8px] flex justify-between mb-[10px] mx-[5px]'>
                                
                                <p className='font-semibold'>NXB Giáo Dục</p>
                                <button className='flex items-center justify-center text-[#1772EE] w-[80px] h-[24px] rounded-md border-[1.5px] border-[#6FBCFF]'>freeship+</button>
                            </div>
                            <div className='bg-[#1772EE] text-white w-[100px] flex items-center justify-center absolute top-2 left-[-3px]   '>
                                <i className="fa-solid fa-check"></i>
                                <span className='ml-[5px]'>yêu thích</span>
                            </div>
                            <div className='bg-[#edf038] w-[50px] h-[50px] rounded-full flex items-center justify-center text-white font-semibold absolute top-[5px] right-2'>
                                    -20%
                            </div>
                        </div>

                        <div className='border border-slate-400 relative '>
                            <img className='w-full' src='https://salt.tikicdn.com/cache/280x280/ts/product/5e/18/24/2a6154ba08df6ce6161c13f4303fa19e.jpg.webp' alt=''/>
                            <p className='mt-[10px] font-medium mx-[5px] h-[30px]  '>CÂY CAM NGỌT CỦA TÔI</p>
                            <div className='w-2/3 flex justify-between mt-[10px] mx-[5px]'>
                                <span className='font-semibold '>12000đ</span>
                                <span className='font-semibold text-red-500'>135000đ</span>
                            </div>
                            <div className='flex justify-between mt-[10px] items-center'>
                                <i className=" ml-[5px] fa-regular fa-heart"></i>
                                <div className='mr-[20px]'>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </div>
                            </div>
                            <div className='mt-[8px] flex justify-between mb-[10px] mx-[5px]'>
                                
                                <p className='font-semibold'>NXB Giáo Dục</p>
                                <button className='flex items-center justify-center text-[#1772EE] w-[80px] h-[24px] rounded-md border-[1.5px] border-[#6FBCFF]'>freeship+</button>
                            </div>
                            <div className='bg-[#1772EE] text-white w-[100px] flex items-center justify-center absolute top-2 left-[-3px]   '>
                                <i className="fa-solid fa-check"></i>
                                <span className='ml-[5px]'>yêu thích</span>
                            </div>
                            <div className='bg-[#edf038] w-[50px] h-[50px] rounded-full flex items-center justify-center text-white font-semibold absolute top-[5px] right-2'>
                                    -20%
                            </div>
                        </div>

                        <div className='border border-slate-400 relative '>
                            <img className='w-full' src='https://salt.tikicdn.com/cache/280x280/ts/product/65/78/e7/2eacb9f887fc28779b15cf9ab6d0bf79.jpg.webp' alt=''/>
                            <p className='mt-[10px] font-medium mx-[5px] h-[30px]  '>HÀNH TINH CỦA MỘT KẺ NGHĨ NHIỀU</p>
                            <div className='w-2/3 flex justify-between mt-[10px] mx-[5px]'>
                                <span className='font-semibold '>12000đ</span>
                                <span className='font-semibold text-red-500'>135000đ</span>
                            </div>
                            <div className='flex justify-between mt-[10px] items-center'>
                                <i className=" ml-[5px] fa-regular fa-heart"></i>
                                <div className='mr-[20px]'>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                            </div>
                            </div>
                            <div className='mt-[8px] flex justify-between mb-[10px] mx-[5px]'>
                                
                                <p className='font-semibold'>NXB Giáo Dục</p>
                                <button className='flex items-center justify-center text-[#1772EE] w-[80px] h-[24px] rounded-md border-[1.5px] border-[#6FBCFF]'>freeship+</button>
                            </div>
                            <div className='bg-[#1772EE] text-white w-[100px] flex items-center justify-center absolute top-2 left-[-3px]   '>
                                <i className="fa-solid fa-check"></i>
                                <span className='ml-[5px]'>yêu thích</span>
                            </div>
                            <div className='bg-[#edf038] w-[50px] h-[50px] rounded-full flex items-center justify-center text-white font-semibold absolute top-[5px] right-2'>
                                    -20%
                            </div>
                        </div>
                        <div className='border border-slate-400 relative '>
                            <img className='w-full' src='https://salt.tikicdn.com/cache/280x280/ts/product/98/1d/ef/9f354dda85824878fbb43ef2af4dd233.png.webp' alt=''/>
                            <p className='mt-[10px] font-medium mx-[5px] h-[30px]  '>CÀNG BÌNH TĨNH CÀNH HẠNH PHÚC</p>
                            <div className='w-2/3 flex justify-between mt-[10px] mx-[5px]'>
                                <span className='font-semibold '>12000đ</span>
                                <span className='font-semibold text-red-500'>135000đ</span>
                            </div>
                            <div className='flex justify-between mt-[10px] items-center'>
                                <i className=" ml-[5px] fa-regular fa-heart"></i>
                                <div className='mr-[20px]'>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                            </div>
                            </div>
                            <div className='mt-[8px] flex justify-between mb-[10px] mx-[5px]'>
                                
                                <p className='font-semibold'>NXB Giáo Dục</p>
                                <button className='flex items-center justify-center text-[#1772EE] w-[80px] h-[24px] rounded-md border-[1.5px] border-[#6FBCFF]'>freeship+</button>
                            </div>
                            <div className='bg-[#1772EE] text-white w-[100px] flex items-center justify-center absolute top-2 left-[-3px]   '>
                                <i className="fa-solid fa-check"></i>
                                <span className='ml-[5px]'>yêu thích</span>
                            </div>
                            <div className='bg-[#edf038] w-[50px] h-[50px] rounded-full flex items-center justify-center text-white font-semibold absolute top-[5px] right-2'>
                                    -20%
                            </div>
                        </div>
                        <div className='border border-slate-400 relative '>
                            <img className='w-full' src='https://salt.tikicdn.com/cache/280x280/ts/product/8d/96/9e/c0c1f23db756d50b1944dff9c3988753.jpg.webp' alt=''/>
                            <p className='mt-[10px] font-medium mx-[5px] h-[30px]  '>NHỮNG TÙ NHÂN CỦA ĐỊA LÝ</p>
                            <div className='w-2/3 flex justify-between mt-[10px] mx-[5px]'>
                                <span className='font-semibold '>12000đ</span>
                                <span className='font-semibold text-red-500'>135000đ</span>
                            </div>
                            <div className='flex justify-between mt-[10px] items-center'>
                                <i className=" ml-[5px] fa-regular fa-heart"></i>
                                <div className='mr-[20px]'>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                            </div>
                            </div>
                            <div className='mt-[8px] flex justify-between mb-[10px] mx-[5px]'>
                                
                                <p className='font-semibold'>NXB Giáo Dục</p>
                                <button className='flex items-center justify-center text-[#1772EE] w-[80px] h-[24px] rounded-md border-[1.5px] border-[#6FBCFF]'>freeship+</button>
                            </div>
                            <div className='bg-[#1772EE] text-white w-[100px] flex items-center justify-center absolute top-2 left-[-3px]   '>
                                <i className="fa-solid fa-check"></i>
                                <span className='ml-[5px]'>yêu thích</span>
                            </div>
                            <div className='bg-[#edf038] w-[50px] h-[50px] rounded-full flex items-center justify-center text-white font-semibold absolute top-[5px] right-2'>
                                    -20%
                            </div>
                        </div>
                        <div className='border border-slate-400 relative '>
                            <img className='w-full' src='https://salt.tikicdn.com/cache/280x280/ts/product/52/bc/60/7f4b9571a3119fb493a31cedb71edee9.jpg.webp' alt=''/>
                            <p className='mt-[10px] font-medium mx-[5px] h-[30px]  '>HIỂU VỀ TRÁI TIM</p>
                            <div className='w-2/3 flex justify-between mt-[10px] mx-[5px]'>
                                <span className='font-semibold '>12000đ</span>
                                <span className='font-semibold text-red-500'>135000đ</span>
                            </div>
                            <div className='flex justify-between mt-[10px] items-center'>
                                <i className=" ml-[5px] fa-regular fa-heart"></i>
                                <div className='mr-[20px]'>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                            </div>
                            </div>
                            <div className='mt-[8px] flex justify-between mb-[10px] mx-[5px]'>
                                
                                <p className='font-semibold'>NXB Giáo Dục</p>
                                <button className='flex items-center justify-center text-[#1772EE] w-[80px] h-[24px] rounded-md border-[1.5px] border-[#6FBCFF]'>freeship+</button>
                            </div>
                            <div className='bg-[#1772EE] text-white w-[100px] flex items-center justify-center absolute top-2 left-[-3px]   '>
                                <i className="fa-solid fa-check"></i>
                                <span className='ml-[5px]'>yêu thích</span>
                            </div>
                            <div className='bg-[#edf038] w-[50px] h-[50px] rounded-full flex items-center justify-center text-white font-semibold absolute top-[5px] right-2'>
                                    -20%
                            </div>
                        </div>
                        <div className='border border-slate-400 relative '>
                            <img className='w-full' src='https://salt.tikicdn.com/cache/280x280/ts/product/50/bd/eb/51937df1d205a27deb93bde1dda06f05.jpg.webp' alt=''/>
                            <p className='mt-[10px] font-medium mx-[5px] h-[30px]  '>TÂM LÝ HỌC HÀNH VI</p>
                            <div className='w-2/3 flex justify-between mt-[10px] mx-[5px]'>
                                <span className='font-semibold '>12000đ</span>
                                <span className='font-semibold text-red-500'>135000đ</span>
                            </div>
                            <div className='flex justify-between mt-[10px] items-center'>
                                <i className=" ml-[5px] fa-regular fa-heart"></i>
                                <div className='mr-[20px]'>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                            </div>
                            </div>
                            <div className='mt-[8px] flex justify-between mb-[10px] mx-[5px]'>
                                
                                <p className='font-semibold'>NXB Giáo Dục</p>
                                <button className='flex items-center justify-center text-[#1772EE] w-[80px] h-[24px] rounded-md border-[1.5px] border-[#6FBCFF]'>freeship+</button>
                            </div>
                            <div className='bg-[#1772EE] text-white w-[100px] flex items-center justify-center absolute top-2 left-[-3px]   '>
                                <i className="fa-solid fa-check"></i>
                                <span className='ml-[5px]'>yêu thích</span>
                            </div>
                            <div className='bg-[#edf038] w-[50px] h-[50px] rounded-full flex items-center justify-center text-white font-semibold absolute top-[5px] right-2'>
                                    -20%
                            </div>
                        </div>
                        <div className='border border-slate-400 relative '>
                            <img className='w-full' src='https://salt.tikicdn.com/cache/280x280/ts/product/2f/b5/4e/a8208e9019c8510e8a8eebe06f50299c.jpg.webp' alt=''/>
                            <p className='mt-[10px] font-medium mx-[5px] h-[30px]  '>MỘT THOÁNG RỰC RỠ Ỏ NHÂN GIAN</p>
                            <div className='w-2/3 flex justify-between mt-[10px] mx-[5px]'>
                                <span className='font-semibold '>12000đ</span>
                                <span className='font-semibold text-red-500'>135000đ</span>
                            </div>
                            <div className='flex justify-between mt-[10px] items-center'>
                                <i className=" ml-[5px] fa-regular fa-heart"></i>
                                <div className='mr-[20px]'>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                            </div>
                            </div>
                            <div className='mt-[8px] flex justify-between mb-[10px] mx-[5px]'>
                                
                                <p className='font-semibold'>NXB Giáo Dục</p>
                                <button className='flex items-center justify-center text-[#1772EE] w-[80px] h-[24px] rounded-md border-[1.5px] border-[#6FBCFF]'>freeship+</button>
                            </div>
                            <div className='bg-[#1772EE] text-white w-[100px] flex items-center justify-center absolute top-2 left-[-3px]   '>
                                <i className="fa-solid fa-check"></i>
                                <span className='ml-[5px]'>yêu thích</span>
                            </div>
                            <div className='bg-[#edf038] w-[50px] h-[50px] rounded-full flex items-center justify-center text-white font-semibold absolute top-[5px] right-2'>
                                    -20%
                            </div>
                        </div>

                    </div>
                </div>  
            </div>
            
           
        </div>
    );
};

export default Sachtiengviet;