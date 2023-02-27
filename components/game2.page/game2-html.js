import ImageGallery from 'react-image-gallery';

export default function CausesHtml(props) {
  const images = [
    {
      original: 'images/game2.png',
      thumbnail: 'images/game2.png',
    },
    {
      original: 'images/game1.png',
      thumbnail: 'images/game1.png',
    },
    {
      original: 'images/game3.png',
      thumbnail: 'images/game3.png',
    },
    {
      original: 'images/game4.png',
      thumbnail: 'images/game4.png',
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
                  <h2>Game on Tournament</h2>
                  <p>
                    What an incredible event! We hosted an online game show with customized trivia and a fundraising challenge with all proceeds going to the winning team’s charity of choice.
                  </p>
                  <p>
                    We had a packed tournament with over 20 full teams competing! Alicia Pesina’s team, the Bold and Fearless Hemplifers, won the final round and chose Operation Underground Railroad as the charity to support. Thanks to all of you, we were able to raise nearly $60,000 for Operation Underground Railroad to help in the fight against human trafficking!
                  </p>
                  <p>
                    Congratulations to Candace Byrd Davis's Team Legacy Builders that raised over $10,000 and snagged the bonus points for winning the GameOn fundraising challenge!  Congratulations also goes to Karen Newman-Varnado's Teams Intentional and Synergy for raising the second highest amount!
                  </p>
                  <a
                    href="javascript:void(0)"
                    onClick={() => {
                      window.scroll(0, 0);
                    }}
                  >
                    JOIN US ON THE NEXT ONE
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
