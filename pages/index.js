import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Landing from "./landing";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Hubs Connect</title>
                <meta name="description" content="Generated by @babjonii"/>
                <link rel="icon" href="../public/favicon.ico"/>
            </Head>
            <Header/>
            <main>
                <Landing/>
            </main>
            <Footer/>
        </div>
    )
}
