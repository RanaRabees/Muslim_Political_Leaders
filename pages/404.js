import React from "react";
import Image from "next/image";
import Head from "next/head";
import styles from "../styles/Home.module.css";
// import { useRouter } from "next/Router";
import { useRouter } from "next/router";
// import Navbar from "../components/Navbar";
import { useEffect } from "react";
import Link from "next/link";

function Errorpage() {
  const router = useRouter();

  const handleInput = () => {
    router.push("/");
  };

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className={styles.aboutpagecontainer}>
      <Head>
        <title>404 Page Not Found</title>
        <link rel="icon" href="/favicon.png" />
        {/* <link rel="stylesheet" href="../styles/globals.css" /> */}
      </Head>

      <footer className={styles.mynav}>
        <a
          href="https://ranarabees.pythonanywhere.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {"  "}
          <img src="/favicon.png" alt="RanaVerse" className={styles.navlogo} />
        </a>
        <br />
        <button className={styles.mainbtn}>
          <a onClick={() => router.push("/")} target="_blank">
            {" "}
             Main
          </a>
        </button>

        <button className={styles.mainbtn}>
          <a onClick={() => router.push("/home")} target="_blank">
            {" "}
             Home
          </a>
        </button>

        <button className={styles.mainbtn}>
          <a onClick={() => router.push("/contact")} target="_blank">
            {" "}
             Contact
          </a>
        </button>

        <button className={styles.mainbtn}>
          <a onClick={() => router.push("/aboutus")} target="_blank">
            {" "}
             About_Us
          </a>
        </button>
        <button className={styles.mainbtn}>
          <a onClick={() => router.push("/blogs")} target="_blank">
            {" "}
             Blogs
          </a>
        </button>
      
      </footer>

      <main className={styles.notpagecontainer}>
        <Image
          // src="data:image/jpeg;base64,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"
          src="/rana.jpg"
          alt="back"
          width={200}
          height={200}
          className={styles.backLogo}
          priority
        />
        <p className={styles.description}>
          Rana <code>Muhammad </code>Rabees <code>Hussain</code>
        </p>
        <h1 className={styles.title}>
          Page Not Found{" "}
          <a href="https://ranarabees.pythonanywhere.com/">404!</a>
        </h1>
        <div className={styles.mythirteen}>
          <center>
            {" "}
            <Image
              className={styles.mylogo}
              src="/rana.jpg"
              alt="Next.js Logo"
              width={75}
              height={75}
              priority
            />
            <Image
              className={styles.mylogo}
              src="/imga.jpg"
              alt="Next.js Logo"
              width={75}
              height={75}
              priority
            />
            <Image
              className={styles.mylogo}
              src="/imgb.jpeg"
              alt="Next.js Logo"
              width={75}
              height={75}
              priority
            />
            <Image
              className={styles.mylogo}
              src="/imgc.jpg"
              alt="Next.js Logo"
              width={75}
              height={75}
              priority
            />
          </center>
          {/* </div>  */}

          <h4>
            <center className={styles.aboutheadtext}>
              {" "}
              <p>^| 👻: We are sorry, Page not found(404)! :👻 |^</p>{" "}
            </center>{" "}
            <p className={styles.aboutpara}>
              <h1>404</h1> <br /> The page you are looking for might
              <br /> have been removed had its name changed
              <br /> temporarily unavailable Please  Main Page With Button
              Below .
              <br />
              <button className={styles.mainbtn}>
                <a onClick={handleInput} target="_blank">
                   Main Page
                </a>
              </button>
            </p>
          </h4>
        </div>
      </main>

      <footer>
        <a
          href="https://ranarabees.pythonanywhere.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" RanaVerse "}
          <img src="/favicon.png" alt="RanaVerse" className={styles.logo} />
        </a>
        <br />
      </footer>
      <style jsx>{`
        .backLogo {
          border-radius: 50%;
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        mynav {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: darkgoldenrod;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: darkgoldenrod;
          border-radius: 15%;
        }

        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: darkkhaki;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
        code:before,
        code:after {
          content: "";

          box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.34),
            0 6.7px 5.3px rgba(0, 0, 0, 0.048),
            0 12.5px 10px rgba(0, 0, 0, 0.06),
            0 22.3px 17.9px rgba(0, 0, 0, 0.072),
            0 41.8px 33.4px rgba(0, 0, 0, 0.086),
            0 100px 80px rgba(0, 0, 0, 0.12);
        }
      `}</style>

      <style jsx global>{`
        .backLogo {
          border-radius: 50%;
        }
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

export default Errorpage;
