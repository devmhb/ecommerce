import React from "react";
import Head from "next/head";
import { useUser } from "@auth0/nextjs-auth0";
import styles from "../../styles/Account.module.scss";
import Link from "next/link";
import Image from "next/image";

const Account = () => {
  const { user, error, isLoading } = useUser();

  const btnStyle = {
    display: "block",
    width: "100%",
    marginBottom: "1rem",
  };

  return (
    <>
      <Head>
        <title>Account</title>
      </Head>
      <div className={styles.account}>
        {user && (
          <>
            <div className={styles.left}>
              <Image
                src={user.picture}
                alt="user"
                className={styles.avatar}
                width={100}
                height={100}
              />
              <h2 className={styles.userName}>{user.name}</h2>
              <button className="btn btn-bright btn-s" style={btnStyle}>
                Dashboard
              </button>
              <button className="btn btn-bright btn-s" style={btnStyle}>
                Order
              </button>
              <button className="btn btn-bright btn-s" style={btnStyle}>
                Change Password
              </button>
              <button className="btn btn-bright btn-s" style={btnStyle}>
                Manage Address
              </button>
              <button className="btn btn-bright btn-s" style={btnStyle}>
                Support
              </button>
              <Link href="/api/auth/logout" style={{ width: "100%" }}>
                <button className="btn btn-stroke btn-s" style={btnStyle}>
                  Log Out
                </button>
              </Link>
            </div>
            <div className={styles.right}></div>
          </>
        )}
      </div>
    </>
  );
};

export default Account;
