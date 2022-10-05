import { render } from "@testing-library/react";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import {db} from "../firebase/config"
import { collection, addDoc } from "firebase/firestore"; 


const Third = ({ goNext }) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [appointment, setAppointment] = useState("");

    const onChangeFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const onChangeLastName = (e) => {
        setLastName(e.target.value);
    }

    const onChangedDob = (e) => {
        setDateOfBirth(e.target.value);
    }

    const onChangeAppointment = (e) => {
        setAppointment(e.target.value);
    }

    const onSubmit = () => {
        const frankDocRef = collection(db, "users");
        const addData = async () => {
            await addDoc(frankDocRef, {
                "app": appointment,
                "dob": dateOfBirth,
                "firstName": firstName,
                "lastName": lastName
            });
    
            goNext('forth');
        }

        if(appointment && dateOfBirth && firstName && lastName) addData();
        else goNext('third');

    }

    return (
        <div className="mt-4 p-5 bg-light text-white rounded welcome-div ">
            <form>
            <div className="form-group">
                <label className="rsr-label-2" htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => onChangeFirstName(e)}
                    placeholder="Enter firstName" id="firstName" />
            </div>
            <div className="form-group">
                <label className="rsr-label-2" htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => onChangeLastName(e)}
                    placeholder="Enter lastName" id="firstName" />
            </div>

            <div className="form-group">
                <label className="rsr-label-2" htmlFor="app">Date of birth time:</label>
                <input
                    type="date"
                    className="form-control"
                    value={dateOfBirth}
                    onChange={(e) => onChangedDob(e)}
                    placeholder="Enter date of birthday time" id="app" />
            </div>

            <div className="form-group">
                <label className="rsr-label-2" htmlFor="app">Appointment time:</label>
                <input
                    type="time"
                    className="form-control"
                    value={appointment}
                    onChange={(e) => onChangeAppointment(e)}
                    placeholder="Enter appoinment time" id="app" />
            </div>
            </form>
            <button onClick={onSubmit} className="third-btn btn btn-primary">Save</button>
        </div>
    );

}

export default Third;
