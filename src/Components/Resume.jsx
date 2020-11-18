import React, { Component } from 'react'
import pdf from './pdf/MathewResume.pdf' 

export default class Resume extends Component {
  render() {
    return (

      <div>
  <nav id="colorlib-main-nav" role="navigation"> {/* nav.js */}
    <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle active"><i /></a>
    <div className="js-fullheight colorlib-table">
      <div className="img" style={{backgroundImage: 'url(images/MathewNCSU.png)',backgroundSize:"cover"}}  />
      <div className="colorlib-table-cell js-fullheight">
        <div className="row no-gutters">
          <div className="col-md-12 text-center">
            <h1 className="mb-4"><a href="home" className="logo">Mathew Chanda</a></h1>
            <ul>
                <li style={{marginRight : 33}}><a href="home"><span><small>01</small>Home</span></a></li>
                <li className="active"><a href="resume"><span><small>02</small>Resume</span></a></li>
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
          <section className="ftco-section about-section">
            <div className="container">
              <div className="row d-flex my-5" data-scrollax-parent="true">
                <div className="col-md-4 author-img" style={{backgroundImage: 'url(images/MathewNCSU.png)',backgroundSize:"contain"}} data-scrollax=" properties: { translateY: '-70%'}" />
                <div className="col-md-2" />
                <div className="col-md-6 wrap ftco-animate">
                  <div className="about-desc">
                    <h1 className="bold-text">Resume</h1>
                    <div className="p-5">
                    <h2 className="mb-5">Hello, I'm Mathew Chanda</h2>
                    </div>


                    </div>
                    <div className="p-5">
                    <p> 
                        I'm a computer science major at NC State with a minor in Mathematics. I have worked in different fields within the technology industry such as mobile and full-stack development and DevOps. 
                        As I continue to seek to explore the technology field and learn new problem-solving skills valued by today’s top employers, I enjoy meeting new people from various backgrounds to discover new ideas and cultures. 
                    </p>
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
              <div className="row d-flex justify-content-end mt-5">
                <div className="col-md-10">
                  <div className="exp mt-5 ftco-animate">
                    <h2 className="mb-4"> Work Experience</h2>
                    <div className="exp-wrap py-4">
                      <div className="desc">
                        <h4>LexisNexis<span> - Software Engineering Co-op</span> </h4>
                        <p className="location">Raleigh, North Carolina (Remote)</p>
                        <ul>
                          <li>Joined the Global DevOps Team in an agile environment</li>
                          <li>Migrated existing products and Jenkins pipelines from Python 2 to Python 3</li>
                          <li>Integrated Datadog into existing services to provide information about EC2 instances in AWS</li>
                          <li>Upgraded existing services’ AMI to Microsoft Server 2016 or Amazon Linux 2 with Packer, Ansible, and Jenkins</li>
                        </ul>
                      </div>
                      <div className="year">
                        <p>Summer 2020</p>
                      </div>
                    </div>
                  </div>

                  <div className="exp mt-5 ftco-animate">
                    <h2 className="mb-4">Education</h2>
                    <div className="exp-wrap py-4">
                      <div className="desc">
                        <h4>B.S in Computer Science<span> - North Carolina State University</span> </h4>
                        <p className="location">Raleigh, North Carolina</p>
                      </div>
                      <div className="year">
                        <p>Expected Grad: May 2023</p>
                      </div>
                    </div>
                    <div className="exp-wrap py-4">
                      <div className="desc">
                        <h4>High School Diploma<span> - River Mill Academy</span> </h4>
                        <p className="location">Graham, North Carolina</p>
                      </div>
                      <div className="year">
                        <p>Grad: June 2019</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="row mt-5 flex-column ftco-animate">
                <div className="col-md-8">
                  <h2 className="mb-4">My Skills</h2>
                </div>
                <div className="col-md-6 animate-box">
                  <div className="progress-wrap">
                    <h4>Python</h4>
                    <div className="progress">
                      <div className="progress-bar color-1" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                        <span>5/5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                  <div className="progress-wrap">
                    <h4>Java</h4>
                    <div className="progress">
                      <div className="progress-bar color-1" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                        <span>4/5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                  <div className="progress-wrap">
                    <h4>React</h4>
                    <div className="progress">
                      <div className="progress-bar color-1" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
                        <span>3/5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box">
                  <div className="progress-wrap">
                    <h4>C++</h4>
                    <div className="progress">
                      <div className="progress-bar color-1" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                        <span>4/5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                  <div className="progress-wrap">
                    <h4>Node.js</h4>
                    <div className="progress">
                      <div className="progress-bar color-1" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
                        <span>3/5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                  <div className="progress-wrap">
                    <h4>HTML</h4>
                    <div className="progress">
                      <div className="progress-bar color-1" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                        <span>4/5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box">
                  <div className="progress-wrap">
                    <h4>CSS</h4>
                    <div className="progress">
                      <div className="progress-bar color-1" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                        <span>4/5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                  <div className="progress-wrap">
                    <h4>JavaScript</h4>
                    <div className="progress">
                      <div className="progress-bar color-1" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
                        <span>3/5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                  <div className="progress-wrap">
                    <h4>Swift</h4>
                    <div className="progress">
                      <div className="progress-bar color-1" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{width: '40%'}}>
                        <span>2/5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                  <div className="progress-wrap">
                    <h4>Firebase</h4>
                    <div className="progress">
                      <div className="progress-bar color-1" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
                        <span>3/5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                  <div className="progress-wrap">
                    <h4>Android Studio</h4>
                    <div className="progress">
                      <div className="progress-bar color-1" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
                        <span>3/5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                  <div className="progress-wrap">
                    <h4>Tensorflow</h4>
                    <div className="progress">
                      <div className="progress-bar color-1" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{width: '40%'}}>
                        <span>2/5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                  <div className="progress-wrap">
                    <h4>React Native</h4>
                    <div className="progress">
                      <div className="progress-bar color-1" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{width: '40%'}}>
                        <span>2/5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div></div>);
  }
}