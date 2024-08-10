import video from '../assets/esportsvideo.mp4';
import freefireImage from '../assets/header-image.jpg'
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCrown , faGamepad} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
library.add(faCrown , faGamepad)

const Home = () => {
    const [recentMatches , setRMathces] = useState([{} , {}]);
    const [upcomingList , setUpcomingList] = useState([{} , {}])

    return(
        <div className='bg-[#222E40] flex flex-col gap-2'>
            <div className="relative flex  items-center justify-center  h-[90vh] w-full">
                    {/* Background Video */}
                    <video className="absolute z-0 top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* overlay */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-[#1C283A] via-[#1C283A] via-100% to-black opacity-90"></div>

                 <div className="relative w-[700px] flex flex-col items-center justify-center h-full text-center text-white px-4">
                        <h1 className="text-5xl font-bold mb-4">Unleash Your Potential in the Ultimate eSports Arena</h1>
                        <p className="text-2xl mb-8">Your success starts here</p>
                        <div className="flex gap-4">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-wider py-2 px-4 rounded-full">
                            <Link to="/Tournaments">tournaments</Link>
                        </button>
                        <button className="bg-transparent border border-white hover:bg-white hover:text-black text-white uppercase tracking-wider   font-bold py-2 px-4 rounded-full">
                            <FontAwesomeIcon  icon="fa-crown" style={{ color: "#007FF4" }} /> <span className='tracking-wider'>leaderboard</span>
                        </button>
                        </div>
                    </div>
                </div>
                
                {/* upcoming tournaments */}

                <div className="list-section text-white w-full p-2 grid grid-col-1 sm:grid-cols-4 gap-5">
                        {
                            upcomingList.map((element , index) => {
                                return (
                                    <Link key={index} to={`/Tournaments/${element.id}`}>
                                        <div className="tournament-card hover:scale-105 transition-[0.5] rounded-[20px] bg-card ">
                                            <div className="relative image">
                                                <img src={freefireImage} alt="game" className="w-full h-[200px] object-cover rounded-t-[20px]" />
                                                <div className="price absolute right-4 bottom-4   flex flex-col items-center justify-center rounded-[10px] w-[100px] h-[60px] bg-bg2">
                                                    <span className="text-white font-bold tracking-wider"><span className="text-orange-500 text-[1.3em]">$</span>3000</span>
                                                    <span className="text-[.7em] font-semibold tracking-wider uppercase">prize pool</span>
                                                </div>
                                                <div className="price absolute left-4 bottom-3  flex flex-col items-center justify-center rounded-[10px] w-[130px] h-[50px] bg-bg2">
                                                    <span className="text-white font-bold tracking-wider"><span className="text-green-500 text-[1.3em]">$</span>3000</span>
                                                    <span className="text-[.7em] font-semibold tracking-wider uppercase">entry fee</span>
                                                </div>
                                            </div>
                                            <div className="info p-3 flex flex-col gap-5">
                                                <div className="time-section text-white opacity-70 uppercase grid grid-cols-2 text-[0.9em]">
                                                    <span>AUG 2 , 12 : 30 pm</span>
                                                    <span className="place-self-end pr-5">local</span>
                                                </div>
                                                <div className="name-section text-[1.5em] font-bold text-white tracking-wider">
                                                01.08 | 8pm BST / 3pm EDT $50+/- 3v3 Kill Race
                                                </div>
                                                <div className="grid grid-cols-3 text-[0.9em] text-center">
                                                    <div className="pricepool">
                                                        <span className="capitalize opacity-70 tracking-wider text-[0.8em]">Prize Pool</span>
                                                        <div><FontAwesomeIcon icon="fa-trophy" style={{ color: "#FFA600" }} /> <span>$3000</span></div>
                                                    </div>
                                                    <div className="team-size">
                                                        <span className="capitalize opacity-70 tracking-wider text-[0.8em]">Team Size</span>
                                                        <div><FontAwesomeIcon icon="fa-dice" style={{ color: "red" }} /> <span>1 v 1</span></div>
                                                    </div>
                                                    <div className="entry-fee">
                                                        <span className="capitalize opacity-70 tracking-wider text-[0.8em]">Entry Fee</span>
                                                        <div><FontAwesomeIcon icon="fa-coins" style={{ color: "green" }} /> <span>$3000</span></div>
                                                    </div>
                                                </div>
                                                <div className="registered"><span className="opacity-60">0 - Registered</span></div>
                                            </div>
                                        </div>                
                                    </Link>
                                )
                            })
                        }
                    </div>

                {/* recent matches */}
                <div className="reacentMatches bg-[#222E40] grid gap-5  p-5 rounded ">
                    <div><span className='text-white border-b  text-[0.9em] pb-5  border-blue-900 captalize '>Recent Matches</span></div>
                    <div className="table-header text-white p-3 opacity-80 grid grid-cols-6 place-items-center  bg-navbar">
                        <span className='opacity-70 '>Game</span>
                        <span className='opacity-70 '>Mode</span>
                        <span className='opacity-70 '>Format</span>
                        <span className='opacity-70 '>Best of</span>
                        <span className='opacity-70 '>Wager</span>
                        <span className='opacity-70 '>Winner</span>
                    </div>
                    
                    { recentMatches.map( (match , index ) => {
                            return (
                            <div className='text-white opacity-80 grid grid-cols-6 place-items-center'>
                                <span className='opacity-70 capitalize flex gap-3 items-center justify-between'>
                                    <FontAwesomeIcon icon='fa-gamepad' className='text-[1.5em] text-orange-500' />
                                    <span className='font-semibold'>free fire</span>
                                </span>
                                <span className='opacity-70 capitalize '>Clash Squad</span>
                                <span className='opacity-70 capitalize '>1 v 1</span>
                                <span className='opacity-70 capitalize '>3 </span>
                                <span className='opacity-70 capitalize '>$ 12.00</span>
                                <span className='opacity-70 capitalize '>username</span>   
                            </div>
                            ); 
                        })}


                </div>
        </div>
    )
};

export default Home;