import "../PersonalCard/personalCard.css";
import { FaFilePdf } from "react-icons/fa6";

function MyAnalyses() {
    return (
        <div className={"pageContainer"}>
            <h2>My Analyses</h2>
            <div className={"page"}>
                <div className={"analysisItem"}>
                    <h4>General Blood Test</h4>
                    <button className={"pdfButton"}>
                        <FaFilePdf className="pdfIcon"/>
                        Download PDF
                    </button>
                </div>
            </div>
            <div className={"page"}>
                <div className={"analysisItem"}>
                    <h4>General Blood Test</h4>
                    <button className={"pdfButton"}>
                        <FaFilePdf className="pdfIcon"/>
                        Download PDF
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MyAnalyses;
