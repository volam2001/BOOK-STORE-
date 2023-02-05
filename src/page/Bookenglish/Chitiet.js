import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo3.png";
const Chitiet = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#F5F5FA]">
      {/* Phần Header */}
      <div className="mx-[50px] flex justify-around items-center">
        <img className="h-[70px] " src={logo} alt="" />
        <div className="w-1/2 bg-white h-[40px] flex justify-between items-center rounded-sm  ">
          <input
            className="h-full w-5/6 outline-none	pl-[10px] rounded-sm"
            type="text"
            placeholder="Nhập vào tìm kiếm"
          />
          <div className="w-[60px] h-[33px] bg-[#FB6445] mr-[3px] flex items-center justify-center rounded-sm">
            <i class=" text-white fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <Link onClick={navigate("/")}>Trang chủ</Link>
      </div>
      <div className=" grid grid-cols-5 mx-[20px]  gap-[20px] ">
        {/* Phan hinh anh */}
        <div className="col-span-2 shadow-xl my-[50px]  ">
          <img
            className="w-full h-[450px] "
            src="https://salt.tikicdn.com/cache/280x280/ts/product/3e/b8/7b/d4ac28e5e26e50815b96547fd4f868b6.jpg.webp"
            alt=""
          />
        </div>
        {/* Phan noi dung */}
        <div className=" col-span-3 my-[50px]">
          <div className="grid grid-cols-2">
            {/* content phai */}
            <div>
              <p>
                Tac Gia:
                <span className="text-blue-500 ml-[3px]">Raymond Murphy</span>
              </p>
              <span className="text-[20px]">
                English Grammar in Use Book w Ans
              </span>
              <div className="mt-[10px]">
                {Array(5)
                  .fill()
                  .map((item) => (
                    <i className="fa-solid fa-star text-yellow-500"></i>
                  ))}
                <span className="mx-[10px] opacity-60">(Xem 291 đánh giá)</span>
                <span className=" opacity-50 ">Đã bán 5000+</span>
              </div>
              <div className="mt-[40px] border-[1px] border-slate-300	 rounded-md p-2 ">
                <span className="font-semibold text-red-600 text-[30px] ">
                  169.100 đ
                </span>
                <br></br>
                <div className="flex items-center">
                  <button className="border-[0.5px] border-black p-1 bg-[#C4F0FE] text-[#8B2DA1] mt-[5px] rounded-md">
                    Thưởng 0.85 ASA (186đ)
                  </button>
                  <button className="w-[45px] h-[20px] bg-[#FF424A] flex justify-center items-center ml-[15px] rounded-md text-white  ">
                    <span>Mới</span>
                  </button>
                </div>
              </div>
              <div className="mt-[40px] border-[1px] border-slate-300	p-2 rounded-md ">
                <span className="font-semibold">1 Mã Giảm Giá</span>
                <br></br>
                <button className=" border-[1px] border-[#0D5CB6] w-[82px] h-[26px] rounded-md text-[#0D5CB6] mt-[10px] ">
                  <span>Giảm 10k</span>
                </button>
                <i className="fa-solid fa-chevron-right ml-[20px] text-blue-600"></i>
              </div>
              <p className="mt-[38px]">
                Giao đến{" "}
                <u className="font-semibold">Q. 1, P. Bến Nghé, Hồ Chí Minh</u>
                <span className="text-[#0B74E5] font-semibold cursor-pointer ">
                  - Đổi địa chỉ
                </span>
              </p>
              <div className="mt-[15px] border-[1px] border-slate-300	p-2 rounded-md  ">
                <p>
                  <span className="text-[#FFB700] font-semibold mr-[5px]">
                    FAST
                  </span>
                  <span className="text-[#00AB7C] font-semibold">
                    CN ngày 5/2
                  </span>
                </p>
                <span>Vận chuyển: 14.000đ</span>
                <br></br>
                <button className="text-[#6836B6] border-1 border-black">
                  Freeship 100% với 66,68 ASA
                </button>
              </div>
            </div>
            {/* content trai */}
            <div className="mt-[150px] ml-[100px] w-[250px]">
              <div className="flex ">
                <div className="w-[46px] h-[46px]  ">
                  <img
                    className="w-full rounded-full"
                    src="https://vcdn.tikicdn.com/cache/w100/ts/seller/ca/97/4e/911902260246ad78a6a6a7e2ff220eb9.jpg.webp"
                    alt=""
                  />
                </div>
                <div className="ml-[10px]">
                  <span className="font-semibold">Nhà sách Fahasa</span>
                  <br></br>
                  <button className="w-[66px] h-[16px] bg-[#1876DC] flex justify-center items-center">
                    <span className="text-[12px] text-white">OFFICIAL</span>
                  </button>
                </div>
              </div>
              <div className="flex justify-between mt-[10px]">
                <div className="text-center ">
                  <span className="font-semibold">
                    4.8 / 5
                    <span>
                      <i className="fa-solid fa-star text-yellow-500 ml-[5px]"></i>
                    </span>
                  </span>
                  <br></br>
                  <span className=" opacity-50 ">381.7k+</span>
                </div>

                <div className="text-center">
                  <span className=" font-semibold  ">124.4k+</span>
                  <br></br>
                  <span className=" opacity-50 ">Theo dõi</span>
                </div>

                <div className="text-center ">
                  <span className=" font-semibold ">90%</span>
                  <br></br>
                  <span className="opacity-50">Phản hồi chat</span>
                </div>
              </div>

              <div className="mt-[20px]">
                <button className="w-[105px] h-[35px] text-[#0D5CB6]  border-[1px] border-[#1964BA] mr-[15px] rounded-md ">
                  <i class="fa-solid fa-house"></i>
                  <span className="ml-[5px]">Xem Shop</span>
                </button>
                <button className="w-[105px] h-[35px] text-[#0D5CB6]  border-[1px] border-[#1964BA] mr-[15px] rounded-md">
                  <i class="fa-solid fa-plus"></i>
                  <span className="ml-[5px]">Theo Dõi</span>
                </button>
              </div>
              <div className="flex mt-[30px]">
                <div className="text-center">
                  <i class="fa-regular fa-square-check text-blue-500 text-[30px]"></i>
                  <br></br>
                  <span className="text-[13px]">
                    Hoàn tiền 111% nếu hàng giả
                  </span>
                </div>

                <div className="text-center">
                  <i class="fa-regular fa-thumbs-up text-blue-500 text-[30px]"></i>
                  <br></br>
                  <span className="text-[13px]">Mở hộp kiểm tra nhận hàng</span>
                </div>

                <div className="text-center">
                  <i class="fa-solid fa-rotate-left text-blue-500 text-[30px]"></i>
                  <br></br>
                  <span className="text-[13px]">
                    Đổi trả trong 30 ngày nếu sp lỗi
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chitiet;
