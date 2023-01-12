import React from 'react';

const Login = () => {
    return (
        <div>
           <form className="modal-content animate w-[525px] m-auto mt-[50px] mb-[100px] " action="/action_page.php" method="post">
                <div className='bg-[#e2e8f0] h-[600px]'>
                    
                   
                    <div className='flex items-center justify-center'>
                        <img className='h-[210px] w-[210px] rounded-full mt-[20px]  ' src='https://www.w3schools.com/howto/img_avatar2.png ' alt=''/>
                    </div>
                    
                    <div className="mx-[20px]">
                     

                        <label className=''  htmlFor="uname"><b>Username</b></label><br></br>
                        
                        <input className='h-[40px] pl-[10px] bg-[#e2e8f0] border-[1px] border-neutral-300 mt-[10px]	outline-none w-full mb-[10px]' type="text" placeholder="Enter Username" name="uname" required /><br></br>
                        <label className=' ' htmlFor="psw"><b>Password</b></label><br></br>
                        <input className=' bg-[#e2e8f0] pl-[10px]  border-[1px] border-neutral-300 h-[40px] mt-[10px] outline-none w-full mb-[10px]' type="password" placeholder="Enter Password" name="psw" required /><br></br>
                        <button className='bg-[#04AA6D] text-center text-white w-full h-[43px] mt-[16px]' type="submit">Login</button><br></br>
                        <label>
                            <input className='mt-[12px] ' type="checkbox" defaultChecked="checked" name="remember" /> Remember me
                        </label>
                    </div>
                    <div className="mt-[44px] flex justify-between mx-[20px]">
                            <button className='w-[78px] text-[16px] text-white h-[32px] bg-red-500'>Cancel</button>
                            <span className="text-[16px]">Forgot <span className='text-blue-900'>password?</span> </span>
                    </div>
                </div>
         </form>
        </div>
    );
};

export default Login;