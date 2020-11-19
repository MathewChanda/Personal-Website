import React, { Component } from 'react'
import pdf from './pdf/MathewResume.pdf' 

export default class Home extends Component {
  render() {
    return (
      <div>
        <nav id="colorlib-main-nav" role="navigation"> {/* nav.js */}
            <a className="js-colorlib-nav-toggle colorlib-nav-toggle active"><i /></a>
            <div className="js-fullheight colorlib-table">
            <div className="img" style={{backgroundImage: 'url(images/Tesla.png)',backgroundSize : "cover",height: "100%"}}  />
            <div className="colorlib-table-cell js-fullheight">
                <div className="row no-gutters">
                <div className="col-md-12 text-center">
                    <h1 className="mb-4"><a href="home" className="logo">Mathew Chanda</a></h1>
                    <ul>
                        <li className="active" style={{marginRight : 33}}><a href="home"><span><small>01</small>Home</span></a></li>
                        <li><a href="resume"><span><small>02</small>Resume</span></a></li>
                        {/*<li><a href="services.html"><span><small>03</small>Services</span></a></li>*/}
                        <li><a href="projects"><span><small>03</small>Projects</span></a></li>
                        {/*<li><a href="blog"><span><small>04</small>Blog</span></a></li>*/}
                        <li><a href="contact"><span><small>04</small>Contact</span></a></li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </nav>
        <div id="colorlib-page">
            <header> {/* Home.js Start */}
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <div className="colorlib-navbar-brand">
                    <a className="colorlib-logo" href="home"><span className="logo-img" style={{backgroundImage: 'url(images/MathewSuit.jpg)'}} />Mathew Chanda</a>
                    </div>
                    <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i /></a>
                </div>
                </div>
            </div>
            </header>
        </div>

        <section className="home-slider owl-carousel js-fullheight">
            <div className="slider-item js-fullheight">
            <div className="overlay" />
            <div className="container">
                <div className="row slider-text align-items-center text-center justify-content-center" data-scrollax-parent="true">
                <div className="col-md-12 ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                    <p><a className="scroll">Hello World! I'm</a></p>
                    <h1 className="mb-3" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Mathew Chanda</h1>
                </div>
                </div>
            </div>
            </div>
            <div className="slider-item js-fullheight">
            <div className="overlay" />
            <div className="container">
                <div className="row slider-text align-items-center text-center justify-content-center" data-scrollax-parent="true">
                <div className="col-md-12 ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                    <p><a className="scroll">I'm a</a></p>
                    <h1 className="mb-3" data-scrollax="properties: {translateY: '30%', opacity: 1.6}">Software Engineer</h1>
                    <p><a className="scroll">from Mebane, North Carolina</a></p>
                </div>
                </div>
            </div>
            </div>
            <div className="slider-item js-fullheight">
            <div className="overlay" />
            <div className="container">
                <div className="row slider-text align-items-center text-center justify-content-center" data-scrollax-parent="true">
                <div className="col-md-12 ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                    <p><a className="scroll">I'm a</a></p>
                    <h1 className="mb-3" data-scrollax="properties: {translateY: '30%', opacity: 1.6}">Computer Science Student</h1>
                    <p><a className="scroll">at the North Carolina State University</a></p>
                </div>
                </div>
            </div>
            </div>
            <div className="slider-item js-fullheight">
            <div className="overlay" />
            <div className="container">
                <div className="row slider-text align-items-center text-center justify-content-center" data-scrollax-parent="true">
                <div className="col-md-12 ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                    <h1 className="mb-3" data-scrollax="properties: {translateY: '30%', opacity: 1.6}">Scroll Down</h1>
                    <p><a className="scroll">for more information</a></p>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* END slider */}
        <section className="ftco-section about-section">
            <div className="container">
            <div className="row d-flex" data-scrollax-parent="true">
                <div className="col-md-4 author-img" style={{backgroundImage: 'url(images/MathewNCSU.png)',backgroundSize:"contain"}} data-scrollax=" properties: { translateY: '-70%'}" />
                <div className="col-md-2" />
                <div className="col-md-6 wrap ftco-animate">
                <div className="about-desc">
                    <h1 className="bold-text">About</h1>
                    <div className="p-5">
                    <h2 className="mb-5">Hi! I'm Mathew Chanda</h2>
                    </div>
                    </div>
                    <div className="p-5">
                    <p>
                        I'm a computer science major at NC State with a minor in Mathematics. I have experience in Full Stack Development, Mobile Development, and DevOps. 
                        As I continue to seek to explore  and learn new exciting technologies valued by today’s top employers, I enjoy meeting new people from various backgrounds to discover new ideas and cultures.
                        Outside of writing impactful code, I enjoy playing PC games with friends, investing my money in the stock market, and watching new animes!
                    </p>
                    <p><a href="resume">Check out my experience!</a></p>
                    <p><a href={pdf}>Download my resume</a></p>
                    <ul className="ftco-footer-social list-unstyled mt-4">
                        <li><a href="https://www.linkedin.com/in/mathewchandancsu/"><span className="icon-linkedin" /></a></li>
                        <li><a href="https://github.com/MathewChanda"><span className="icon-github" /></a></li>
                        <li><a href="https://www.instagram.com/ichanda72/"><span className="icon-instagram" /></a></li>
                    </ul>
                    <h5>Contact me here!</h5>
                    <p>Email: <a href="mailto:mvchanda@ncsu.edu?Subject=Website%20Contact">mvchanda@ncsu.edu</a></p>
                </div>
                </div>
            </div>
            </div>
        </section>
        <section className="ftco-section">
            <div className="container">
            <div className="row justify-content-center mb-5 pb-5">
                <div className="col-md-7 text-center heading-section ftco-animate">
                <span>What I do</span>
                <h2>My Areas of Interest</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services p-3 py-4 d-block text-center">
                    <div className="icon mb-3"><span className="icon-layers" /></div>
                    <div className="media-body">
                    <h3 className="heading">Frontend Development</h3>
                    <h3 className="heading">IOS Development</h3>
                    <h3 className="heading">Android Development</h3>
                    <h3 className="heading">UI/UX</h3>
                    </div>
                </div>
                </div>
                <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services p-3 py-4 d-block text-center">
                    <div className="icon mb-3"><span className="icon-gears" /></div>
                    <div className="media-body">
                    <h3 className="heading">Backend Development</h3>
                    <h3 className="heading">DevOps and Automation</h3>
                    <h3 className="heading">Data Science</h3>
                    <h3 className="heading">AI and Machine Learning</h3>
                    <h3 className="heading"></h3>
                    </div>
                </div>
                </div>
                <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services p-3 py-4 d-block text-center">
                    <div className="icon mb-3"><span className="icon-code" /></div>
                    <div className="media-body">
                    <h3 className="heading">Java</h3>
                    <h3 className="heading">Swift</h3>
                    <h3 className="heading">Python</h3>
                    <h3 className="heading">Javascript</h3>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        <section className="ftco-section">
        <div className="container mt-5">
        <div className="row justify-content-center mb-5 pb-5">
            <div className="col-md-7 text-center heading-section ftco-animate">
            <span>Projects</span>
            <h2>A collection of my favorite works</h2>
            </div>
        </div>
        <div className="row no-gutters">
        <div className="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
            <a href="https://github.com/iiradia/PackRanks" style={{backgroundImage: 'url(images/PackRanks.jpg)',backgroundSize:"contain"}} className="image order-2 d-flex justify-content-center align-items-center" data-scrollax=" properties: { translateY: '-30%'}">
            </a>
            <div className="text order-1">
            <h4 className="subheading">NC State Course Finder Web App</h4>
            <h2 className="heading"><a href="http://www.packranks.com/">PackRanks</a></h2>
            <p> Full Stack Web application that provides a comprehensive assortment of course options for a user who is identifying a potential academic path, 
                based on multifarious quantifiable metrics and third-party services that provide numerical professor metadata. 
                Built with React, Flask, and MongoDB and recieved 10,000+ pageviews and 300+ signed-in users.</p>
            <p><a href="https://github.com/iiradia/PackRanks">View Project in Github</a></p>
            </div>
        </div>
            <div className="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
            <a href="https://github.com/VirtualPantry/VirtualPantry" className="image d-flex justify-content-center align-items-center" data-scrollax=" properties: { translateY: '-30%'}">
                <img src={"images/VirtualPantry.jpg"} style={{width: "110%",height: "120%",objectFit: "contain"}}/>
            </a>
            <div className="text">
                <h4 className="subheading">Automated Grocery List IOS App</h4>
                <h2 className="heading"><a href="https://github.com/VirtualPantry/VirtualPantry">Virtual Pantry</a></h2>
                <p>An IOS application that automates a shopping list for a shopper based on the current inventory to reduce food waste in the household. Built with Swift, UIKit, and Firebase</p>
                <p><a href="https://github.com/VirtualPantry/VirtualPantry">View Project in Github</a></p>
            </div>
            </div>
            <div className="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
            <a href="https://techatncsu.github.io/" style={{backgroundImage: 'url(images/WolfSnacks.png)',backgroundSize:"contain" }} className="image order-2 d-flex justify-content-center align-items-center" data-scrollax=" properties: { translateY: '-30%'}">
            </a>
            <div className="text order-1">
                <h4 className="subheading">WolfSnacks</h4>
                <h2 className="heading"><a href="https://techatncsu.github.io/">WolfSnacks</a></h2>
                <p> A Full Stack Web application that automates administrative work such as volunteer tracking and data analytics for local food pantry Feed The Pack. 
                    Built in Angular,Flask, and MySQL. Served to 36,000+ NC State students and staff.</p>
                <p><a href="https://techatncsu.github.io/">Learn more at Tech @ NC State</a></p>
            </div>
            </div>
        </div>
        </div>
        </section>
</div>
    );
  }
}