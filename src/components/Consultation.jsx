import React, { useState } from "react";
import Rectangle56 from "../assets/Rectangle 56.png";
import { FaArrowRight } from "react-icons/fa6";

const Consultation = () => {
  const [formData, setFormData] = useState({ name: "", number: "", email: "" });

  const formChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-[#e0d9b5] relative w-full h-[100vh] py-10">
      <div className="w-11/12 mx-auto">
        <div className="flex gap-2 ml-10 mb-10">
          <div className="w-[10px] h-[10px] lg:h-[14px] lg:w-[14px] mt-6 bg-[#9321ec]"></div>
          <div className="flex flex-col">
            <h2 className="text-black font-bold leading-normal text-[2.5rem]">
              Get A Free Consultation.
            </h2>
            <h2 className="text-black font-bold leading-normal -mt-3 text-[2.5rem]">
              Just leave a Request Below.
            </h2>
          </div>
        </div>
      </div>

      <div className="flex relative flex-col w-full bg-[#e3d1a4] py-10">
        <form className="flex flex-col gap-5 ml-40" onSubmit={submitHandler}>
          <input
            className="py-5 text-xl border-2 border-orange-600 w-full lg:w-[30rem] bg-transparent outline-none px-5 rounded-xl"
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={formChangeHandler}
            placeholder="Enter Your Name"
          />
          <div className="flex gap-3">
            <input
              className="py-5 text-xl border-2 border-orange-600 w-[5rem] bg-transparent outline-none px-5 rounded-xl"
              type="text"
              required
              name="countryCode"
              placeholder="+91"
            />
            <input
              className="py-5 text-xl border-2 border-orange-600 w-full lg:w-[24rem] bg-transparent outline-none px-5 rounded-xl"
              type="text"
              required
              name="number"
              value={formData.number}
              onChange={formChangeHandler}
              placeholder="Enter Your Phone Number"
            />
          </div>
          <input
            className="py-5 text-xl border-2 border-orange-600 w-full lg:w-[30rem] bg-transparent outline-none px-5 rounded-xl"
            type="text"
            name="email"
            value={formData.email}
            onChange={formChangeHandler}
            placeholder="Enter your Email"
          />
          <div className="flex">
            <button className="py-5 text-xl font-semibold px-6 w-full lg:w-[30rem] bg-orange-600 text-white rounded-xl mt-5">
              Callback  <FaArrowRight className="ml-[16.2rem] text-3xl -mt-[1.6rem]"  />
            </button>
           
          </div>
        </form>
        <div className="absolute w-[24rem] -mt-[4.8rem] flex sm:ml-[66rem]">
          <img src={Rectangle56} alt="Consultation Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Consultation;
