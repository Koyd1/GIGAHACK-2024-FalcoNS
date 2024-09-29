import "./personalCard.css";

function PersonalCard() {
    let userName = "John Doe";
    let lastName = "Doe";
    let patronimic = "Middle Name";
    let birthday = "01/01/1990";
    let gender = "Male";

    return (
        <div className={"pageContainer"}>
        <h2>Personal Card</h2>
    <div className="page">

            <div>
                <p><span>First name:</span></p>
                <h4>{userName}</h4>
            </div>
            <div>
                <p><span>Last name:</span></p>
                <h4>{lastName}</h4>
            </div>
            <div>
                <p><span>Patronimic:</span></p>
                <h4>{patronimic}</h4>
            </div>
            <div>
                <p><span>Birthday:</span></p>
                <h4>{birthday}</h4>
            </div>
            <div>
                <p><span>Gender:</span></p>
                <h4>{gender}</h4>
            </div>
        </div>
        </div>
    );
}

export default PersonalCard;
