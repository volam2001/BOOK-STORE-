import React from 'react';

const Bookenglish = () => {
    return (
        <div className='mx-[50px] mt-[50px]  '>
            <div className='grid grid-cols-5 gap-4  '>
                <div>
                    <h1 className='font-medium '>DANH MỤC SẢN PHẨM</h1>
                    <ul className='bg-[#f1f5f9] rounded-lg' >
                        <li className=' cursor-pointer  pl-[20px] rounded-lg  mt-[5px] hover:bg-[#5eead4]' >Art & Photography</li>
                        <li className=' cursor-pointer pl-[20px]  mt-[5px] hover:bg-[#5eead4]'>Graphic Design</li>
                        <li className=' cursor-pointer pl-[20px]  mt-[5px] hover:bg-[#5eead4]'>Religion, Culture</li>
                        <li className=' cursor-pointer pl-[20px]  mt-[5px] hover:bg-[#5eead4]'>Photography</li>
                        <li className=' cursor-pointer pl-[20px]  mt-[5px] hover:bg-[#5eead4]'>Decorative Arts & Design</li>
                        <li className=' cursor-pointer pl-[20px]  mt-[5px] hover:bg-[#5eead4]'>Other Arts</li>
                        <li className=' cursor-pointer pl-[20px]  mt-[5px] hover:bg-[#5eead4]'>Drawing & Painting</li>
                        <li className=' cursor-pointer pl-[20px]  mt-[5px] hover:bg-[#5eead4]'>Fashion</li>
                        <li className=' cursor-pointer pl-[20px]  mt-[5px] hover:bg-[#5eead4]'>History - Criticism</li>
                        <li className=' cursor-pointer pl-[20px]  mt-[5px] hover:bg-[#5eead4]'>Sculpture</li>
                        <li className=' cursor-pointer pl-[20px]  mt-[5px] hover:bg-[#5eead4]'>Music</li>
                        <li className=' cursor-pointer pl-[20px]  mt-[5px] hover:bg-[#5eead4]'>Performing Arts</li>
                        <li className=' cursor-pointer pl-[20px]  mt-[5px] hover:bg-[#5eead4]'>Collections, Catalogs & Exhibitions</li>
                        

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
                            <img className='w-full' src='https://salt.tikicdn.com/cache/280x280/ts/product/1a/0a/45/50a7f1175511088db0654ddf1ba3f671.jpg.webp' alt=''/>
                            <p className='mt-[10px] font-medium mx-[5px] h-[50px] leading-5 '>Sách Highest Mountain, Deepest Ocean</p>
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
                            <img className='w-full' src='https://salt.tikicdn.com/cache/280x280/ts/product/3e/b8/7b/d4ac28e5e26e50815b96547fd4f868b6.jpg.webp   ' alt=''/>
                            <p className='mt-[10px] font-medium mx-[5px] h-[50px] leading-5  '>English Grammar in Use Book w Ans</p>
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
                            <img className='w-full' src='https://salt.tikicdn.com/cache/750x750/ts/product/ea/dd/54/3e8ac346542897de2361e7a30c1f5e62.jpg.webp' alt=''/>
                            <p className='mt-[10px] font-medium mx-[5px] h-[50px] leading-5  '>Oxford Advanced Learner's Dictionary : Paperback - 10th Edition</p>
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
                            <img className='w-full' src='https://salt.tikicdn.com/cache/750x750/ts/product/c3/0e/11/a78b9e8063d678d0c09175dfae22381b.jpg.webp' alt=''/>
                            <p className='mt-[10px] font-medium mx-[5px] h-[50px] leading-5  '>American Jetstream Pre-Intermediate B Student's book & Workbook
</p>
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
                            <img className='w-full' src='https://salt.tikicdn.com/cache/750x750/ts/product/a9/3b/01/93d00366cce6e2d453e7bd434e8af0cf.jpg.webp' alt=''/>
                            <p className='mt-[10px] font-medium mx-[5px] h-[50px] leading-5  '>Complete IELTS B1 Student's Book with answer with CD-ROM</p>
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
                            <img className='w-full' src='https://salt.tikicdn.com/cache/750x750/ts/product/37/d2/c5/0b55dc9fd0968ba965b4e299c4463c0c.jpg.webp' alt=''/>
                            <p className='mt-[10px] font-medium mx-[5px] h-[50px] leading-5  '>Vocabulary Reference and Practice</p>
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
                            <img className='w-full' src='https://salt.tikicdn.com/cache/750x750/ts/product/44/f9/2b/c7bcecae77c63d2fe5a15368ff77f40e.jpg.webp' alt=''/>
                            <p className='mt-[10px] font-medium mx-[5px] h-[50px] leading-5  '>Le DELF Scolaire Et Junior 100% Réussite A2 - Livre + CD</p>
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
                            <img className='w-full' src='https://salt.tikicdn.com/cache/750x750/ts/product/66/57/a8/96430f8618345cddb47f6ff0b88c1829.jpg.webp' alt=''/>
                            <p className='mt-[10px] font-medium mx-[5px] h-[50px] leading-5  '>Tom Ford Book
</p>
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

export default Bookenglish;