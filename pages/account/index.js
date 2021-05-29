import React from 'react'
import Head from "next/head";
import NavBar from '../../components/NavBar/NavBar';
import styles from "./account.module.scss";

const Account = () => {
    return (
        <>
            <Head>
                <title>Account</title>
            </Head>
            <div className={styles.account}>
                <NavBar />
                
            </div>
        </>
    )
}

export default Account
