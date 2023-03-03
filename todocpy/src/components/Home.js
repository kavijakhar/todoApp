import React from 'react'
import '../style/Home.css'

const Home = () => {
    return (
        <section id="home" className="home">

            <h1 className="banner"> The Best Plateform to manage Our To Do list </h1>
            <h3 className="slogan">you have a vision. we have a Way to get you there</h3>
            <a href="/"><button> get started </button></a>


            <div className={`${"wave"} ${"wave1"}`}></div>
            <div className={`${"wave"} ${"wave2"}`}></div>
            <div className={`${"wave"} ${"wave3"}`}></div>

            <div className={`fas ${"faCog"} fa-cog ${"nut1"}`}></div>
            <div className={`fas ${"faCog"} fa-cog ${"nut2"}`}></div>


        </section>
    )
}

export default Home
