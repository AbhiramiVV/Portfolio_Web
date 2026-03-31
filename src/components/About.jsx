import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import AnimatedCounter from "./AnimatedCounter";

const About = () => {
  const ServiceCard = ({ index, title, icon }) => {
    return (
      <Tilt className="xs:w-[250px] w-full">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />

            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    );
  };

  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] "
      >
        Results-driven Full Stack Developer with 2+ years of professional
        experience designing and delivering scalable web applications using the
        MERN stack (MongoDB, Express.js, React, Node.js). Proficient in
        TypeScript, Next.js, REST APIs, WebSockets, and cloud deployment on AWS
        and DigitalOcean. Experienced in Agile development workflows, Git-based
        version control, and cross-functional collaboration. Adept at
        translating complex business requirements into performant, maintainable
        code with a focus on clean architecture, SEO optimization, and
        responsive UI/UX.
      </motion.p>

      <p className={`${styles.sectionSubText} mt-16 mb-3`}>Services</p>
      <div className=" flex flex-wrap gap-10 ">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <AnimatedCounter />
    </>
  );
};

export default SectionWrapper(About, "about");
