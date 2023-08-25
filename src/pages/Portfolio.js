import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../img/portfolio/1.png";
import Image2 from "../img/portfolio/2.png";
import Image3 from "../img/portfolio/3.png";
import Image4 from "../img/portfolio/4.png";
import {motion} from "framer-motion"
import {transition1} from "../transitions"

const Portfolio = () => {
  return (
    <motion.section 
    initial={{ scale: 0, y: "100%" }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0, y:"100%" }}
          transition={transition1}
    className="section">
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
          <motion.div 
          initial={{ scale: 0, y: "-80%" }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0, y:"-80%" }}
          transition={transition1}
          className="flex flex-col lg:items-start">
            <h1 className="h1">Portfolio</h1>
            <p className='mb-8 max-w-sm'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              <b>Nobis voluptatibus </b> nulla illo at voluptas perferendis
              dolores dolorem, dolor nemo temporibus itaque dolorum ut. Ullam,
              corrupti natus dicta nemo consequatur saepe.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              consequatur nostrum eius reiciendis repellat temporibus.
            </p>
            <Link to={'/contact'} className='btn mb-[30px] mx-auto lg:mx-0'>Hire me</Link>
          </motion.div>

          <div className="grid grid-cols-2 lg:gap-2 mb-10">
            <div className="max-w-[250px] lg:mx-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500" src={Image1} alt="" />
            </div>
            <div className="max-w-[250px] lg:mx-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500" src={Image2} alt="" />
            </div>
            <div className="max-w-[250px] lg:mx-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500" src={Image3} alt="" />
            </div>
            <div className="max-w-[250px] lg:mx-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500" src={Image4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
