import Link from "next/link";

export default function ContactHtml(props) {
  return (
    <>
      <div class="inner-pages" style={{ background: "#F9F9F9" }}>
        <div class="inner-banner">
          <img src="images/Group10.png" />
          <h2>Contact</h2>
        </div>
        <div class="inner-wrapper" style={{ height: '794px'}}>
          <div class="conatct-form">
            <h3>Get in Touch</h3>
            <span>
              Fill out the form below and a representative will contact you!
            </span>

            <div class="conatct-form-box">
              <form>
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Phone Number" />
                <input type="text" placeholder="Subject" />
                <textarea placeholder="Message"></textarea>
                <button>SUBMIT NOW</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
