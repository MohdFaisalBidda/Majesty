import React from 'react'
import { NavLink } from 'react-router-dom'

const Links = () => {

    const links = [
        { url: "/", text: "🔍All" },
        { url: "/images", text: "📷Images" },
        { url: "/news", text: "📰News" }
    ]

    return (
        <div className='flex sm:justify-start items-center mt-8 border-b border-blue-600 dark:border-secondary mx-4'>
            {links.map(({url,text},i)=>{
                return(
                <NavLink key={i} to={url}  className="tracking-widest font-bold text-blue-500 dark:text-secondary text-lg font-primary mx-8 ">
                    {text}
                </NavLink>
                )
            })}
        </div>
    )
}

export default Links
