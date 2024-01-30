import React from "react";

import './index.css'

const Category = ({ categoryDetails }) => {
    const { displayName } = categoryDetails

    const renderCategoryItemsList = () => {
        const { items } = categoryDetails

        return (
            <ul className="category-items-list">
                {
                    items.filter(eachItem => eachItem.qty > 0).map(eachItem => (
                        <li key={eachItem.uniquieId} className="item-container">
                            <div>
                                <p className="item-name">{eachItem.displayName}</p>
                                {eachItem.typeOptions && <p className="material">{eachItem.typeOptions}</p>}
                            </div>
                            <p className="items-count">{eachItem.qty}</p>
                        </li>
                    ))
                }
            </ul>
        )
    }
    return (
        <li className="category-item-container">
            <h2 className="category-title">{displayName}</h2>
            {renderCategoryItemsList()}
        </li>
    )
}

export default Category