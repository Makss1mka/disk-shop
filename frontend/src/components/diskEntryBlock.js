import React from "react"
import "../styles/diskEntryBlock.css"

export function DiskBlock({ diskObject }) {
    return (
        <div className="disk-entry-block">
            <div className="disk-entry-block-img"></div>
            <p className="disk-entry-block-text">{diskObject.name}</p>
            <p className="disk-entry-block-text">{diskObject.author}</p>
            <p className="disk-entry-block-text">{diskObject.janre}</p>
            <Price 
                salePrice={diskObject.salePrice}
                price={diskObject.price}
                currency={diskObject.currency}    
            />
        </div>
    )
}

function Price({ salePrice, price, currency }) {
    if (salePrice != null) {
        return (
            <div className="disk-entry-block-price-block">
                <div className="disk-entry-block-price-block-price">
                    {String(price) + " " + currency}
                </div>
                <div className="disk-entry-block-price-block-sale">
                    {String(salePrice) + " " + currency}
                </div>
            </div>
        )
    } else {
        return (
            <div className="disk-entry-block-price-block">
                <div className="disk-entry-block-price-block-without-sale">
                    {String(price) + " " + currency}
                </div>
            </div>
        )
    }
}

