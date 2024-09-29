"use client"
import React from 'react';
import { redirect } from "next/navigation";
import { firebase } from "../../utils/firebaseConfig";
import { collection, getDocs, query, where } from "@firebase/firestore";
import Cookies from 'js-cookie';
import Link from "next/link";

// export function getCookie(key) {
//     let b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
//     return b ? b.pop() : "";
// }
//
// export function logout() {
//     document.cookie = "logged_in=";
//     window.location.reload();
// }

// export async function checkUser(formData) {
//     const id = formData.get("id");
//     const password = formData.get("password");
//     const ref = collection(firebase, "users");
//     const querried = [];
//     const q = query(
//         ref,
//         where("idPatient", "==", id),
//         where("password", "==", password),
//     );
//     const querySnapshot = await getDocs(q);
//     querySnapshot.forEach((doc) => {
//         querried.push(doc.data());
//     });
//
//     if (querried.length === 0) {
//         // document.cookie = "logged_in=";
//         alert("User does not exist!");
//         console.log("User does not exist!");
//     } else {
//         document.cookie = "logged_in=true";
//         redirect("/");
//     }
// }
async function checkUser(formData) {
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
        Cookies.set("logged_in", "");
        // document.cookie = "logged_in=";
        alert("User does not exist!");
        console.log("User does not exist!");
    } else {
        // document.cookie = "logged_in=true";
        Cookies.set("logged_in", "true");
        redirect("/");
    }
}


export default function LoginPage() {
    // const idRef = useRef();
    // const passRef = useRef();


    // if (getCookie("logged_in")) {
    if(Cookies.get("logged_in")) {
        redirect("/");
    }

    return (
        <div>
            <form autoComplete="off" action={checkUser}>
                <p>ID</p>
                <input name="id" type="text" required/>
                <p>Password</p>
                <input name="password" type="password" required/>
                <button>Login</button>
                <h3>
                    Do not have an account:
                    <Link href="/pages/register">Register Here</Link>
                </h3>
            </form>

        </div>
    );
}
