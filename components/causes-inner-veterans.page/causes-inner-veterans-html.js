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
      query: { id: 3 },
    });
    window.scroll(0, 0);
  };

  const loadCause = (userType_) => {
    setIsLoading(true);
    callGetApi(`cause/3`, onGetCause, onFailCause);
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
                          <img src="images/group23.jpg" alt="Hills" />
                        </div>
                        <div class="carousel-item">
                          <img src="images/group22.jpg" alt="Hills" />
                        </div>
                        <div class="carousel-item">
                          <img src="images/group21.jpg" alt="Hills" />
                        </div>
                        <div class="carousel-item">
                          <img src="images/group20.jpg" alt="Hills" />
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
                            <img src="images/group23.jpg" />
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a
                            id="carousel-selector-1"
                            data-slide-to="1"
                            data-target="#custCarousel"
                          >
                            <img src="images/group22.jpg" class="img-fluid" />
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a
                            id="carousel-selector-2"
                            data-slide-to="2"
                            data-target="#custCarousel"
                          >
                            <img src="images/group21.jpg" class="img-fluid" />
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a
                            id="carousel-selector-2"
                            data-slide-to="3"
                            data-target="#custCarousel"
                          >
                            <img src="images/group20.jpg" class="img-fluid" />
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
                <h3>Supporting Veterans</h3>
                <p style={{ display: "block" }}>
                  Many Veterans face significant challenges following their
                  service and as they transition to civilian life. Often these
                  include struggles with service related mental health issues,
                  coping with physical injuries, or finding a job and earning a
                  living. We extend our heartfelt appreciation to our Veterans
                  for their service and are honored to partner with
                  organizations that support the needs and enrich the lives of
                  those heroes and their families.
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
                    <a href="#">Click here to make a difference</a>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="col-slider1">
                  <div class="col-slider-2">
                    <img src="images/Group242.png" />
                  </div>
                  <div class="col-slider-3">
                    <h4>Heifer International</h4>
                    <p>
                      One thing we love about Heifer: Every girl deserves an
                      education initiative. 132 million girls worldwide aren’t
                      able to attend school or are denied an education. Often,
                      they must work in the fields or in the home to help
                      support the family. But when a family is given the
                      resources, tools and training to build a sustainable
                      income, the girl is able to leave the field and attend
                      school, breaking the cycle of poverty and changing her
                      future forever. Heifer’s model is all about empowering
                      families to raise themselves out of hunger and poverty
                      through building sustainable farms and a steady stream of
                      income.
                    </p>
                    <a href="#">Click here to make a difference</a>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="col-slider1">
                  <div class="col-slider-2">
                    <img src="images/Group242.png" />
                  </div>
                  <div class="col-slider-3">
                    <h4>Heifer International</h4>
                    <p>
                      One thing we love about Heifer: Every girl deserves an
                      education initiative. 132 million girls worldwide aren’t
                      able to attend school or are denied an education. Often,
                      they must work in the fields or in the home to help
                      support the family. But when a family is given the
                      resources, tools and training to build a sustainable
                      income, the girl is able to leave the field and attend
                      school, breaking the cycle of poverty and changing her
                      future forever. Heifer’s model is all about empowering
                      families to raise themselves out of hunger and poverty
                      through building sustainable farms and a steady stream of
                      income.
                    </p>
                    <a href="#">Click here to make a difference</a>
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
              router.push(`/causes-inner-children`);
              window.scroll(0, 0);
            }}
          >
            <div class="cause-sectin">
              <img
                class="ful-tan"
                src="images/slider1.jpg"
                style={{ height: 338, width: "100%", objectFit: "cover" }}
              />
              <div class="cause-sectin-heading">
                <img src="images/ico4.png" />
                <h4>Feeding Children & Fighting Food Insecurity</h4>
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
              <img
                class="ful-tan"
                src="images/patner1.jpg"
                style={{ height: 338, width: "100%", objectFit: "cover" }}
              />
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
              <img
                class="ful-tan"
                src="images/patner2.jpg"
                style={{ height: 338, width: "100%", objectFit: "cover" }}
              />
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
