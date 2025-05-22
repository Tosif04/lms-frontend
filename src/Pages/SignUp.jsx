import { useState } from "react";
import HomeLayout from "../Layout/HomeLayout";
import { BsPersonCircle } from "react-icons/bs";

function SignUp() {
  const [previewImage, setPreviewImage] = useState("");

  return (
    <HomeLayout>
      <div className="flex overflow-x-auto items-center justify-center h-[100vh] ">
        <form className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]">
          <h1 className="text-center text-2xl font-bold">Registration Page</h1>
          <label htmlFor="image_upload" className="cursor-pointer">
            {previewImage ? (
              <img
                className="w-24 h-24 rounded-full m-auto "
                src={previewImage}
              />
            ) : (
              <BsPersonCircle className="w-24 h-24 rounded-full m-auto" />
            )}
          </label>
          <input
            type="file"
            className="hidden"
            name="image_uploads"
            id="image_uploads"
            accept=".jpg, .jpeg, .png, .svg"
          />
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              required
              name="email"
              id="email"
              placeholder="Enter Your Email.. "
              className="bg-transparent px-2 py-1 border"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <input
              type="password"
              required
              name="password"
              id="password"
              placeholder="Enter Your Password.. "
              className="bg-transparent px-2 py-1 border"
            />
          </div>

          <button className="w-full bg-black-500">
            Sign Up
          </button>
        </form>
      </div>
    </HomeLayout>
  );
}

export default SignUp;
