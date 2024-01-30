import React, { useEffect, useState } from 'react'

import Sidebar from '../Sidebar';
import ScheduleItem from '../ScheduleItem';

import DATASET from '../../data/dataset.json'
import './index.css'

const MyMoves = () => {
    const [dataset, setDataset] = useState({
        isLoading: true,
        customerEstimateFlow: []
    })

    const getUpdatedData = customerEstimateFlow => customerEstimateFlow.map(eachFlow => ({
        estimateId: eachFlow.estimate_id,
        userId: eachFlow.user_id,
        movingFrom: eachFlow.moving_from,
        movingTo: eachFlow.moving_to,
        movingOn: eachFlow.moving_on,
        distance: eachFlow.distance,
        propertySize: eachFlow.property_size,
        oldFloorNo: eachFlow.old_floor_no,
        newFloorNo: eachFlow.new_floor_no,
        oldElevatorAvailability: eachFlow.old_elevator_availability,
        newElevatorAvailability: eachFlow.new_elevator_availability,
        oldParkingDistance: eachFlow.old_parking_distance,
        newParkingDistance: eachFlow.new_parking_distance,
        unpackingService: eachFlow.unpacking_service,
        packingService: eachFlow.packing_service,
        oldHouseAdditionalInfo: eachFlow.old_house_additional_info,
        newHouseAdditionalInfo: eachFlow.new_house_additional_info,
        totalItems: eachFlow.total_items,
        status: eachFlow.status,
        orderDate: eachFlow.order_date,
        dateCreated: eachFlow.date_created,
        dateOfComplete: eachFlow.date_of_complete,
        dateOfCancel: eachFlow.date_of_cancel,
        estimateStatus: eachFlow.estimate_status,
        customStatus: eachFlow.custom_status,
        estimateComparison: eachFlow.estimate_comparison,
        estimateAmount: eachFlow.estimateAmount,
        successfulPayments: eachFlow.successfulPayments,
        orderReviewed: eachFlow.order_reviewed,
        callBack: eachFlow.call_back,
        moveDateFlexible: eachFlow.move_date_flexible,
        fromAddress: eachFlow.from_address,
        toAddress: eachFlow.to_address,
        serviceType: eachFlow.service_type,
        storageItems: eachFlow.storage_items,
        items: eachFlow.items
    }))

    useEffect(() => {
        setDataset({
            isLoading: false,
            customerEstimateFlow: getUpdatedData(DATASET.Customer_Estimate_Flow)
        })
    }, [])

    const renderMyMovesScheduleList = () => {
        const { customerEstimateFlow } = dataset

        return (
            <ul className='customer-estimate-flow-list'>
                {
                    customerEstimateFlow.map(eachSchedule => 
                        <ScheduleItem key={eachSchedule.estimateId} shipmentDetails={eachSchedule} />)
                }
            </ul>
        )
    }

    return (
        <div className='my-move-container'>
            <Sidebar />
            <div className='right-body'>
                <h1 className='my-moves-heading' id='top'>My Moves</h1>
                {!dataset.isLoading && renderMyMovesScheduleList()}
            </div>
        </div>
    )
}

export default MyMoves