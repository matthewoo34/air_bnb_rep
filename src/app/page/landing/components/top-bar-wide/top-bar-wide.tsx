"use client"; // this is a client component 👈🏽

import { faBars, faGlobe, faMagnifyingGlass, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { TopBarWideStyles } from "./top-bar-wide-styles";
import FullLogo from "@/app/components/full-logo/full-logo";
import MidLogo from "@/app/components/mid-logo/mid-logo";

export default function TopBarWide() {
    const [isHoverSearch, setIsHoverSearch] = useState(false);
    const [isHoverHome, setIsHoverHome] = useState(false);
    const [isHoverGlobe, setIsHoverGlobe] = useState(false);
    const [isHoverUser, setIsHoverUser] = useState(false);
    const [clickedSearch, setClickedSearch] = useState(false);
    const [searchType, setSearchType] = useState(0);

    return (
        <div style={TopBarWideStyles.TopBarContainer}>
            <div style={TopBarWideStyles.TopRowContainer}>
                <a className="logo" aria-label="Airbnb homepage" href="/" style={TopBarWideStyles.LogoLink}>
                    <FullLogo />
                    {/* <MidLogo/> */}
                </a>
                <div>
                    {
                        !clickedSearch ?
                            <div className="searchBox" style={TopBarWideStyles.SearchBoxContainer}
                                onMouseEnter={() => setIsHoverSearch(true)}
                                onMouseLeave={() => setIsHoverSearch(false)}
                                onClick={() => setClickedSearch(true)}>
                                <button
                                    style={{
                                        ...TopBarWideStyles.SearchBoxLeftBtn,
                                        boxShadow: isHoverSearch ? '0px 2px lightgrey' : '0px 1px lightgrey',
                                    }}>
                                    <div style={TopBarWideStyles.SearchBoxLeftBtnText}>Anywhere</div></button>
                                <button style={{
                                    ...TopBarWideStyles.SearchBoxMidBtn,
                                    boxShadow: isHoverSearch ? '0px 2px lightgrey' : '0px 1px lightgrey',
                                }}>Any week</button>
                                <button style={{
                                    ...TopBarWideStyles.SearchBoxRightBtn,
                                    boxShadow: isHoverSearch ? '0px 2px lightgrey' : '0px 1px lightgrey',
                                }}>
                                    <div style={TopBarWideStyles.SearchBoxRightBtnDiv}> Add guests
                                        <FontAwesomeIcon icon={faMagnifyingGlass} color="white" style={TopBarWideStyles.SearchBoxSearchIcon} />
                                    </div>
                                </button>
                            </div>
                            :
                            <div>
                                <button
                                    onClick={() => setSearchType(0)}
                                    style={{
                                        ...TopBarWideStyles.SearchTypeBtn,
                                        borderBottomWidth: searchType == 0 ? 2 : 0,
                                    }}>
                                    Stays
                                </button>
                                <button
                                    onClick={() => setSearchType(1)}
                                    style={{
                                        ...TopBarWideStyles.SearchTypeBtn,
                                        borderBottomWidth: searchType == 1 ? 2 : 0,
                                    }}>
                                    Experiences
                                </button>
                                <button
                                    onClick={() => setSearchType(2)}
                                    style={{
                                        ...TopBarWideStyles.SearchTypeBtn,
                                        borderBottomWidth: searchType == 2 ? 2 : 0,
                                    }}>
                                    Online Experiences
                                </button>
                            </div>

                    }

                </div>
                <div style={TopBarWideStyles.TopBarRightContainer}>
                    <button
                        onMouseEnter={() => setIsHoverHome(true)}
                        onMouseLeave={() => setIsHoverHome(false)}
                        className={`homeBtn ${isHoverHome && 'flatBtnHover'}`} style={TopBarWideStyles.TopBarRightBtn}>
                        Airbnb your home
                    </button>
                    <button
                        onMouseEnter={() => setIsHoverGlobe(true)}
                        onMouseLeave={() => setIsHoverGlobe(false)}
                        className={`homeBtn ${isHoverGlobe && 'flatBtnHover'}`} style={TopBarWideStyles.TopBarRightBtn}>
                        <FontAwesomeIcon icon={faGlobe} />
                    </button>
                    <button
                        onMouseEnter={() => setIsHoverUser(true)}
                        onMouseLeave={() => setIsHoverUser(false)}
                        style={{
                            ...TopBarWideStyles.UserBtn, boxShadow: isHoverUser ? '0px 2px lightgrey' : '0px 0px lightgrey',
                        }}>
                        <FontAwesomeIcon icon={faBars} />
                        <FontAwesomeIcon icon={faUser} style={TopBarWideStyles.UserIcon} />
                    </button>
                </div>
            </div >
            <div style={TopBarWideStyles.AdvancedSearchContainer}>
                {
                    clickedSearch &&
                    <div style={TopBarWideStyles.AdvancedSearchBox}>
                        <button style={TopBarWideStyles.AdvancedSearchBoxLeftBtn}>
                            <b style={TopBarWideStyles.AdvancedSearchBoxTitle}>Where</b>
                            <div style={TopBarWideStyles.AdvancedSearchBoxSubTitle}>
                                Search destinations
                            </div>
                        </button>
                        <div style={TopBarWideStyles.AdvancedSearchBoxSeaprateLine} />
                        <button style={TopBarWideStyles.AdvancedSearchBoxMiddleBtn}>
                            <b style={TopBarWideStyles.AdvancedSearchBoxTitle}>Check in</b>
                            <div style={TopBarWideStyles.AdvancedSearchBoxSubTitle}>
                                Add dates
                            </div>
                        </button>
                        <div style={TopBarWideStyles.AdvancedSearchBoxSeaprateLine} />

                        <button style={TopBarWideStyles.AdvancedSearchBoxMiddleBtn}>
                            <b style={TopBarWideStyles.AdvancedSearchBoxTitle}>Check out</b>
                            <div style={TopBarWideStyles.AdvancedSearchBoxSubTitle}>
                                Add dates
                            </div>
                        </button>
                        <div style={TopBarWideStyles.AdvancedSearchBoxSeaprateLine} />

                        <button style={TopBarWideStyles.AdvancedSearchBoxRightBtn}>
                            <div style={TopBarWideStyles.AdvancedSearchBoxRightBtnLeftContainer}>
                                <b style={TopBarWideStyles.AdvancedSearchBoxTitle}>Who</b>
                                <div style={TopBarWideStyles.AdvancedSearchBoxSubTitle}>
                                    Add guests
                                </div>
                            </div>
                            <button style={TopBarWideStyles.AdvancedSearchBoxSearchBtn}>
                                <FontAwesomeIcon icon={faSearch} color="white" />
                                {/* <span style={TopBarWideStyles.AdvancedSearchBoxSearchBtnText}>Search</span> */}
                            </button>
                        </button>
                    </div>
                }
            </div>
        </div >
    )
}