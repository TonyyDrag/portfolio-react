import meter1 from "../assets/images/meter1.svg";
import meter2 from "../assets/images/meter2.svg";
import meter3 from "../assets/images/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/images/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Here are my most outstanding skills that I have developed throughout my professional and personal career.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Software Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Database Administration</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Users Support</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Problem-solving skills.</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Accuracy and attention to detail.</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Time management skills.</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Transform needs into requirements.</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Teamwork oriented.</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Technologies</h2>
                        <p>Here are my most outstanding technologies that I have knowledge.</p>
                    <div className="container">
                    <div className="row justify-content-center">
                        <div class="col-2">
                            <img class ="wow fadeInUp col-sm-4 col-sm-10" src="https://img.icons8.com/color/144/000000/html-5--v1.png"></img>
                            <p>HTML 5</p>
                        </div>
                        <div class="col-2">
                            <img class ="wow fadeInUp col-sm-4 col-sm-10" src="https://img.icons8.com/color/144/000000/css3.png"></img>
                            <p>CSS3</p>
                        </div>
                        <div class="col-2">
                            <img class ="wow fadeInUp col-sm-4 col-sm-10" src="https://img.icons8.com/color/144/000000/javascript--v1.png"></img>
                            <p>Javascript</p>
                        </div>
                        <div class="col-2">
                            <img class ="wow fadeInUp col-sm-4 col-sm-10" src="https://img.icons8.com/color/144/mysql-logo.png"></img>
                            <p>MySql</p>
                        </div>
                        <div class="col-2">
                            <img class ="wow fadeInUp col-sm-4 col-sm-10" src="https://img.icons8.com/color/144/microsoft-sql-server.png"></img>
                            <p>SQL Server</p>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div class="col-2">
                            <img class ="wow fadeInUp col-sm-4 col-sm-10" src="https://img.icons8.com/nolan/64/php--v2.png"></img>
                            <p>PHP</p>
                        </div>
                        <div class="col-2">
                            <img class ="wow fadeInUp col-sm-4 col-sm-10" src="https://img.icons8.com/color/144/net-framework.png"></img>
                            <p>.NET Framework</p>
                        </div>
                        <div class="col-2">
                            <img class ="wow fadeInUp col-sm-4 col-sm-10" src="https://img.icons8.com/ios-filled/50/github.png"></img>
                            <p>GitHub</p>
                        </div>
                        <div class="col-2">
                            <img class ="wow fadeInUp col-sm-4 col-sm-10" src="https://img.icons8.com/nolan/64/c-plus-plus-logo.png"></img>
                            <p>C#</p>
                        </div>
                        <div class="col-2">
                            <img class ="wow fadeInUp col-sm-4 col-sm-10" src="https://img.icons8.com/color/144/000000/react-native.png"></img>
                            <p>React</p>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
            
            
        </div>

        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}