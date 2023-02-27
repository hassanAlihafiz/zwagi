import Link from "next/link";
import { useRouter } from "next/router";
import { Carousel } from "antd";

export default function HomeHtml(props) {
  const router = useRouter();
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    backgroundColor: "#364d79",
  };
  return (
    <>
      <Carousel autoplay style={{height: 700}}>
        <div style={contentStyle}>
          <div className="main-banner" style={{height: 700}}>
            <div className="container">
              <div className="banner-text">
                <h2>
                  Together, we can <br />
                  change the world.
                </h2>
                <a href="/causes">LEARN HOW</a>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
      <div className="bannerthumnail">
        <div className="row align-items-center">
          <div
            className="col-md-4 p0"
            style={{ cursor: "pointer" }}
            onClick={() => {
              router.push(`/causes`);
              window.scroll(0, 0);
            }}
          >
            <div className="thum-img" style={{ height: "100%" }}>
              <img src="images/thum1.jpg" />
            </div>
            <div className="cause-p0">
              <h3>Donate To A Cause</h3>
              <span>Make a difference with us</span>
            </div>
          </div>
          <div
            className="col-md-4 p0"
            style={{ cursor: "pointer" }}
            onClick={() => {
              router.push(`/event`);
              window.scroll(0, 0);
            }}
          >
            <div className="thum-img" style={{ height: "100%" }}>
              <img src="images/thum2.jpg" />
            </div>
            <div className="cause-p0">
              <h3>Partner Spotlight</h3>
              <span>Check out our upcoming event</span>
            </div>
          </div>
          <div
            className="col-md-4 p0"
            style={{ cursor: "pointer" }}
            onClick={() => {
              router.push(`/event`);
              window.scroll(0, 0);
            }}
          >
            <div className="thum-img" style={{ height: "100%" }}>
              <img src="images/thum3.jpg" />
            </div>
            <div className="cause-p0">
              <h3>Explore Events</h3>
              <span>Learn about our initiatives</span>
            </div>
          </div>
        </div>
      </div>
      <main>
        <section className="feeding-child">
          <div className="give-back" style={{ background: "#F9F9F9" }}>
            <div className="inner-wrapper">
              <h2>How We Give Back</h2>
              <p>
                We are committed to safeguarding and improving the lives of the
                most vulnerable, supporting those who defend us, and protecting
                the environment. Whether you donate, share with others, or
                volunteer . . . choose the cause that you are most passionate
                about!
              </p>
              <a href="javascript:void(0)">
                <img src="images/Ico5.png" />
              </a>
            </div>
          </div>
          <div className="row">
            <div
              className="col-sm-6 col-md-3 p0"
              style={{ cursor: "pointer" }}
              onClick={() => {
                router.push(`/causes-inner-children`);
                window.scroll(0, 0);
              }}
            >
              <div className="feeding-section">
                <img src="images/Group36.png" />
                <div className="img-ico">
                  <img src="images/ico4.png" />
                </div>
                <div className="img-heading">
                  <h3>Feeding Children and Combating Food Insecurity</h3>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-md-3 p0"
              style={{ cursor: "pointer" }}
              onClick={() => {
                router.push(`/causes-inner-human`);
                window.scroll(0, 0);
              }}
            >
              <div className="feeding-section">
                <img src="images/Group37.png" />
                <div className="img-ico">
                  <img src="images/ico1.png" />
                </div>
                <div className="img-heading">
                  <h3>Fighting Human Trafficking</h3>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-md-3 p0"
              style={{ cursor: "pointer" }}
              onClick={() => {
                router.push(`/causes-inner-veterans`);
                window.scroll(0, 0);
              }}
            >
              <div className="feeding-section">
                <img src="images/Group38.png" />
                <div className="img-ico">
                  <img src="images/ico2.png" />
                </div>
                <div className="img-heading">
                  <h3>Supporting Veterans</h3>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-md-3 p0"
              style={{ cursor: "pointer" }}
              onClick={() => {
                router.push(`/causes-inner-environment`);
                window.scroll(0, 0);
              }}
            >
              <div className="feeding-section">
                <img src="images/Group39.png" />
                <div className="img-ico">
                  <img src="images/ico3.png" />
                </div>
                <div className="img-heading">
                  <h3>Protecting The Environment</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="donations-total">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12">
                <p style={{ fontSize: 28 }}>
                  <i>
                    "We make a living by what we get, but we make a life by what
                    we give." - Winston Churchill
                  </i>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="partner-slider">
          <div class="container">
            <h3>Partner Organizations</h3>
            <p>
              We are committed to identifying and partnering with innovative,
              dedicated, and well run non-profit organizations that are leading
              the way in their respective areas. Learn more about these
              outstanding organizations and join us in supporting their “game
              changing” efforts.
            </p>
            <div class="owl-slide">
              <div class="owl-carousel owl-theme cra-theme">
                <div class="item">
                  <div class="item-box">
                    <div class="images-boxs">
                      <img src="images/donat3.png" />
                    </div>
                    <div class="item-text-boxs" style={{ height: 470 }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          flexDirection: "column",
                          height: "100%",
                        }}
                      >
                        <div>
                          <h4>Operation Underground Railroad</h4>
                          <h6>
                            Our Partner in The Battle Against Human Trafficking
                          </h6>
                          <p>
                            Fighting the worldwide global epidemic of child sex
                            trafficking, rescuing children from slavery and
                            assisting law enforcement in the prosecution of
                            those who violate children. Once victims are
                            rescued, continuing to support survivors on their
                            path to recovery by partnering with vetted aftercare
                            providers. O.U.R. operates in 26 countries around
                            the world and 28 states in the US.
                          </p>
                        </div>

                        <a
                          href="javascript:void(0)"
                          onClick={() => {
                            router.push(`/partners`);
                            window.scroll(0, 0);
                          }}
                        >
                          LEARN MORE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="item-box">
                    <div class="images-boxs">
                      <img src="images/grp2.jpg" />
                    </div>
                    <div class="item-text-boxs" style={{ height: 470 }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          flexDirection: "column",
                          height: "100%",
                        }}
                      >
                        <div>
                          <h4>Heifer International</h4>
                          <h6>
                            Our Partner in Feeding Children & Combating Food
                            Insecurity
                          </h6>
                          <p>
                            Heifer International, operating in 21 countries, has
                            programs for economic development, environmental
                            sustainability, food security and nutrition, risk
                            mitigation and resilience, and women’s
                            empowerment/social capital. Heifer supports farmers,
                            helps communities, provides training to improve the
                            quantity and the quality of goods produced, and
                            establishes connections to increase incomes.
                          </p>
                        </div>

                        <a
                          href="javascript:void(0)"
                          onClick={() => {
                            router.push(`/partners`);
                            window.scroll(0, 0);
                          }}
                        >
                          LEARN MORE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="item-box">
                    <div class="images-boxs">
                      <img src="images/grp3.jpg" />
                    </div>
                    <div class="item-text-boxs" style={{ height: 470 }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          flexDirection: "column",
                          height: "100%",
                        }}
                      >
                        <div>
                          <h4>Three Square Food Bank</h4>
                          <h6>
                            Our Partner in Feeding Children & Combating Food
                            Insecurity
                          </h6>
                          <p>
                            Relentlessly pursuing the stated goal that “No one
                            in our community should be hungry." In 2019, Three
                            Square distributed more than 41 million meals to the
                            most vulnerable. Bringing together the resources,
                            experience and passion of the people and businesses
                            of Nevada, Three Square is assuring that children,
                            individuals and seniors receive the food they need.
                          </p>
                        </div>

                        <a
                          href="javascript:void(0)"
                          onClick={() => {
                            window.scroll(0, 0);
                            router.push(`/partners`);
                          }}
                        >
                          LEARN MORE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="item-box">
                    <div class="images-boxs">
                      <img src="images/grp4.jpg" />
                    </div>
                    <div class="item-text-boxs" style={{ height: 470 }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          flexDirection: "column",
                          height: "100%",
                        }}
                      >
                        <div>
                          <h4>Thorn</h4>
                          <h6>
                            Our Partner in The Battle Against Human Trafficking
                          </h6>
                          <p>
                            Dedicated to ending child sex trafficking and the
                            sexual exploitation of children. “And we won’t stop
                            until every child can just be a kid.” Thorn provides
                            services to online platforms to proactively detect
                            and delete abuse content. Thorn is considered the
                            world’s leader in developing and depolying
                            technology to fight human trafficking and the Zwagil
                            Foundation is proud to partner with Thorn in this
                            critical fight.
                          </p>
                        </div>
                        <a
                          href="javascript:void(0)"
                          onClick={() => {
                            window.scroll(0, 0);
                            router.push(`/partners`);
                          }}
                        >
                          LEARN MORE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="item-box">
                    <div class="images-boxs">
                      <img src="images/grp1.jpg" />
                    </div>
                    <div class="item-text-boxs" style={{ height: 470 }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          flexDirection: "column",
                          height: "100%",
                        }}
                      >
                        <div>
                          <h4>Water.org</h4>
                          <h6>
                            Our Partner in Feeding Children & Combating Food
                            Insecurity
                          </h6>
                          <p>
                            785 million people — about 1 in 9 — lack access to
                            safe water; 2 billion lack access to a toilet.
                            Water.org is dedicated to changing this, empowering
                            families through access to affordable financing and
                            expert resources to make household water and
                            sanitation solutions a reality. Join the Zwagil
                            Foundation and our partner water.org in this global
                            effort to empower families to a safer and better
                            future.
                          </p>
                        </div>
                        <a
                          href="javascript:void(0)"
                          onClick={() => {
                            window.scroll(0, 0);
                            router.push(`/partners`);
                          }}
                        >
                          LEARN MORE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="hapyhour">
          <div className="row align-items-center">
            <div className="col-md-6 p0">
              <div className="col-about">
                <h6>OUR LATEST INITIATIVE</h6>
                <h3>Earth Day Happy Hour</h3>
                <p>
                  In our Partner Spotlight series, we hosted a virtual Happy
                  Hour to raise awareness for Earth Day. We had over 50 donors
                  who attended.{" "}
                </p>
                <p>
                  Zwagil Foundation donors enjoyed learning from a Master
                  Mixologist who whipped up delicious Earth Day cocktails. In
                  addition to the fun, the Executive Director of Water.org spoke
                  about the importance of access to clean water.{" "}
                </p>
                <p>All proceeds from the event went to Water.org.</p>
                <a href="javascript:void(0)">CONTINUE READING</a>
              </div>
            </div>
            <div className="col-md-6 p0">
              <img src="images/Group48.png" />
            </div>
          </div>
        </section> */}
      </main>
    </>
  );
}
