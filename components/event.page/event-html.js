import { useRouter } from "next/router";
import Link from "next/link";
import { Tabs } from "antd";
const { TabPane } = Tabs;

export default function CausesHtml(props) {
  const router = useRouter();
  const goCauseInnerDetails = (rout) => {
    router.push(rout);
    window.scroll(0, 0);
  };
  return (
    <>
      <div class="inner-pages" style={{ background: "#F9F9F9" }}>
        <div class="inner-banner">
          <img src="images/Group8.png" />
          <h2>Event Calendar</h2>
        </div>
        <div class="inner-heading">
          <div class="inner-wrapper">
            <div class="row">
              <div class="col-sm-4">
                <h3>Our Events & Initiatives</h3>
              </div>
              <div class="col-sm-8">
                <p>
                  As an organization, the Zwagil Foundation has one overarching
                  goal: Making a meaningful difference. We have identified
                  critical causes, partnered with high impact organizations,
                  leveraged exciting opportunities, and networked with the best
                  and brightest people . . . You! We invite you to explore and
                  get involved in our current events and initiatives. Join us
                  and “Together, we can change the world!”
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="inner-blog">
          <div class="inner-wrapper">
            <Tabs centered defaultActiveKey="1">
              <TabPane tab="Upcoming Events" key="1">
                <div class="row">
                  <div class="col-md-6 col-lg-4">
                    <a
                      href="javascript:void(0)"
                      onClick={() => goCauseInnerDetails("/game")}
                      class="blog-box"
                    >
                      <img src="images/blog2.png" />
                      <div class="blog-date">
                        <span>05</span>
                        <small>AUG</small>
                      </div>
                      <div class="blog-heading">
                        <h4>Game On Tournament - Part 2</h4>
                        <strong>7:00 am - 7:00 am</strong>
                      </div>
                    </a>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="Past Events" key="2">
                <div class="row">
                  <div class="col-md-6 col-lg-4">
                    <a
                      href="javascript:void(0)"
                      onClick={() => goCauseInnerDetails("/earthday")}
                      class="blog-box"
                    >
                      <img src="/images/drinking.jpg" />
                      {/* <div class="blog-date">
                        <span>21</span>
                        <small>Dec</small>
                      </div> */}
                      <div class="blog-heading">
                        <h4>Earth Day Partner Spotlight Series</h4>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <a
                      href="javascript:void(0)"
                      onClick={() => goCauseInnerDetails("/game2")}
                      class="blog-box"
                    >
                      <img src="/images/blog2.png" />
                      {/* <div class="blog-date">
                        <span>21</span>
                        <small>Dec</small>
                      </div> */}
                      <div class="blog-heading">
                        <h4>Game On Tournament</h4>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <a
                      href="javascript:void(0)"
                      onClick={() => goCauseInnerDetails("/lonestart")}
                      class="blog-box"
                    >
                      <img src="/images/event3.png" />
                      {/* <div class="blog-date">
                        <span>21</span>
                        <small>Dec</small>
                      </div> */}
                      <div class="blog-heading">
                        <h4>You are Not Alone, Lone Star Initiative</h4>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <a
                      href="javascript:void(0)"
                      onClick={() => goCauseInnerDetails("/fostertoydrive")}
                      class="blog-box"
                    >
                      <img src="/images/event4.png" />
                      {/* <div class="blog-date">
                        <span>21</span>
                        <small>Dec</small>
                      </div> */}
                      <div class="blog-heading">
                        <h4>Build a Bike and Foster Kinship Toy Drive 2020</h4>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <a
                      href="javascript:void(0)"
                      onClick={() => goCauseInnerDetails("/holidaytoydrive")}
                      class="blog-box"
                    >
                      <img src="/images/event5.png" />
                      {/* <div class="blog-date">
                        <span>21</span>
                        <small>Dec</small>
                      </div> */}
                      <div class="blog-heading">
                        <h4>2019 Holiday Toy Drive Initiative</h4>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <a
                      href="javascript:void(0)"
                      onClick={() => goCauseInnerDetails("/partner")}
                      class="blog-box"
                    >
                      <img src="images/blog1.png" />
                      {/* <div class="blog-date">
                        <span>21</span>
                        <small>Dec</small>
                      </div> */}
                      <div class="blog-heading">
                        <h4>
                          Partner Spotlight Series: Fighting Human Trafficking
                        </h4>
                      </div>
                    </a>
                  </div>
                </div>
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}
