import React from 'react'

function Contact(){
    return(
        <div>
        <div class="KW_progressContainer">
            <div class="KW_progressBar">
            </div>
            </div>
            <div class="page">
            <nav id="colorlib-main-nav" role="navigation">
            <a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle active"><i></i></a>
            <div class="js-fullheight colorlib-table">
            <div className="img" style={{backgroundImage: 'url(images/Tesla.png)',backgroundSize : "cover",height: "100%"}}  />
                <div class="colorlib-table-cell js-fullheight">
                <div class="row no-gutters">
                    <div class="col-md-12 text-center">
                    <h1 className="mb-4"><a href="home" className="logo">Mathew Chanda</a></h1>
                    <ul>
                        <li style={{marginRight : 33}}><a href="home"><span><small>01</small>Home</span></a></li>
                        <li><a href="resume"><span><small>02</small>Resume</span></a></li>
                        {/*<li><a href="services.html"><span><small>03</small>Services</span></a></li>*/}
                        <li><a href="projects"><span><small>03</small>Projects</span></a></li>
                        {/*<li><a href="blog"><span><small>04</small>Blog</span></a></li>*/}
                        <li className="active"><a href="contact"><span><small>04</small>Contact</span></a></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </nav>
            
            <div id="colorlib-page">
            <header>
                <div class="container">
                <div class="row">
                    <div class="col-md-12">
                    <div class="colorlib-navbar-brand">
                        <a class="colorlib-logo" href="index.html"><span class="logo-img" style={{backgroundImage: "url(images/MathewSuit.jpg)"}}></span>Mathew Chanda</a>
                    </div>
                    <a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></a>
                    </div>
                </div>
                </div>
            </header>

            <section class="ftco-section contact-section">
                <div class="container mt-5">
                <div class="row d-flex mb-5 contact-info">
                    <div class="col-md-12 mb-4">
                    <h2 class="h4">Questions? Job Opportunities? Buisness Proposals? Contact me!</h2>
                    </div>
                    <div class="w-100"></div>
                    <div class="col-md-3">
                    <p><span>Phone:</span> <a href="tel://336-494-8638">336-494-8638</a></p>
                    </div>
                    <div class="col-md-3">
                    <p><span>Email:</span> <a href="mailto:mvchanda@ncsu.edu">mvchanda@ncsu.edu</a></p>
                    </div>
                    <div class="col-md-3">
                    <p><span>Website:</span> <a href="#">mathewchanda.me</a></p>
                    </div>
                </div>
                <div class="row block-9">
                    <div class="col-md-6 pr-md-5">
                    <form action="https://formspree.io/f/mqkglgrq" method="POST">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your Name" required name = "name"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your Email" required name = "email"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Subject" required name = "subject"/>
                        </div>
                        <div className="form-group">
                            <textarea required name="message" id cols={30} rows={7} className="form-control" placeholder="Message" />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5" />
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </section>
            <div id="ftco-loader" class="show fullscreen"><svg class="circular" width="48px" height="48px"><circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00"/></svg></div>
            </div>
            </div>
        </div>
    )
}

export default Contact; 
