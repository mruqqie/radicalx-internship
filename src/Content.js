import React from "react";
import add_square from "./add-square.svg";
import calendar from "./calendar.svg";
import funnel from "./funnel.svg";
import arrow from "./arrow.svg";
import qualified from "./qualifiedCandidates.svg";
import actions from "./actions.svg";

function NameDesc(props) {
    return (
        <div className="one--two" id={props.id}>
            <div className="name--desc">
                <h3 className="name">Product Design GVI</h3>
                <p className="desc">Amet minim mollit 
                non deserunt est sit aliqua dolor do amet sint.</p>
            </div>
        </div>
    )
}

function CompletionPeriod() {
    return (
        <div className="two--two">
            <div className="completion--period">
                <h3>120 days</h3>
                <p>(created on 10/12/2021)</p>
            </div>
        </div>
    )
}

function TotalEnrolled() {
    return (
        <div className="three--two">
            <div className="total--enrolled">
                <p>20,000</p>
            </div>
        </div>
    )
}

function QualifiedCandidates() {
    return (
        <div className="four--two">
            <div className="qualified--candidates">
                <img src={qualified} alt="Qualified Candidates" />
            </div>
        </div>
    )
}

function Actions(props) {
    return (
        <div className="five--two" id={props.id}>
            <img src={actions} alt="Actions"/>
        </div>
    )
}

function Content() {
    return(
        <div className="content--box">
            <div className="top--bar">
                <p>Internships</p>
                <button className="new--internship">
                    <img src={add_square} alt="Add-square" />
                    <p>Create New Internship</p>
                </button>
            </div>
            <div className="content">
                <div className="top--frame">
                    <div className="insights">
                        <div className="insights--box">
                            <p id="internship--insights">Internship insights</p>
                            <p id="insights--note">In the eighteenth century the 
                            German philosopher Immanuel Kant developed a theory 
                            of knowledge in which knowledge about space can be 
                            both a priori and synthetic.</p>
                        </div>
                    </div>
                    <div className="left--frame">
                        <div className="filter--bar">
                            <div className="filter--frame">
                                <div className="filter--frame1">
                                    <button className="this--week">
                                        <p>This week</p>
                                    </button>
                                    <button className="this--month">
                                        <p>This month</p>
                                    </button>
                                </div>
                                <button className="select--dates">
                                    <img src={calendar} alt="Calendar" />
                                    <p>Select dates</p>
                                </button>
                            </div>
                        </div>
                        <div className="funnel">
                            <img src={funnel} alt="Funnel" />
                        </div>
                    </div>
                </div>
                <div className="table">
                    <div className="frame--one">
                        <div className="one--one">
                            <h3>Internship Title</h3>
                            <img src={arrow} alt="arrow" />
                        </div>
                        <NameDesc />
                        <NameDesc />
                        <NameDesc />
                        <NameDesc />
                        <NameDesc id="name--desc--last"/>
                    </div>
                    <div className="frame--two">
                        <div className="two--one">
                            <h3>Completion Period</h3>
                            <img src={arrow} alt="arrow"/>
                        </div>
                        <CompletionPeriod />
                        <CompletionPeriod />
                        <CompletionPeriod />
                        <CompletionPeriod />
                        <CompletionPeriod />
                    </div>
                    <div className="frame--three">
                        <div className="three--one">
                            <h3>Total Enrolled</h3>
                            <img src={arrow} alt="arrow" />
                        </div>
                        <TotalEnrolled />
                        <TotalEnrolled />
                        <TotalEnrolled />
                        <TotalEnrolled />
                        <TotalEnrolled />
                    </div>
                    <div className="frame--four">
                        <div className="four--one">
                            <h3>Qualified Candidates</h3>
                            <img src={arrow} alt="arrow" />
                        </div>
                        <QualifiedCandidates />
                        <QualifiedCandidates />
                        <QualifiedCandidates />
                        <QualifiedCandidates />
                        <QualifiedCandidates />
                    </div>
                    <div className="frame--five">
                        <div className="five--one">
                            <div className="actions"></div>
                        </div>
                        <Actions />
                        <Actions />
                        <Actions />
                        <Actions />
                        <Actions />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;