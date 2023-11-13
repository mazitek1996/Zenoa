

// import React from "react";
// import "./techstack_section.css";
// import { FaArrowRight, FaAngleRight } from "react-icons/fa";

// const techStackItems = [
//   {
//     title: "Node js",
//     description: "Node.js is the backbone of our server-side operations, empowering us to build scalable and high-performance applications. Its event-driven architecture, based on the V8 JavaScript runtime, ensures optimal efficiency. From real-time web applications to robust APIs, Node.js facilitates seamless communication and data exchange.",
//     imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
//     learnMoreLink: "https://nodejs.org/",
//   },
//   // Add more tech stack items as needed
// ];

// const TechStack = () => {
//   return (
//     <div className="tech_stack_section">
//       <div className="tech_stach_root">
//         <div className="container">
//           <div className="p-5 mb-4 rounded-3">
//             <div className="container-fluid py-5">
//               <div className="tech_stack_title_holder">
//                 <div className="tech-stack-title">
//                   <h1 className="display-5">
//                     <span className="rocket-emoji">🚀</span> Explore Our Tech Stack
//                   </h1>
//                 </div>
//               </div>
//               <p className="col-md-8 fs-4">
//                 Discover the technologies that power our innovations. Check out our tech stack below.
//               </p>
//               <button className="btn btn-primary btn-lg" type="button">
//                 View Tech Stack
//               </button>
//             </div>

//             {techStackItems.map((item, index) => (
//               <div key={index} className="stack_collection_card card">
//                 <div className="stack_collection_card_container">
//                   <div className="text_top_left">
//                     <div className="text_top_left_container">
//                       <img src={item.imageUrl} alt={item.title} />

//                       <p>
//                         {item.title}
//                         <br />
//                         {item.description}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="text_bottom_left">
//                     <p>
//                       Learn More about {item.title} <FaAngleRight />
//                     </p>
//                   </div>

//                   <div className="right_image_container">
//                     <img src={item.imageUrl} alt={item.title} />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TechStack;

import React, { useState, useEffect } from "react";
import "./techstack_section.css";
import { FaArrowRight, FaAngleRight } from "react-icons/fa";

const techStackItems = [
  {
    title: "Node.js",
    description: "Node.js is the backbone of our server-side operations, empowering us to build scalable and high-performance applications. Its event-driven architecture, based on the V8 JavaScript runtime, ensures optimal efficiency. From real-time web applications to robust APIs, Node.js facilitates seamless communication and data exchange.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    learnMoreLink: "https://nodejs.org/",
  },
  {
    title: "React JS",
    description: "React JS is our go-to JavaScript library for building user interfaces. It allows us to create interactive and dynamic UIs, making the user experience smooth and engaging.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    learnMoreLink: "https://reactjs.org/",
  },
  {
    title: "Flutter",
    description: "Flutter is our choice for building beautiful and natively compiled applications for mobile, web, and desktop from a single codebase. It enables us to deliver high-quality user experiences across multiple platforms.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png",
    learnMoreLink: "https://flutter.dev/",
  },
  {
    title: "Python",
    description: "Python is our preferred programming language for a wide range of applications. Its simplicity, readability, and versatility make it an excellent choice for web development, data analysis, artificial intelligence, and more.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    learnMoreLink: "https://www.python.org/",
  },
  {
    title: "AI & Machine Learning",
    description: "We leverage the power of AI and Machine Learning to enhance our applications with intelligent features. From predictive analytics to natural language processing, we strive to integrate cutting-edge technologies into our solutions.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
    learnMoreLink: "https://scikit-learn.org/",
  },
  // Add more tech stack items as needed
];

const TechStack = () => {
  const [currentStackIndex, setCurrentStackIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentStackIndex((prevIndex) => (prevIndex + 1) % techStackItems.length);
    }, 30000);

    return () => clearInterval(intervalId);
  }, []);

  const currentStackItem = techStackItems[currentStackIndex];

  return (
    <div className="tech_stack_section">
      <div className="tech_stach_root">
        <div className="container">
          <div className="p-5  rounded-3">
            <div className="container-fluid py-5">
              <div className="tech_stack_title_holder">
                <div className="tech-stack-title">
                  <h1 className="display-5">
                    <span className="rocket-emoji">🚀</span> Explore Our Tech Stack
                  </h1>
                </div>
              </div>
              <p className="col-md-8 fs-4">
                Discover the technologies that power our innovations. Check out our tech stack below.
              </p>
              <button className="btn btn-primary btn-lg" type="button">
                View Tech Stack
              </button>

             
            </div>

            <div key={currentStackIndex} className="stack_collection_card card shadow ">
              <div className="stack_collection_card_container">
                <div className="text_top_left">
                  <div className="text_top_left_container">

                    <p>
                      {currentStackItem.title}
                      <br />
                      {currentStackItem.description}
                    </p>
                  </div>
                </div>

                <div className="text_bottom_left">
                  <p>
                    Learn More about {currentStackItem.title} <FaAngleRight />
                  </p>
                </div>

                <div className="right_image_container">
                  <img src={currentStackItem.imageUrl} alt={currentStackItem.title} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
