import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const Faqs = [
  {
    id: 1,
    Question: "How much does a Rajasthan trip cost?",
    Answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, impedit.",
  },
  {
    id: 2,
    Question: "How many days are enough to explore Rajasthan?",
    Answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, impedit.",
  },
  {
    id: 3,
    Question: "How can I arrange my trip in Rajasthan?",
    Answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, impedit.",
  },
  {
    id: 4,
    Question: "Why is Rajasthan so famous?",
    Answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, impedit.",
  },
  {
    id: 5,
    Question: "How to plan a 7-day Rajasthan trip?",
    Answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, impedit.",
  },
  {
    id: 6,
    Question: "Which kind of Rajasthan tour package is best?",
    Answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, impedit.",
  },
  {
    id: 7,
    Question: "How many types of languages are spoken in Rajasthan?",
    Answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, impedit.",
  },
  {
    id: 8,
    Question: "What clothes to wear when you are on the Rajasthan tour?",
    Answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, impedit.",
  },

  {
    id: 9,
    Question: "Which are the best places for a camel safari in Rajasthan?",
    Answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, impedit.",
  },
];

const FAQS = () => {
  const [visibleFaq, setVisibleFaq] = useState(null);

  const toggleHandler = (id) => {
    setVisibleFaq(visibleFaq === id ? null : id);
  };

  return (
    <div className="bg-[#e0d9b5] relative w-full h-full py-5 mb-[20rem]">
      <div className="w-11/12 mx-auto">
        <div className="flex gap-2 ml-10 mb-10">
          <div className=" w-[10px] h-[10px] lg:h-[14px] lg:w-[14px] mt-6 bg-[#9321ec]"></div>
          <div className="flex flex-col">
            <h2 className="text-black font-bold leading-normal text-[2.5rem]">
              Rajasthan Tour FAQs
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          {Faqs.map((faq) => (
            <div
              key={faq.id}
              className="flex w-[60rem] flex-col gap-2 py-4 px-4 bg-gray-200 rounded-xl"
            >
              <div className="flex gap-2 text-xl font-semibold">
                {visibleFaq === faq.id ? (
                  <FaMinus
                    className="mt-1 cursor-pointer"
                    onClick={() => toggleHandler(faq.id)}
                  />
                ) : (
                  <FaPlus
                    className="mt-1 cursor-pointer"
                    onClick={() => toggleHandler(faq.id)}
                  />
                )}
                <p className="">{faq.Question}</p>
              </div>

              {visibleFaq === faq.id && (
                <div className="text-lg">{faq.Answer}</div>
              )}
            </div>
          ))}
        </div>

        {/* nav bar */}

        {/* <div className="bg-gray-200 flex justify-evenly gap-10 mx-auto p-8 rounded-xl mt-10">
          <div>
            <h2 className="text-xl font-bold text-[#424242] text-[0.9375rem] leading-normal ">
              ABOUT US
            </h2>
            <div className="flex flex-col gap-3 text-lg font-semibold">
              <a
                className="text-[0.825rem] leading-normal font-normal text-[#858585]"
                href=""
              >
                ABOUT US
              </a>
              <a
                className="text-[0.825rem] leading-normal font-normal text-[#858585]"
                href=""
              >
                REVIEW
              </a>
              <a
                className="text-[0.825rem] leading-normal font-normal text-[#858585]"
                href=""
              >
                TERMS AND CONDITIONS
              </a>
              <a
                className="text-[0.825rem] leading-normal font-normal text-[#858585]"
                href=""
              >
                PRIVACY AND POLICY
              </a>
              <a
                className="text-[0.825rem] leading-normal font-normal text-[#858585]"
                href=""
              >
                COPYRIGHTS POLICIES
              </a>
              <a
                className="text-[0.825rem] leading-normal font-normal text-[#858585]"
                href=""
              >
                SUPPORT
              </a>
              <a
                className="text-[0.825rem] leading-normal font-normal text-[#858585]"
                href=""
              >
                APPS
              </a>
            </div>
          </div>

          <div>
            <div className="mb-2 flex flex-col gap-1">
              <h2 className="text-xl font-bold text-[#424242] text-[0.9375rem] leading-normal ">
                FOR SUPPLIERS
              </h2>
              <p className="text-[0.825rem] leading-normal font-normal text-[#858585]">
                LIST YOUR ACTIVITIES
              </p>
            </div>

            <div className="mb-2 flex flex-col gap-1">
              <h2 className="text-xl font-bold text-[#424242] text-[0.9375rem] leading-normal ">
                FOR BRANDS
              </h2>
              <p className="text-[0.825rem] leading-normal font-normal text-[#858585]">
                LIST YOUR ACTIVITIES
              </p>
              <p className="text-[0.825rem] leading-normal font-normal text-[#858585]">
                DESTINATION MARKETING
              </p>
            </div>

            <div className="mb-2 flex flex-col gap-1">
              <h2 className="text-xl font-bold text-[#424242] text-[0.9375rem] leading-normal ">
                FOR TRAVEL AGENTS
              </h2>
              <p className="text-[0.825rem] leading-normal font-normal text-[#858585]">
                SIGN UP AS A AGENT
              </p>
              <p className="text-[0.825rem] leading-normal font-normal text-[#858585]">
                AGENT LOGIN
              </p>
            </div>
          </div>

          <div className="mb-2 flex flex-col gap-1">
            <h2 className="text-xl font-bold text-[#424242] text-[0.9375rem] leading-normal ">
              FOR TRAVEL AGENTS
            </h2>
            <p className="text-[0.825rem] leading-normal font-normal text-[#858585]">
              SIGN UP AS A AGENT
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#424242] text-[0.9375rem] leading-normal">
              TRAVEL DESTINATIONS
            </h2>
            <div></div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default FAQS;
