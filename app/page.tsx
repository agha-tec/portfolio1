'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

interface YourComponentProps {

}
const Home: React.FC<YourComponentProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    // Words animation
    const words = ["Developer", "Designer", "Copywriter", "Photographer"];
    const wordContainer = document.getElementById("TimeChange");

    // Define the Params type
    type Params = {
      index: number;
      e: React.MouseEvent<HTMLAnchorElement>;
      projectId: string;
    };

    // Function for words animation
    function displayWords({ index }: Params) {
      index = index % words.length;
      if (wordContainer) {
        wordContainer.innerHTML = ` <span class='fade-in'>${words[index]}</span>`;
      }

      setTimeout(() => {
        displayWords({ index: index + 1, e: {} as React.MouseEvent<HTMLAnchorElement>, projectId: '' });
      }, 2000);
    }

    // Start displaying words
    displayWords({ index: 0, e: {} as React.MouseEvent<HTMLAnchorElement>, projectId: '' });

    

    // Scroll to top
    const scrollToTop = () => {
      window.scroll({
        top: 0,
        behavior: 'smooth',
      });
    };

    // Get links and backToTopButton
    const backToTopButton = document.getElementById('backToTop');
    const links = document.querySelectorAll('header a');
    // Smooth scrolling
    const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href')?.substring(1);
      const targetElement = document.getElementById(targetId || '');
      if (targetElement) {
        window.scroll({
          top: targetElement.offsetTop - 50,
          behavior: 'smooth',
        });
      }
    };
    // Add event listeners
    links.forEach(link => {
      link.addEventListener('click', smoothScroll);
    });

    if (backToTopButton) {
      backToTopButton.addEventListener('click', scrollToTop);
    }

  }, []);
  // hover =>
  type Params = {
    index: number;
    e: React.MouseEvent<HTMLAnchorElement>;
    event: React.MouseEvent<HTMLDivElement>;
  };

  // contact form =>
  const [message, setMessage] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add logic to handle form submission, e.g., send an email or save to a database
    console.log('Email:', email);
    console.log('Message:', message);
    // Reset form fields
    setMessage('');
    setEmail('');
  };
  // contact styling =>
  function handleInput(input) {
    // Add a class when input has content
    if (input.value.trim() !== "") {
      input.classList.add("has-content");
    } else {
      input.classList.remove("has-content");
    }
  }
  
  function handleFocus(input) {
    input.classList.add("focused");
  }
  
  function handleBlur(input) {
    input.classList.remove("focused");
  }
  
  return (
    <main>
      <header>
      <div className="logo">
        <p>AGHA<span>-TEC</span></p>
      </div>
      <div className={`links ${isMenuOpen ? 'open' : ''}`}>
        <div className="hamburger" onClick={toggleMenu}>
          <svg className={`ham hamRotate ham1 ${isMenuOpen ? 'active' : ''}`} viewBox="0 0 100 100" width="80">
            <path
              className="line top"
              d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
            />
            <path
              className="line middle"
              d="m 30,50 h 40"
            />
            <path
              className="line bottom"
              d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
            />
          </svg>
        </div>
        <ul className="links-list">
          <li className="link-item"><a id="backToTop" href="#home" onClick={toggleMenu}>Home</a><span className="link-span"></span></li>
          <li className="link-item"><a href="#services" onClick={toggleMenu}>Services</a><span className="link-span"></span></li>
          <li className="link-item"><a href="#projects" onClick={toggleMenu}>Projects</a><span className="link-span"></span></li>
          <li className="link-item"><a href="#about" onClick={toggleMenu}>About</a><span className="link-span"></span></li>
          <li className="link-item"><a href="#contact" onClick={toggleMenu}>Contact</a><span className="link-span"></span></li>
          <li className="link-item"><a href="#" onClick={toggleMenu}>Login/Sign In</a><span className="link-span"></span></li>
        </ul>
      </div>
    </header>
      <section className="main" id="home">
        <div className="description">
            <p>Hi,</p>
            <div className="list-ofDes">
                <p className='beforWords'>I'm : </p><p id="TimeChange" className="fade-in"></p>
                <span className='word-width'></span>
            </div> 
            <p>Nice to meet You :)</p>
        </div>
        <div className="img-container">
            <div className="before-home-img"></div>
            <img src="profile2.png" alt="nothing" />
        </div>
    </section>
    <section className="services" id="services">
        <div className="services-title">
            <p>Our Services</p>
        </div>
        <div className="services-cards">
            <article className="service-card">
                <span className="service-card-before"></span>
                <div className="service-card-content">
                    <img src="wd.png" alt="" />
                    <p className="card-title">Web Development</p>
                    <p className="service-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores,
                    illo eius corrupti fugiat nam nobis accusamus dolor harum quaerat vitae voluptate 
                    deleniti vel pariatur laboriosam laborum architecto ipsum aperiam!</p>
                </div>
            </article>
            <article className="service-card">
                <span className="service-card-before"></span>
                <div className="service-card-content">
                    <img src="cc.png" alt="" />  
                    <p className="card-title">Content Creation</p>
                    <p className="service-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores,
                    illo eius corrupti fugiat nam nobis accusamus dolor harum quaerat vitae voluptate 
                    deleniti vel pariatur laboriosam laborum architecto ipsum aperiam!</p>
                </div>
            </article>
            <article className="service-card">
                <span className="service-card-before"></span>
                <div className="service-card-content">
                    <img src="s.png" alt="" />
                    <p className="card-title">SEO Optimization</p>
                    <p className="service-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores,
                    illo eius corrupti fugiat nam nobis accusamus dolor harum quaerat vitae voluptate 
                    deleniti vel pariatur laboriosam laborum architecto ipsum aperiam!</p>
                </div>
            </article>
            <article className="service-card">
                <span className="service-card-before"></span>
                <div className="service-card-content">
                    <img src="wds.png" alt="" />
                    <p className="card-title">Web Design</p>
                    <p className="service-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores,
                    illo eius corrupti fugiat nam nobis accusamus dolor harum quaerat vitae voluptate 
                    deleniti vel pariatur laboriosam laborum architecto ipsum aperiam!</p>
                </div>
            </article>
        </div>
    </section>
    <section className="projects" id="projects">
        <div className="projects-title">
            <p>Our Projects</p>
        </div>
        <div className="projects-cards">
            {/* <article id="project1" className="project-card" onMouseMove="handleMouseMove(event, 'project1')" onmouseleave="resetTransform('project1')">
                <img src="profile.png" alt="" />
                <p className="project-title">Nothing</p>
                <p className="project-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores,
                    illo eius corrupti fugiat nam nobis accusamus dolor harum quaerat vitae voluptate 
                    deleniti vel pariatur laboriosam laborum architecto ipsum aperiam!
                </p>
            </article>*/}
            <article
              className="project-card project-card1"
            >
              <img src="profile.png" alt="" />
              <div className="project-infos">
                <span className='project-span'></span>
                <div className="project-infos-content">
                  <p className="project-title">Nothing</p>
                  <p className="project-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores,
                    illo eius corrupti fugiat nam nobis accusamus dolor harum quaerat vitae
                    voluptate deleniti vel pariatur laboriosam laborum architecto ipsum
                    aperiam!
                  </p>
                </div>
              </div>
              
            </article>

            <article
              className="project-card project-card2"
            >
              <img src="profile.png" alt="" />
              <div className="project-infos">
                <span className='project-span'></span>
                <div className="project-infos-content">
                  <p className="project-title">Nothing</p>
                  <p className="project-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores,
                    illo eius corrupti fugiat nam nobis accusamus dolor harum quaerat vitae
                    voluptate deleniti vel pariatur laboriosam laborum architecto ipsum
                    aperiam!
                  </p>
                </div>
              </div>
            </article>
            <article
              className="project-card project-card2"
            >
              <img src="profile.png" alt="" />
              <div className="project-infos">
                <span className='project-span'></span>
                <div className="project-infos-content">
                  <p className="project-title">Nothing</p>
                  <p className="project-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores,
                    illo eius corrupti fugiat nam nobis accusamus dolor harum quaerat vitae
                    voluptate deleniti vel pariatur laboriosam laborum architecto ipsum
                    aperiam!
                  </p>
                </div>
              </div>
            </article>
            <article
              className="project-card project-card2"
            >
              <img src="profile.png" alt="" />
              <div className="project-infos">
                <span className='project-span'></span>
                <div className="project-infos-content">
                  <p className="project-title">Nothing</p>
                  <p className="project-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores,
                    illo eius corrupti fugiat nam nobis accusamus dolor harum quaerat vitae
                    voluptate deleniti vel pariatur laboriosam laborum architecto ipsum
                    aperiam!
                  </p>
                </div>
                
              </div>
            </article>
        </div>
    </section>
    <section className="about" id="about">
        <div className="about-title">
            <p>About Us</p>
        </div>
        <div className="about-content">
            <img src="profile.png" alt="" />
            <div className="about-infos">
                <p className="about-description">
                    OurCompany is a leading provider of innovative solutions in the tech industry. Established in 20XX, we have been dedicated to delivering high-quality products and services to our clients.
                </p>
                <p>
                    <strong>Mission:</strong> Our mission is to empower businesses through cutting-edge technology, fostering growth and success in the digital era.
                </p>
                <p>
                    <strong>Values:</strong> At OurCompany, we value integrity, collaboration, and excellence. These principles guide our interactions with clients, partners, and within our team.
                </p>
                <p>
                    <strong>Team:</strong> Our diverse team of professionals brings a wealth of experience in software development, design, and business strategy. Meet the minds behind OurCompany.
                </p>
                <p>
                    <strong>Recognition:</strong> We are proud recipients of the Tech Innovation Award in 20XX and have been featured in leading industry publications for our contributions to the field.
                </p>
                <p>
                    <strong>Contact Us:</strong> Have questions or want to explore a partnership? Contact our team to discuss how we can help you achieve your goals.
                </p>
            </div>
        </div>
    </section>
    <section className='contact' id="contact">
        <div className="contact-title">
            <p>Contact Us</p>
        </div>
        <div className="contact-form">
          <img src="profile.png" alt="" />
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email'
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Message'
                required
                rows={5} // Set the desired number of rows here
              />

            </div>
            <button className='submit-btn' type="submit">Submit</button>
          </form>
        </div>
    </section>
    </main>
  )
}
export default Home;