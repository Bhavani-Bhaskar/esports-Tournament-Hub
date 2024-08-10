import { Link } from "react-router-dom";
import { useState } from "react";
import logo from './assets/eslogo2.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faAngleDown , faGear  ,faArrowRightFromBracket , faDumbbell , faPiggyBank} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faUser, faAngleDown , faGear , faArrowRightFromBracket  , faDumbbell  , faPiggyBank);

const Navbar = () => {
  const [isRegistered, setRegistration] = useState(true);
  const [toggleNav, setNavBar] = useState(false);

  return (
    <div className="navbar text-gray-400 px-3 pr-7 w-full py-4 bg-navbar   flex items-center justify-between">
      <div className="primary items-center flex gap-5">
        <Link to="/" className="hover:text-white text-[1.1em] tracking-wider font-medium uppercase">
            <div className="flex gap-3">
                <img src={logo} alt="" className="h-[50px] r" />
                <div className="flex flex-col">
                  <span className="text-blue-900 font-black text-[.5em] uppercase">THE</span>
                  <span className="text-white text-[1em] tracking-widerfont-bold">Esports HUB</span>
                  <span className="text-blue-900 font-black text-[.5em] uppercase">v.01.01</span>
                </div>
            </div>
        </Link>
        <Link to="/" className="hover:text-white text-[1.1em] tracking-wider font-medium uppercase">Games</Link>
        <Link to="/Tournaments" className="hover:text-white text-[1.1em] tracking-wider font-medium uppercase">Tournaments</Link>
        <Link to="/" className="hover:text-white text-[1.1em] tracking-wider font-medium uppercase">Store</Link>
      </div>
      <div className="secondary">
        {!isRegistered ? (
          <div className="flex gap-5">
            <button className="rounded-[30px] font-semibold tracking-wider border text-white px-3 py-1 border-blue-900">Join Free</button>
            <button className="rounded-[30px] font-bold tracking-wider flex gap-2 items-center text-white px-3 py-1 bg-blue-900">
              <FontAwesomeIcon className="h-[15px]" icon="user" style={{ color: "#d9dbde" }} />
              <span>Sign-Up</span>
            </button>
          </div>
        ) : (
          <div>
            <div className="relative-group relative" onMouseEnter={() => setNavBar(true)} onMouseLeave={() => setNavBar(false)}>
              <div className="flex mx-3 text-sm gap-3 cursor-pointer text-white font-semibold items-center">
                <img src="" alt="" />
                <div className="naming-section flex flex-col">
                  <span className="text-[15px]">Bhasker</span>
                  <span className="text-[7px] text-blue-900 uppercase">Member</span>
                </div>
                <div className="arrow">
                  <FontAwesomeIcon icon="angle-down" style={{ color: "#a1a3a5" }} />
                </div>
              </div>
              <div className={`${toggleNav ? 'grid' : 'hidden'} toglebar p-4 grid-rows-5 absolute right-[10px] top-[40px] w-[200px] bg-bg2 rounded-[5px]` } onMouseEnter={() => setNavBar(true)} onMouseLeave={() => setNavBar(false)}>
                    <Link className="w-full hover:bg-navbar grid grid-cols-5 itesm-center place-items-center   h-[35px] gap-[5px] px-3 py-1"><FontAwesomeIcon icon="user"  className="col-span-1 " style={{ color: "#1f66e0" }} /><span className="text-white col-span-4  place-self-start">profile</span></Link>
                    <Link className="w-full hover:bg-navbar grid grid-cols-5 itesm-center place-items-center h-[35px] gap-[5px] px-3 py-1"><FontAwesomeIcon icon="fa-piggy-bank "  className="col-span-1 " style={{ color: "#1f66e0" }} /><span className="text-white col-span-4  place-self-start">bank</span></Link>
                    <Link className="w-full hover:bg-navbar grid grid-cols-5 itesm-center place-items-center h-[35px] gap-[5px] px-3 py-1"><FontAwesomeIcon icon="fa-dumbbell"  className="col-span-1 " style={{ color: "#1f66e0" }} /><span className="text-white col-span-4  place-self-start">challenges</span></Link>
                    <Link className="w-full hover:bg-navbar grid grid-cols-5 itesm-center place-items-center h-[35px] gap-[5px] px-3 py-1"><FontAwesomeIcon icon="fa-solid fa-gear"  className="col-span-1 " style={{color: "#1f66e0",}} /><span className="text-white col-span-4  place-self-start">settings</span></Link>
                    <Link className="w-full hover:bg-navbar grid grid-cols-5 itesm-center place-items-center h-[35px] gap-[5px] px-3 py-1"><FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket"  className="col-span-1 " style={{color: "#1f66e0",}} /><span className="text-white col-span-4  place-self-start">log out</span></Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
