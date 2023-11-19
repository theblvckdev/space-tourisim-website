import React from "react";

const Button = ({ text }) => {
  return (
    <>
      <button
        data-aos="fade-in"
        data-aos-duration="2000"
        className="lg:h-[230px] md:h-[300px] h-[150px] outline-none relative z-10 duration-700 after:absolute after:top-[50%] after:left-[50%] after:-translate-x-[50%] after:-translate-y-[50%] after:duration-700 hover:after:opacity-20 lg:hover:after:h-[350px] hover:after:h-[200px] md:hover:after:h-[450px] lg:hover:after:w-[350px] md:hover:after:w-[450px] hover:after:w-[200px] after:h-[0px] after:w-[0px] after:-z-10 after:bg-white after:opacity-0 after:rounded-full lg:w-[230px] md:w-[300px] w-[150px] lg:text-2xl md:text-5xl font-bellefair text-primary uppercase bg-white rounded-full flex items-center justify-center"
      >
        {text}
      </button>
    </>
  );
};

export default Button;
