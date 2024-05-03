import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Vue.js Portfolio"
          description="Discover the power of modern web development with our Vue.js portfolio. Built to impress, our portfolio showcases the latest trends in design and technology, providing a seamless user experience that captivates and engages visitors. Whether you're a potential client or a fellow developer, explore our portfolio to see how we leverage Vue.js to create stunning, high-performance websites. Elevate your online presence and stand out in today's digital landscape with our innovative solutions. Let's bring your vision to life with Vue.js.
          "
        />
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="Enhance user engagement with our interactive website cards! These dynamic elements captivate visitors and provide an immersive browsing experience. Seamlessly integrated into your website, our cards feature stunning visuals and intuitive interactions that keep users coming back for more. From showcasing your latest products to highlighting key features, our interactive cards are the perfect way to elevate your online presence and drive conversions. Elevate your website today with our cutting-edge card designs!"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Embark on a cosmic journey with our Space Themed Website! Explore the wonders of the universe as you navigate through stunning visuals of distant galaxies, mesmerizing nebulae, and breathtaking celestial phenomena. Whether you're a seasoned astronomer or an aspiring space enthusiast, our website offers an immersive experience that will ignite your curiosity and expand your horizons. Join us as we venture into the unknown and discover the mysteries of the cosmos together."
        />
      </div>
    </div>
  );
};

export default Projects;
