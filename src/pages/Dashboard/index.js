import { useEffect, useState } from "react";
import { Container, Box, Typography, Grid, Card, CardContent } from '@mui/material';

import Navbar from '../../components/Layout/Navbar';
import Footer from '../../components/Layout/Footer';
import PersonCard from '../../components/Dashboard/Person';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Styles } from "./style";

function createData(
    date,
    amount,
    description,
) {
    return { date, amount, description };
}

const rows = [
    createData('Frozen yoghurt', 159, 4.0),
    createData('Ice cream sandwich', 237, 4.3),
];

const Dashboard = () => {
    const names = ['Alice', 'Bob', 'Charlie', 'David', 'David'];
    return (

        <div className="o-scroll" id="js-scroll" data-scroll-container>
            <div data-scroll-section>
                <div className="o-container">
                    <header className="c-header" id="header">
                        <h1 className="c-header_title o-h1" data-scroll>
                            <span className="c-header_title_line">
                                <span className="dashboard-title" data-scroll data-scroll-speed="3"
                                    data-scroll-position="top">Attractive</span>
                            </span>
                            <span className="c-header_title_line">
                                <span className="dashboard-title" data-scroll data-scroll-speed="2"
                                    data-scroll-position="top">Rapt</span>
                            </span>
                            <span className="c-header_title_line -version u-white">
                                <span className="o-h1" data-scroll data-scroll-speed="3" data-scroll-position="top"
                                    data-scroll-delay="0.05">P</span><span className="o-h1" data-scroll data-scroll-speed="5"
                                        data-scroll-position="top" data-scroll-delay="0.05">r</span><span className="o-h1"
                                            data-scroll data-scroll-speed="2" data-scroll-position="top"
                                            data-scroll-delay="0.05">o</span><span className="o-h1" data-scroll data-scroll-speed="4"
                                                data-scroll-position="top" data-scroll-delay="0.05">f</span><span className="o-h1"
                                                    data-scroll data-scroll-speed="6" data-scroll-position="top"
                                                    data-scroll-delay="0.1">i</span><span className="o-h1" data-scroll data-scroll-speed="3"
                                                        data-scroll-position="top" data-scroll-delay="0.07">L</span><span className="o-h1"
                                                            data-scroll data-scroll-speed="2" data-scroll-position="top"
                                                            data-scroll-delay="0.03">E</span><span className="o-h1" data-scroll data-scroll-speed="5"
                                                                data-scroll-position="top" data-scroll-delay="0.07">S</span>
                            </span>
                        </h1>

                    </header>
                </div>
            </div>

            <section data-scroll-section>
                <div className="group-wrapper">
                    <div className="c-summary" data-scroll>
                        <div className="o-layout -gutter">
                            <ul className="c-summary_list">
                                <li className="dashboard-subtitle u-label" data-scroll>
                                    <a href="#speed-control" data-scroll-to>
                                        People Group
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="c-section" data-scroll-section>
                <div className="o-container" id="speed-control">
                    <div className="o-layout -gutter">
                        <div className="o-layout_item">
                            <div className="c-speed-block" data-scroll data-scroll-speed="2">
                                <div className="o-image_wrapper" data-scroll data-scroll-call="dynamicBackground"
                                    data-scroll-repeat>
                                    <div className="o-image" data-scroll>
                                        <img className="c-speed-block_image" src="assets/img/image_1.webp"
                                            alt="Locomotive image from unsplash" />
                                    </div>
                                </div>
                                <span className="c-speed-block_bubble" data-scroll data-scroll-speed="4"
                                    data-scroll-call="dynamicColor" data-scroll-repeat>
                                    Name Jola Anastasia
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="o-layout -gutter -bottom">w
                        <div className="o-layout_item u-3/5@from-medium">
                            <div className="o-layout u-text-right">
                                <div className="o-layout_item u-1/2@from-medium">
                                    <div className="c-speed-block -margin" data-scroll data-scroll-speed="6">
                                        <div className="o-image_wrapper" data-scroll data-scroll-call="dynamicBackground"
                                            data-scroll-repeat>
                                            <div className="o-image" data-scroll data-scroll-speed="-2">
                                                <img className="c-speed-block_image" src="/assets/img/image_2.webp"
                                                    alt="Locomotive image from unsplash" />
                                            </div>
                                        </div>
                                        <span className="c-speed-block_bubble" data-scroll data-scroll-speed="6"
                                            data-scroll-call="dynamicColor" data-scroll-repeat>
                                            Name Paul
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="c-section -fixed" data-scroll-section data-persistent>
                <div className="o-container" id="fixed-elements">
                    <div className="o-layout">
                        <div className="o-layout_item u-3/5@from-medium">
                            <div className="c-fixed_wrapper" data-scroll data-scroll-call="dynamicBackground"
                                data-scroll-repeat>
                                <div className="c-fixed_target" id="fixed-target"></div>
                                <div className="c-fixed" data-scroll data-scroll-sticky data-scroll-target="#fixed-target"
                                ></div>
                            </div>
                            <span className="c-speed-block_bubble" data-scroll data-scroll-speed="6"
                                data-scroll-call="dynamicColor" data-scroll-repeat>
                                Name Paul
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section data-scroll-section>
                <div className="c-choochoo">
                    <div className="c-choochoo_item u-text-center" data-scroll data-scroll-direction="horizontal"
                        data-scroll-speed="10">
                        <span>
                            <div className="c-speed-block" data-scroll data-scroll-speed="2">
                                <div className="o-image_wrapper" data-scroll data-scroll-call="dynamicBackground"
                                    data-scroll-repeat>
                                    <div className="o-image" data-scroll>
                                        <img className="c-speed-block_image" src="/assets/img/image_4.webp"
                                            alt="Locomotive image from unsplash" />
                                    </div>
                                </div>
                                <span className="c-speed-block_bubble" data-scroll data-scroll-speed="4"
                                    data-scroll-call="dynamicColor" data-scroll-repeat>
                                    Name Jola Anastasia
                                </span>
                            </div>
                        </span>
                    </div>
                    <div className="c-choochoo_item u-text-center -reverse" data-scroll data-scroll-direction="horizontal"
                        data-scroll-speed="-10">
                        <span>
                            <div className="c-speed-block" data-scroll data-scroll-speed="2">
                                <div className="o-image_wrapper" data-scroll data-scroll-call="dynamicBackground"
                                    data-scroll-repeat>
                                    <div className="o-image" data-scroll>
                                        <img className="c-speed-block_image" src="/assets/img/image_5.webp"
                                            alt="Locomotive image from unsplash" />
                                    </div>
                                </div>
                                <span className="c-speed-block_bubble" data-scroll data-scroll-speed="4"
                                    data-scroll-call="dynamicColor" data-scroll-repeat>
                                    Name Jola Anastasia
                                </span>
                            </div>
                        </span>
                    </div>




                </div>
            </section>

            <section className="c-section" data-scroll-section>
                <div className="o-container" id="scroll-direction">
                    <div className="c-direction-block_wrapper">
                        <div className="c-direction-block" id="direction">
                            <div className="c-direction-block_item -one">
                                <span className="c-direction-block_item_inner" data-scroll data-scroll-direction="horizontal"
                                    data-scroll-speed="6" data-scroll-target="#direction">
                                    I'm moving in this direction
                                </span>
                            </div>
                            <div className="c-direction-block_item -two">
                                <span className="c-direction-block_item_inner" data-scroll data-scroll-direction="horizontal"
                                    data-scroll-speed="-8" data-scroll-target="#direction">
                                    And in this direction
                                </span>
                            </div>
                            <div className="c-direction-block_item -three">
                                <span className="c-direction-block_item_inner" data-scroll data-scroll-direction="horizontal"
                                    data-scroll-speed="9" data-scroll-target="#direction" data-scroll-delay="0.05">
                                    Sooo customizable. Right?
                                </span>
                            </div>
                            <div className="c-direction-block_item -four">
                                <span className="c-direction-block_item_inner" data-scroll data-scroll-direction="horizontal"
                                    data-scroll-speed="15" data-scroll-target="#direction">
                                    I can also go in this direction
                                </span>
                            </div>
                            <div className="c-direction-block_item -five">
                                <span className="c-direction-block_item_inner" data-scroll data-scroll-direction="horizontal"
                                    data-scroll-speed="-20" data-scroll-target="#direction" data-scroll-delay="0.05">
                                    Ok, enough!!!!
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section data-scroll-section>
                <div className="o-container">
                    <div className="c-damn">
                        <h1 className="o-title" data-scroll>
                            <span className="o-title_line">
                                <span>
                                    Damn
                                </span>
                            </span>
                            <span className="o-title_line">
                                <span>
                                    You really
                                </span>
                            </span>
                            <span className="o-title_line">
                                <span>
                                    like to
                                </span>
                            </span>
                            <span className="o-title_line u-white">
                                <span>
                                    scroll
                                </span>
                            </span>
                        </h1>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Dashboard;