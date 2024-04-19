import { setColor } from "../../store/state/headerColor.slice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import ImgAboutEn from '../../components/aboutPage/ImgAboutEn';
import ArticleEn from '../../components/aboutPage/ArticleEn';

const AboutPageEn = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setColor("bg-[#F1F6F3] dark:bg-[#06121A]"));
    }, []);
    return (
        <div className=' dark:text-white w-full h-[92.8vh] grid md:grid-cols-2 justify-items-center animate-fade-up animate-once animate-duration-1000 '>
            <ImgAboutEn />
            <ArticleEn />
        </div>
    )
}

export default AboutPageEn