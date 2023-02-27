import React, { useState } from "react";
import Link from "next/link";
import ModalVideo from "react-modal-video";

export default function CausesHtml(props) {
  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState("KGDf_nvv7oI");

  return (
    <>
      <div class="inner-pages" style={{ background: "#F9F9F9" }}>
        <div class="inner-banner">
          <img src="images/media.jpg" />
          <h2>Media</h2>
        </div>

        <div class="inner-media">
          <div class="inner-wrapper">
            <h3>Latest Videos</h3>
            <div class="row">
              <div class="col-md-4">
                <div class="media-box">
                  <img
                    src="images/video1.jpg"
                    onClick={() => {
                      setOpen(true);
                      setVideoId("KGDf_nvv7oI");
                    }}
                    style={{ cursor: "pointer" }}
                  />

                  <div class="media-heading">
                    <h4>2020 Build a Bike Initiative with Affiliates!</h4>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="media-box">
                  <img
                    src="images/video2.jpg"
                    onClick={() => {
                      setOpen(true);
                      setVideoId("eejKn821PoM");
                    }}
                    style={{ cursor: "pointer" }}
                  />

                  <div class="media-heading">
                    <h4>2020 Zwagil Foundation Toy Drive</h4>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="media-box">
                  <img
                    src="images/video3.jpg"
                    onClick={() => {
                      setOpen(true);
                      setVideoId("I1sO1z-yiww");
                    }}
                    style={{ cursor: "pointer" }}
                  />

                  <div class="media-heading">
                    <h4>Zwagil Foundation Foster Kinship Toy Drive</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="inner-media-images">
          <div class="inner-wrapper">
            <h3>Latest Event Highlights</h3>
            <div class="small-demo">
              <a href="images/Group274.png">
                <img src="images/Group274.png" alt="" />
              </a>
              <a href="images/Group275.png">
                <img src="images/Group275.png" alt="" />
              </a>
              <a href="images/Group276.png">
                <img src="images/Group276.png" alt="" />
              </a>
              <a href="images/Group277.png">
                <img src="images/Group277.png" alt="" />
              </a>
              <a href="images/Group278.png">
                <img src="images/Group278.png" alt="" />
              </a>
              <a href="images/Group279.png">
                <img src="images/Group279.png" alt="" />
              </a>
              <a href="images/Group280.png">
                <img src="images/Group280.png" alt="" />
              </a>
              <a href="images/Group281.png">
                <img src="images/Group281.png" alt="" />
              </a>
              <a href="images/Group282.png">
                <img src="images/Group282.png" alt="" />
              </a>
              <a href="images/Group283.png">
                <img src="images/Group283.png" alt="" />
              </a>
              <a href="images/Group284.png">
                <img src="images/Group284.png" alt="" />
              </a>
              <a href="images/Group285.png">
                <img src="images/Group285.png" alt="" />
              </a>
              <a href="images/Group286.png">
                <img src="images/Group286.png" alt="" />
              </a>
              <a href="images/Group287.png">
                <img src="images/Group287.png" alt="" />
              </a>
              <a href="images/Group288.png">
                <img src="images/Group288.png" alt="" />
              </a>
              <a href="images/Group289.png">
                <img src="images/Group289.png" alt="" />
              </a>
              <a href="images/Group290.png">
                <img src="images/Group290.png" alt="" />
              </a>
              <a href="images/Group291.png">
                <img src="images/Group291.png" alt="" />
              </a>
              <a href="images/Group292.png">
                <img src="images/Group292.png" alt="" />
              </a>
              <a href="images/Group293.png">
                <img src="images/Group293.png" alt="" />
              </a>
              <a href="images/Group294.png">
                <img src="images/Group294.png" alt="" />
              </a>
              <a href="images/Group295.png">
                <img src="images/Group295.png" alt="" />
              </a>
              <a href="images/Group296.png">
                <img src="images/Group296.png" alt="" />
              </a>
              <a href="images/Group300.png">
                <img src="images/Group300.png" alt="" />
              </a>
              <a href="images/Group301.png">
                <img src="images/Group301.png" alt="" />
              </a>
            </div>
          </div>
        </div>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId={videoId}
          onClose={() => setOpen(false)}
        />
      </div>
    </>
  );
}
