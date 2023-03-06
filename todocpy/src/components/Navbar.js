import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../style/Navbar.css'
import logo from '../img/todo.png'




const Navbar = () => {
    // const router = useRoutes();  

    // const { pathname } = router; 

    const [dropdownToggled, setdropdownToggle] = useState(false);
    const [background, setbackground] = useState(false)



    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setbackground(true)
        } else {
            setbackground(false)
        }
    }

    const navToggle = () => {
        if (dropdownToggled) {
            setdropdownToggle(false)
        } else {
            setdropdownToggle(true)
        }
    }


    if (typeof window !== "undefined") {
        window.addEventListener('scroll', changeBackground)
        window.onclick = function (event) {
            if (!event.target.matches('.dropbtn')) {
                var dropdowns = document.getElementsByClassName('nav');
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains(`${'toggle'}`)) {
                        console.log('first window')
                        openDropdown.classList.remove(`${'toggle'}`);
                        setdropdownToggle(false)
                    }
                }
            }
        }
    }
    let data = [
        {
            id: "1",
            name: "Home",
            link: "/",

        },
        {
            id: "2",
            name: "MY Todo",
            link: "/",

        },
        {
            id: "3",
            name: "Blogs",
            link: "/blogs",

        },
        {
            id: "4",
            name: 'Login',
            link: "/login",

        },
        {
            id: "5",
            name: 'SignUp',
            link: "/signup",

        },
    ]
    const [dataList, setdataList] = useState(data);

    return (
        <>
            <div className={`${'nav'} ${dropdownToggled ? 'toggle' : ""} ${background !== '/' ? 'active' : ""} `} >
                <div>
                    <Link href="/"  >
                        <img src={logo} width={350} height={50} className="navlogo" alt="icon"></img>
                    </Link>

                </div>
                <div className="navrow">
                    <nav>
                        <ul>
                            <li>
                                {dataList.map((e) => {
                                    return <Link key={e.id} to={e.link}>{e.name}</Link>
                                })}
                            </li>

                        </ul>
                    </nav>
                </div>
                <div className={`${'navburgur'} dropbtn`} onClick={navToggle} >
                    <div className={`dropbtn ${'line1'}`} onClick={navToggle}></div>
                    <div className={`dropbtn ${'line2'}`} onClick={navToggle}></div>
                    <div className={`dropbtn ${'line3'}`} onClick={navToggle}></div>
                </div>
            </div>


        </>


    )
}

export default Navbar
