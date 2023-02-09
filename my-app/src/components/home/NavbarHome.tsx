import React, { Dispatch } from 'react'
import { useNavigate } from 'react-router-dom';

interface Props {
  setActivepage: Dispatch<string>;
}

const NavbarHome: React.FC<Props> = ({ setActivepage }) => {

  const navigate = useNavigate()

  function handleLogout() {
    sessionStorage.removeItem("token")
    navigate('/')
  }

  return (
    <div className="navbar bg-base-100">
      <div className="flex w-5/12">
        <a href='/home' className="btn btn-ghost font-black text-xl sm:text-2xl text-blue-500">UDHYOGAM</a>
      </div>
      <div className="flex-none gap-2 w-7/12">
        <div className="form-control w-11/12">
          <input type="text" placeholder="Search" className="input input-bordered" />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" alt="user" />
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <button onClick={() => setActivepage("home")}>Home</button>
            </li>
            <li>
              <button onClick={() => setActivepage("applications")}>Applications</button>
            </li>
            <li><button onClick={() => setActivepage("profile")}>Profile</button></li>
            <li><button onClick={() => setActivepage("settings")}>Settings</button></li>
            <li><button onClick={() => handleLogout()}>Logout</button></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavbarHome