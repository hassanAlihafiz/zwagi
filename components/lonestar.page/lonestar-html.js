import ImageGallery from 'react-image-gallery';

export default function CausesHtml(props) {
  const images = [
    {
      original: 'images/lone3.jpg',
      thumbnail: 'images/lone3.jpg',
    },
    {
      original: 'images/lone1.jpg',
      thumbnail: 'images/lone1.jpg',
    },
    {
      original: 'images/lone2.jpg',
      thumbnail: 'images/lone2.jpg',
    },
    {
      original: 'images/lone4.jpg',
      thumbnail: 'images/lone4.jpg',
    }
  ];
  const renderLeftNav = (onClick, disabled) => {
    return <a
      class="leftNav"
      onClick={onClick}
      disabled={disabled}
    ><img src="images/slide-le.jpg" width="27"
      /></a>
  }

  const renderRightNav = (onClick, disabled) => {
    return <a
      class="rightNav"
      onClick={onClick}
      disabled={disabled}
    ><img src="images/slide-rt.jpg" width="27"
      /></a>
  }

  return (
    <>
      <div class="inner-pages" style={{ background: "#F9F9F9" }}>
        <div class="inner-single-blog">
          <div class="inner-wrapper">
            <div class="row">
              <div class="col-sm-12 col-md-6">
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
                  <h2>You are Not Alone, Lone Star Initiative</h2>
                  <p>
                    In February 2021, Texas was in an unprecedented severe winter weather crisis. The food supply chain collapsed, water lines burst and the power grid failed. In many areas across the state, access to safe water and food was not available and the emergency shelters became filled beyond capacity even maxing out the hotels and convention centers that had been pressed into use as impromptu shelters. We needed to do something to help and we needed to do it right away, letting the “Lone Star” state know that they are not alone. With your help and support, in partnership with Feeding Texas, the largest food bank in the state, we loaded 18-wheelers to the max and supplied 20,000 lbs of critical food and water supplies to those that needed it most!
                    Knowing that emergencies happen, we created the Zwagil Foundation Emergency Fund to provide critical assistance in times of crises to those that need it most, when they need it most.
                  </p>
                  <a
                    href="/donation"
                    onClick={() => {
                      window.scroll(0, 0);
                    }}
                  >
                    SUPPORT RELIEF EFFORTS
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
