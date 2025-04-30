// import React, { useState } from 'react'
// import Image from 'next/image'
// import { FaExternalLinkAlt } from 'react-icons/fa'

// const ProjectLayout = ({ name, description, image, date, demoLink }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false)

//   const openModal = () => setIsModalOpen(true)
//   const closeModal = () => setIsModalOpen(false)

//   return (
//     <>
//       <div className='w-full max-w-xs mx-auto h-60'>
//         <div
//           className='text-sm md:text-base flex flex-col justify-between h-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg'
//         >
//           {image && (
//             <div className='w-full h-20 mb-4 relative'>
//               <Image src={image} alt={name} layout='fill' objectFit='cover' className='rounded-lg' />
//             </div>
//           )}
//           <div className='flex-1 flex flex-col'>
//             <h2 className='text-accent uppercase mb-2'>{name}</h2>
//             <p className='text-muted flex-1 text-gray-300'>
//               {description.length > 100 ? `${description.substring(0, 100)}...` : description}
//             </p>
//             <div className=' flex items-center'>
//               {description.length > 100 && (
//                 <button 
//                   onClick={openModal} 
//                   className='text-accent hover:underline'
//                 >
//                   Read More
//                 </button>
//               )}
//               <a 
//                 href={demoLink} 
//                 target='_blank' 
//                 rel='noopener noreferrer'
//                 className='ml-2 text-accent hover:underline'
//               >
//                 <FaExternalLinkAlt />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {isModalOpen && (
//         <div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50' onClick={closeModal}>
//           <div className='w-full max-w-lg mx-4 bg-background/60 backdrop-blur-md p-6 rounded-lg relative' onClick={e => e.stopPropagation()}>
//             <button 
//               className='absolute top-2 right-2 text-gray-600 hover:text-gray-900'
//               onClick={closeModal}
//             >
//               &times;
//             </button>
//             <h2 className='text-accent font-semibold mb-4'>{name}</h2>
//             {image && (
//               <div className='w-full h-48 mb-4 relative'>
//                 <Image src={image} alt={name} layout='fill' objectFit='cover' className='rounded-lg' />
//               </div>
//             )}
//             <p className='text-muted text-white'>{description}</p>
//             <a 
//               href={demoLink} 
//               target='_blank' 
//               rel='noopener noreferrer'
//               className='mt-4 inline-block text-accent hover:underline'
//             >
//               <FaExternalLinkAlt className='inline mr-1' />
//               View Project
//             </a>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

// export default ProjectLayout





































import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ProjectLayout = ({ media }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const openModal = (item) => {
    setSelectedMedia(item);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMedia(null);
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {media.map((item, index) => (
          <div
            key={index}
            className={`relative rounded-lg overflow-hidden cursor-pointer ${
              index % 5 === 0 ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'
            }`}
            onClick={() => openModal(item)}
            aria-label={`View ${item.type} ${index + 1}`}
            role="button"
            tabIndex={0}
          >
            {item.type === 'image' ? (
              <Image
                src={item.src}
                alt={`media-${index}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                loading="lazy"
              />
            ) : (
              <video
                src={item.src}
                className="w-full h-full object-cover rounded-lg"
                muted
                loop
                autoPlay
              />
            )}
          </div>
        ))}
      </div>

      {isModalOpen && selectedMedia && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70"
          onClick={closeModal}
        >
          <div
            className="relative max-w-3xl w-full mx-4 p-6 rounded-lg bg-black bg-opacity-50"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={closeModal}
            >
              ×
            </button>
            {selectedMedia.type === 'image' ? (
              <Image
                src={selectedMedia.src}
                alt="modal-media"
                layout="responsive"
                width={800}
                height={450}
                objectFit="contain"
                className="rounded-lg"
              />
            ) : (
              <video
                src={selectedMedia.src}
                className="w-full h-auto rounded-lg"
                controls
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectLayout;