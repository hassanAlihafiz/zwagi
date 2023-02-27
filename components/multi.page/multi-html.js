import Link from "next/link";

export default function CausesHtml(props) {
  return (
    <>
      <div class="inner-pages" style={{ background: "#F9F9F9" }}>
        <div class="inner-single-blog">
          <div class="inner-wrapper">
            <div class="row">
              <div class="col-sm-7">
                <img src="images/blog3.png" />
              </div>
              <div class="col-sm-5">
                <div class="blog-info">
                  <h2>
                    Multi-City Build a Bike & Holiday Toy Drive Benefiting
                    Foster Children
                  </h2>
                  <p>
                    That’s right, get your Game On! The trivia competition is
                    back this time to support our back to school backpack
                    initiative for kids
                  </p>
                  <ul>
                    <li>
                      <span>Date:</span> December 21st, 2021
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
