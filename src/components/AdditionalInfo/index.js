import React from "react";

import InventoryItem from '../InventoryItem'
import './index.css'

const AdditionalInfo = ({ shipmentDetails }) => {
    const { items,
        oldFloorNo,
        newFloorNo,
        oldElevatorAvailability,
        newElevatorAvailability,
        oldParkingDistance,
        newParkingDistance } = shipmentDetails

    const renderInvetoryItems = () => {
        const {inventory} = items

        return (
            <ul className="inventory-items-list">
                {
                    inventory.map(eachInventory => <InventoryItem key={eachInventory.id} inventoryDetails={eachInventory} />)
                }
            </ul>
        )
    }

    return (
        <div className="additional-info-container">
            <div className="subheading-button-container">
                <p className="subheading-1">Additional Information</p>
                <button type="button" className="black-button">Edit Additional Info</button>
            </div>
            <p className="additional-information">Test data</p>
            <div className="subheading-button-container">
                <p className="subheading-1">House Details</p>
                <button type="button" className="black-button">Edit House Details</button>
            </div>

            <p className="subheading-2 text-primary">Existing House Details</p>
            <div className="house-deatils-container">
                <div className="">
                    <p className="subheading-2">Floor No.</p>
                    <p className="information">{oldFloorNo}</p>
                </div>
                <div>
                    <p className="subheading-2">Elevator Available.</p>
                    <p className="information">{oldElevatorAvailability}</p>
                </div>
                <div>
                    <p className="subheading-2">Distance from elevator/staircase from truck.</p>
                    <p className="information">{oldParkingDistance}</p>
                </div>
            </div>

            <p className="subheading-2 text-primary">New House Details</p>
            <div className="house-deatils-container">
                <div className="">
                    <p className="subheading-2">Floor No.</p>
                    <p className="information">{newFloorNo}</p>
                </div>
                <div>
                    <p className="subheading-2">Elevator Available.</p>
                    <p className="information">{newElevatorAvailability}</p>
                </div>
                <div>
                    <p className="subheading-2">Distance from elevator/staircase from truck.</p>
                    <p className="information">{newParkingDistance}</p>
                </div>
            </div>

            <div className="subheading-button-container">
                <p className="subheading-1">Inventory Details</p>
                <button type="button" className="black-button">Edit Inventory</button>
            </div>

            {renderInvetoryItems()}
        </div>
    )
}

export default AdditionalInfo