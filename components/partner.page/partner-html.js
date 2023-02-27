import Link from "next/link";

export default function CausesHtml(props) {
  return (
    <>
      <div class="inner-pages" style={{ background: "#F9F9F9" }}>
        <div class="inner-single-blog">
          <div class="inner-wrapper">
            <div class="row">
              <div class="col-md-7">
                <img src="images/blog1.png" />
                <img
                  src="/images/logo11.png"
                  style={{
                    width: "65px",
                    position: "absolute",
                    height: "50px",
                    right: 43,
                    top: 15,
                  }}
                />
              </div>
              <div class="col-md-5">
                <div class="blog-info">
                  <h2>Partner Spotlight Series: Fighting Human Trafficking</h2>
                  <p>
                    Join us in this life saving fight against the horrors of
                    human trafficking and child slavery as we hear from our
                    guest speakers and Partner Thorn. Experience a virtual
                    chocolate tasting with Taza Chocolates, one of the industry
                    leaders in ethically sourced chocolate. Hosted by Candace
                    Bird Davis
                  </p>
                  <ul>
                    <li>
                      <span>Date:</span> June 17, 2021
                    </li>
                    <li>
                      <span>Time:</span> 8:00pm EST
                    </li>
                    <li>
                      <span>Organizer:</span> Zwagil Foundation
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
