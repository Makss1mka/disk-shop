import React from "react"
import "../styles/diskEntryBlock.css"

export function DiskBlock({ diskObject }) {
    return (
        <button className="disk-card" onClick={()=>{console.log("Test")}}>
            <div className="disk-card__img"></div>
            <Price 
                salePrice={diskObject.salePrice}
                price={diskObject.price}
                currency={diskObject.currency}    
            />
            <span className="disk-card__first-text">
                <span className="disk-card__main-text">{diskObject.name}</span> / <span className="disk-card__sub-text">{diskObject.janre}</span>
            </span>
            <span className="disk-card__first-text">
                <span className="disk-card__sub-text">{diskObject.author}</span>   
            </span>
        </button>
    )
}

function Price({ salePrice, price, currency }) {
    if (salePrice != null) {
        return (
            <div className="disk-card__price-block">
                <div className="disk-card__price-block-sale">
                    {String(salePrice) + " " + currency}
                </div>
                <div className="disk-card__price-block-price">
                    {String(price) + " " + currency}
                </div>
            </div>
        )
    } else {
        return (
            <div className="disk-card__price-block">
                <div className="disk-card__price-block-without-sale">
                    {String(price) + " " + currency}
                </div>
            </div>
        )
    }
}

