import React from "react";
import "./modal.css";

function Modal({ branch, service, date, time, closeModal }) {
    const reservationCode = Math.floor(Math.random() * 1000000);
    const doctorName = "Dr. John Doe";

    return (
        <div className="modalOverlay">
            <div className="modalContent">
                <h3>Appointment Confirmation</h3>
                <p><strong>Branch:</strong> {branch}</p>
                <p><strong>Service:</strong> {service}</p>
                <p><strong>Date:</strong> {date}</p>
                <p><strong>Time:</strong> {time}</p>
                <p><strong>Doctor:</strong> {doctorName}</p>
                <p><strong>Reservation Code:</strong> #{reservationCode}</p>

                <button onClick={closeModal}>Close</button>
            </div>
        </div>
    );
}

export default Modal;
