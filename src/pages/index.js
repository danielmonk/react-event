import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Typist from 'react-typist';
import TweenMax, { TimelineMax, Elastic, Expo } from "gsap/TweenMax";
import ScrollMagic from 'scrollmagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import Fade from 'react-reveal/Fade';
import LGLogo from "../images/lg-logo.png"
import CalpolLogo from "../images/calpol-logo-1.png"
import LVLogo from "../images/lv-logo.png"
import RACLogo from "../images/rac-logo.png"
import KrogerLogo from "../images/kroger-logo.png"
import EightLogo from "../images/888sport-logo.png"
import youtubeBGImg from "../images/youtube.jpg"
import youtubeVideo from "../videos/NY-Collated-minimised.mp4"
import macbookBG from "../images/macbook-render.png"


const styles = {
  youtubeBG: {
      backgroundImage: `url(${youtubeBGImg})`
  }
};

class Header extends React.Component {

  componentDidMount () {

    var scrollpos = window.scrollY;
    var header = document.querySelector(".page");

    function add_class_on_scroll() {
        header.classList.add("video-inactive");
    }

    function remove_class_on_scroll() {
        header.classList.remove("video-inactive");
    }

    window.addEventListener('scroll', function(){ 
        //Here you forgot to update the value
        scrollpos = window.scrollY;

        if(scrollpos > 500){
            add_class_on_scroll();
        }
        else {
            remove_class_on_scroll();
        }
    });

    // custom cursor
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
    })

    document.addEventListener('click', () => {
        cursor.classList.add("expand");

        setTimeout(() => {
            cursor.classList.remove("expand");
        }, 500)
    })

    // gsap animations
      // first scroll
      var tlFirstScroll = new TimelineMax();

      tlFirstScroll
      .set('.terminal-container', {scale: 1, transformOrigin: "center top"})
      .to('.terminal-container', 2, {scale: 2, y: "-32vh"})

      var controllerFirst = new ScrollMagic.Controller();

      // first scene
      var scene1 = new ScrollMagic.Scene({
        triggerElement: '.trigger1',
        duration: "300%"
      })

      .setTween(tlFirstScroll)
      .addIndicators()
      .addTo(controllerFirst)

      // position absolute
      var timelineAbsolute = new TimelineMax();

      timelineAbsolute
      .set('.terminal-sticky-content', {css:{position: "sticky", top:"8vh"}})
      .to('.terminal-sticky-content', 1, {css:{position: "absolute", bottom:"22%", top:"auto"}})

      var controllerSecond = new ScrollMagic.Controller();

      // first scene
      var scene2 = new ScrollMagic.Scene({
        triggerElement: '.trigger2',
        duration: "1px"
      })

      .setTween(timelineAbsolute)
      .addIndicators()
      .addTo(controllerSecond)

      // fade out bg
      var bgFade = new TimelineMax();

      bgFade
      .set('.terminal-bg', {css:{backgroundSize: "contain", ease:Expo.easeOut}})
      .to('.terminal-bg', 5, {css:{backgroundSize: "0", ease:Expo.easeOut}});

      var controllerThird = new ScrollMagic.Controller();

      // first scene
      var scene3 = new ScrollMagic.Scene({
        triggerElement: '.trigger3',
        duration: "50%"
      })

      .setTween(bgFade)
      .addIndicators()
      .addTo(controllerThird)

  }
  render () {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div className="page page--home">
          <section id="top" className="top">
            <div className="homepage-hero-module">
              <div className="top--wrapper">
                <div className="content--wrapper">
                  <div id="typewriter" className="aligner">
                    <Typist>
                      <Typist.Delay ms={2000} />
                      <h2>&#x22;Creative.&#x22;</h2><br/>
                      <h5>adjective</h5> <h5 className="italic">[kree-ey-tiv]</h5><br/>
                      <h3>Relating to or involving the use of the imagination or original ideas to create something.</h3>
                    </Typist>
                  </div>
                </div>
              </div>
              <div className="video-background">
                <div className="video-foreground">
                  <div className="fallback-img" style={styles.youtubeBG}></div>
                  <video autoPlay muted loop playsInline>
                    <source src={youtubeVideo} type="video/mp4" />
                  </video>
                </div>
                <div className="purple-overlay"></div>
              </div>
            </div>
          </section>
    
          <section id="about" className="about">
            <div className="content--wrapper">
              <div className="one-col">
                  <div className="column">
                    <Fade left> 
                    <h4>Hi, I'm Daniel & I'm a front-end developer living in <strong>Peterborough</strong>, currently working for <a href="https://www.zazzlemedia.co.uk">Zazzle Media</a>.</h4>
                    <p>I've been working in development for over <strong>6 years</strong> & have developed a collection of varying talents & skills to help create <strong>anything</strong> & <strong>everything</strong>. I'm always interested in using the latest technology to passionately create cool things on the internet.</p>
                    </Fade>
                  </div>
              </div>
            </div>
          </section>
    
          <section id="terminal-sticky-container" className="terminal-sticky-container">
            <div className="trigger1 trigger"><p>Trigger 1</p></div>
            <div className="trigger2 trigger"><p>Trigger 2</p></div>
            <div className="trigger3 trigger"><p>Trigger 3</p></div>
              <div className="terminal-sticky-content">
                <div className="terminal-container">
                  <div className="terminal-bg">
                    <div className="content--wrapper">
                      <div id="terminal" className="terminal">
                        <div className="terminal__tabs">
                          <div className="tab">
                            <p>daniel.js</p>
                          </div>
                        </div>
                        <div className="terminal__typing">
                          <div className='line line-1' data-line-nr='1'>
                            <div className='orange'>class</div> <div className='pink'>daniel</div> &#123;
                          </div>
                          <div className='line line-2' data-line-nr='2'>
                            <div className='dot'>..</div><div className='comment'>here's a brief list of my skills, experience & interests</div>
                          </div>
                          <div className='line line-3' data-line-nr='3'>
                            <div className='dot'>..</div><div className='orange'>constructor</div>() &#123;
                          </div>
                          <div className='line line-4' data-line-nr='4'>
                            <div className='dot'>..</div><div className='dot'>..</div><div className='pink'>this</div><div className='yellow'>.name</div> = <div className='cyan'>Daniel Monk</div>
                          </div>
                          <div className='line line-5' data-line-nr='5'>
                            <div className='dot'>..</div><div className='dot'>..</div><div className='pink'>this</div><div className='yellow'>.dateOfBirth</div> <div className='red'>=</div> <div className='red'>'30/10/1993'</div>
                          </div>
                          <div className='line line-6' data-line-nr='6'>
                            <div className='dot'>..</div><div className='dot'>..</div><div className='pink'>this</div><div className='yellow'>.email</div> <div className='red'>=</div> <div className='cyan'><a target='_blank' rel="noopener noreferrer" href='mailto:danieljmonk@gmail.com'>danieljmonk@gmail.com</a></div>
                          </div>
                          <div className='line line-7' data-line-nr='7'>
                            <div className='dot'>..</div>
                          </div>
                          <div className='line line-8' data-line-nr='8'>
                            <div className='dot'>..</div><div className='yellow'>experience</div>() &#123;
                          </div>
                          <div className='line line-9' data-line-nr='9'>
                            <div className='dot'>..</div><div className='dot'>..</div><div className='orange'>return</div> [
                          </div>
                          <div className='line line-10' data-line-nr='10'>
                            <div className='dot'>..</div><div className='dot'>..</div><div className='dot'>..</div>&#123; <div className='green'>'2017-current'</div> 	&#58; <div className='green'>'Front-end developer at <a target='_blank' rel="noopener noreferrer" href='https://www.zazzlemedia.co.uk'>Zazzle Media</a>.'</div> 	&#125;
                          </div>
                          <div className='line line-11' data-line-nr='11'>
                            <div className='dot'>..</div><div className='dot'>..</div><div className='dot'>..</div>&#123; <div className='green'>'2016-2017'</div> : <div className='green'>'Front-end developer at <a target='_blank' rel="noopener noreferrer" href='https://www.mold.agency'>Mold Agency</a>.'</div> &#125;
                          </div>
                          <div className='line line-12' data-line-nr='12'>
                            <div className='dot'>..</div><div className='dot'>..</div><div className='dot'>..</div>&#123; <div className='green'>'2013-2016'</div> : <div className='green'>'Junior developer at <a target='_blank' rel="noopener noreferrer" href='https://www.brave.agency'>Brave Agency</a>.'</div> &#125;
                          </div>
                          <div className='line line-13' data-line-nr='13'>
                            <div className='dot'>..</div><div className='dot'>..</div>]
                          </div>
                          <div className='line line-14' data-line-nr='14'>
                            <div className='dot'>..</div>&#125;
                          </div>
                          <div className='line line-15' data-line-nr='15'>
                            <div className='dot'>..</div><span className='yellow'>skills</span>() &#123;	
                          </div>
                          <div className='line line-16' data-line-nr='16'>
                            <div className='dot'>..</div><div className='dot'>..</div><div className='orange'>return</div> [ <div className='green'>'HTML5', 'CSS3', 'JS', jQuery', 'Node.js', 'React', 'Gatsby', 'graphQL', 'npm/bower',</div>
                          </div> 
                          <div className='line line-17' data-line-nr='17'>
                            <div className='green'>'gulp/grunt', 'SASS/Less', 'git', 'PHP', 'WordPress', 'MySQL', 'Photoshop', 'Adobe CC', 'Sketch'</div> ]
                          </div>
                          <div className='line line-18' data-line-nr='18'>
                            <div className='dot'>..</div>&#125;
                          </div>
                          <div className='line line-15' data-line-nr='19'>
                            <div className='dot'>..</div><span className='yellow'>interests</span>() &#123;	
                          </div>
                          <div className='line line-16' data-line-nr='20'>
                            <div className='dot'>..</div><div className='dot'>..</div><div className='orange'>return</div> [ <div className='green'>'technology', 'Apple products', 'fitness', 'sports', 'overpriced footwear'</div> ]
                          </div> 
                          <div className='line line-18' data-line-nr='22'>
                            <div className='dot'>..</div>&#125;
                          </div>
                          <div className='line line-19' data-line-nr='23'>
                          }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </section>

          <section id="skills">
            <div className="content--wrapper">
              <div className="four-col">
                <div className="column">
                  <Fade left> 
                  <div>
                  <h3>Consult.</h3>
                  <p>Working together to plan & strategise the perfect ideas for your project.</p>
                  </div>
                  </Fade>
                </div>
                <div className="column">
                  <Fade right> 
                  <div>
                  <h3>Design.</h3>
                  <p>Creating high quality designs to visually bring your project to life.</p>
                  </div>
                  </Fade>
                </div>
                <div className="column">
                  <Fade left> 
                  <div>
                  <h3>Code.</h3>
                  <p>Using the latest technology to craft a robust & complete final build. </p>
                  </div>
                  </Fade>
                </div>
                <div className="column">
                  <Fade right> 
                  <div>
                  <h3>Support.</h3>
                  <p>Offering extended support to continually expand your project's capabilities.</p>
                  </div>
                  </Fade>
                </div>
              </div>
            </div>
          </section>

          <section id="clients" className="clients">
            <div className="">
              <div className="two-col">
                  <div className="column">
                    <div className="clients__bg">
                      <Fade left> 
                        <div>
                          <div className="clients__wrapper"> 
                            <div className="client"><img src={LGLogo}></img></div>
                            <div className="client no-filter"><img src={CalpolLogo}></img></div>
                            <div className="client"><img src={LVLogo}></img></div>
                            <div className="client"><img src={RACLogo}></img></div>
                            <div className="client"><img src={KrogerLogo}></img></div>
                            <div className="client"><img src={EightLogo}></img></div>
                          </div>
                        </div>
                      </Fade>
                    </div>
                  </div>
                  <div className="column">
                    <div className="clients__text">
                      <Fade right> 
                        <div>
                          <p>Just a sample of some of the <strong>awesome</strong> clients & brands I've worked with.</p>
                        </div>
                      </Fade>
                    </div>
                  </div>
              </div>
            </div>
          </section>
    
          <section id="contact" className="contact">
            <div className="content--wrapper">
                <div className="contact__text">
                  <Fade bottom fraction={0.4}>
                    <p>Interested?</p>
                    <h3><a href="mailto:danieljmonk@gmail.com">Let's talk.</a></h3>
                  </Fade>
                </div>
            </div>
          </section>
    
        </div>
      </Layout>
    )
  }
}

export default Header