import ImgAbout from '../components/aboutPage/ImgAbout'
import Article from '../components/aboutPage/Article'
import { setColor } from "../store/state/headerColor.slice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const AboutPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setColor("bg-[#F1F6F3] dark:bg-[#06121A]"));
    }, []);
    return (
        <div className=' dark:text-white w-full h-[92.8vh] grid md:grid-cols-2 justify-items-center '>
            <ImgAbout />
            <Article />
        </div>
    )
}

export default AboutPage