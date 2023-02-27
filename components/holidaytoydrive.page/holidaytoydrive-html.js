import ImageGallery from "react-image-gallery";

export default function CausesHtml(props) {
  const images = [
    {
      original: "images/ktoy1.jpg",
      thumbnail: "images/ktoy1.jpg",
    },
    {
      original: "images/ktoy2.jpg",
      thumbnail: "images/ktoy2.jpg",
    },
    {
      original: "images/ktoy3.jpg",
      thumbnail: "images/ktoy3.jpg",
    },
    {
      original: "images/ktoy4.jpg",
      thumbnail: "images/ktoy4.jpg",
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
                  <h2>Foster Kinship Toy Drive 2019</h2>
                  <p>
                    Josh and Jenna had a vision to create a giving culture
                    within and outside of their My Daily Choice (MDC) company.
                    They founded the Zwagil Foundation and launched their first
                    mission : to take the MDC corporate team members to the
                    local Target in Las Vegas and load up an 18- wheeler truck
                    to the max with toys and bikes in order to give back to the
                    community. They contacted a local Foster organization,
                    Foster Kinship, and purchased over $15,000 worth of toys and
                    bikes for the Holiday season so no child in kinship care
                    would be left without presents that year. As an added bonus,
                    when the truck arrived, the MDC team rode the bikes out of
                    the truck and were able to give them to the children and
                    children’s caregivers bringing cheers and smiles for the
                    Holidays.
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
