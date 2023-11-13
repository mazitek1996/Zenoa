// import React from 'react';
// import './casestudy_section.css';

// const CaseStudySection = () => {
//   const caseStudies = [
//     {
//       title: "E-commerce Redesign",
//       description: "Revamping an outdated e-commerce platform to improve user experience and increase sales.",
//       problem: "Low conversion rates, outdated design, and poor user experience.",
//       solution: "Implemented a modern, user-friendly design, optimized checkout process, and integrated new features.",
//       process: "Conducted user research, created wireframes, developed and tested the new design, and launched the updated platform.",
//       results: "Increased conversion rates by 30%, improved customer satisfaction, and achieved a 20% boost in sales.",
//       imageUrl: "https://images.unsplash.com/photo-1678347123725-2d0d31bc06bd?q=80&w=2002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       learnMoreLink: "https://example.com/ecommerce_redesign_case_study",
//     },
//     {
//       title: "AI-Powered Chatbot Implementation",
//       description: "Integrating an AI-powered chatbot to enhance customer support and engagement.",
//       problem: "High support ticket volume, slow response times, and limited customer engagement.",
//       solution: "Implemented an AI-powered chatbot to handle common queries, provide instant responses, and escalate complex issues to human agents.",
//       process: "Integrated natural language processing (NLP), trained the chatbot, and continuously improved its performance based on user interactions.",
//       results: "Reduced support ticket volume by 40%, decreased response times, and achieved a 90% customer satisfaction rate.",
//       imageUrl: "https://images.unsplash.com/photo-1678347123725-2d0d31bc06bd?q=80&w=2002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       learnMoreLink: "https://example.com/chatbot_implementation_case_study",
//     },
//     // Add more case studies as needed
//   ];

//   return (
//     <div className="case_study_section">
//       <div className="case_study_root container">
//         {caseStudies.map((caseStudy, index) => (
//           <div key={index} className="case_study_card card">
//             <div className="row">
//               <div className="col-md-6 col-lg-6 col-sm-12 case_study_card_left">
//                 <div className="case_study_card_title">
//                   <h1>{caseStudy.title}</h1>
//                   <p>{caseStudy.description}</p>
//                   <ul>
//                     <li><strong>Problem:</strong> {caseStudy.problem}</li>
//                     <li><strong>Solution:</strong> {caseStudy.solution}</li>
//                     <li><strong>Process:</strong> {caseStudy.process}</li>
//                     <li><strong>Results:</strong> {caseStudy.results}</li>
//                   </ul>
//                   <button type="button" class="btn btn-primary">
//                     <a href={caseStudy.learnMoreLink} target="_blank" rel="noopener noreferrer">
//                       Learn More
//                     </a>
//                   </button>
//                 </div>
//               </div>
//               <div className="col-md-6 col-lg-6 col-sm-12 case_study_card_right">
//                 <img src={caseStudy.imageUrl} alt={caseStudy.title} className="img-fluid" />
//               </div>
//             </div>
            
//           </div>
//         ))}

        
//       </div>
//     </div>
//   );
// };

// export default CaseStudySection;
import React from 'react';
import './casestudy_section.css';


const CaseStudySection = () => {
  return (
<div className="case_study_section">

<div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src="https://images.unsplash.com/photo-1678347123725-2d0d31bc06bd?q=80&w=2002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="d-block mx-lg-auto img-fluid"
            alt="Case Study Image"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Our Approach to Innovation</h1>
          <p className="lead">
            At Zenoa, we are dedicated to revolutionizing the tech industry through our commitment to serving people, fostering innovation, and delivering exceptional solutions. Our approach sets us apart:
          </p>
          <ul>
            <li>
              <strong>People First:</strong> Our mission is to serve people. We prioritize understanding the needs of our clients and users, ensuring that our solutions enhance their experiences.
            </li>
            <li>
              <strong>Innovation:</strong> We thrive on innovation. Our team is constantly exploring cutting-edge technologies and creative solutions to address the challenges of today and tomorrow.
            </li>
            <li>
              <strong>Collaborative Workflow:</strong> Collaboration is at the core of our workflow. We believe that the best ideas emerge when diverse perspectives come together to solve complex problems.
            </li>
            <li>
              <strong>Proven Track Record:</strong> With a history of successful projects, we've consistently delivered results that exceed expectations. Explore our portfolio to witness our expertise in action.
            </li>
          </ul>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
              View Portfolios
            </button>
          </div>
        </div>
      </div>
    </div>

</div>

   
  );
};

export default CaseStudySection;
