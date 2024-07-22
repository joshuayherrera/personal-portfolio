import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full" options={{
      max: 45,
      scale: 1,
      speed: 450,
      transition: true,
      easing: "cubic-bezier(.03,.98,.52,.99)",
    }}>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px]
        flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title}
          className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("","", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        As a skilled Frontend Developer with 2 years of experience, 
        I have a solid foundation from Senati and advanced training 
        from Simplilearn. My expertise in Python, JavaScript, React, 
        and TailwindCSS allows me to deliver sophisticated, 
        high-quality web applications. Driven by a passion for innovation 
        and continuous learning, I consistently provide cutting-edge, 
        user-centric solutions.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => 
          <ServiceCard key={service.title} index={index} {...service}/>
        )}
      </div>
    
    </>
    
  )
}

export default SectionWrapper(About, "about")