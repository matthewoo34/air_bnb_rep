"use client"; // this is a client component 👈🏽

import { faBars, faGlobe, faHeart, faMagnifyingGlass, faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { ListCardStyles } from "./list-card-styles";
import { Carousel, Col, Container, Row } from "react-bootstrap";

interface ListCardProps {
    data: any;
}

export default function ListCard(props: ListCardProps) {


    return (
        <Container style={{ zIndex: -10 }}>
            <Row>
                {
                    props.data.map((item) => (
                        <Col sm='12' md='6' lg='4' xl='3' style={ListCardStyles.cardCol}>
                            <FontAwesomeIcon icon={faHeart} style={ListCardStyles.favoriteIcon} />
                            <FontAwesomeIcon icon={faHeart} style={ListCardStyles.favoriteIconBg} />
                            <Carousel
                                activeIndex={0}>
                                {item.images.map((img) => (
                                    <Carousel.Item>
                                        <img src={img} style={ListCardStyles.cardImg} />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                            <div style={ListCardStyles.cardInfoContainer}>
                                <div style={ListCardStyles.infoFirstRow}>
                                    <b>{item.location}</b>
                                    <label><FontAwesomeIcon icon={faStar} /> {item.rating} </label>
                                </div>
                                <label style={ListCardStyles.subInfo}>{item.description}</label><br />
                                <label style={ListCardStyles.subInfo}>{item.duration}</label><br />
                            </div>
                            <div>
                                <u>
                                    <b > {item.costs}</b> <span style={ListCardStyles.beforeTaxText}>total before taxes </span>  </u>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}