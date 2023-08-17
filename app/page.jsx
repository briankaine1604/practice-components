"use client"

import { useState, useEffect } from "react"

const Page =()=>{

    const[menu,setmenu]=useState(false)
    const togglemenu =()=>{
        setmenu(!menu)
    }

    

return(
            <div>
                {menu&&(
                    <ul className="bg-yellow-300 w-1/3 h-screen flex border fixed navigation-menu ">
                        <li className="" onClick={togglemenu}>CLOSE</li>
                        <li className="relative group">Home
                        <div className="bg-blue-400 hidden group-hover:flex w-20 h-20">
                            <span>main home</span>
                            <span>another one</span>
                        </div>
                        </li>
                        <li className="relative group">About
                        <div className="bg-red-400 hidden group-hover:flex w-20 h-20">
                            <span>main home</span>
                            <span>another one</span>
                        </div>
                        </li>
                        <li className="relative group">contact
                        <div className="bg-purple-400 hidden group-hover:flex w-20 h-20">
                            <span>main home</span>
                            <span>another one</span>
                        </div>
                        </li>
                    </ul>   
                )}
                <button className="mt-10 w-10 bg-red-600 rounded-md" onClick={togglemenu} >Nav</button>
            </div>
)
}

export default Page