import ImageGallery from "react-image-gallery";

export default function CausesHtml(props) {
  const images = [
    {
      original: "images/group90.jpg",
      thumbnail: "images/group90.jpg",
    },
    {
      original: "images/group91.jpg",
      thumbnail: "images/group91.jpg",
    },
    {
      original: "images/group92.jpg",
      thumbnail: "images/group92.jpg",
    },
    {
      original: "images/group93.jpg",
      thumbnail: "images/group93.jpg",
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
                  <h2>Earth Day Partner Spotlight Series</h2>
                  <p>
                    In our Partner Spotlight series, we hosted a virtual Happy
                    Hour with a Master Mixologist who taught us how to whip up
                    some fun drinks while we raised awareness about the lack of
                    safe access to clean water in countries around the world.
                    The executive director of Water.org joined us and spoke
                    about the many ways that water can not only protect and save
                    lives but also how it empowers people to have sustainable
                    incomes. Having a source of readily available clean water
                    also gives families time back to be families. Instead of
                    spending hours a day collecting water, children can return
                    to being children and even start attending school.
                  </p>
                  <p>
                    As part of this event, we designed water bottles for
                    purchase with the tagline “changing the world one drink at a
                    time” and all proceeds from the event and water bottle sales
                    went to Water.org. With the money raised, Water.org is
                    helping approximately 2,000 people gain access to clean
                    water and sanitation!
                  </p>
                  <a
                    href="/donation"
                    onClick={() => {
                      window.scroll(0, 0);
                    }}
                  >
                    HELP PROVIDE WATER
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
