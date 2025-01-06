import React from "react";
import animation from '../../../public/Animation - 1733580282425.json'
import Lottie from "lottie-react";
import { Zoom } from "react-awesome-reveal";

const Service = () => {
    return (
        <div className="p-5">
            <h3 className="text-4xl text-center font-bold mb-8">Services</h3>
            <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
                {/* Text Section */}
                <div className="lg:w-1/2 w-full px-4">
                    <Zoom>
                    <h1 className="md:text-4xl text-2xl font-bold mb-4">
                        Sports Equipment Support & Customization
                    </h1>
                    <p className="">
                        Whether you're an athlete, coach, or sports enthusiast, we provide unparalleled support for all your sports equipment needs. From routine maintenance to troubleshooting, our team ensures that your gear stays in top-notch condition, ready for action.
                        <br />
                        <br />
                        We understand that every sport and athlete has unique requirements. That's why we offer customized solutions, tailoring equipment to match your preferences and goals. Whether it's modifying gear for enhanced performance or sourcing specialized equipment, we've got you covered.
                    </p>
                    </Zoom>
                </div>

                {/* Image Section */}
                <div
                    className="lg:w-1/2 w-full h-[270px] md:h-[400px]  bg-cover bg-center bg-no-repeat rounded-md shadow-lg"
                    style={{
                        backgroundImage: `url("https://img.freepik.com/premium-photo/male-hand-touching-service-concept_220873-7591.jpg")`,
                    }}
                >
                    <div className="bg-black bg-opacity-40 h-full flex justify-center items-center rounded-md">
                      <div className="mb-20"> <Lottie className="h-[180px]" animationData={animation}  loop={true}></Lottie></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
