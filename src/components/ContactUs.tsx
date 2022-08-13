import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ContactUs() {
  const [isSendContact, setIsSendContact] = useState<boolean>(false);
  const [contactInputData, setContactInputData] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    message: string;
  }>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const submitContactForm = async (event: any) => {
    event.preventDefault();
    console.log(contactInputData);
    // const history = useNavigate();
    await axios
      .post("https://css-my-home.vercel.app/contact", contactInputData)
      .then((res) => {
        setContactInputData({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
        })
        setIsSendContact(true);
        // history("/");
      });
  };
  useEffect(() => {
    if (isSendContact){
        setTimeout(() => {
            setIsSendContact(false) ;
        }, 3000);
    }
  })
  return (
    <div className="flex justify-center">
      <form className="w-full max-w-lg" onSubmit={submitContactForm}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="First Name"
              value={contactInputData.firstName}
              onChange={(event) =>
                setContactInputData({
                  ...contactInputData,
                  firstName: event.currentTarget.value,
                })
              }
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Last Name"
              value={contactInputData.lastName}
              onChange={(event) =>
                setContactInputData({
                  ...contactInputData,
                  lastName: event.currentTarget.value,
                })
              }
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              E-mail
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
              value={contactInputData.email}
              onChange={(event) =>
                setContactInputData({
                  ...contactInputData,
                  email: event.currentTarget.value,
                })
              }
              placeholder="name@example.com"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Message
            </label>
            <textarea
              className=" no-resize appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              id="message"
              value={contactInputData.message}
              onChange={(event) =>
                setContactInputData({
                  ...contactInputData,
                  message: event.currentTarget.value,
                })
              }
            ></textarea>
            {
                isSendContact && <p className="text-gray-600">Thanks for Contact us.We Respond as soon as possible</p>
            }
            
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button
              className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Send
            </button>
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </form>
    </div>
  );
}
