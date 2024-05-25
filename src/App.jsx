import { useState } from "react";
import reactLogo from "@src/assets/react.svg";
import viteLogo from "/vite.svg";
import "@src/App.css";

function App() {
  const services = [
    {
      title: "DAPP Development",
      description:
        "A decentralized application (dapp) is an application built on a decentralized network that combines a smart contract and a frontend user interface.",
      borderColor: "border-indigo-500",
      bgColor: "bg-indigo-500",
    },
    {
      title: "Web 3.0 Development",
      description:
        "Web 3.0 is the third generation of Internet services that will focus on understanding and analyzing data to provide a semantic web.",
      borderColor: "border-purple-500",
      bgColor: "bg-purple-500",
    },
    {
      title: "Project Audit",
      description:
        "A Project Audit is a formal review of a project, which is intended to assess the extent up to which project management standards are being upheld.",
      borderColor: "border-blue-400",
      bgColor: "bg-blue-400",
    },
    {
      title: "Hacking / RE",
      description:
        "A security hacker is someone who explores methods for breaching defenses and exploiting weaknesses in a computer system or network.",
      borderColor: "border-yellow-400",
      bgColor: "bg-yellow-400",
    },
    {
      title: "Bot/Script Development",
      description:
        "Bot development frameworks were created as advanced software tools that eliminate a large amount of manual work and accelerate the development process.",
      borderColor: "border-green-500",
      bgColor: "bg-green-500",
    },
  ];

  return (
    <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
      <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">
        Services
      </h2>
      <p className="mb-12 text-lg text-gray-500">
        Here is a few of the awesome Services we provide.
      </p>
      <div className="w-full">
        {services.slice(0, 2).map((service, index) => (
          <div className="flex flex-col w-full mb-10 sm:flex-row" key={index}>
            {services
              .slice(index * 2, index * 2 + 2)
              .map((service, subIndex) => (
                <div className="w-full mb-10 sm:mb-0 sm:w-1/2" key={subIndex}>
                  <div className="relative h-full ml-0 mr-0 sm:mr-10">
                    <span
                      className={`absolute top-0 left-0 w-full h-full mt-1 ml-1 ${service.bgColor} rounded-lg`}
                    ></span>
                    <div
                      className={`relative h-full p-5 bg-white border-2 ${service.borderColor} rounded-lg`}
                    >
                      <div className="flex items-center -mt-1">
                        <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                          {service.title}
                        </h3>
                      </div>
                      <p
                        className={`mt-3 mb-1 text-xs font-medium ${service.bgColor} uppercase`}
                      >
                        ------------
                      </p>
                      <p className="mb-2 text-gray-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ))}
        <div className="flex flex-col w-full mb-5 sm:flex-row">
          {services.slice(2).map((service, index) => (
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2" key={index}>
              <div className="relative h-full ml-0 sm:mr-10">
                <span
                  className={`absolute top-0 left-0 w-full h-full mt-1 ml-1 ${service.bgColor} rounded-lg`}
                ></span>
                <div
                  className={`relative h-full p-5 bg-white border-2 ${service.borderColor} rounded-lg`}
                >
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                      {service.title}
                    </h3>
                  </div>
                  <p
                    className={`mt-3 mb-1 text-xs font-medium ${service.bgColor} uppercase`}
                  >
                    ------------
                  </p>
                  <p className="mb-2 text-gray-600">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
