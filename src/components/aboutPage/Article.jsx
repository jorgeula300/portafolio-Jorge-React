import React from 'react'

const Article = () => {
    return (
        <div className='  flex justify-center items-center'>
            <article className=' space-y-4'>
                <h2 className='text-xl md:text-3xl font-bold text-center'><span className=' text-[#78AB92] dark:text-[#4BDB9E]'>Acerca</span> de mí</h2>
                <p className='text-sm mx-3 md:text-lg font-medium'>
                    Me especializo en el desarrollo de sitios web responsivos de uso facil, con enfoque en la experiencia del usuario. Tengo experiencia trabajando con tecnologías como HTML, CSS, JavaScript, TypeScrip, React , Next.
                </p>
                <p className='text-sm mx-3 md:text-lg font-medium'>
                    En mi tiempo libre, disfruto de aprender nuevas tecnologías y contribuir a proyectos de código abierto.
                </p>
            </article>
        </div>
    )
}

export default Article