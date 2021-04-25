import '../styles/global.scss';
import { Provider as NextAuthProvider } from "next-auth/client";

import { Header } from '../components/Header';
import { Player } from '../components/Player';

import styles from '../styles/app.module.scss';
import { PlayContextProvider } from '../contexts/PlayerContext';

function MyApp({ Component, pageProps }) {

  return (
    <NextAuthProvider session={pageProps.session}>
      <PlayContextProvider>
          <div className={styles.wrapper}>
            <main>
              <Header />
              <Component {...pageProps} />
            </main>
            <Player />
          </div>
      </PlayContextProvider>
    </NextAuthProvider>
  );
}

export default MyApp
