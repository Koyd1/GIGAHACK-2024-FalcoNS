import './menustyle.css';

function Menu({ handleMenuItemClick }) {
    return (
        <div className="menu">
            <button className="dashboardItem" onClick={() => handleMenuItemClick('personalCard')}>
                Personal Card
            </button>
            <button className="dashboardItem" onClick={() => handleMenuItemClick('myAnalyses')}>
                My Analyses
            </button>
            <button className="dashboardItem" onClick={() => handleMenuItemClick('bookAppointment')}>
                Book Appointment
            </button>
            <button className="dashboardItem" onClick={() => handleMenuItemClick('symptomsChecker')}>
                Symptoms Checker
            </button>
        </div>
    );
}

export default Menu;
