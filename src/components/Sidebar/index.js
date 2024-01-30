import React from "react";
import { FaTruckArrowRight } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { GiCalculator } from "react-icons/gi";
import { RiLogoutCircleLine } from "react-icons/ri";

import './index.css'

const sideBarItems = [
    {
        id: "MY MOVES",
        icon: FaTruckArrowRight
    },
    {
        id: "MY PROFILE",
        icon: FaUser
    },
    {
        id: "GET QUOTE",
        icon: GiCalculator
    },
    {
        id: "LOGOUT",
        icon: RiLogoutCircleLine
    }
]

const activeSidearItem = sideBarItems[0]

const Sidebar = () => (
    <div className="sidebar-container">
        <ul className='side-bar'>
            {
                sideBarItems.map(eachItem => (
                    <li key={eachItem.id}>
                        <a key={eachItem.id}
                            // Update the ID in future
                            href={eachItem.id === "MY MOVES" ? "#top" : "#update_here"}
                            className={`side-bar-item ${eachItem.id === activeSidearItem.id && activeSidearItem.id !== "LOGOUT" ? "active-side-bar" : ""}`}
                        >
                            <eachItem.icon className='side-bar-icon' />
                            <p>{eachItem.id}</p>
                        </a>
                    </li>
                ))
            }
        </ul>
    </div>
)

export default Sidebar