import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import StoreData from "../../../StoreData";

export default function Register() {
  const history = useNavigate();
  const [warning, setWarning] = useState<string>("");
  const [userLoginData, setUserLoginData] = useState<{
    name: string;
    password: string;
    email: String;
    confirm_password: String;
  }>({
    name: "",
    password: "",
    email: "",
    confirm_password: "",
  });
  const onSubmitHandler = (event: any) => {
    event.preventDefault();
    const { name, password, email, confirm_password } = userLoginData;
    if (name && password && email && confirm_password) {
      if (password === confirm_password) {
        axios
          .post("http://localhost:5000/user/registration", userLoginData)
          .then((result) => {
            if (result.status == 200) {
              setWarning("User Create Successfully!!!");
              setUserLoginData({
                name: "",
                password: "",
                email: "",
                confirm_password: "",
              });
              history('/login')
            } else {
             console.log(result);
            }
          })
          .catch((error) => {
            setWarning(error.response.data.message);
          })
      } else {
        setWarning("Password and Confirm Password are not Matched!!!");
      }
    } else {
      setWarning("All fields are required");
    }
  };

  useEffect(() => {
    if (StoreData.getLoginUser){
      history('/')
    }
  })
  return (
    <div className="flex flex-col justify-center">
      <div className="block mx-auto p-6 rounded-lg shadow-lg bg-white max-w-md">
        {warning ? (
          <div
            className="flex p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200"
            role="alert"
          >
            <svg
              aria-hidden="true"
              className="flex-shrink-0 w-5 h-5 text-red-700 dark:text-red-800"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Info</span>
            <div className="ml-3 text-sm font-medium text-red-700 dark:text-red-800">
              {warning}
            </div>
            <button
              type="button"
              className="ml-auto -mx-1.5 -my-1.5 bg-red-100 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300"
              data-dismiss-target="#alert-2"
              aria-label="Close"
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        ) : (
          ""
        )}
        <form onSubmit={onSubmitHandler}>
          <div>
            <div className="form-group mb-6">
              <input
                type="text"
                onChange={(event) =>
                  setUserLoginData({
                    ...userLoginData,
                    name: event.currentTarget.value,
                  })
                }
                value={userLoginData.name}
                name="name"
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="User Name"
                required
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="email"
                name="email"
                onChange={(event) =>
                  setUserLoginData({
                    ...userLoginData,
                    email: event.currentTarget.value,
                  })
                }
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Email address"
                required
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="password"
                name="password"
                onChange={(event) =>
                  setUserLoginData({
                    ...userLoginData,
                    password: event.currentTarget.value,
                  })
                }
                required
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Password"
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="password"
                name="confirm_password"
                onChange={(event) =>
                  setUserLoginData({
                    ...userLoginData,
                    confirm_password: event.currentTarget.value,
                  })
                }
                required
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput126"
                placeholder="Confirm Password"
              />
            </div>
            <div className="form-group form-check text-center mb-6">
              <input
                type="checkbox"
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
              />
              <label
                className="form-check-label inline-block text-gray-800"
                htmlFor="exampleCheck25"
              >
                Apply our Term and Condition
              </label>
            </div>
            <button
              type="submit"
              className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
