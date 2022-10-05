import { render } from "@testing-library/react";
import { Link } from "react-router-dom";
import React, { useState } from 'react';

const Second = ({goNext}) => {
    const [fever, setFever] = useState("");
    const [vonit, setVonit] = useState("");

    return (
        <div className="mt-4 p-5 bg-light text-white rounded welcome-div ">
            <h3 className="my-second-header">Covid Patient</h3>
            <h5 className="sm-header">Did you have (yes/no)?</h5>
            <div className="table-container">
            <form>
                <table className="table table-bordered">
                    <thead className="table-dark">
                    <tr>
                        <th>Did you have?</th>
                        <th>Yes, I did</th>
                        {/* <th>No, I don't</th> */}
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Fever or chills</td>
                        <td>
                            <label htmlFor="fever">Yes</label><br/>
                            <input type="radio" id="fever" name="fever" value=""/>
                        </td>
                        {/* <td>
                            <label htmlFor="feverNo">No</label><br/>
                            <input type="radio" id="feverNo" name="feverNo" value=""/>
                        </td> */}
                    </tr>
                    <tr>
                        <td>Cough</td>
                        <td>
                            <label htmlFor="Cough">Yes</label><br/>
                            <input type="radio" id="Cough" name="Cough" value=""/>
                        </td>
                        {/* <td>
                            <label htmlFor="CoughNo">No</label><br/>
                            <input type="radio" id="CoughNo" name="CoughNo" value=""/>
                        </td> */}
                    </tr>
                    <tr>
                        <td>Shortness of breath </td>
                        <td>
                            <label htmlFor="sob">Yes</label><br/>
                            <input type="radio" id="sob" name="sob" value=""/>
                        </td>
                        {/* <td>
                            <label htmlFor="sobNo">No</label><br/>
                            <input type="radio" id="sobNo" name="sobNo" value=""/>
                        </td> */}
                    </tr>
                    <tr>
                        <td>Difficulty breathing </td>
                        <td>
                            <label htmlFor="db">Yes</label><br/>
                            <input type="radio" id="db" name="db" value=""/>
                        </td>
                        {/* <td>
                            <label htmlFor="dbNo">No</label><br/>
                            <input type="radio" id="dbNo" name="dbNo" value=""/>
                        </td> */}
                    </tr>
                    <tr>
                        <td>Fatigue  </td>
                        <td>
                            <label htmlFor="fatigue">Yes</label><br/>
                            <input type="radio" id="fatigue" name="fatigue" value=""/>
                        </td>
                        {/* <td>
                            <label htmlFor="fatigueNo">No</label><br/>
                            <input type="radio" id="fatigueNo" name="fatigueNo" value=""/>
                        </td> */}
                    </tr>
                    <tr>
                        <td>Muscle or body aches </td>
                        <td>
                            <label htmlFor="moba">Yes</label><br/>
                            <input type="radio" id="moba" name="moba" value=""/>
                        </td>
                        {/* <td>
                            <label htmlFor="mobaNo">No</label><br/>
                            <input type="radio" id="mobaNo" name="mobaNo" value=""/>
                        </td> */}
                    </tr>
                    <tr>
                        <td>Headaches </td>
                        <td>
                            <label htmlFor="headache">Yes</label><br/>
                            <input type="radio" id="headache" name="headache" value=""/>
                        </td>
                        {/* <td>
                            <label htmlFor="headacheNo">No</label><br/>
                            <input type="radio" id="headacheNo" name="headacheNo" value=""/>
                        </td> */}
                    </tr>
                    <tr>
                        <td>New loss of taste or smell  </td>
                        <td>
                            <label htmlFor="nlotos">Yes</label><br/>
                            <input type="radio" id="nlotos" name="nlotos" value=""/>
                        </td>
                        {/* <td>
                            <label htmlFor="nlotosNo">No</label><br/>
                            <input type="radio" id="nlotosNo" name="nlotosNo" value=""/>
                        </td> */}
                    </tr>
                    <tr>
                        <td>Sore throat </td>
                        <td>
                            <label htmlFor="sorethroat">Yes</label><br/>
                            <input type="radio" id="sorethroat" name="sorethroat" value=""/>
                        </td>
                        {/* <td>
                            <label htmlFor="sorethroatNo">No</label><br/>
                            <input type="radio" id="sorethroatNo" name="sorethroatNo" value=""/>
                        </td> */}
                    </tr>
                    <tr>
                        <td>Congestion or runny nose </td>
                        <td>
                            <label htmlFor="corn">Yes</label><br/>
                            <input type="radio" id="corn" name="corn" value=""/>
                        </td>
                        {/* <td>
                            <label htmlFor="cornNo">No</label><br/>
                            <input type="radio" id="cornNo" name="cornNo" value=""/>
                        </td> */}
                    </tr>
                    <tr>
                        <td>Nausea or other digestive symptoms </td>
                        <td>
                            <label htmlFor="noods">Yes</label><br/>
                            <input type="radio" id="noods" name="noods" value=""/>
                        </td>
                        {/* <td>
                            <label htmlFor="noodsNo">No</label><br/>
                            <input type="radio" id="noodsNo" name="noodsNo" value=""/>
                        </td> */}
                    </tr>
                    </tbody>
                </table>
            </form>
            </div>
            <button className="second-btn btn btn-success" onClick={() => goNext('third')}>Next</button>
        </div>
    );

}

export default Second;