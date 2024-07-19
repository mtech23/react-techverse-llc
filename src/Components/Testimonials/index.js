import React, { useState } from "react";
import "./style.css";
import face1 from "../../asserts/images/face-1.webp";
import face2 from "../../asserts/images/face-2.webp";
import face3 from "../../asserts/images/face-3.webp";
import face4 from "../../asserts/images/face-4.webp";
import face5 from "../../asserts/images/face-5.webp";
import face6 from "../../asserts/images/face-6.webp";
import face7 from "../../asserts/images/face-7.webp";

import video1 from "../../asserts/images/video1.mp4";
import video2 from "../../asserts/images/video2.mp4";
import video3 from "../../asserts/images/video3.mp4";
import video4 from "../../asserts/images/video4.mp4";
import video5 from "../../asserts/images/video1.mp4";
import video6 from "../../asserts/images/video2.mp4";
import video7 from "../../asserts/images/video3.mp4";

import testLine from "../../asserts/images/test-Line.webp";
const videos = [
  {
    id: 1,
    thumbnail: face1,
    videoSrc: video1,
  },
  {
    id: 2,
    thumbnail: face2,
    videoSrc: video2,
  },
  {
    id: 3,
    thumbnail: face3,
    videoSrc: video3,
  },
  {
    id: 4,
    thumbnail: face4,
    videoSrc: video4,
  },
  {
    id: 5,
    thumbnail: face5,
    videoSrc: video5,
  },
  {
    id: 6,
    thumbnail: face6,
    videoSrc: video6,
  },
  {
    id: 7,
    thumbnail: face7,
    videoSrc: video7,
  },
  // {
  //   id: 7,
  //   thumbnail: face7,
  //   videoSrc: video1
  // },
];

const Testimonials = () => {
  const [selectedVideo, setSelectedVideo] = useState(1);

  console.log("selectedVideo", selectedVideo);

  const handleThumbnailClick = (video) => {
    console.log("video", video?.id);
    setSelectedVideo(video); // Update state with the clicked video
  };

  console.log("selecttedid", selectedVideo);

  return (
    <>
      <section class="techVerse_testimonials">
        {/* <div class="techVerse_testimonialsContent"> */}
        <div class="width-1600">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6">
                <div class="techVerse_testimonialsTextSec">
                  <div class="testimonials_titleHead">
                    <span
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      TESTIMONIALS
                    </span>
                    <img
                      src={testLine}
                      data-aos="fade-left"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                      alt=""
                    />
                  </div>
                  <h2
                    class="testimonials_title"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    WHAT PEOPLE SAY
                  </h2>
                  <div
                    class="techVerse_testimonialsTextSec-img testimonial-pic"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="3000"
                  >
                    {videos?.map((video) => (
                      <img
                        src={video.thumbnail}
                        className={`face_${video?.id}  ${
                          selectedVideo == video.id ? "active" : ""
                        }`}
                        data-alt="tab2"
                        key={video.id}
                        onClick={() => handleThumbnailClick(video?.id)}
                        alt={`Thumbnail ${video.id}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div
                  class="testimonial"
                  data-aos="fade-left"
                  data-aos-offset="0"
                  data-aos-duration="3000"
                >
                  <div class="content active" id="tab1">
                    {videos?.map((items, index) => (
                      <div
                        key={index}
                        class={
                          items?.id == selectedVideo
                            ? "d-block rc"
                            : " rc d-none"
                        }
                      >
                        <video
                          id="testimonialvideo"
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="auto"
                        >
                          <source
                            src={items?.videoSrc || videos[0].videoSrc}
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    ))}
                    <h2>David Ruffer</h2>
                    <p>Lorem Ipsum is simply dummy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
