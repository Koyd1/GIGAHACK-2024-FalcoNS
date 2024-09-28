import React, { useState } from "react";
import "./bookAppointment.css";
import Selector from "../Selector/Selector";
import Modal from "../Modal/Modal";

function BookAppointment() {
    const [branch, setBranch] = useState("");
    const [service, setService] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для модального окна

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        resetForm();
    };

    const resetForm = () => {
        setBranch("");
        setService("");
        setDate("");
        setTime("");
    };

    const branchOptions = ["Branch 1", "Branch 2", "Branch 3", "Branch 4"];
    const serviceOptions = [
        "Blood Test", "Urine Test", "X-ray", "MRI", "CT Scan", "Ultrasound",
        "Vaccination", "Consultation", "Surgery", "Physical Exam"
    ];

    const timeOptions = generateTimeOptions();

    return (
        <div className="formContainer">
            <h2>Book an Appointment</h2>
            <form onSubmit={handleSubmit}>
                <Selector
                    label="Branch"
                    options={branchOptions}
                    value={branch}
                    onChange={setBranch}
                    required
                />
                <Selector
                    label="Service"
                    options={serviceOptions}
                    value={service}
                    onChange={setService}
                    required
                />
                <div className="inputGroup">
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <Selector
                    label="Time"
                    options={timeOptions}
                    value={time}
                    onChange={setTime}
                    required
                />
                <button type="submit">Book Appointment</button>
            </form>

            {isModalOpen && (
                <Modal
                    branch={branch}
                    service={service}
                    date={date}
                    time={time}
                    closeModal={closeModal}
                />
            )}
        </div>
    );
}
function generateTimeOptions() {
    const times = [];
    for (let hour = 7; hour <= 12; hour++) {
        times.push(`${hour}:00`);
        if (hour < 12) times.push(`${hour}:30`);
    }
    return times;
}

export default BookAppointment;
