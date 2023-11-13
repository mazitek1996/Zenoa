// import React from "react";
// import { Container, Image } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import "./partner_section.css"; // Import your custom CSS for styling

// const PartnerSection = () => {
//   const partners = [
//     {
//       name: "Open AI",
//       logo: "https://cdn.worldvectorlogo.com/logos/amazon-web-services-1.svg",
//     },
//     {
//       name: "Amazon Cloud Service",
//       logo: "https://cdn.worldvectorlogo.com/logos/amazon-web-services-1.svg",
//     },
//     {
//       name: "Microsoft Azure",
//       logo: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-ar21.png",
//     },
//     {
//       name: "Google Cloud",
//       logo: "https://download.logo.wine/logo/Google_Cloud_Platform/Google_Cloud_Platform-Logo.wine.png",
//     },
//     {
//       name: "Meta",
//       logo: "https://download.logo.wine/logo/Meta_Platforms/Meta_Platforms-Logo.wine.png",
//     },
//     // Add more partners...
//   ];

//   return (
//     <div fluid className="py-4 container-fluid">
//       <h4 className="text-center">Our Partners</h4>
//       <div className="d-flex overflow-auto">
//         {partners.map((partner, index) => (
//           <div key={index} className="p-1 flex-shrink-0">
//             <div className="max-width-450 partner_logo">
//               <Image
//                 src={partner.logo}
//                 alt={partner.name}
//                 className=" partner-logo-img "
//                 fluid
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PartnerSection;

import React from "react";
import { Container, Image } from "react-bootstrap";
import "./partner_section.css"; // Import your custom CSS for styling

const PartnerSection = () => {
  const partners = [
    {
      name: "Open AI",
      logo: "https://cdn.worldvectorlogo.com/logos/amazon-web-services-1.svg",
    },
    {
      name: "Amazon Cloud Service",
      logo: "https://cdn.worldvectorlogo.com/logos/amazon-web-services-1.svg",
    },
    {
      name: "Microsoft Azure",
      logo: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-ar21.png",
    },
    {
      name: "Google Cloud",
      logo: "https://download.logo.wine/logo/Google_Cloud_Platform/Google_Cloud_Platform-Logo.wine.png",
    },
    {
      name: "Meta",
      logo: "https://download.logo.wine/logo/Meta_Platforms/Meta_Platforms-Logo.wine.png",
    },
    // Add more partners...
  ];

  return (
    <div className="py-4 partner-section">
      <Container fluid>
        <div className="partner_title_container">
        <h4 className="text-center">Our Partners</h4>
        </div>
        <div className="partners-container">
          {partners.map((partner, index) => (
            <div key={index} className="partner-logo-container">
              <Image
                src={partner.logo}
                alt={partner.name}
                className="partner-logo-img"
                fluid
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PartnerSection;
