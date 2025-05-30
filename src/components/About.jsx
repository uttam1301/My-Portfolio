import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';
import profileImg from "../assets/profile_pic.jpg";

const About = () => {

  const [text]  = useTypewriter({
    words: ['< Full Stack Developer />', '< App Developer />', '< UI/UX Deginer />', '< Coder />'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  return (
    <section 
    id='about' 
    className='py-4 px-[7vm] md:px-[7vm] lg:px-[20vm] font-sans mt-10 md:mt-18 lg:mt-26'
    >
      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
        {/* Left side */}
        <div className='md:w-1/2 text-center md:text-left mt-6 md:mt-0 items-center md:ml-10'>
          
          <h2 className='text-2xl sm:text-4xl md:text-5xl font-semibold text-white mb-2 leading-tight'>
            Hi, I am
          </h2>
          
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>
            Uttam Kumar Saha
          </h1>
          
          <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold text-purple-500 mb-4 leading-tight'>
            <span className='text-white'>
              I am a {' '}
            </span>
            {text}
            <Cursor cursorStyle='|' />
          </h3>

          <p className='text-base sm:text-lg md:text-lg text-gray-300 mb-10 mt-8 leading-relaxed'>
            I'm a passionate and results-driven Full-Stack Web Developer with a strong foundation in modern web technologies. I specialize in building responsive, scalable, and user-friendly web applications, and have hands-on experience developing secure REST APIs and integrating frontend with backend systems. In addition to web development, I have a strong interest in data structures and algorithms, which enhances my problem-solving ability and allows me to write optimized, efficient code.
          </p>

          <a 
          href=''
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105'
          style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
          }}
          >
            View Resume 
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-center">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImg}
              alt="Uttam Saha"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  )
}

export default About
