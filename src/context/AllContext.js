import { createContext, useState } from "react";
const allContext = createContext();
const fakeDataEnglish = [
  {
    id: 1,
    url: "https://salt.tikicdn.com/cache/280x280/ts/product/3e/b8/7b/d4ac28e5e26e50815b96547fd4f868b6.jpg.webp",
    name: "English Grammar in Use Book w Ans",
  },
  {
    id: 2,
    url: "https://salt.tikicdn.com/cache/750x750/ts/product/ea/dd/54/3e8ac346542897de2361e7a30c1f5e62.jpg.webp",
    name: "Oxford Advanced Learner's Dictionary : Paperback - 10th Edition",
  },
  {
    id: 3,
    url: "https://salt.tikicdn.com/cache/750x750/ts/product/c3/0e/11/a78b9e8063d678d0c09175dfae22381b.jpg.webp",
    name: "American Jetstream Pre-Intermediate B Student's book & Workbook",
  },
  {
    id: 4,
    url: "https://salt.tikicdn.com/cache/750x750/ts/product/a9/3b/01/93d00366cce6e2d453e7bd434e8af0cf.jpg.webp",
    name: "Complete IELTS B1 Student's Book with answer with CD-ROM",
  },
  {
    id: 5,
    url: "https://salt.tikicdn.com/cache/750x750/ts/product/37/d2/c5/0b55dc9fd0968ba965b4e299c4463c0c.jpg.webp",
    name: "Vocabulary Reference and Practice",
  },
  {
    id: 6,
    url: "https://salt.tikicdn.com/cache/750x750/ts/product/44/f9/2b/c7bcecae77c63d2fe5a15368ff77f40e.jpg.webp",
    name: " Tom Ford Book",
  },
  {
    id: 7,
    url: "https://salt.tikicdn.com/cache/750x750/ts/product/66/57/a8/96430f8618345cddb47f6ff0b88c1829.jpg.webp",
    name: " Tom Ford Book",
  },
];
const fakeDataTiegViet = [
  {
    id: 8,
    url: "https://salt.tikicdn.com/cache/280x280/ts/product/ef/6c/b1/e14d862b8a24c546dce69c71582089de.jpg.webp",
    name: "NẾU BIẾT TRĂM NĂM LÀ HỮU HẠN",
  },
  {
    id: 9,
    url: "https://salt.tikicdn.com/cache/280x280/ts/product/5e/18/24/2a6154ba08df6ce6161c13f4303fa19e.jpg.webp",
    name: "CÂY CAM NGỌT CỦA TÔI",
  },
  {
    id: 10,
    url: "https://salt.tikicdn.com/cache/280x280/ts/product/65/78/e7/2eacb9f887fc28779b15cf9ab6d0bf79.jpg.webp",
    name: "HÀNH TINH CỦA MỘT KẺ NGHĨ NHIỀU",
  },
  {
    id: 11,
    url: "https://salt.tikicdn.com/cache/280x280/ts/product/98/1d/ef/9f354dda85824878fbb43ef2af4dd233.png.webp",
    name: "CÀNG BÌNH TĨNH CÀNH HẠNH PHÚC",
  },
  {
    id: 12,
    url: "https://salt.tikicdn.com/cache/280x280/ts/product/8d/96/9e/c0c1f23db756d50b1944dff9c3988753.jpg.webp",
    name: "NHỮNG TÙ NHÂN CỦA ĐỊA LÝ",
  },
  {
    id: 13,
    url: "https://salt.tikicdn.com/cache/280x280/ts/product/52/bc/60/7f4b9571a3119fb493a31cedb71edee9.jpg.webp",
    name: " HIỂU VỀ TRÁI TIM",
  },
  {
    id: 14,
    url: "https://salt.tikicdn.com/cache/280x280/ts/product/50/bd/eb/51937df1d205a27deb93bde1dda06f05.jpg.webp",
    name: " TÂM LÝ HỌC HÀNH VI",
  },
];
const fakeDataSouvernir = [
  {
    id: 15,
    url: "https://salt.tikicdn.com/cache/750x750/ts/product/35/f9/35/836066be4815b053d2a1ca620c60a405.jpg.webp ",
    name: "Gấu Bông Thú Nhồi Bông Mèo Hoàng Thượng Quạo Quọ Mập Ú",
  },
  {
    id: 16,
    url: "https://salt.tikicdn.com/cache/750x750/ts/product/45/79/ee/092c84e559c6942309a0dc522f163990.jpg.webp",
    name: "Set quà sinh nhật tặng",
  },
  {
    id: 17,
    url: "https://salt.tikicdn.com/cache/750x750/ts/product/f7/f1/19/0034f0dc627c427e3842b2089c8d72d5.jpg.webp",
    name: "Gấu bông lạc đà Alpaca – Nhiều mầu - Size 28 cm",
  },
  {
    id: 18,
    url: "https://salt.tikicdn.com/cache/750x750/ts/product/4b/d5/ba/0ee783bdc66349ecb9572f68b6c7aa94.jpg.webp",
    name: "Bộ Sưu Tập Mô Hình 6 Nhân Vật Thám Tử Lừng Danh Conan Chibi",
  },
  {
    id: 19,
    url: "https://salt.tikicdn.com/cache/750x750/ts/product/fb/cb/fe/0bf26e4a0c77ebcfca5161ba0026c376.jpg.webp",
    name: "Gấu Bông Gối Ôm Hình Hải Cẩu Dễ Thương Vải 3D Siêu Mịn 50cm Quà Tặng Độc Lạ",
  },
  {
    id: 20,
    url: "https://salt.tikicdn.com/cache/750x750/ts/product/a0/4b/15/58d633e7a3c73a6a4cd2eb9a3acf7f1f.png.webp",
    name: " Combo 4 Móc Khóa Mèo Con Ngồi Hộp Đáng Yêu",
  },
  {
    id: 21,
    url: "https://salt.tikicdn.com/cache/750x750/ts/product/5c/de/b4/cbece7e77bf36ca67574da5b6be01d15.jpg.webp",
    name: " Hộp Quà Tặng Sáp Thơm Hoa Hồng Hình Chữ Nhậ",
  },
];
const fakeDataTool = [
  {
    id: 22,
    url: "https://salt.tikicdn.com/cache/750x750/ts/product/b2/3c/1b/f006a1bdde68c066035599644c68f823.png.webp ",
    name: " Máy Tính Khoa Học Deli CD580VN ",
  },
  {
    id: 23,
    url: "https://salt.tikicdn.com/cache/750x750/ts/product/77/c4/09/96c0b32b5a7b3cc52c1e3db9ce4257a0.jpg.webp ",
    name: "Bảng Viết Điện Tử 3d Bảng Vẽ Đa Sắc Dành Cho Bé",
  },
  {
    id: 24,
    url: "https://salt.tikicdn.com/cache/750x750/ts/product/2f/9e/6c/3370cfe4c83146c06c218495081ff61b.jpg.webp",
    name: "Máy Tính CASIO FX580VN X",
  },
  {
    id: 25,
    url: "https://salt.tikicdn.com/cache/750x750/ts/product/a8/29/5d/f800890da34e1a83c31f89076b893276.jpg.webp",
    name: "Bút lông 20 màu Pastel Washable Fiber Pen Thiên Long Colokit SWM",
  },
  {
    id: 26,
    url: "https://salt.tikicdn.com/cache/750x750/ts/product/77/b2/0b/d9c909e59f8c73b6eb2486495b862e64.jpg.webp",
    name: "Gôm Tẩy 2B Deli, 40×22×12Mm, Đen - 1 Viên - E3043",
  },
  {
    id: 27,
    url: "https://salt.tikicdn.com/cache/750x750/ts/product/93/ed/d5/949d9e104e8dedcb7747f99fd61af718.jpg.webp",
    name: " Bút gel 0.5mm Deli nhiều màu lựa chọn - Bút bi nước - 1 chiếc - Mực đỏ / Xanh / Đen - A116",
  },
  {
    id: 28,
    url: "https://salt.tikicdn.com/cache/750x750/ts/product/8e/4d/bc/80c68830ce1019c6116a35450a53488b.jpg.webp",
    name: " Keo Siêu Dính Đa Năng Mạnh Gấp 80 Keo 502 Dán Sắt, Dán Đá, Dán Nhựa, Dán Gỗ",
  },
];

function AllProvider(props) {
  const [dataEnglish, setDataEnglish] = useState(fakeDataEnglish);
  const [dataTiengviet, setDataTiengviet] = useState(fakeDataTiegViet);
  const [dataSouvernir, setDataSouvernir] = useState(fakeDataSouvernir);
  const [dataTool, setDataTool] = useState(fakeDataTool);
  const [cartItem, setCartItem] = useState([]);
  function addToCart(item) {
    setCartItem((pre) => {
      const isExisted = pre.some((itemm) => itemm.id === item.id);
      if (isExisted) return [...pre];
      return [...pre, item];
    });
  }
  function removeItem(id) {
    const arrayItems = cartItem.filter((item) => item.id !== id);
    setCartItem(arrayItems);
  }
  const value = {
    dataEnglish,
    setDataEnglish,
    cartItem,
    setCartItem,
    addToCart,
    removeItem,
    dataTiengviet,
    setDataTiengviet,
    dataSouvernir,
    setDataSouvernir,
    dataTool,
    setDataTool,
  };
  return <allContext.Provider value={value} {...props}></allContext.Provider>;
}

export { allContext, AllProvider };
