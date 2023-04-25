"use client"; // this is a client component 👈🏽

import { faBars, faGlobe, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function BnbTypeList() {
    const typeList = [
        {
            icon: 'https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg',
            name: 'OMG!',
        },
        {
            icon: 'https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg',
            name: 'Castles',
        },
        {
            icon: '',
            name: 'Design',
        },
        {
            icon: '',
            name: 'Trending',
        },
        {
            icon: '',
            name: 'Caves',
        },
        {
            icon: '',
            name: 'Private rooms',
        },
        {
            icon: '',
            name: 'Minsus',
        },
        {
            icon: '',
            name: 'Amazing views'
        },
        {
            icon: '',
            name: 'Luxe',
        },
        {
            icon: '',
            name: 'Boats',
        },
        {
            icon: '',
            name: 'Beach',
        },
        {
            icon: '',
            name: 'Camping',
        },
    ]

    return (
        <div style={{
            display: 'flex', flexDirection
                : 'row'
        }}>
            {
                typeList.map((item) => (
                    <div>
                        <img src={item.icon} />
                        {item.name}
                    </div>
                ))
            }
        </div >
    )
}