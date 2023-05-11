"use client"; // this is a client component 👈🏽

import { faBars, faGlobe, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { BnbTypeListStyles } from "./bnb-type-list-styles";

export default function BnbTypeList() {
    const [selectType, setSelectedType] = useState(0);

    const typeList = [
        {
            icon: 'https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg',
            name: 'Rooms',
        },
        {
            icon: 'https://a0.muscache.com/pictures/48b55f09-f51c-4ff5-b2c6-7f6bd4d1e049.jpg',
            name: 'Minsus',
        },
        {
            icon: 'https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg',
            name: 'Castles',
        },
        {
            icon: 'https://a0.muscache.com/pictures/827c5623-d182-474a-823c-db3894490896.jpg',
            name: 'Ryokans',
        },
        {
            icon: 'https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg',
            name: 'Design',
        },
        {
            icon: 'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg',
            name: 'Amazing views',
        },
        {
            icon: 'https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg',
            name: 'Trending',
        },
        {
            icon: 'https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg',
            name: 'Cabins',
        },
        {
            icon: 'https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg',
            name: 'OMG'
        },
        {
            icon: 'https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg',
            name: 'Beach',
        },
        {
            icon: 'https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg',
            name: 'Mansions',
        },
        {
            icon: 'https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg',
            name: 'Camping',
        },
        {
            icon: 'https://a0.muscache.com/pictures/687a8682-68b3-4f21-8d71-3c3aef6c1110.jpg',
            name: 'Boats',
        },
    ]

    return (
        <div className="typeList" style={BnbTypeListStyles.listContainer}>
            {
                typeList.map((item, index) => (
                    <button style={BnbTypeListStyles.typeBtn} onClick={() => setSelectedType(index)}>
                        <div style={BnbTypeListStyles.imageContainer}>
                            <img src={item.icon} style={{ ...BnbTypeListStyles.image, opacity: selectType != index ? .6 : 1 }} /></div>
                        <div style={{ ...BnbTypeListStyles.title, opacity: selectType != index ? .6 : 1 }}>{item.name}</div>
                        <div style={{ ...BnbTypeListStyles.selecteBar, opacity: selectType != index ? 0 : 1, }} />
                    </button>
                ))
            }
        </div >
    )
}