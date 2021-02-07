import dynamic from 'next/dynamic';
import '../styles/globals.css';
import Navbar from '../src/components/Navbar/Navbar';
import { UserProvider } from '../src/context/user';
import { LanguageProvider } from '../src/context/language';

const CrispWithNoSSR = dynamic(
  () => import('../src/components/CrispChat/Crisp'),
  {
    ssr: false,
  }
);

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <UserProvider>
        <Navbar />
        <Component {...pageProps} />
        <CrispWithNoSSR />
      </UserProvider>
    </LanguageProvider>
  );
}

export default MyApp;
