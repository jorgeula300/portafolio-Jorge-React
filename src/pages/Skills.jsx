import { setColor } from "../store/state/headerColor.slice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import ImgSkills from "../components/skills/ImgSkills";


const Skills = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setColor("bg-[#F1F6F3] dark:bg-[#091922]"));
    }, []);
    return (
        <div className=' w-full py-3 flex flex-col justify-center items-center dark:text-white space-y-5 space-y-5 animate-fade-up animate-once animate-duration-1000'>
            <h2 className=' text-xl sm:text-2xl md:text-3xl font-bold'>MIS <span className='text-[#78AB92] dark:text-[#4BDB9E]'>HABILIDADES</span></h2>
            <ImgSkills />


        </div>
    )
}

export default Skills