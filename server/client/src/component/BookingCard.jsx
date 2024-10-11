import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import acne from '../assets/acne.jpg';
import peel from '../assets/chemical.jpg';
import botox from '../assets/botox.jpg';
import derma from '../assets/derma.jpg';
import laser from '../assets/laser.png';
import micro from '../assets/micro.jpg';
import skin from '../assets/skin.jpg';

function BookingCard() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const gradients = [
    "bg-gradient-to-r from-violet-200 to-pink-200",
    "bg-gradient-to-r from-green-200 to-blue-200",
    "bg-gradient-to-r from-yellow-200 to-red-200",
    "bg-gradient-to-r from-indigo-200 to-purple-200",
    "bg-gradient-to-r from-orange-200 to-yellow-200",
    "bg-gradient-to-r from-teal-200 to-cyan-200",
    "bg-gradient-to-r from-pink-200 to-red-200",
  ];

  return (
    <div className="w-3/4 m-auto mt-20">
      <Slider {...settings}>
        {
          dummyContent.map((d, index) => (
            <div key={d.id} className="p-4">
              <div className={`${gradients[index % gradients.length]} shadow-lg rounded-lg overflow-hidden h-auto w-full`}>
                <div className="w-full d-flex justify-content-center h-48 mt-4">
                  {/* Image with Bootstrap's rounded-circle class */}
                  <img 
                    src={d.image.src} 
                    alt={d.image.alt} 
                    className="rounded-circle h-70 w-70 object-cover" 
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2 text-gray-800">{d.header}</h4>
                  <ReadMoreText text={d.paragraph} />
                </div>
              </div>
            </div>
          ))
        }
      </Slider>
    </div>
  );
}

// ReadMoreText component to handle "Read More / Read Less" logic
const ReadMoreText = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {/* Show either the full text or a truncated version */}
      <p className="text-gray-600 mb-4">
        {isExpanded ? text : `${text.substring(0, 100)}...`}
      </p>
      {/* Toggle button */}
      <button 
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-300" 
        onClick={toggleExpansion}
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
};

const dummyContent = [
  {
    id: 1,
    image: {
      src: skin,
      alt: "Skin Treatment"
    },
    header: "Skin Rejuvenation",
    paragraph: "Experience the latest in skin rejuvenation technology. Our advanced treatments target fine lines, wrinkles, and uneven skin tone to reveal a more youthful, radiant complexion.",
  },
  {
    id: 2,
    image: {
      src: acne,
      alt: "Acne Treatment"
    },
    header: "Acne Solutions",
    paragraph: "Say goodbye to troublesome acne with our personalized treatment plans. We combine cutting-edge therapies with expert care to help you achieve clear, healthy skin.",
  },
  {
    id: 3,
    image: {
      src: laser,
      alt: "Laser Hair Removal"
    },
    header: "Laser Hair Removal",
    paragraph: "Achieve smooth, hair-free skin with our state-of-the-art laser hair removal treatments. Safe, effective, and suitable for all skin types.",
  },
  {
    id: 4,
    image: {
      src: botox,
      alt: "Botox Treatment"
    },
    header: "Botox Injections",
    paragraph: "Smooth away wrinkles and fine lines with our expert Botox treatments. Achieve a naturally refreshed look with minimal downtime."
  },
  {
    id: 5,
    image: {
      src: derma,
      alt: "Dermal Fillers"
    },
    header: "Dermal Fillers",
    paragraph: "Restore volume and enhance your facial contours with our premium dermal filler treatments. Natural-looking results tailored to your unique features."
  },
  {
    id: 6,
    image: {
      src: peel,
      alt: "Chemical Peel"
    },
    header: "Chemical Peels",
    paragraph: "Reveal fresher, younger-looking skin with our range of chemical peels. Customized treatments to address pigmentation, acne scars, and skin texture."
  },
  {
    id: 7,
    image: {
      src: micro,
      alt: "Microdermabrasion"
    },
    header: "Microdermabrasion",
    paragraph: "Gently exfoliate and rejuvenate your skin with our microdermabrasion treatments. Improve skin texture and tone for a radiant complexion."
  }
];

export default BookingCard;
