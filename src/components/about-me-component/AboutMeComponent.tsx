const AboutMeComponent = () => {
  const onHandleClick = () => {
    window.open("https://www.linkedin.com/in/jayson-quilar/", "_blank");
  };
  return (
    <>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
        {/* Featured Card */}
        <div className="lg:col-span-2 w-full bg-blue-950 rounded-xl shadow-lg p-6 flex flex-col lg:flex-row items-center">
          <img
            src="https://preview.redd.it/what-color-is-the-solid-snake-bandana-im-confused-with-all-v0-zs4tvulflc5c1.jpg?auto=webp&s=9d30f8484a6bedcbbad4cbb6530000f53aaa1190"
            alt="Solid Snake Bandana"
            className="w-40 h-40 object-cover rounded-full mb-4 lg:mb-0 lg:mr-6"
          />
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-bold text-white mb-2">About Me</h2>
            <p className="text-base text-white font-semibold">
              I am an experienced developer with 7 years in the industry,
              specializing in building scalable web applications. My passion
              lies in crafting intuitive user experiences and solving complex
              problems with elegant code.
            </p>
          </div>
          <div className="bg-blue-950 rounded-lg shadow-md p-4 flex flex-col items-center ml-40">
            <img
              src="https://i.redd.it/lvzsvint8pec1.jpeg"
              alt="Project Thumbnail"
              className="w-20 h-20 object-cover rounded-full mb-4"
            />
            <h2 className="text-lg font-semibold text-white mb-2">
              Latest Project
            </h2>
            <p className="text-sm text-white text-center">
              A full-stack internal tools platform built with React & Angular,
              mix of SQL and NoSQL databases, deployed on Azure & AWS.
            </p>
          </div>

          <div
            className="bg-blue-950 rounded-lg shadow-md p-4 flex flex-col items-center ml-40 cursor-pointer"
            onClick={onHandleClick}
          >
            <img
              src="https://assetsio.gnwcdn.com/450-dyrg1m.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
              alt="Contact Thumbnail"
              className="w-20 h-20 object-cover rounded-full mb-4"
            />
            <h2 className="text-lg font-semibold text-white mb-2">
              Get in Touch
            </h2>
            <p className="text-sm text-white text-start">
              Reach out via email or connect with me on LinkedIn to collaborate.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMeComponent;
