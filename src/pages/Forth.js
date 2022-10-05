import { render } from "@testing-library/react";
import { Link } from "react-router-dom";

const Forth = ({goNext}) => {

    return (
    <div className="mt-4 p-5 text-white rounded welcome-div ">
        <h1 className="my-first-header">Thank you</h1>
        <p>You are all checked in.</p>
        <p>Walk to exam room.</p>
        <p>X in 15 minutes.</p>
        <button className="third-btn btn btn-primary" onClick={() => goNext('dash')}>Checked-in</button>
    </div> 
    );

}

export default Forth;