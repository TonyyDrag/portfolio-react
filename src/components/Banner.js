import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { ArrowDownCircle } from "react-bootstrap-icons";
import header from '../assets/images/banner-img.png';
import resume from '../assets/images/CV_PEDRO_ANTONIO_MEZA_ROJAS.pdf';



export const Banner = () => {

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Hi! Welcome</span>
                        <h1>{`Hi I'm Tony Meza`}<span className="wrap"> software developer</span></h1>
                        <p>Software Dev with 2+ years of experience. Always open to learn new things, teamwork oriented and attention to detail. </p>
                        <button onClick={() => {document.getElementById('connect').scrollIntoView({behavior:'smooth'});}}>Let's connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={header} alt="Header Img"></img>
                     </Col>
                </Row>
            </Container>
            <br></br>
            <br></br>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">About me</span>
                        <p> Estudie en el Instituto Tecnologico de la Laguna en la carrera de Sistemas Computacionales. Hice mi residencia en ISG John Deere en la planta de Torreon, Coahuila durante un año en el equipo
                            de ERP y trabaje en el mismo equipo durante otro año mas como desarrollador en un puesto temporal. </p>
                        <button href={resume} download="AntonioMezaCV">Download CV <ArrowDownCircle size={25}/></button>
                    </Col>
                    
                </Row>
            </Container>
        </section>
    )
}