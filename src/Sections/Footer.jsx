import { Link } from 'react-scroll';
import { VscGithub } from "react-icons/vsc";
import { AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { MdArrowUpward, MdOutlineMail, MdOutlineMovie } from "react-icons/md";

const Footer = () => {
    return (
        <footer>
            <div className="custom-container">

                <div className="first-content">
                    <div>
                        <a href="https://www.linkedin.com/home"><h3 data-cursor-text="Find out">LOREM IPSUM DOLOR SIT.</h3></a>
                        <a href="https://typesetinthefuture.com/2014/01/31/2001-a-space-odyssey/" className="link">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing ipsum dolor sit.</p>
                        </a>
                    </div>
                    <Link to={"hero"} smooth={true} duration={500}>
                        <div className="button" data-cursor-text="Go top">
                            <MdArrowUpward />
                        </div>
                    </Link>
                </div>

                <div className="second-content">
                    <div className="box">
                        <p style={{ marginBottom: 10 }}>Lorem amet consectetur <br className="show-br" /><a className="creator" href="https://github.com/">YOUR NAME</a></p>
                        <p style={{ marginTop: 0 }}>You can find me here:</p>

                        <div className="icons">
                            <a className="icon" href="https://github.com/" data-cursor-stick="#stick-icon-footer-5" id="stick-icon-footer-5" title='GitHub'>
                                <VscGithub />
                            </a>
                            <a className="icon" href="mailto:yourelail@gmail.com" data-cursor-stick="#stick-icon-footer-4" id="stick-icon-footer-4" title='Mail'>
                                <MdOutlineMail />
                            </a>
                            <a className="icon" href="https://www.linkedin.com/home" data-cursor-stick="#stick-icon-footer-3" id="stick-icon-footer-3" title='Linkedin'>
                                <AiFillLinkedin />
                            </a>
                            <a className="icon" href="https://www.youtube.com" data-cursor-stick="#stick-icon-footer-2" id="stick-icon-footer-2" title='Youtube'>
                                <AiFillYoutube />
                            </a>

                        </div>
                    </div>

                    <div className="third-content">
                        <p className="paragraphe">
                            © Développé par Berthe Théophile - <span>{2024}</span>
                        </p>
                    </div>
                </div>

            </div>
        </footer>
    )
};

export default Footer;