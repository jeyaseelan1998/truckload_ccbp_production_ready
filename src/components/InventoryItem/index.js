import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";

import './index.css'
import Category from "../Category";

const InventoryItem = ({ inventoryDetails }) => {
    const { displayName, category } = inventoryDetails

    const [isCollapsed, setIscollapsed] = useState(true)

    const updateIsCollapsed = () => setIscollapsed(prevState => !prevState)

    const getCount = () =>
        category.reduce((total, each) =>
            each.items.reduce((sum, curr) => curr.qty + sum, 0) + total, 0)

    return getCount() > 0 && (
        <li className="inventory-item-container">
            <button type="button" className="displayname-icon-container" onClick={updateIsCollapsed}>
                <div className="displayname-count">
                    <h2 className="inventory-display-name">{displayName}</h2>
                    <p className="count">{getCount()}</p>
                </div>
                {
                    isCollapsed ? <FaChevronDown className="down-arrow-icon" /> :
                        <FaChevronUp className="up-arrow-icon" />
                }
            </button>

            {!isCollapsed && (
                <ul className="category-list">
                    {
                        category.filter(each => each.items.reduce((sum, curr) => curr.qty + sum, 0) > 0)
                            .map(eachCategory => <Category
                                key={eachCategory.id}
                                categoryDetails={eachCategory} />)
                    }
                </ul>
            )}
        </li>
    )
}

export default InventoryItem