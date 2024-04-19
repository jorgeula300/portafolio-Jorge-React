import React from 'react'

const ImgAbout = () => {
    return (
        <div className=' flex justify-center items-center w-full px-2'>

            <div className=' w-full max-w-[500px] h-full p-2 max-h-[300px] bg-white border-2 border-slate-400   rounded-full flex justify-center items-center bg-gradient-to-t from-[#ffffffa5] to-[#4BDB9E] overflow-hidden '>
                <div className=' w-full max-w-[490px] h-full max-h-[290px] border-2 border-slate-400  rounded-full flex justify-center items-center overflow-hidden bg-slate-200 '>
                    <img className=' w-full max-w-[230px] h-full object-cover' src="/JS-LOGO.png" alt="FotoJ2" />
                </div>
            </div>
        </div>
    )
}

export default ImgAbout