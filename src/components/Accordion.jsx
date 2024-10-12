import { useState } from "react";
import PropTypes from "prop-types";
//import icons
import starIcon from "../assets/images/icon-star.svg";
import iconMinus from "../assets/images/icon-minus.svg";
import iconplus from "../assets/images/icon-plus.svg";

export const Accordion = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleOpenIndex = (index) => {
    setOpenIndex(index == openIndex ? null : index);
  };

  return (
    <section className=" flex flex-col px-6 py-8 shadow-lg  w-10/12 rounded-lg mt-[-80px] bg-white max-w-xl">
      <div className="flex items-center mb-4">
        <img className="w-7" src={starIcon} alt="icon" />
        <span className="font-workSansBold  text-3xl ml-6">FAQs</span>
      </div>
      {data.map((item, index) => (
        <div key={index} className="w-full ">
          <button
            className="py-2  font-bold w-full flex items-center justify-between text-start gap-4 "
            onClick={() => handleOpenIndex(index)}
          >
            <h4 className="leading-4 text-sm">{item.question}</h4>
            <img
              src={`${openIndex === index ? iconMinus : iconplus}`}
              alt="icon"
            />
          </button>
          {openIndex === index && (
            <div className="accordion-content text-xs text-zinc-500 py-4 leading-5 ">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

Accordion.propTypes = {
  data: PropTypes.array,
};
