import React from 'react';
import { redirect } from "next/navigation";
import { firebase } from "./firebaseConfig";
import { collection, getDocs, query, where } from "@firebase/firestore";

export function getCookie(key) {
    var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
    return b ? b.pop() : "";
}

export function logout() {
    document.cookie = "logged_in=";
    window.location.reload();
    // redirect("/login");
}

export async function checkUser(formData) {
    const id = formData.get("id");
    const password = formData.get("password");
    const ref = collection(firebase, "users");
    const querried = [];
    const q = query(
        ref,
        where("idPatient", "==", id),
        where("password", "==", password),
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        querried.push(doc.data());
    });

    if (querried.length === 0) {
        document.cookie = "logged_in=";
        console.log("User does not exist!");
    } else {
        document.cookie = "logged_in=true";
        redirect("/");
    }
}
