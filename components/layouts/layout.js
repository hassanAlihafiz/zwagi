import Head from "next/head";
import { useDispatch } from "react-redux";
import ScrollToTop from "react-scroll-to-top";
import TopHeader from "./top-header";
import { useRouter } from "next/router";
import Header from "./header";
import Footer from "./footer";
import SideCart from "components/sidecart.module/side-cart";
import { useEffect } from "react";

export default function Layout({ children, pageTitle }) {
  useEffect(() => {
    document.getElementsByTagName("body")[0].scrollTo(0, 0);
  });

  const { pathname } = useRouter();
  const dispatch = useDispatch();

  return (
    <>
      <Head>
        <title>{pageTitle ? pageTitle + " | " : ""}ZWAGIL Foundation</title>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/favicon.png"
        />
        <link rel="stylesheet" href="owl-carousel/owl.carousel.css" />
        <script src="https://player.vimeo.com/api/player.js"></script>
        {/* <link rel="stylesheet" href="css/owl.carousel.min.css" />

        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="js/simple-lightbox.js"></script>
        <link rel="stylesheet" href="css/bootstrap.min.css" />

        <link rel="stylesheet" href="/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="css/style.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="/js/bootstrap.min.js"></script>
        <script src="/js/owl.carousel.js"></script> */}
        <link rel="stylesheet" href="/css/aos.css" />
        <link rel="stylesheet" href="/css/simple-lightbox.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/owl.carousel.min.css" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="images/favicon.png"
        />
        <link rel="stylesheet" href="/css/style.css" />
        <script src="/js/aos.js"></script> 
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="/js/bootstrap.min.js"></script>
        <script src="/js/owl.carousel.js"></script>
        <script src="/js/simple-lightbox.js"></script>
      </Head>
      <TopHeader />
      <div
        style={{
          height: 5,
          background: "white",
          position: "fixed",
          top: "30px",
          left: 0,
          width: "100%",
          zIndex: 8888,
        }}
      />
      <Header />
      <div className="main-banner home-baner page-content" style={{ marginTop: 125}}>
        <div className={`main-content ${pathname == "/" ? "page-home" : ""}`}>
          {children}
        </div>
        <SideCart />
        <Footer />
      </div>
      <ScrollToTop
        className="scroll-to-top"
        color="#888"
        viewBox={"0 0 256 224"}
      />
    </>
  );
}
