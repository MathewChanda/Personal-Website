import React, { Component } from 'react'
export default class Projects extends Component {
  render() {
    return (
      <div>

  <nav id="colorlib-main-nav" role="navigation"> {/* nav.js */}
    <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle active"><i /></a>
    <div className="js-fullheight colorlib-table">
    <div className="img" style={{backgroundImage: 'url(images/Tesla.png)',backgroundSize : "cover",height: "100%"}}  />
      <div className="colorlib-table-cell js-fullheight">
        <div className="row no-gutters">
          <div className="col-md-12 text-center">
            <h1 className="mb-4"><a href="home" className="logo">Mathew Chanda</a></h1>
            <ul>
                <li style={{marginRight : 33}}><a href="home"><span><small>01</small>Home</span></a></li>
                <li><a href="resume"><span><small>02</small>Resume</span></a></li>
                {/*<li><a href="services.html"><span><small>03</small>Services</span></a></li>*/}
                <li className="active"><a href="projects"><span><small>03</small>Projects</span></a></li>
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
              <a className="colorlib-logo" href="home"><span className="logo-img" style={{backgroundImage: 'url(images/MathewSuit.jpg)'}}/>Mathew Chanda</a>
            </div>
            <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i /></a>
          </div>
        </div>
      </div>
    </header>
    <section className="ftco-section">
    <div className="container mt-5">
        <div className="row justify-content-center mb-5 pb-5">
            <div className="col-md-7 text-center heading-section ftco-animate">
            <span>Projects</span>
            <h2>A Collection of My Favorite Works</h2>
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
</div>
);
}
}