import Link from "next/link";
import { useRouter } from "next/router";

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
          <img src="images/Group9.png" />
          <h2>Helping When & Where It’s Needed Most</h2>
        </div>
        <div class="inner-heading">
          <div class="inner-wrapper">
            <div class="row">
              <div class="col-sm-4">
                <h3>Our Causes</h3>
              </div>
              <div class="col-sm-8">
                <p>
                  We have identified four areas where we can make a meaningful
                  difference in the world and in the lives of others. Join us in
                  supporting these critical causes by donating to a category and
                  we will make your gift to our partner or partners in that
                  category.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="Our-Causes">
          <div class="inner-wrapper">
            <div class="row">
              <div class="col-sm-6">
                <div class="causes-box">
                  <div class="causes-img">
                    <img src="images/cau3.png" />

                    {/* <span>1 Partner</span> */}
                  </div>
                  <div class="causes-heading">
                    <h4>Feeding Children & Fighting Food Insecurity</h4>
                    <p >
                      Food insecurity affects hundreds of millions of people
                      worldwide. Even in America 1 in 7 people struggle to put
                      food on their table, with families with children being the
                      most likely to experience hunger. The Zwagil Foundation is
                      dedicated to making sure that children and families never
                      go hungry.
                    </p>
                    <a
                      href="javascript:void(0)"
                      onClick={() =>
                        goCauseInnerDetails("/causes-inner-children")
                      }
                    >
                      LEARN MORE
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-sm-6">
                <div class="causes-box" style={{ height: "95%" }}>
                  <div class="causes-img">
                    <img src="images/cau2.png" />

                    {/* <span>2 Partner</span> */}
                  </div>
                  <div class="causes-heading">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "100%",
                      }}
                    >
                      <div>
                        <h4>Fighting Human Trafficking</h4>
                        <p >
                          We are committed to ending human trafficking and
                          empowering survivors to regain their dignity on a path
                          to a full, vibrant life. Every year millions of
                          vulnerable people, mostly women and children, are
                          exploited and trafficked. Join us and our Partners in
                          this critical life or death fight against the horrors
                          of human trafficking.
                        </p>
                      </div>
                      <a
                        href="javascript:void(0)"
                        onClick={() =>
                          goCauseInnerDetails("/causes-inner-human")
                        }
                        // style={{ position: "relative", bottom: -39 }}
                      >
                        LEARN MORE
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-sm-6">
                <div class="causes-box">
                  <div class="causes-img">
                    <img src="images/cau1.png" />

                    {/* <span>3 Partner</span> */}
                  </div>
                  <div class="causes-heading">
                    <h4>Supporting Veterans</h4>
                    <p >
                      Fighting for those who fought for us. Veterans often face
                      significant challenges following their service and as they
                      transition to civilian life. We extend our heartfelt
                      appreciation to our Veterans for their service and are
                      honored to partner with like-minded organizations that
                      support the needs and enrich the lives of those brave
                      heroes and their families.
                    </p>
                    <a
                      href="javascript:void(0)"
                      onClick={() =>
                        goCauseInnerDetails("/causes-inner-veterans")
                      }
                    >
                      LEARN MORE
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-sm-6">
                <div class="causes-box">
                  <div class="causes-img">
                    <img src="images/cau4.png" />

                    {/* <span>4 Partner</span> */}
                  </div>
                  <div class="causes-heading">
                    <h4>Protecting The Environment</h4>
                    <p >
                      Protecting our world for a better today and for a brighter
                      future for our children. Join us in supporting
                      organizations that are leading the way in creating lasting
                      solutions to some of the biggest environmental challenges
                      and in supporting local farmers in the proliferation of
                      sustainable and organic growing practices to protect the
                      independence of these important growers while safeguarding
                      our food system.
                    </p>
                    <a
                      href="javascript:void(0)"
                      onClick={() =>
                        goCauseInnerDetails("/causes-inner-environment")
                      }
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
    </>
  );
}
