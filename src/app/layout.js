import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";
import Script from "next/script";
import 'aos/dist/aos.css';
import AOSInit from "./component/AOSInit";
import Footer from "./component/common/footer/Footer";
import { ToastContainer } from "react-toastify";
import { Slide } from 'react-toastify';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DemiGod House",
  description: "Media. Marketing. Event's",
};

export default function RootLayout({ children }) {
  const customToastStyles = {
    borderRadius: '8px',
    color: '#333',
  };
  return (
    <html lang="en">
      <Head>
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-p3W7Zr4lbOkDHR5rqU17d5It9vO2wQNHjEYtxx0BpQU6zANv0AdPD4Y0WDb1zyK8BkjkZf9llsXfb1xjU43ktA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap" rel="stylesheet"/>

      </Head>
      <body className={inter.className}>
        <ToastContainer
          position="bottom-right"
          autoClose={1000}
          hideProgressBar={true}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={true}
          theme="colored"
          style={customToastStyles}
          transition={Slide}

        />

        {children}
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <AOSInit />
        <Footer />

      </body>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

    </html>
  );
}
