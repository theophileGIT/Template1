import { useScrollLock } from '@mantine/hooks';
import { VscGithub } from "react-icons/vsc";
import { AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { MdOutlineMail, MdOutlineMovie, MdSegment, MdClose } from "react-icons/md";
import { Link } from 'react-scroll';

const Header = () => {
    let [isSidebarOpen, setIsSidebarOpen] = useScrollLock(false);

    return (
        <header>
            <div className="desktop">
                <div className="content">
                    <a href="https://www.youtube.com/" data-cursor-stick="#stick-icon-2" id="stick-icon-2" title='Youtube'>
                        <AiFillYoutube />
                    </a>
                    <a href="https://www.linkedin.com/" data-cursor-stick="#stick-icon-3" id="stick-icon-3" title='Linkedin'>
                        <AiFillLinkedin />
                    </a>
                    <a href="mailto:your.email@gmail.com" data-cursor-stick="#stick-icon-4" id="stick-icon-4" title='Mail'>
                        <MdOutlineMail />
                    </a>
                    <a href="https://github.com/" data-cursor-stick="#stick-icon-5" id="stick-icon-5" title='GitHub'>
                        <VscGithub />
                    </a>
                    <div>
                        <a href="https://netlify.app" className="site-name" title='Website'>
                            <p>YOUR NAME</p>
                        </a>
                    </div>
                </div>
            </div>

            <div className="mobile">
                <div className="content header-button">
                    {!isSidebarOpen ? <MdSegment onClick={() => setIsSidebarOpen(true)} /> : <MdClose onClick={() => setIsSidebarOpen(false)} className="close-button" /> }
                </div>

                <div style={{ display: isSidebarOpen ? 'block' : 'none' }} className="sidebar">
                    <div className="sidebar-backdrop" />
                    <div className="sidebar-content">
                        <div className="menu-container">
                            <div className="menu-title">Menu</div>
                            <div className="menu-item"><Link to="hero" smooth duration={500} onClick={() => setIsSidebarOpen(false)}>Homepage</Link></div>
                            <div className="menu-item"><Link to="projects" smooth duration={500} onClick={() => setIsSidebarOpen(false)}>Projects</Link></div>
                            <div className="menu-item"><Link to="contact" smooth duration={500} onClick={() => setIsSidebarOpen(false)}>Contact</Link></div>
                        </div>
                        <div className="menu-container" style={{ marginTop: 30 }}>
                            <div className="menu-title">Contact</div>
                            <div><a href="mailto:giuseppe.delcampo@outlook.com">your.email@gmail.com</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;