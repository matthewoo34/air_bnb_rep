"use client"; // this is a client component 👈🏽

import { faBars, faGlobe, faMagnifyingGlass, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { TopBarWideStyles } from "./top-bar-wide-styles";
import FullLogo from "@/app/components/full-logo/full-logo";
import MidLogo from "@/app/components/mid-logo/mid-logo";
import { Dropdown } from "react-bootstrap";
import { BigScreen, MediumScreen } from "@/app/helper/responsive-size";

export default function TopBarWide() {
    const [isHoverSearch, setIsHoverSearch] = useState(false);
    const [isHoverHome, setIsHoverHome] = useState(false);
    const [isHoverGlobe, setIsHoverGlobe] = useState(false);
    const [isHoverUser, setIsHoverUser] = useState(false);
    const [clickedSearch, setClickedSearch] = useState(false);
    const [searchType, setSearchType] = useState(0);
    const [destination, setDestination] = useState('');

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <button
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
            style={TopBarWideStyles.AdvancedSearchBoxLeftBtn}>
            <b style={TopBarWideStyles.AdvancedSearchBoxTitle}>Where</b>
            <input placeholder="Search destinations" style={TopBarWideStyles.AdvancedSearchBoxSubTitle}>
            </input>
        </button>
    ));

    return (
        <div style={TopBarWideStyles.TopBarContainer}>
            <div style={TopBarWideStyles.TopRowContainer}>
                <a className="logo" aria-label="Airbnb homepage" href="/" style={TopBarWideStyles.LogoLink}>

                    <BigScreen>
                        <FullLogo />
                    </BigScreen>


                    <MediumScreen>
                        <MidLogo />
                    </MediumScreen>

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
                        <Dropdown>
                            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" >
                                <b style={TopBarWideStyles.AdvancedSearchBoxTitle}>Where</b>

                                <input placeholder="Search destinations" style={TopBarWideStyles.AdvancedSearchBoxSubTitle} onChange={(event) => setDestination(event.target.value)}>
                                </input>
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{
                                padding: 20,
                                borderRadius: 30,
                                borderWidth: 0,
                                marginTop: 17,
                            }}>
                                <b style={TopBarWideStyles.AdvancedSearchBoxTitle}>Search by region</b>
                                <div style={{ display: 'flex', flexDirection: 'row', marginTop: 10, marginBottom: 20 }}>
                                    <div>
                                        <Dropdown.Item href="#/action-1" style={TopBarWideStyles.selectItem}>
                                            <img src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg" style={TopBarWideStyles.selectItemImg} />
                                        </Dropdown.Item>
                                        <div style={TopBarWideStyles.selectItemText}>I'm flexible</div>
                                    </div>
                                    <div>
                                        <Dropdown.Item href="#/action-2" style={TopBarWideStyles.selectItem}>
                                            <img src="https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320" style={TopBarWideStyles.selectItemImg} />
                                        </Dropdown.Item>
                                        <div style={TopBarWideStyles.selectItemText}>Europe</div>
                                    </div>
                                    <div>
                                        <Dropdown.Item href="#/action-3" style={TopBarWideStyles.selectItem}>
                                            <img src="https://a0.muscache.com/im/pictures/26891a81-b9db-4a9c-8aab-63486b7e627c.jpg?im_w=320" style={TopBarWideStyles.selectItemImg} />
                                        </Dropdown.Item>
                                        <div style={TopBarWideStyles.selectItemText}>Japan</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <div>
                                        <Dropdown.Item href="#/action-4" style={TopBarWideStyles.selectItem}>
                                            <img src="https://a0.muscache.com/im/pictures/d77de9f5-5318-4571-88c7-e97d2355d20a.jpg?im_w=320" style={TopBarWideStyles.selectItemImg} />
                                        </Dropdown.Item>
                                        <div style={TopBarWideStyles.selectItemText}> Southeast Asia</div>
                                    </div>

                                    <div>
                                        <Dropdown.Item href="#/action-5" style={TopBarWideStyles.selectItem}>
                                            <img src="https://a0.muscache.com/im/pictures/dbb2b5ef-2efe-4099-81ac-c7b957f384ed.jpg?im_w=320" style={TopBarWideStyles.selectItemImg} />
                                        </Dropdown.Item>
                                        <div style={TopBarWideStyles.selectItemText}> United Kingdom</div>
                                    </div>

                                    <div>
                                        <Dropdown.Item href="#/action-6" style={TopBarWideStyles.selectItem}>
                                            <img src="https://a0.muscache.com/im/pictures/42a1fb0f-214c-41ec-b9d7-135fbbdb8316.jpg?im_w=320" style={TopBarWideStyles.selectItemImg} />
                                        </Dropdown.Item>
                                        <div style={TopBarWideStyles.selectItemText}> Australia </div>
                                    </div>
                                </div>

                            </Dropdown.Menu>
                        </Dropdown>

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