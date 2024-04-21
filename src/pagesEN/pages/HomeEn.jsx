import { setColor } from "../../store/state/headerColor.slice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const HomeEn = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setColor("bg-[#F1F6F3] dark:bg-[#091922]"));
    }, []);

    return (<div className=" grid  md:grid-cols-2 md:justify-items-center dark:text-white w-full min-h-[89vh] ">
        <div className=" flex justify-center items-center px-3 md:px-5">
            <div className="w-full max-w-[400px] xl:max-w-[500px] md:min-h-[20vh] space-y-3 animate-fade-right animate-once animate-duration-1000">
                <h2 className=" text-lg font-bold text-center md:text-2xl xl:text-3xl  "><span className=" text-[#78AB92] dark:text-[#4BDB9E]">Hi</span > I am Jorge</h2>
                <p className=" font-medium md:text-lg xl:text-2xl">I am a web developer, passionate about technology and programming.</p>
                <div className=" flex items-center space-x-3">
                    <a href="/CV.pdf" download className="border-solid bg-[#78AB92] text-slate-200 hover:bg-[#4BDB9E]  px-2 py-1 rounded-lg font-medium text-sm xl:text-lg">Download cv</a>
                    <a href="https://www.linkedin.com/in/jorge-luis-sanchez-mendoza-26a0a1245/" target="_blank" rel="noopener noreferrer"><img src="/icons8-linkedin.svg" alt="iconoLinke" className=" w-7 h-7 xl:w-9 xl:h-9" /></a>
                    <a href="https://github.com/jorgeula300" target="_blank" rel="noopener noreferrer"> <img src="/icons8-github.svg" alt="iconoGit" className=" fill-[#78AB92] w-7 h-7 xl:w-9 xl:h-9" /></a>

                </div>
            </div>
        </div>
        <div className="flex justify-center items-center px-3 md:px-5 ">
            <div className=" rounded-full  w-[260px] h-[260px] md:w-[300px] md:h-[300px] xl:w-[400px] xl:h-[400px] flex justify-center items-center  border-2 border-slate-400  bg-gradient-to-t from-[#ffffffa5] to-[#4BDB9E] overflow-hidden animate-fade-down animate-once animate-duration-1000">
                <figure className="  w-[240px] h-[240px] md:w-[270px] md:h-[270px] xl:h-[370px] xl:w-[370px] flex justify-center items-center bg-slate-200  border-2 border-slate-400  rounded-full overflow-hidden">
                    <img className="w-[240px] md:w-[210px] xl:w-[350px]" src="/JS-LOGO.png" alt="FOTOJ.png" />

                </figure>
            </div>

        </div>
    </div>);
}

export default HomeEn;