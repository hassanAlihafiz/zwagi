import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      $(".loop").owlCarousel({
        center: true,
        items: 2,
        loop: true,
        margin: 10,
        touchDrag: false,
        mouseDrag: false,
        responsiveClass: true,
        responsive: {
          0: { items: 1 },
          600: { items: 1 },
          1000: { items: 3 },
        },
      });
      $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 40,
        nav: true,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 2,
          },
          1200: {
            items: 3,
          },
        },
      });

      (function () {
        $("body").fadeIn(200);

        let $gallery = new SimpleLightbox(".small-demo a", {});

        let interval = (interval = window.setInterval(function () {
          $(".scrollwheel").animate(
            {
              top: 14,
            },
            400,
            function () {
              $(".scrollwheel").animate(
                {
                  top: 10,
                },
                400
              );
            }
          );
        }, 1000));

        $(".flyin-navi a").each(function (i, item) {
          var elem = $(this),
            item = {
              refElement: $(elem.attr("href")),
              parent: elem.parent(),
            };
          inPageItems.push(item);
        });

        // $(window).scroll(function () {
        //   var top = $(document).scrollTop(),
        //     inpageNav = $(".flyin-navi");
        // });
        clearInterval(interval);
      })();
    }, 1000);
  }, []);

  return (
    <>
      <div className="footer-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-9">
              <h3>Join us for our next event!</h3>
            </div>
            <div className="col-sm-3">
              <Link href="/event">
                <a href="javascript:void(0)">EXPLORE EVENTS</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="footersection">
            <div className="row">
              <div className="col-sm-3">
                <img src="/images/logo.png" />
                <p>
                  The Zwagil Foundation was founded by Josh & Jenna Zwagil to
                  impact the world through forming strategic alliances with
                  outstanding, high-impact non-profit organizations. Our vision
                  for the future is a place where people can live freely, by
                  choice, and in self-sustaining communities. Together, we can
                  change the world.
                </p>
              </div>
              <div className="col-sm-2">
                <h3>Navigation</h3>
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/event">Events</Link>
                  </li>
                  <li>
                    <Link href="/donation">Donate</Link>
                  </li>
                  <li>
                    <Link href="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-2">
                <h3>Useful Links</h3>
                <ul>
                  {/* <li>
                    <Link href="/terms-and-condition">
                      Terms and Conditions
                    </Link>
                  </li> */}
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/return-policy">Return Policy</Link>
                  </li>
                  {/* <li>
                    <Link href="/support">Support</Link>
                  </li> */}
                </ul>
              </div>
              <div className="col-sm-2">
                <h3>Connect</h3>
                <ul className="social-lin">
                  <li>
                    <a href="https://www.instagram.com/zwagilfoundation/">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/zwagilfoundation/">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/zwagilfoundation">
                      <i className="fa fa-telegram" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UCz-orA59ikvfWiVHZ94aPZA">
                      <i className="fa fa-youtube-play" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-3">
                <h3>Not for Profit</h3>
                <p>
                  The Internal Revenue Service (IRS) recognizes the Zwagil
                  Foundation as a private foundation, exempt from federal income
                  tax under Internal Revenue Code Section 501(c)(3).
                  Contributions to the Zwagil Foundation are eligible for tax
                  deduction in the US. You should consult your financial planner
                  or tax adviser to determine the exact tax advantages of any
                  gift you are considering. Our Federal Tax ID Number is
                  84-3546378. A copy of the Zwagil Foundation determination
                  letter is available upon request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copy-right">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <span>
                Copyright © 2021 Zwagil Foundation. All Rights Reserved.
              </span>
            </div>
            <div className="col-sm-6">
              <div className="pay-img">
                {/* <img src="images/image6.png" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          AOS.init({
            duration: 1200,
          })
        `,
        }}
      ></script>
    </>
  );
}
