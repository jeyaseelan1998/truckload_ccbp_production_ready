import React, { useState } from "react";
import { FaHouse, FaArrowRightLong, FaRegCalendarDays } from "react-icons/fa6";
import { BsLuggageFill } from "react-icons/bs";
import { GiPathDistance } from "react-icons/gi";
import { TiPencil } from "react-icons/ti";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { GoAlertFill } from "react-icons/go";

import AdditionalInfo from "../AdditionalInfo";
import './index.css'

const ScheduleItem = ({ shipmentDetails }) => {
    const { estimateId,
        movingFrom,
        movingTo,
        movingOn,
        distance,
        propertySize,
        totalItems,
        moveDateFlexible,
        userId,
        oldFloorNo,
        newFloorNo,
        oldElevatorAvailability,
        newElevatorAvailability,
        oldParkingDistance,
        newParkingDistance,
        unpackingService,
        packingService,
        oldHouseAdditionalInfo,
        newHouseAdditionalInfo,
        status,
        orderDate,
        dateCreated,
        dateOfComplete,
        dateOfCancel,
        estimateStatus,
        customStatus,
        estimateComparison,
        estimateAmount,
        successfulPayments,
        orderReviewed,
        callBack,
        fromAddress,
        toAddress,
        serviceType,
        storageItems,
        items } = shipmentDetails

        const [expandDetails, setExpandDetails] = useState(false)

        const onExpandDetails = () => setExpandDetails(prevState => !prevState)
        
    return (
        <li className="schedule-item-container">
            <div className="schedule-item-shipment">
                <div>
                    <p className="subheading-2">From</p>
                    <p className="moving-address">{movingFrom}</p>
                </div>
                <div className="right-arrow-flex-item-container">
                    <button className="right-arrow-button-container">
                        <FaArrowRightLong size={25} color="#E36414" />
                    </button>
                </div>
                <div>
                    <p className="subheading-2">To</p>
                    <p className="moving-address">{movingTo}</p>
                </div>
                <div className="request-id-container">
                    <p className="subheading-2">Request&#35;</p>
                    <p className="estimate-request-id">{estimateId}</p>
                </div>
            </div>

            <div className="icon-details-button-container">
                <div className="icon-details-container">
                    <FaHouse className="info-icon" />
                    <p>{propertySize}</p>
                </div>
                <div className="icon-details-container">
                    <BsLuggageFill className="info-icon" />
                    <p>{totalItems}</p>
                </div>
                <div className="icon-details-container">
                    <GiPathDistance className="info-icon" />
                    <p>{distance}</p>
                </div>
                <div className="icon-details-container">
                    <FaRegCalendarDays className="info-icon" />
                    <p>{movingOn}</p>
                    <TiPencil className="pencil-icon" />
                </div>
                <div className="icon-details-container ">
                    {
                        moveDateFlexible !== "0" ? <ImCheckboxChecked className="checkbox-icon" /> : <ImCheckboxUnchecked className="checkbox-icon" />
                    }
                    <p>Is flexible</p>
                </div>
                <div className="button-group">
                    <button type="button" className="view-details-button" onClick={onExpandDetails}>View move details</button>
                    <button type="button" className="quotes-awiatng-button">Quotes awaiting</button>
                </div>
            </div>

            <div className="disclaimer-container">
                    <GoAlertFill className="alert-icon" />
                    <p className="disclaimer"><span>Disclaimer:</span> Please update 
                    your move date before two days of shifting</p>
            </div>
            
            {expandDetails && <AdditionalInfo shipmentDetails={shipmentDetails} />}

            <hr className="separator" />
        </li>
    )
}

export default ScheduleItem