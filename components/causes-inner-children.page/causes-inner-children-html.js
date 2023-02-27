import { useEffect, useState } from "react";
import Link from "next/link";
import { Radio, Spin } from "antd";
import { useRouter } from "next/router";
import { callGetApi } from "utils/api";
import { asPrice, asNumber } from "utils/text";

export default function CausesHtml(props) {
  const router = useRouter();
  const [causeDetails, setCauseDetails] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const goCauseInnerDetails = () => {
    router.push({
      pathname: "/donation",
      query: { id: 2 },
    });
    window.scroll(0, 0);
  };

  const loadCause = () => {
    setIsLoading(true);
    callGetApi(`cause/2`, onGetCause, onFailCause);
  };
  const onGetCause = (data) => {
    setIsLoading(false);
    setCauseDetails(data.data);
  };
  const onFailCause = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    loadCause();
    setTimeout(() => {
      $(".owl-theme").owlCarousel({
        loop: true,
        margin: 40,
        nav: true,
        dots: true,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 1,
          },
        },
      });
    }, 1000);
  }, []);
  return (
    <>
      <div class="thunail-section" style={{ background: "#F9F9F9" }}>
        <div class="inner-wrapper" style={{marginBottom: 50}}>
          <div class="row">
            <div class="col-lg-6">
              <div class="container">
                <div class="row">
                  <div class="col-md-12">
                    <div
                      id="custCarousel"
                      class="carousel slide"
                      data-ride="carousel"
                      align="center"
                    >
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img src="images/group11.jpg" alt="Hills" />
                        </div>
                        <div class="carousel-item">
                          <img src="images/group26.jpg" alt="Hills" />
                        </div>
                        <div class="carousel-item">
                          <img src="images/group25.jpg" alt="Hills" />
                        </div>
                        <div class="carousel-item">
                          <img src="images/group24.jpg" alt="Hills" />
                        </div>
                      </div>
                      <a
                        class="carousel-control-prev"
                        href="#custCarousel"
                        data-slide="prev"
                      >
                        <img src="images/slide-le.jpg" />
                      </a>
                      <a
                        class="carousel-control-next"
                        href="#custCarousel"
                        data-slide="next"
                      >
                        <img src="images/slide-rt.jpg" />
                      </a>
                      <ol class="carousel-indicators list-inline">
                        <li class="list-inline-item active">
                          <a
                            id="carousel-selector-0"
                            class="selected"
                            data-slide-to="0"
                            data-target="#custCarousel"
                          >
                            <img src="images/group11.jpg" />
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a
                            id="carousel-selector-1"
                            data-slide-to="1"
                            data-target="#custCarousel"
                          >
                            <img src="images/group26.jpg" class="img-fluid" />
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a
                            id="carousel-selector-2"
                            data-slide-to="2"
                            data-target="#custCarousel"
                          >
                            <img src="images/group25.jpg" class="img-fluid" />
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a
                            id="carousel-selector-2"
                            data-slide-to="3"
                            data-target="#custCarousel"
                          >
                            <img src="images/group24.jpg" class="img-fluid" />
                          </a>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="Every-slider3">
                <h3>
                  Feeding Children & <br />
                  Fighting Food Insecurity
                </h3>
                <p style={{ display: "block" }}>
                  Food insecurity affects hundreds of millions of people
                  worldwide. Even in America 1 in 7 people struggle to put food
                  on their table, with families with children being the most
                  likely to experience hunger. The Zwagil Foundation is
                  dedicated to making sure that children and families never go
                  hungry.
                </p>
                {/* {isLoading ? (
                  <Spin />
                ) : (
                  <ul>
                    <li>
                      <span>{causeDetails?.donors}</span>Donors
                    </li>
                    <li>
                      <span>{asPrice(causeDetails?.donatedAmount)}</span>Donated
                    </li>
                    <li>
                      <span>{causeDetails?.partners}</span>Partners
                    </li>
                  </ul>
                )} */}
                <a href="javascript:void(0)" onClick={goCauseInnerDetails}>
                  {" "}
                  DONATE NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="education-cause">
        <h2>Our Partners</h2>
        <div class="container">
          <div class="Every-slider">
            <div class="owl-carousel owl-theme">
              <div class="item">
                <div class="col-slider1">
                  <div class="col-slider-2">
                    <img src="images/Group242.png" />
                  </div>
                  <div class="col-slider-3">
                    <h4>Heifer International</h4>
                    <p>
                      Heifer International is a global organization operating in
                      21 countries. They implement programs for economic
                      development, environmental sustainability, food security
                      and nutrition, local risk mitigation and resilience, and
                      women’s empowerment and social capital. Heifer supports
                      farmers, helps communities, provides training to improve
                      both the quantity and the quality of the goods they
                      produce, and establishes connections to the markets to
                      increase sales and incomes.
                    </p>
                    <a href="/donation">CLICK HERE TO MAKE A DIFFERENCE</a>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="col-slider1">
                  <div class="col-slider-2">
                    <img src="images/ss1.jpg" />
                  </div>
                  <div class="col-slider-3">
                    <h4>Water.org</h4>
                    <p>
                      785 million people — about 1 in 9 — lack access to safe
                      water; 2 billion — about 1 in 3 — lack access to a toilet.
                      Water.org is dedicated to changing this, empowering
                      families through access to affordable financing and expert
                      resources to make household water and sanitation solutions
                      a reality. Founded by Gary White and Matt Damon, Water.org
                      pioneers market driven financial solutions to the global
                      water crisis.
                    </p>
                    <a href="/donation">CLICK HERE TO MAKE A DIFFERENCE</a>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="col-slider1">
                  <div class="col-slider-2">
                    <img src="images/ss2.jpg" />
                  </div>
                  <div class="col-slider-3">
                    <h4>Thorn</h4>
                    <p>
                      Thorn is at the forefront, in the United States and
                      Canada, of the battle to defend children from sex
                      trafficking and online sexual exploitation. Thorn’s
                      groundbreaking technology locates and finds victims faster
                      as well as identifies the traffickers for prosecution.
                      Thorn has supported the identification of over 2,000
                      children in 2020 alone and over 17,000 children since its
                      initial launch in 2016.
                    </p>
                    <a href="/donation">CLICK HERE TO MAKE A DIFFERENCE</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="partner-cause">
        <div class="row align-items-center">
          <div
            class="col-md-4 p0"
            style={{ cursor: "pointer" }}
            onClick={() => {
              router.push(`/causes-inner-veterans`);
              window.scroll(0, 0);
            }}
          >
            <div class="cause-sectin">
              <img class="ful-tan" src="images/patner3.jpg" />
              <div class="cause-sectin-heading">
                <img src="images/ico2.png" />
                <h4>Supporting Veterans</h4>
              </div>
            </div>
          </div>
          <div
            class="col-md-4 p0"
            style={{ cursor: "pointer" }}
            onClick={() => {
              router.push(`/causes-inner-human`);
              window.scroll(0, 0);
            }}
          >
            <div class="cause-sectin">
              <img class="ful-tan" src="images/patner1.jpg" />
              <div class="cause-sectin-heading">
                <img src="images/ico1.png" />
                <h4>Fighting Human Trafficking</h4>
              </div>
            </div>
          </div>
          <div
            class="col-md-4 p0"
            style={{ cursor: "pointer" }}
            onClick={() => {
              router.push(`/causes-inner-environment`);
              window.scroll(0, 0);
            }}
          >
            <div class="cause-sectin">
              <img class="ful-tan" src="images/patner2.jpg" />
              <div class="cause-sectin-heading">
                <img src="images/ico3.png" />
                <h4>Protecting The Environment</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
