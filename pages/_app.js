import '../styles/globals.css' //Own css
import 'bootstrap/dist/css/bootstrap.css' // add bootstrap css
import Head from "next/head";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import {config, library} from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false; // Telling Font Awesome to skip adding the CSS automatically since it's being imported above
library.add(fab);

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
