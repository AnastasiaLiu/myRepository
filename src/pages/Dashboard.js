import { Link } from "react-router-dom";
import { doc, getDocs, collection, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import React, { useEffect, useState } from "react";

const Dashboard = ({ goNext }) => {

    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const docRef = collection(db, "users");
            const docSnap = await getDocs(docRef);

            let docData = [];

            docSnap.forEach(doc => {
                const temp = doc.data();
                temp.id = doc.id;
                docData.push(temp);
            });
            setData(docData);
        }

        fetchData();
    });

    let listItems = '';
    let appTimes = '';

    const delUser = async (id) => {
        await deleteDoc(doc(db, "users", id));
    }

    if (data) {
        listItems = data.map((doc, i) =>
            <li key={i} className="list-group-item">{doc.firstName}
                <button className="cancel-btn btn btn-danger" onClick={() => delUser(doc.id)}>Cancel</button>
            </li>
        );

        appTimes = data.map((doc, i) =>
            <li key={i} className="list-group-item">{doc.app}/Dr.{doc.firstName}
            </li>
        );        
    } else { listItems = ''; appTimes = ''; }

    return (
        <div className="mt-4 p-5 text-white rounded dash-div">
            <button className="backbtn btn btn-success" onClick={() => goNext('welcome')}>Go to first page</button>
            <h3 className="my-second-header">Dashboard Page</h3><hr />
            <div className="row">
                <div className="col-4">
                    <ul className="list-group">
                        <li className="list-group-item active">Checked in</li>
                        {listItems}
                    </ul>
                </div>
                <div className="col-4">
                    <ul className="list-group">
                        <li className="list-group-item active">Available Room</li>
                        <li className="list-group-item">2</li>
                        <li className="list-group-item">X</li>
                        <li className="list-group-item">1</li>
                        <li className="list-group-item">3</li>
                    </ul>
                </div>
                <div className="col-4">
                    <ul className="list-group">
                        <li className="list-group-item active">Time/Dr</li>
                        {appTimes}
                    </ul>
                </div>
            </div>
        </div>
    );

}

export default Dashboard;