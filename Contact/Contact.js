import React from "react";

const Contact = () =>{
    return(
        <React.Fragment>
            <section className="contact-us w-10/12 bg-slate-300 mx-auto my-4">
            <div className="subheadline flex justify-center items-center p-5">
                    <div class="w-[300px] h-px mx-4 bg-black"></div>
                    <div class="uppercase tracking-widest text-orange-500 font-bold text-3xl text-center">
                        Liên hệ
                    </div>
                    <div class="w-[300px] h-px mx-4 bg-black"></div>
            </div>
            <div className=" m-8 text-left pb-5">
                <strong className=" text-lg">Nhóm 11 - Lớp Công nghệ Web và Ứng dụng SE347.N11</strong> <br/>
                <strong className=" text-lg">Trường đại học Công nghệ thông tin - Đại học Quốc gia TP. Hồ Chí Minh</strong>
                <div className=" mt-4 font-bold">Thành viên nhóm:</div>
                <ul className="ml-4 mb-4">
                    <li>Nguyễn Duy Khang - Nhóm trưởng</li>
                    <li>Nguyễn Trung Thảo</li>
                    <li>Võ Tá Lâm</li>
                    <li>Lê Văn Nhân</li>
                </ul>
                <a href="https://github.com/thaoht194/SE347-BookSellingWebsite" className="text-blue-500">Github nhóm</a>
            </div>
            </section>
        </React.Fragment>
    )
}

export default Contact;