// import React, { useState, useEffect } from 'react';
// import ItemLayout from './ItemLayout';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
// import { SiNextdotjs, SiTailwindcss, SiFirebase, SiMongodb, SiPython, SiGit } from 'react-icons/si';

// const Counter = ({ value }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const incrementCount = () => {
//       if (count < value) {
//         setCount(prevCount => prevCount + 1);
//       }
//     };

//     const timer = setInterval(incrementCount, 10);

//     return () => {
//       clearInterval(timer);
//     };
//   }, [count, value]);

//   return <span>{count}</span>;
// };

// const Index = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 2,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     cssEase: 'linear',
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   const testimonialSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <section className="py-20 w-full">
//       {/* Counters Section */}
//       <div className="grid grid-cols-12 gap-6 xs:gap-6 md:gap-8 w-full mb-12">
//         <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
//           <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
//             <Counter value={35} />+<br />
//             <sub className="font-semibold text-base">Projects Delivered</sub>
//           </p>
//         </ItemLayout>
//         <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
//           <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
//             <Counter value={5} />+<br />
//             <sub className="font-semibold text-base">Years of Experience</sub>
//           </p>
//         </ItemLayout>
//         <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
//           <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
//             <Counter value={98} />%<br />
//             <sub className="font-semibold text-base">Satisfaction rate</sub>
//           </p>
//         </ItemLayout>
//       </div>

//       {/* Technologies Carousel */}
//       <div className="mb-12">
//         <h2 className="text-3xl text-center samarkan-font text-accent mb-6">Technologies We Work With</h2>
//         <Slider {...settings}>
//           {[ 
//             { icon: <FaReact className="text-5xl mx-auto mb-2 text-blue-600" />, name: 'React' },
//             { icon: <SiNextdotjs className="text-5xl mx-auto mb-2 text-black" />, name: 'Next.js' },
//             { icon: <SiTailwindcss className="text-5xl mx-auto mb-2 text-teal-500" />, name: 'Tailwind CSS' },
//             { icon: <FaNodeJs className="text-5xl mx-auto mb-2 text-green-600" />, name: 'Node.js' },
//             { icon: <SiFirebase className="text-5xl mx-auto mb-2 text-yellow-500" />, name: 'Firebase' },
//             { icon: <SiMongodb className="text-5xl mx-auto mb-2 text-green-800" />, name: 'MongoDB' },
//             { icon: <SiPython className="text-5xl mx-auto mb-2 text-blue-500" />, name: 'Python' },
//             { icon: <FaGithub className="text-5xl mx-auto mb-2 text-gray-800" />, name: 'GitHub' },
//             { icon: <SiGit className="text-5xl mx-auto mb-2 text-orange-600" />, name: 'Git' }
//           ].map((tech, index) => (
//             <ItemLayout key={index} className="flex justify-center p-6 m-2">
//               <div className="p-4 text-center">
//                 {tech.icon}
//                 <p className="text-sm font-semibold">{tech.name}</p>
//               </div>
//             </ItemLayout>
//           ))}
//         </Slider>
//       </div>

//       {/* Testimonials Section */}
//       <div className="p-8 rounded-lg mb-12">
//   <h2 className="text-3xl text-center samarkan-font text-accent mb-6">What Clients Say</h2>
//   <Slider {...testimonialSettings}>
//     {[ 
//       { name: 'Krishna Kumar', feedback: 'Great to work with, delivered on time and exceeded expectations!' },
//       { name: 'Hishita Gupta', feedback: 'The best developers I have worked with! Highly recommended.' },
//       { name: 'Ghanshyam Mangla', feedback: 'Amazing experience, very professional and detail-oriented.' },
//     ].map((testimonial, index) => (
//       <ItemLayout key={index} className="p-6 m-4">
//         <div className="h-full flex flex-col justify-between  rounded-lg shadow-md p-6">
//           <p className="text-sm flex-grow">{`"${testimonial.feedback}"`}</p>
//           <h4 className="mt-4 font-semibold text-accent text-center">{testimonial.name}</h4>
//         </div>
//       </ItemLayout>
//     ))}
//   </Slider>
// </div>


//       {/* Services Overview */}
//       <div className="grid grid-cols-12 gap-8 w-full">
//   {[
//     {
//       "title": 'Web Development',
//       "description": 'Building responsive, high-performance websites using modern frameworks like React and Next.js.',
//       "services": ['Frontend Websites', 'Full Stack Websites', 'Responsive Design', 'API Integration']
//     },
//   {
//     "title": "E-Commerce Development",
//     "description": "Creating robust, scalable online stores with seamless user experiences using platforms like Shopify, WooCommerce, and custom solutions.",
//     "services": [
//       "Custom E-Commerce Platforms",
//       "Payment Gateway Integration",
//       "Product Catalog Management",
//       "Mobile-Responsive Stores"
//     ]
//   },
//   {
//     "title": "Mobile App Development",
//     "description": "Designing and developing intuitive, high-performance mobile applications for iOS and Android using React Native, Flutter, or native technologies.",
//     "services": [
//       "iOS App Development",
//       "Android App Development",
//       "Cross-Platform Apps",
//       "App Store Optimization"
//     ]
//   },
//   {
//     "title": "Billing Software Development",
//     "description": "Building secure, efficient billing and invoicing software tailored to streamline financial operations for businesses.",
//     "services": [
//       "Custom Billing Solutions",
//       "Automated Invoicing",
//       "Payment Processing Integration",
//       "Financial Reporting Tools"
//     ]
//   },
//   {
//     "title": "Jewelry Solutions",
//     "description": "Providing end-to-end digital solutions for jewelry businesses, including design, inventory management, and e-commerce integration.",
//     "services": [
//       "Jewelry E-Commerce Platforms",
//       "Inventory Management Systems",
//       "Custom Design Tools",
//       "Customer Engagement Features"
//     ]
//   },
//   {
//     "title": "Jewelry CAD Design",
//     "description": "Crafting precise and intricate jewelry designs using advanced CAD software for manufacturing and visualization.",
//     "services": [
//       "3D Jewelry Modeling",
//       "Custom CAD Designs",
//       "Design Prototyping",
//       "File Preparation for Production"
//     ]
//   },
//   {
//     "title": "3D Jewelry Rendering",
//     "description": "Producing high-quality, photorealistic 3D renderings of jewelry for marketing, e-commerce, and client presentations.",
//     "services": [
//       "Photorealistic Jewelry Renders",
//       "360-Degree Visualizations",
//       "Custom Lighting and Textures",
//       "Marketing-Ready Assets"
//     ]
//   },
//   {
//     "title": "Hip-Hop Cuban Jewelry CAD Design",
//     "description": "Specializing in bold, custom CAD designs for hip-hop and Cuban-style jewelry, tailored to unique client specifications.",
//     "services": [
//       "Custom Cuban Chain Designs",
//       "Bling and Gemstone Integration",
//       "3D Prototyping",
//       "Client-Specific CAD Models"
//     ]
//   },
//   {
//     "title": "Premium 5D Designing",
//     "description": "Offering cutting-edge 5D design services for jewelry and products, combining advanced visualization and precision modeling.",
//     "services": [
//       "5D Jewelry Modeling",
//       "Dynamic Design Simulations",
//       "High-Resolution Renders",
//       "Interactive Design Previews"
//     ]
//   },
//   {
//     "title": "Creative and Media",
//     "description": "Delivering innovative multimedia content to enhance brand visibility and engagement across digital platforms.",
//     "services": [
//       "Video Production",
//       "Graphic Design",
//       "Animation and Motion Graphics",
//       "Content Strategy"
//     ]
//   },
//   {
//     "title": "Product Photo Shoot",
//     "description": "Capturing high-quality, professional product photography to showcase items for e-commerce, marketing, and catalogs.",
//     "services": [
//       "Studio Product Photography",
//       "Lifestyle Product Shots",
//       "Post-Production Editing",
//       "360-Degree Product Views"
//     ]
//   },
//   {
//     "title": "Model Photo Shoot",
//     "description": "Organizing and executing professional model photography sessions to highlight fashion, jewelry, or brand campaigns.",
//     "services": [
//       "Fashion Model Photography",
//       "Jewelry Model Shoots",
//       "On-Location Photography",
//       "Photo Retouching"
//     ]
//   },
//   {
//     "title": "Creative Animated Videos",
//     "description": "Producing engaging animated videos for storytelling, marketing, and brand promotion with a focus on creativity.",
//     "services": [
//       "2D and 3D Animation",
//       "Explainer Videos",
//       "Motion Graphics",
//       "Storyboard Development"
//     ]
//   },
//   {
//     "title": "Social Media Posters & Marketing",
//     "description": "Designing eye-catching social media posters and campaigns to boost brand presence and audience engagement.",
//     "services": [
//       "Social Media Graphics",
//       "Ad Campaign Designs",
//       "Content Scheduling",
//       "Platform-Specific Creatives"
//     ]
//   },
//   {
//     "title": "Advertising Video Creation",
//     "description": "Crafting compelling video ads to drive conversions and brand awareness across digital and traditional channels.",
//     "services": [
//       "Short-Form Ad Videos",
//       "Promotional Video Production",
//       "Scriptwriting and Storyboarding",
//       "Video Editing and Effects"
//     ]
//   },
//   {
//     "title": "AI Automation Services",
//     "description": "Implementing AI-driven automation solutions to optimize business processes and enhance operational efficiency.",
//     "services": [
//       "Workflow Automation",
//       "Data Analysis and Insights",
//       "AI Integration Consulting",
//       "Custom AI Solutions"
//     ]
//   },
//   {
//     "title": "AI Chatbot and WhatsApp Services",
//     "description": "Developing intelligent chatbots and WhatsApp integrations for customer support, sales, and engagement.",
//     "services": [
//       "AI Chatbot Development",
//       "WhatsApp Business API Integration",
//       "Conversational AI Design",
//       "24/7 Customer Support Bots"
//     ]
//   },
//   {
//     "title": "AI-Powered Social Media Automation",
//     "description": "Automating social media management with AI to schedule posts, analyze performance, and engage audiences.",
//     "services": [
//       "Automated Post Scheduling",
//       "AI Content Generation",
//       "Analytics and Reporting",
//       "Audience Engagement Tools"
//     ]
//   },
//   {
//     "title": "AI Email & Call Automation",
//     "description": "Streamlining communication with AI-powered automation for email campaigns and call management.",
//     "services": [
//       "Automated Email Marketing",
//       "AI Call Routing",
//       "Personalized Email Sequences",
//       "Call Analytics"
//     ]
//   },
//   {
//     "title": "AI Sales & Operations Automation",
//     "description": "Enhancing sales and operational workflows with AI to improve efficiency, forecasting, and customer interactions.",
//     "services": [
//       "AI Sales Funnels",
//       "Inventory Automation",
//       "CRM Integration",
//       "Predictive Analytics"
//     ]
//   },
//   {
//     "title": "Branding & Legal",
//     "description": "Providing comprehensive branding and legal services to establish and protect your business identity.",
//     "services": [
//       "Brand Identity Development",
//       "Trademark Registration",
//       "Legal Compliance Consulting",
//       "Contract Drafting"
//     ]
//   },
//   {
//     "title": "Logo Pre-Design",
//     "description": "Creating unique, memorable logo concepts tailored to your brand’s vision and industry.",
//     "services": [
//       "Custom Logo Design",
//       "Brand Style Guides",
//       "Logo Variations",
//       "Vector File Delivery"
//     ]
//   },
//   {
//     "title": "Trademark and Club Registration",
//     "description": "Assisting with trademark registration and club or organization setup to secure intellectual property and legal status.",
//     "services": [
//       "Trademark Filing",
//       "Club Registration Support",
//       "IP Consultation",
//       "Legal Documentation"
//     ]
//   }
// ].map((service, index) => (
//     <ItemLayout
//       key={index}
//       className="col-span-full xs:col-span-6 sm:col-span-6 lg:col-span-4 p-6 rounded-lg  shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl "
//     >
//       <div className="flex flex-col h-full">
//         {/* Service Title */}
//         <h3 className="font-semibold text-xl mb-2 text-accent">{service.title}</h3>

//         {/* Service Description */}
//         <p className="text-sm text-muted mb-4 text-white">{service.description}</p>

//         {/* List of Services */}
//         <ul className="text-sm text-muted space-y-2">
//           {service.services.map((item, idx) => (
//             <li key={idx} className="flex items-center text-gray-400">
//               <span className="text-accent mr-2">✔</span>
//               {item}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </ItemLayout>
//   ))}
// </div>


//     </section>
//   );
// };

// export default Index;










































import React, { useState, useEffect } from 'react';
import ItemLayout from './ItemLayout';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiFirebase, SiMongodb, SiPython, SiGit } from 'react-icons/si';
import Image from 'next/image';

const Counter = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const incrementCount = () => {
      if (count < value) {
        setCount(prevCount => prevCount + 1);
      }
    };

    const timer = setInterval(incrementCount, 10);

    return () => {
      clearInterval(timer);
    };
  }, [count, value]);

  return <span>{count}</span>;
};

const Index = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-20 w-full">
      {/* Counters Section */}
      <div className="grid grid-cols-12 gap-6 xs:gap-6 md:gap-8 w-full mb-12">
        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            <Counter value={35} />+<br />
            <sub className="font-semibold text-base">Projects Delivered</sub>
          </p>
        </ItemLayout>
        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            <Counter value={5} />+<br />
            <sub className="font-semibold text-base">Years of Experience</sub>
          </p>
        </ItemLayout>
        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            <Counter value={98} />%<br />
            <sub className="font-semibold text-base">Satisfaction rate</sub>
          </p>
        </ItemLayout>
      </div>

      {/* Technologies Carousel */}
      <div className="mb-12">
        <h2 className="text-3xl text-center samarkan-font text-accent mb-6">Technologies We Work With</h2>
        <Slider {...settings}>
          {[
            { icon: <FaReact className="text-5xl mx-auto mb-2 text-blue-600" />, name: 'React' },
            { icon: <SiNextdotjs className="text-5xl mx-auto mb-2 text-black" />, name: 'Next.js' },
            { icon: <SiTailwindcss className="text-5xl mx-auto mb-2 text-teal-500" />, name: 'Tailwind CSS' },
            { icon: <FaNodeJs className="text-5xl mx-auto mb-2 text-green-600" />, name: 'Node.js' },
            { icon: <SiFirebase className="text-5xl mx-auto mb-2 text-yellow-500" />, name: 'Firebase' },
            { icon: <SiMongodb className="text-5xl mx-auto mb-2 text-green-800" />, name: 'MongoDB' },
            { icon: <SiPython className="text-5xl mx-auto mb-2 text-blue-500" />, name: 'Python' },
            { icon: <FaGithub className="text-5xl mx-auto mb-2 text-gray-800" />, name: 'GitHub' },
            { icon: <SiGit className="text-5xl mx-auto mb-2 text-orange-600" />, name: 'Git' },
          ].map((tech, index) => (
            <ItemLayout key={index} className="flex justify-center p-6 m-2">
              <div className="p-4 text-center">
                {tech.icon}
                <p className="text-sm font-semibold">{tech.name}</p>
              </div>
            </ItemLayout>
          ))}
        </Slider>
      </div>

      {/* Testimonials Section */}
      <div className="p-8 rounded-lg mb-12">
        <h2 className="text-3xl text-center samarkan-font text-accent mb-6">What Clients Say</h2>
        <Slider {...testimonialSettings}>
          {[
            { name: 'Krishna Kumar', feedback: 'Great to work with, delivered on time and exceeded expectations!' },
            { name: 'Hishita Gupta', feedback: 'The best developers I have worked with! Highly recommended.' },
            { name: 'Ghanshyam Mangla', feedback: 'Amazing experience, very professional and detail-oriented.' },
          ].map((testimonial, index) => (
            <ItemLayout key={index} className="p-6 m-4">
              <div className="h-full flex flex-col justify-between rounded-lg shadow-md p-6">
                <p className="text-sm flex-grow">{`"${testimonial.feedback}"`}</p>
                <h4 className="mt-4 font-semibold text-accent text-center">{testimonial.name}</h4>
              </div>
            </ItemLayout>
          ))}
        </Slider>
      </div>

      {/* Services Overview */}
      <div className="grid grid-cols-12 gap-8 w-full">
        {[
          {
            title: 'Web Development',
            description: 'Building responsive, high-performance websites using modern frameworks like React and Next.js.',
            services: ['Frontend Websites', 'Full Stack Websites', 'Responsive Design', 'API Integration'],
            image: '/qe.png',
          },
          {
            title: 'E-Commerce Development',
            description: 'Creating robust, scalable online stores with seamless user experiences using platforms like Shopify, WooCommerce, and custom solutions.',
            services: ['Custom E-Commerce Platforms', 'Payment Gateway Integration', 'Product Catalog Management', 'Mobile-Responsive Stores'],
            image: '/qe.png',
          },
          {
            title: 'Mobile App Development',
            description: 'Designing and developing intuitive, high-performance mobile applications for iOS and Android using React Native, Flutter, or native technologies.',
            services: ['iOS App Development', 'Android App Development', 'Cross-Platform Apps', 'App Store Optimization'],
            image: '/qe.png',
          },
          {
            title: 'Billing Software Development',
            description: 'Building secure, efficient billing and invoicing software tailored to streamline financial operations for businesses.',
            services: ['Custom Billing Solutions', 'Automated Invoicing', 'Payment Processing Integration', 'Financial Reporting Tools'],
            image: '/a.png',
          },
          {
            title: 'Jewelry Solutions',
            description: 'Providing end-to-end digital solutions for jewelry businesses, including design, inventory management, and e-commerce integration.',
            services: ['Jewelry E-Commerce Platforms', 'Inventory Management Systems', 'Custom Design Tools', 'Customer Engagement Features'],
            image: '/a.png',
          },
          {
            title: 'Jewelry CAD Design',
            description: 'Crafting precise and intricate jewelry designs using advanced CAD software for manufacturing and visualization.',
            services: ['3D Jewelry Modeling', 'Custom CAD Designs', 'Design Prototyping', 'File Preparation for Production'],
            image: '/a.png',
          },
          {
            title: '3D Jewelry Rendering',
            description: 'Producing high-quality, photorealistic 3D renderings of jewelry for marketing, e-commerce, and client presentations.',
            services: ['Photorealistic Jewelry Renders', '360-Degree Visualizations', 'Custom Lighting and Textures', 'Marketing-Ready Assets'],
            image: '/a.png',
          },
          {
            title: 'Hip-Hop Cuban Jewelry CAD Design',
            description: 'Specializing in bold, custom CAD designs for hip-hop and Cuban-style jewelry, tailored to unique client specifications.',
            services: ['Custom Cuban Chain Designs', 'Bling and Gemstone Integration', '3D Prototyping', 'Client-Specific CAD Models'],
            image: '/a.png',
          },
          {
            title: 'Premium 5D Designing',
            description: 'Offering cutting-edge 5D design services for jewelry and products, combining advanced visualization and precision modeling.',
            services: ['5D Jewelry Modeling', 'Dynamic Design Simulations', 'High-Resolution Renders', 'Interactive Design Previews'],
            image: '/a.png',
          },
          {
            title: 'Creative and Media',
            description: 'Delivering innovative multimedia content to enhance brand visibility and engagement across digital platforms.',
            services: ['Video Production', 'Graphic Design', 'Animation and Motion Graphics', 'Content Strategy'],
            image: '/../a.png',
          },
          {
            title: 'Product Photo Shoot',
            description: 'Capturing high-quality, professional product photography to showcase items for e-commerce, marketing, and catalogs.',
            services: ['Studio Product Photography', 'Lifestyle Product Shots', 'Post-Production Editing', '360-Degree Product Views'],
            image: '/../a.png',
          },
          {
            title: 'Model Photo Shoot',
            description: 'Organizing and executing professional model photography sessions to highlight fashion, jewelry, or brand campaigns.',
            services: ['Fashion Model Photography', 'Jewelry Model Shoots', 'On-Location Photography', 'Photo Retouching'],
            image: '/a.png',
          },
          {
            title: 'Creative Animated Videos',
            description: 'Producing engaging animated videos for storytelling, marketing, and brand promotion with a focus on creativity.',
            services: ['2D and 3D Animation', 'Explainer Videos', 'Motion Graphics', 'Storyboard Development'],
            image: '/images/services/animated-videos.jpg',
          },
          {
            title: 'Social Media Posters & Marketing',
            description: 'Designing eye-catching social media posters and campaigns to boost brand presence and audience engagement.',
            services: ['Social Media Graphics', 'Ad Campaign Designs', 'Content Scheduling', 'Platform-Specific Creatives'],
            image: '/images/services/social-media.jpg',
          },
          {
            title: 'Advertising Video Creation',
            description: 'Crafting compelling video ads to drive conversions and brand awareness across digital and traditional channels.',
            services: ['Short-Form Ad Videos', 'Promotional Video Production', 'Scriptwriting and Storyboarding', 'Video Editing and Effects'],
            image: '/images/services/ad-videos.jpg',
          },
          {
            title: 'AI Automation Services',
            description: 'Implementing AI-driven automation solutions to optimize business processes and enhance operational efficiency.',
            services: ['Workflow Automation', 'Data Analysis and Insights', 'AI Integration Consulting', 'Custom AI Solutions'],
            image: '/images/services/ai-automation.jpg',
          },
          {
            title: 'AI Chatbot and WhatsApp Services',
            description: 'Developing intelligent chatbots and WhatsApp integrations for customer support, sales, and engagement.',
            services: ['AI Chatbot Development', 'WhatsApp Business API Integration', 'Conversational AI Design', '24/7 Customer Support Bots'],
            image: '/images/services/ai-chatbot.jpg',
          },
          {
            title: 'AI-Powered Social Media Automation',
            description: 'Automating social media management with AI to schedule posts, analyze performance, and engage audiences.',
            services: ['Automated Post Scheduling', 'AI Content Generation', 'Analytics and Reporting', 'Audience Engagement Tools'],
            image: '/images/services/ai-social-media.jpg',
          },
          {
            title: 'AI Email & Call Automation',
            description: 'Streamlining communication with AI-powered automation for email campaigns and call management.',
            services: ['Automated Email Marketing', 'AI Call Routing', 'Personalized Email Sequences', 'Call Analytics'],
            image: '/images/services/ai-email.jpg',
          },
          {
            title: 'AI Sales & Operations Automation',
            description: 'Enhancing sales and operational workflows with AI to improve efficiency, forecasting, and customer interactions.',
            services: ['AI Sales Funnels', 'Inventory Automation', 'CRM Integration', 'Predictive Analytics'],
            image: '/images/services/ai-sales.jpg',
          },
          {
            title: 'Branding & Legal',
            description: 'Providing comprehensive branding and legal services to establish and protect your business identity.',
            services: ['Brand Identity Development', 'Trademark Registration', 'Legal Compliance Consulting', 'Contract Drafting'],
            image: '/images/services/branding-legal.jpg',
          },
          {
            title: 'Logo Pre-Design',
            description: 'Creating unique, memorable logo concepts tailored to your brand’s vision and industry.',
            services: ['Custom Logo Design', 'Brand Style Guides', 'Logo Variations', 'Vector File Delivery'],
            image: '/images/services/logo-design.jpg',
          },
          {
            title: 'Trademark and Club Registration',
            description: 'Assisting with trademark registration and club or organization setup to secure intellectual property and legal status.',
            services: ['Trademark Filing', 'Club Registration Support', 'IP Consultation', 'Legal Documentation'],
            image: '/images/services/trademark.jpg',
          },
        ].map((service, index) => (
          <ItemLayout
            key={index}
            className="col-span-full xs:col-span-6 sm:col-span-6 lg:col-span-4 p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
          >
            <div className="flex flex-col h-full">
              {/* Service Image */}
              {service.image && (
                <div className="relative w-full h-40 mb-4">
                  <Image
                    src={service.image}
                    alt={`${service.title} illustration`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                    loading="lazy"
                  />
                </div>
              )}
              {/* Service Title */}
              <h3 className="font-semibold text-xl mb-2 text-accent">{service.title}</h3>
              {/* Service Description */}
              <p className="text-sm text-muted mb-4 text-white">{service.description}</p>
              {/* List of Services */}
              <ul className="text-sm text-muted space-y-2">
                {service.services.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-400">
                    <span className="text-accent mr-2">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ItemLayout>
        ))}
      </div>
    </section>
  );
};

export default Index;
