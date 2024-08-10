import { Link } from "react-router-dom";
import { useState } from "react";
// import freefireImage from '../assets/freefire-image.jpg';
import freefireImage from '../assets/header-image.jpg';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrophy , faDice , faCoins } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faTrophy , faDice , faCoins);



const TournamentList = (props) => {
    const [tournamentsList , setTournamentsList] = useState([{id : 1123123} ,{id : 213192381273} ]);

    return (
        <>
            <div className="w-full bg-bg2 pt-20 p-4 text-white flex gap-10 flex-col">
                <div className="heading-section w-full">
                    <h1 className="text-[3em] font-bold">Tournament Hub</h1>
                    <p className="text-[0.9em] opacity-70">Your one-stop shop for all upcoming tournaments, find the perfect tournament for you and your team</p>
                    <p className="text-[0.9em] opacity-70">Want to find in-progress tournaments to keep track of your favourite teams? Check out the filters on the left</p>
                </div>
                <div className="tournament-section">
                    <div className="bg-navbar w-full p-1 grid grid-cols-10">
                        <div className="heading font-bold tracking-wider col-span-8 place-self-center text-[1.3em]">Tournaments</div>
                        <div className="place-self-center col-span-2 sorting-section grid grid-cols-5 w-full">
                            <span className="col-span-1 text-[0.8em]">SORT BY :</span> 
                            <select className="bg-black col-span-4 w-full" name="" id="">
                                <option value="">sort by low price</option>
                                <option value="">sort by low price</option>
                            </select>
                        </div>
                    </div>
                    <div className="list-section w-full p-2 grid grid-cols-4 gap-5">
                        {
                            tournamentsList.map((element , index) => {
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
                </div>
            </div>
        </>
    );
};

export default TournamentList;
