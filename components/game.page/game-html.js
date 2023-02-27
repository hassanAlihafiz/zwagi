import { useRouter } from "next/router";

export default function CausesHtml(props) {
  const router = useRouter();

  return (
    <>
      <div class="inner-pages" style={{ background: "#F9F9F9" }}>
        <div class="inner-single-blog">
          <div class="inner-wrapper">
            <div class="row">
              <div class="col-sm-7">
                <img src="images/blog2.png" />
              </div>
              <div class="col-sm-5">
                <div class="blog-info">
                  <h2>Game On Tournament Part 2</h2>
                  <p>
                    That’s right, get your Game On! The trivia competition is
                    back this time to support our back to school backpack
                    initiative for kids
                  </p>
                  <ul>
                    <li>
                      <span>Date:</span> August 5th, 2021
                    </li>
                    <li>
                      <span>Time:</span> 8:00pm EST
                    </li>
                    <li>
                      <span>Organizer:</span> Zwagil Foundation
                    </li>
                  </ul>
                  <div className="btn-area">
                    <a
                      className="btn-support-team"
                      onClick={() => {
                        router.push("/support-team");
                      }}
                    >
                      SUPPORT A TEAM
                    </a>
                    <a
                      className="btn-register-team"
                      onClick={() => {
                        router.push("/register-team");
                      }}
                    >
                      REGISTER A TEAM
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
