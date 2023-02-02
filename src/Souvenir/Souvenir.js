import React, { useContext } from "react";
import { allContext } from "../context/AllContext";

const Souvenir = () => {
  const { dataSouvernir, addToCart } = useContext(allContext);
  return (
    <div className="mx-[50px] mt-[50px]  ">
      <div className="grid grid-cols-5 gap-4  ">
        <div>
          <h1 className="font-medium ">DANH MỤC SẢN PHẨM</h1>
          <ul className="bg-[#f1f5f9] rounded-lg">
            <li className="pl-[20px] rounded-lg  mt-[5px] hover:bg-[#5eead4]">
              Thú Nhồi Bông
            </li>
            <li className="pl-[20px]  mt-[5px] hover:bg-[#5eead4]">Bookmark</li>
            <li className="pl-[20px]  mt-[5px] hover:bg-[#5eead4]">
              Thiệp - Bưu ảnh
            </li>
            <li className="pl-[20px]  mt-[5px] hover:bg-[#5eead4]">
              Quà tặng trang sức
            </li>
            <li className="pl-[20px]  mt-[5px] hover:bg-[#5eead4]">
              Album - Khung Hình
            </li>
            <li className="pl-[20px]  mt-[5px] hover:bg-[#5eead4]">
              Mô hình trang trí
            </li>
            <li className="pl-[20px]  mt-[5px] hover:bg-[#5eead4]">
              Sticker - Decal trang trí
            </li>
            <li className="pl-[20px]  mt-[5px] hover:bg-[#5eead4]">Ly - Cốc</li>
            <li className="pl-[20px]  mt-[5px] hover:bg-[#5eead4]">
              Kẹp Ảnh Gỗ
            </li>
            <li className="pl-[20px]  mt-[5px] hover:bg-[#5eead4]">
              Hộp quà - Túi quà
            </li>
            <li className="pl-[20px]  mt-[5px] hover:bg-[#5eead4]">
              Móc Khóa - Phụ Kiện Trang Trí
            </li>
            <li className="pl-[20px]  mt-[5px] hover:bg-[#5eead4]">
              Quà tặng trang trí khác
            </li>
          </ul>
        </div>

        <div className="col-span-4">
          <div className="bg-[#f1f5f9] flex justify-around h-[50px] items-center font-medium">
            <button className="bg-[#5eead4] h-[40px] w-[150px] rounded-lg">
              Sắp xếp theo
            </button>
            <button className="bg-[#5eead4] h-[40px] w-[150px] rounded-lg">
              Phổ biến
            </button>
            <button className="bg-[#5eead4] h-[40px] w-[150px] rounded-lg">
              Mới nhất
            </button>
            <button className="bg-[#5eead4] h-[40px] w-[150px] rounded-lg">
              Bán chạy
            </button>
            <button className="bg-[#5eead4] h-[40px] w-[150px] rounded-lg">
              Giá: Thấp đến Cao
            </button>
            <button>1/14</button>
            <div className="flex ">
              <i className=" mr-[5px] rounded-lg cursor-pointer  w-[30px] h-[30px] bg-[#5eead4] flex items-center justify-center  fa-solid fa-chevron-left"></i>
              <i className=" w-[30px] rounded-lg cursor-pointer h-[30px] bg-[#5eead4] flex items-center justify-center  fa-solid fa-chevron-right"></i>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mt-[20px] mb-[100px] ">
            {dataSouvernir.length > 0 &&
              dataSouvernir.map((item) => (
                <div className="border border-slate-400 relative ">
                  <img className="w-full" src={item.url} alt="" />
                  <p className="mt-[10px] font-medium mx-[5px] h-[50px] leading-5 ">
                    {item.name}
                  </p>
                  <div className="w-2/3 flex justify-between mt-[10px] mx-[5px]">
                    <span className="font-semibold ">12000đ</span>
                    <span className="font-semibold text-red-500">135000đ</span>
                  </div>
                  <div className="flex justify-between mt-[10px] items-center">
                    <i className=" ml-[5px] fa-regular fa-heart"></i>
                    <div className="mr-[20px]">
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                    </div>
                  </div>
                  <div className="mt-[8px] flex justify-between mb-[10px] mx-[5px]">
                    <p className="font-semibold">NXB Giáo Dục</p>
                    <button className="flex items-center justify-center text-[#1772EE] w-[80px] h-[24px] rounded-md border-[1.5px] border-[#6FBCFF]">
                      freeship+
                    </button>
                  </div>
                  <div
                    onClick={() => addToCart(item)}
                    className=" flex items-center justify-center font-semibold mx-[5px] border-[1px] border-black mb-[10px] cursor-pointer hover:bg-red-500 group "
                  >
                    <p className="text-red-500 group-hover:text-white ">
                      Thêm Vào Giỏ Hàng
                    </p>
                  </div>
                  <div className="bg-[#1772EE] text-white w-[100px] flex items-center justify-center absolute top-2 left-[-3px]   ">
                    <i className="fa-solid fa-check"></i>
                    <span className="ml-[5px]">yêu thích</span>
                  </div>
                  <div className="bg-[#edf038] w-[50px] h-[50px] rounded-full flex items-center justify-center text-white font-semibold absolute top-[5px] right-2">
                    -20%
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Souvenir;
