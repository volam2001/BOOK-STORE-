import React from 'react';

const Tool = () => {
    return (
        <div className='mx-[50px] mt-[50px]  '>
        <div className='grid grid-cols-5 gap-4  '>
            <div>
                <h1 className='font-medium '>DANH MỤC SẢN PHẨM</h1>
                <ul className='bg-[#f1f5f9] rounded-lg' >
                    <li className='pl-[20px] rounded-lg  mt-[5px] hover:bg-[#5eead4]' >Dụng Cụ Văn Phòng</li>
                    <li className='pl-[20px]  mt-[5px] hover:bg-[#5eead4]'>Bút - Viết các loại</li>
                    <li className='pl-[20px]  mt-[5px] hover:bg-[#5eead4]'>Dụng Cụ Học Sinh</li>
                    <li className='pl-[20px]  mt-[5px] hover:bg-[#5eead4]'>Flashcards</li>
                    <li className='pl-[20px]  mt-[5px] hover:bg-[#5eead4]'>Sổ Tay Các Loại</li>
                    <li className='pl-[20px]  mt-[5px] hover:bg-[#5eead4]'>Tập vở các loại</li>
                    <li className='pl-[20px]  mt-[5px] hover:bg-[#5eead4]'>Văn Hóa Phẩm</li>
                    <li className='pl-[20px]  mt-[5px] hover:bg-[#5eead4]'>Thiết Bị Giáo Dục Trường Học</li>
                    <li className='pl-[20px]  mt-[5px] hover:bg-[#5eead4]'>Máy Tính Điện Tử</li>
                    <li className='pl-[20px]  mt-[5px] hover:bg-[#5eead4]'>Lịch</li>
                    <li className='pl-[20px]  mt-[5px] hover:bg-[#5eead4]'>Bút Kỹ Thuật</li>
                    <li className='pl-[20px]  mt-[5px] hover:bg-[#5eead4]'>Sản phẩm về giấy</li>
                    <li className='pl-[20px]  mt-[5px] hover:bg-[#5eead4]'>Thiết bị văn phòng</li>
                   

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
                        <img className='w-full' src='https://salt.tikicdn.com/cache/750x750/ts/product/b2/3c/1b/f006a1bdde68c066035599644c68f823.png.webp' alt=''/>
                        <p className='mt-[10px] font-medium mx-[5px] h-[50px] leading-5 '> Máy Tính Khoa Học Deli CD580VN </p>
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
                        <img className='w-full' src='https://salt.tikicdn.com/cache/750x750/ts/product/77/c4/09/96c0b32b5a7b3cc52c1e3db9ce4257a0.jpg.webp  ' alt=''/>
                        <p className='mt-[10px] font-medium mx-[5px] h-[50px] leading-5  '>Bảng Viết Điện Tử 3d Bảng Vẽ Đa Sắc Dành Cho Bé</p>
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
                        <img className='w-full' src='https://salt.tikicdn.com/cache/750x750/ts/product/2f/9e/6c/3370cfe4c83146c06c218495081ff61b.jpg.webp' alt=''/>
                        <p className='mt-[10px] font-medium mx-[5px] h-[50px] leading-5  '>Máy Tính CASIO FX580VN X</p>
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
                        <img className='w-full' src='https://salt.tikicdn.com/cache/750x750/ts/product/a8/29/5d/f800890da34e1a83c31f89076b893276.jpg.webp' alt=''/>
                        <p className='mt-[10px] font-medium mx-[5px] h-[50px] leading-5  '>Bút lông 20 màu Pastel Washable Fiber Pen Thiên Long Colokit SWM</p>
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
                        <img className='w-full' src='https://salt.tikicdn.com/cache/750x750/ts/product/77/b2/0b/d9c909e59f8c73b6eb2486495b862e64.jpg.webp' alt=''/>
                        <p className='mt-[10px] font-medium mx-[5px] h-[50px] leading-5  '>Gôm Tẩy 2B Deli, 40×22×12Mm, Đen - 1 Viên - E3043</p>
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
                        <img className='w-full' src='https://salt.tikicdn.com/cache/750x750/ts/product/93/ed/d5/949d9e104e8dedcb7747f99fd61af718.jpg.webp' alt=''/>
                        <p className='mt-[10px] font-medium mx-[5px] h-[50px] leading-5  '>Bút gel 0.5mm Deli nhiều màu lựa chọn - Bút bi nước - 1 chiếc - Mực đỏ / Xanh / Đen - A116</p>
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
                        <img className='w-full' src='https://salt.tikicdn.com/cache/750x750/ts/product/8e/4d/bc/80c68830ce1019c6116a35450a53488b.jpg.webp' alt=''/>
                        <p className='mt-[10px] font-medium mx-[5px] h-[50px] leading-5  '>Keo Siêu Dính Đa Năng Mạnh Gấp 80 Keo 502 Dán Sắt, Dán Đá, Dán Nhựa, Dán Gỗ</p>
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
                        <img className='w-full' src='https://salt.tikicdn.com/cache/750x750/ts/product/92/c6/32/a7f214dec8993b36e68d15dcf446c66b.jpg.webp' alt=''/>
                        <p className='mt-[10px] font-medium mx-[5px] h-[50px] leading-5  '>Sổ tay ghi chép / sổ lò xo ghi chép A5 - B5 - A4 160 trang – giấy kẻ ngang – giấy ô vuông</p>
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

export default Tool;