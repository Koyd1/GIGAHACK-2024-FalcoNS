import axios from "axios";

export async function getSymptoms() {
    const response = axios.get(
        `https://api.endlessmedical.com/v1/dx/GetFeatures`,
    );

    return response.data.data;
}

export async function initSession() {
    const response = await axios.get(
        `https://api.endlessmedical.com/v1/dx/InitSession`,
    );
    return response.data;
}

export async function acceptTerms(sessionID) {
    try {
        const response = await axios.post(
            "https://api.endlessmedical.com/v1/dx/AcceptTermsOfUse?SessionID=" +
            sessionID +
            "&passphrase=I%20have%20read%2C%20understood%20and%20I%20accept%20and%20agree%20to%20comply%20with%20the%20Terms%20of%20Use" +
            "%20of%20EndlessMedicalAPI%20and%20Endless%20Medical%20services.%20The%20Terms%20of%20Use%20are%20available%20on%20endlessmedical.com",
        );
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

export async function updateFeature(sessionID, feature) {
    let response = null;
    try {
        response = await axios.post(
            "https://api.endlessmedical.com/v1/dx/UpdateFeature?SessionID=" +
            sessionID +
            "&name=" +
            feature +
            "&value=1",
        );
        console.log(response);
    } catch (error) {
        console.log(error);
    }
    return response ? response.data : null;
}

export async function getTests(sessionID) {
    let response = null;
    try {
        response = await axios.get(
            "https://api.endlessmedical.com/v1/dx/GetSuggestedFeatures_Tests?SessionID=" +
            sessionID +
            "&TopDiseasesToTake=10",
        );
        response.data.forEach((test) => {});
    } catch (error) {
        console.error(error);
    }

    return response ? response.data : null;
}