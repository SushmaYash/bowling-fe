'use client';

import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {createUserRequest} from "@/app/lib/webServices/userWebServices";
import {useName} from "@/app/context/userContext";
import styles from './userInput.module.css';


export default function UserInput(){
    const router = useRouter();
    const {  setName } = useName();
    const [userName, setUserName] = useState('');

    const handleSubmit = async () => {
        const response = await createUserRequest(userName);
        console.log("response ok", response ?? []);
        setName(userName);
        router.push("/user/scoreboard");

    };

    useEffect(() => {
    }, [setUserName]);

    return (
        <div className={styles.formContainer}>
            <input className={styles.inputBox}
                placeholder="Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <button className={styles.roundButton}
                onClick={handleSubmit}
            >
                Submit
            </button>

        </div>

);
}