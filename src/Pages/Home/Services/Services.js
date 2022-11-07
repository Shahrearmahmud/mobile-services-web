import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";
// import img1 from "../../../images/3.png";
// import img2 from "../../../images/1.png";
// import img3 from "../../../images/7.jpg";
// import img4 from "../../../images/6.png";
// import img5 from "../../../images/2.png";
// import img6 from "../../../images/5.png";

// const services = [
//   {
//     id: 1,
//     name: "Display Change",
//     price: 5000 - 20000,
//     description:
//       "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.",
//     img: img1,
//   },

//   {
//     id: 2,
//     name: "Battery Exchange",
//     price: 1000 - 5000,
//     description:
//       "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.",
//     img: img2,
//   },
//   {
//     id: 3,
//     name: "Mobile Flashing ",
//     price: 550,
//     description:
//       "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.",
//     img: img3,
//   },
//   {
//     id: 4,
//     name: "Body Repair",
//     price: "1500-15000",
//     description:
//       "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.",
//     img: img4,
//   },
//   {
//     id: 5,
//     name: "Speaker Repair",
//     price: "100-1000",
//     description:
//       "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.",
//     img: img5,
//   },
//   {
//     id: 6,
//     name: "Complete Analysis",
//     price: "3000-20000",
//     description:
//       "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa",
//     img: img6,
//   },
// ];

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (

    <div id="services" className='container'>
    <h2 className='text-white text-center mt-5'>Our Services </h2>
    <div className=" row">
    <div className="services-container">
        {
            services.map(service => <Service
                 key={service._id} 
                 service={service}>

                 </Service>

            )
        }
        </div>
    </div>
</div>
  );
};

export default Services;
