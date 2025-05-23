import { FiMenu } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Footer from "../Components/Footer";

function HomeLayout({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //for checking if user is logged in
  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);

  //for displaying the options acc to role
  const role = useSelector((state) => state?.auth?.role);

  function changeWidth() {
    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = "auto";
  }

  function hideDrawer() {
    const element = document.getElementsByClassName("drawer-toggle");
    element[0].checked = false;

    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = "0";
  }

  function handleLogout(e){
    e.preventDefualt();

    // const res = await dispatch(logout());
    // if (res?.payload?.success)
      navigate("/");
  }

  return (
    <div className="min-h-[90vh]">
      <div className="drawer absolute left-0 z-50 w-fit">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer" className="cursor-pointer relative">
            <FiMenu
              onClick={changeWidth}
              size={"32px"}
              className="front bold text-white m-4"
            />
          </label>
        </div>
        <div className="drawer-side w-0">
          <label htmlFor="my-drawer" className="drawer-overplay"></label>
          <ul className="menu p-4 w-48 h-[100%] sm:w-80 bg-base-200 text-base-content relative">
            <li className="w-fit absolute right-2 z-50">
              <button onClick={hideDrawer}>
                <AiFillCloseCircle size={24} />
              </button>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>

            {isLoggedIn && role === "Admin" && (
              <li>
                <Link to="/admin/dashboard">Admin DashBoard</Link>
              </li>
            )}
            <li>
              <Link to="/courses">All Course</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>

            {!isLoggedIn && (
              <li className="absolute bottom-3 w-[90%]">
              <div className="w-full flex items-center justify-center gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 font-semibold rounded-md w-full text-center">
                  <Link to="/login">Login</Link>
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 font-semibold rounded-md w-full text-center">
                  <Link to="/signup">SignUp</Link>
                </button>
              </div>
              </li>
            )} 

             {isLoggedIn && (
              <li className="absolute bottom-3 w-[90%]">
              <div className="w-full flex items-center justify-center gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 font-semibold rounded-md w-full text-center">
                  <Link to="/user/profile">User Profile</Link>
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 font-semibold rounded-md w-full text-center">
                  <Link onClick={handleLogout()}>Logout</Link>
                </button>
              </div>
              </li>
            )}

          </ul>
        </div>
      </div>
      {children}
      <Footer />
    </div>
  );
}

export default HomeLayout;
