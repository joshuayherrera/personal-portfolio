import { motion } from "framer-motion"
import { styles } from "../styles"
import { github, deploy } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  deployed_url,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full
                      transition-all duration-300 ease-in-out
                      hover:shadow-lg hover:shadow-primary hover:-translate-y-2">
        <div className="relative w-full h-[230px]">
          <img 
            src={image} 
            alt={name} 
            className='w-full h-full object-cover rounded-2xl'
          />
          
          <div className='absolute top-3 right-3 flex flex-col gap-2 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center
              items-center cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110'
            >
              <img 
              src={github}
              alt="github"
              className='w-1/2 h-1/2 object-contain' />
            </div>
            <div
              onClick={() => window.open(deployed_url, "_blank")}
              className='white-gradient bg-white w-10 h-10 rounded-full flex justify-center
              items-center cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110'
            >
              <img 
              src={deploy}
              alt="deploy"
              className='w-1/2 h-1/2 object-contain' />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='text-secondary mt-2 text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const Works = () => {
  return (
    <> 
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          My work
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("","",0.1,1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl 
          leading-[30px] justify-self-center"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "works")