import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <div className="h-full">
    <section className="h-full flex justify-center items-center">
      <div className="p-[15px] mx-auto h-full ">
        <div className="flex justify-around flex-col lg:flex-row items-center lg:pb-3 xl:h-[470px]">
          <div className="text-center lg:text-left order-2 lg:order-none">
            <span className="text-lg">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />{" "}
              <span className="text-accent">Siddhant Kokane</span>
            </h1>
            <p className="max-w-[400px] xl:max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I am
              proficient in various technologies.
            </p>

            <div className="flex flex-col lg:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className={"uppercase flex items-center gap-2 cursor-pointer"} 
              >
                <span>Download CV</span>
                <FiDownload className="text-lg" />
              </Button>
              <div className="mb-8 lg:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-none mb-8 lg:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
      <Stats/>
    </div>
  );
};

export default Home;
