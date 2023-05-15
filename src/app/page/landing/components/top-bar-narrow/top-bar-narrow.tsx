"use client"; // this is a client component 👈🏽

import { faBars, faGlobe, faMagnifyingGlass, faSearch, faSliders, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { TopBarNarrowStyles } from "./top-bar-narrow-styles";
import FullLogo from "@/app/components/full-logo/full-logo";
import MidLogo from "@/app/components/mid-logo/mid-logo";
import { Dropdown } from "react-bootstrap";
import { BigScreen, MediumScreen } from "@/app/helper/responsive-size";

export default function TopBarNarrow() {

    return (
        <div style={TopBarNarrowStyles.outterContainer}>
            <div style={TopBarNarrowStyles.searchBar}>
                <FontAwesomeIcon icon={faSearch} style={TopBarNarrowStyles.searchBarIcon} />
                <div style={TopBarNarrowStyles.textContainer}>
                    <b>Anywhere</b>
                    <div style={TopBarNarrowStyles.subtitle}>Any week . Add guests</div>
                </div>
                <button>
                    <FontAwesomeIcon icon={faSliders} style={TopBarNarrowStyles.rightSearchBarIcon} />
                </button>
            </div>
        </div >
    )
}