import image from '../assets/header-image.jpg';
import { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrophy , faPhoneAlt , faClock , faCalendar , faHourglassHalf , faLink , faShuffle , faMoneyBill , faPersonRifle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faPhoneAlt , faTrophy , faClock , faCalendar , faLink , faHourglassHalf , faMoneyBill , faShuffle , faPersonRifle );
const TournamentDetails = () => {
    // const [teams , setTeams] = useState()
    const [activeSection, setActiveSection] = useState(1);
    const handleSectionChange = (sectionNumber) => {
        setActiveSection(sectionNumber);
    };
    return (
        <>
            <div className="w-full bg-[#162434] ">

                {/* image section */}
                <div className="relative main w-full flex h-[300px]">
                    <img src={image} alt="Tournament Header" className="absolute z-0 top-0 left-0 w-full h-full object-cover object-top" />
                    
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-[#1C283A] via-[#1C283A] via-70% to-black opacity-60"></div>

                    <div className="tournament-details place-self-end text-white flex items-center justify-between  w-full border-white z-10 relative p-4">
                        <div><span className='font-bold text-[2.5em]'>01.08 | 8pm BST / 3pm EDT $50+/- 3v3 Kill Race (Best of 3)</span></div>
                        <div className="join">
                            <button className='bg-blue-900 uppercase p-3 rounded-[20px] tracking-[3px]'>join Tournament</button>
                        </div>
                    </div>
                </div>

                {/* deatail-1 section */}
                <div className="flex place-items-start bg-[#1C283A]  justify-between p-5 h-[130px] mb-10">

                    <div className="first-section items-center flex gap-5 text-[1.2em]">
                        <div className='bg-[#101C2A] grid place-items-center grid-cols-4 gap-3 rounded-[50px] p-2 px-4'>
                                <FontAwesomeIcon icon="fa-shuffle" className='col-span-1' style={{ color: "yellow" }} />
                                <div className='flex flex-col col-span-3'>
                                    <span className='text-white tracking-[3px] font-semibold'>Platform</span>
                                    <span className='text-white text-[0.6em] opacity-60 uppercase'>mobile</span>
                                </div>
                        </div>
                        <div className='bg-[#101C2A] grid place-items-center grid-cols-4 gap-3 grid-cols-2 rounded-[50px] p-2 px-4'>
                                <FontAwesomeIcon icon="fa-trophy" className='col-span-1' style={{ color: "violet" }} />
                                <div className='flex flex-col col-span-3'>
                                    <span className='text-white tracking-[3px] font-semibold'>$ 3000</span>
                                    <span className='text-white text-[0.6em] opacity-60 uppercase'>Prize awarded</span>
                                </div>
                        </div>
                        <div className='bg-[#101C2A] grid place-items-center grid-cols-4 gap-3 grid-cols-2 rounded-[50px] p-2 px-4'>
                                <FontAwesomeIcon icon="fa-clock" className='text-green-500' />
                                <div className='flex flex-col col-span-3'>
                                    <span className='text-white  font-semibold'>Aug 01 , 12 : 30</span>
                                    <span className='text-white text-[0.6em] opacity-60'>start time</span>
                                </div>
                        </div>
                        <div className='bg-[#101C2A] grid place-items-center grid-cols-4 gap-5 grid-cols-2 rounded-[50px] p-2 px-4'>
                                <FontAwesomeIcon icon="fa-calendar" className='text-red-700' />
                                <div className='flex flex-col col-span-3'>
                                    <span className='text-white  font-semibold'>Aug 01 , 12 : 30</span>
                                    <span className='text-white text-[0.6em] opacity-60'>registration closes</span>
                                </div>
                        </div>

                    </div>
                    <div className='second-section flex items-center flex-col'>
                        <span className='text-white font-semibold'>Memebers Registered</span>
                        <span className='text-center'>
                            <span className='text-blue-900 text-[2em]'>0</span>
                            <span className='text-white text-[2.2em]'>/</span>
                            <span className='text-white text-[1.9em]'>16</span>
                        </span>
                    </div>

                </div>

                {/* main section */}
                <div className="p-2 ">
                     {/* Section Buttons */}
                    <div className="flex p-2 space-x-4 mb-6 bg-[#1C283A]">
                        <button
                            onClick={() => handleSectionChange(1)}
                            className={`py-2 px-4 text-white  ${activeSection === 1 ? 'border-b border-blue-900' : 'opacity-50'}`}
                        >
                            <span className='hover:text-white text-[0.9em]  font-semibold tracking-[2px] font-medium uppercase'>info</span>
                        </button>
                        <button
                            onClick={() => handleSectionChange(2)}
                            className={`py-2 px-4 text-white      ${activeSection === 2 ? 'border-b border-blue-900' : 'opacity-50'}`}
                        >
                            <span className='hover:text-white text-[0.9em]  font-semibold tracking-[2px] font-medium uppercase'>bracketss</span>
                        </button>
                        <button
                            onClick={() => handleSectionChange(3)}
                            className={`py-2 px-4 text-white      ${activeSection === 3 ? 'border-b border-blue-900' : 'opacity-50'}`}
                        >
                            <span className='hover:text-white text-[0.9em]  font-semibold tracking-[2px] font-medium uppercase'>teams</span>
                        </button>
                        <button
                            onClick={() => handleSectionChange(4)}
                            className={`py-2 px-4  text-white   ${activeSection === 4 ? 'border-b border-blue-900' : 'opacity-50'}`}
                        >
                            <span className='hover:text-white text-[0.9em]  font-semibold tracking-[2px] font-medium uppercase'>rules</span>
                        </button>
                    </div>

            {/* Section Content */}
                <div className="bg-[#1C283A]  rounded shadow">
                    {activeSection === 1 && (
                        <>
                        <div className='bg-[#1C283A] grid grid-cols-4 gap-2  p-1'>
                                <div className='bg-card'>
                                    <div className=' p-6  flex flex-col items-center '>
                                        <span className='text-white text-[2em] font-black tracking-wider '>2nd</span>
                                        <FontAwesomeIcon icon="fa-trophy" className='text-[4em]' style={{ color: "white" }} />
                                        <span className='text-white opacity-80 text-[2em]'>$0.02</span>
                                    </div>
                                </div>
                                <div className='bg-card col-span-2'>
                                    <div className=' p-6  flex flex-col items-center '>
                                        <span className='text-white text-[2em] font-black tracking-wider '>1st</span>
                                        <FontAwesomeIcon icon="fa-trophy" className='text-[4em]' style={{ color: "orange" }} />
                                        <span className='text-white opacity-80 text-[2em]'>$ 15.09</span>
                                    </div>
                                </div>
                                <div className='bg-card'>
                                    <div className=' p-6  flex flex-col items-center '>
                                        <span className='text-white text-[2em] font-black tracking-wider '>3rd</span>
                                        <FontAwesomeIcon icon="fa-trophy" className='text-[4em]' style={{ color: "brown" }} />
                                        <span className='text-white opacity-80 text-[2em]'>$ 00.0 </span>
                                    </div>
                                </div>
                        </div>
                        <div className='grid mt-5 pb-[100px] grid-cols-4 grid-rows-2 gap-3'>
                            <div className="bg-card px-5 pl-10 py-3 grid gap-2 rounded">
                                <FontAwesomeIcon icon="fa-coins" className='text-white m-1 text-[1.7em] opacity-50'/>
                                <span className='text-white  font-semibold tracking-wider text-[0.7em] opacity-80 uppercase'>prize pool</span>
                                <span className='text-white font-black tracking-wider text-[1.5em]'>$ 3000</span>
                            </div>
                            <div className="bg-card px-5 py-3 pl-10 grid gap-2 rounded">
                                <FontAwesomeIcon icon="fa-clock" className='text-white m-1 text-[1.7em] opacity-50'/>
                                <span className='text-white font-semibold tracking-wider text-[0.7em] opacity-80'>Tournament start time</span>
                                <span className='text-white font-black tracking-wider text-[1.5em]'>Aug 01 23 : 23</span>
                            </div>
                            <div className="bg-card px-5 py-3 pl-10 grid gap-2 rounded">
                                <FontAwesomeIcon icon="fa-calendar" className='text-white m-1 text-[1.7em] opacity-50'/>
                                <span className='text-white font-semibold tracking-wider text-[0.7em] opactiy-80'>registration ends</span>
                                <span className='text-white font-black tracking-wider text-[1.5em]'>Sep 02 12 : 00</span>
                            </div>
                            <div className="bg-card px-5 py-3 pl-10 grid gap-2 rounded">
                                <FontAwesomeIcon icon="fa-money-bill" className='text-white m-1 text-[1.7em] opacity-50'/>
                                <span className='text-white font-semibold tracking-wider text-[0.7em] opacity-80'>entry fee</span>
                                <span className='text-white font-black tracking-wider text-[1.5em]'>$ 20.08</span>
                            </div>
                            <div className="bg-card px-5 py-3 grid gap-2 rounded">
                                <FontAwesomeIcon icon="fa-coins" className='text-white m-1 text-[1.7em] opacity-50'/>
                                <span className='text-white font-semibold tracking-wider text-[0.7em] opacity-80'>prize pool</span>
                                <span className='text-white font-black tracking-wider text-[1.5em]'>$ 3000</span>
                            </div>
                            <div className="bg-card px-5 py-3 pl-10 grid gap-2 rounded">
                                <FontAwesomeIcon icon="fa-coins" className='text-white m-1 text-[1.7em] opacity-50'/>
                                <span className='text-white font-semibold tracking-wider text-[0.7em] opacity-80'>prize pool</span>
                                <span className='text-white font-black tracking-wider text-[1.5em]'>$ 3000</span>
                            </div>
                            <div className="bg-card px-5 py-3 pl-10 grid gap-2 rounded">
                                <FontAwesomeIcon icon="fa-person-rifle" className='text-white m-1 text-[1.7em] opacity-50'/>
                                <span className='text-white font-semibold tracking-wider text-[0.7em] opacity-80'>format</span>
                                <span className='text-white font-black tracking-wider text-[1.5em]'>3 v 3</span>
                            </div>
                            <div className="bg-card px-5 py-3 pl-10 grid gap-2 rounded">
                                <FontAwesomeIcon icon="fa-shuffle" className='text-white m-1 text-[1.7em] opacity-50'/>
                                <span className='text-white font-semibold tracking-wider text-[0.7em] opacity-80'>plAtform</span>
                                <span className='text-white font-black tracking-wider text-[1.5em]'>mobile</span>
                            </div>
                        </div>
                        </>
                    )}
                    {activeSection === 2 && (
                        <div>
                            <div className='flex items-center flex-col h-[400px] gap-3 justify-center'>
                                <FontAwesomeIcon icon="fa-hourglass-half" className='text-blue-900 text-[3em] animate-spin ' />
                                <span className='font-black text-white tracking-wider text-[2em]'>Brackets are Generating</span>
                            </div>
                        </div>
                    )}
                    {activeSection === 3 && (
                        <div className='p-3 grid   gap-3'>
                            {/* team card */}
                            <div className='team border-b border-blue-900 grid  rounded p-3'>
                                <span className='text-white text-[2em] place-self-center text-center font-black uppercase '>ALPHA Team</span>
                                {/* playeers */}
                                <div className='grid grid-cols-4 gap-3'>     
                                    <div className="bg-card border-blue-900 border  px-5  py-3 pl-10 grid gap-2 rounded-[50px]">
                                        <div className='flex  items-center gap-10'>
                                            <FontAwesomeIcon icon="fa-user" className='text-white m-1 text-[3em] opacity-50'/>
                                            <span className='text-white font-semibold tracking-wider text-[2em] opacity-80 '>user name</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )}
                    {activeSection === 4 && (
                        <div className='text-white rules'>
                            <span>
                                <h1>Rules for Mobile Players</h1>
                                <h2>Streaming</h2>
                                <p>All mobile players are encouraged to stream their gameplay during tournaments, though it is not mandatory. If you do stream, please ensure that VODs are enabled and communication is clear.</p>

                                <h2>Fair Play</h2>
                                <p>Mobile players must adhere to the same fair play standards as all other players. Any use of cheats, hacks, or exploits will result in immediate disqualification and potential bans from future tournaments.</p>

                                <h2>Network Requirements</h2>
                                <p>Mobile players must ensure a stable and strong internet connection to avoid disconnections during matches. Any disconnection after the first kill may result in forfeiture of the match, subject to admin review.</p>

                                <h2>Device Restrictions</h2>
                                <p>Mobile players are required to play on official versions of the game without any unauthorized modifications. Use of third-party apps or tools that provide unfair advantages is strictly prohibited.</p>

                                <h2>Communication</h2>
                                <p>Mobile players are encouraged to communicate with their team via in-game chat or an external app like Discord. Ensure that all communications are clear and free from toxic behavior.</p>

                                <h2>Reporting Issues</h2>
                                <p>Any issues or disputes during the match should be reported to the admins immediately. Provide clear evidence, including screenshots or video recordings, to support your claim.</p>

                                <h2>No Shows</h2>
                                <p>Mobile players have 15 minutes after the scheduled match time to show up with the proper number of players and be ready to start the match. Failure to do so will result in a forfeit.</p>

                                <h2>Game Updates</h2>
                                <p>Ensure that your game is up to date before the match. Delays caused by pending updates may result in a forfeit if not resolved promptly.</p>

                                <h2>Sportsmanship</h2>
                                <p>Maintain good sportsmanship throughout the tournament. Any form of harassment, verbal abuse, or unsportsmanlike behavior will not be tolerated and may result in penalties or disqualification.</p>
                            </span>
                        </div>
                    )}
                </div>
            </div>



            </div>
        </>
    );
};

export default TournamentDetails;
