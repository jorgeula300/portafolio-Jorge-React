import skills from '../../json/skills.json'
const ImgSkills = () => {
    return (
        <div className='  grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
                skills?.map(skill => (
                    <div className='flex flex-col items-center gap-2 w-[200px]' key={skill.name}>
                        <h3 className=' font-medium'>{skill.name}</h3>
                        <figure className=' flex items-center justify-center w-full max-w-[200px] h-full max-h-[100px] bg-slate-200 rounded-xl overflow-hidden hover:animate-jump hover:animate-once hover:animate-duration-1000'>
                            <img className='w-[100px] h-[100px]' src={skill.img} alt={skill.name} />
                        </figure>
                    </div>
                )
                )
            }

        </div>
    )
}

export default ImgSkills