import ImageGallery from "react-image-gallery";

export default function CausesHtml(props) {
  const images = [
    {
      original: "images/ftoy1.png",
      thumbnail: "images/ftoy1.png",
    },
    {
      original: "images/ftoy2.png",
      thumbnail: "images/ftoy2.png",
    },
    {
      original: "images/ftoy3.png",
      thumbnail: "images/ftoy3.png",
    },
    {
      original: "images/ftoy4.png",
      thumbnail: "images/ftoy4.png",
    },
  ];
  const renderLeftNav = (onClick, disabled) => {
    return (
      <a class="leftNav" onClick={onClick} disabled={disabled}>
        <img src="images/slide-le.jpg" width="27" />
      </a>
    );
  };

  const renderRightNav = (onClick, disabled) => {
    return (
      <a class="rightNav" onClick={onClick} disabled={disabled}>
        <img src="images/slide-rt.jpg" width="27" />
      </a>
    );
  };

  return (
    <>
      <div class="inner-pages" style={{ background: "#F9F9F9" }}>
        <div class="inner-single-blog">
          <div class="inner-wrapper">
            <div class="row">
              <div class="col-sm-12 col-md-6 event-img">
                {/* <img src="images/blog1.png" /> */}
                <ImageGallery
                  items={images}
                  showFullscreenButton={false}
                  showPlayButton={false}
                  renderLeftNav={renderLeftNav}
                  renderRightNav={renderRightNav}
                />
              </div>
              <div class="col-sm-12 col-md-6">
                <div class="blog-info">
                  <h2>Build a Bike and Foster Kinship Toy Drive 2020</h2>
                  <p>
                    Year 2020 looked very different than we all expected.
                    Between stores being closed and government restrictions on
                    maximum in person gatherings, we successfully executed a
                    hybrid virtual/in-person event that provided volunteers from
                    around the US a unique opportunity to participate in a
                    Build-a-Bike event benefiting foster children. It was an
                    inspiring and all-around rewarding experience as volunteers
                    teamed-up to solve puzzles and decipher clues in order to
                    unlock bike parts and tools in real-time for the children at
                    Foster Kinship in Las Vegas to build their own bikes to take
                    home. In addition to the Build-a-Bike, we partnered with the
                    MDC corporate team to load up the carts and Hempworx truck
                    at Target to deliver an incredible $20,000 worth of toys and
                    bikes to the Foster Kinship children making this Holiday
                    Season so much brighter.
                  </p>
                  <div>
                    <a
                      href="/donation"
                      onClick={() => {
                        window.scroll(0, 0);
                      }}
                    >
                      DONATE TO NEXT TOY DRIVE
                    </a>
                    <img
                      src="/images/FosterKinship.png"
                      style={{
                        height: "65px",
                        marginLeft: 15,
                      }}
                    />
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
