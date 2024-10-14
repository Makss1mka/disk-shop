import React, { useEffect, useState } from "react"
import { DiskBlock } from "../diskEntryBlock"
import "../../styles/katalog.css"

export function KatalogList() {
    const disk = {
        name: "Disk Test Name",
        author: "Disk Test Author",
        janre: "Disk Test Janre",
        salePrice: 1100,
        price: 1000,
        currency: "₽",
    }
    const [disks, setDisks] = useState([]);
    const [query, setQuery] = useState('react');
    const [page, setPage] = useState(1);
    const [pageQty, setPageQty] = useState(0);

    useEffect(()=>{
        fetch(`/search?query=${query}&page=${String(page)}`, ).then((response, err)=>{
            if (err) {
                console.log("Fetch error: ", err)
            } else {
                return response.json()
            }
        }).then((data, err)=>{
            if (err) {
                console.log("Cannto parse response: ", err)
            } else {
                console.log(data)
                setDisks(data)
            } 
        })
    }, [query, page]);

    return (
        <div className="katalog-outer">
            <div className="katalog">
                {console.log(process.env.REACT_APP_BASE_URL)}
                <DiskBlock diskObject={disk}/>
                <DiskBlock diskObject={disk}/>
                <DiskBlock diskObject={disk}/>
                <DiskBlock diskObject={disk}/>
                <DiskBlock diskObject={disk}/>
                <DiskBlock diskObject={disk}/>
                <DiskBlock diskObject={disk}/>
                <DiskBlock diskObject={disk}/>
            </div>
        </div>
    )
}