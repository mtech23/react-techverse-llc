import React, { useState } from "react";
import "./style.css";

import video1 from "../../asserts/images/Video 1.mp4";
import video2 from "../../asserts/images/Video 2.mp4";
import video3 from "../../asserts/images/Video 3.mp4";
import video4 from "../../asserts/images/Video 4.mp4";
import Video5 from "../../asserts/images/Video5.mp4";
import Video7 from "../../asserts/images/Video7.mp4";
import image44 from "../../asserts/images/image444.webp";
import image443 from "../../asserts/images/image443.webp";
import image442 from "../../asserts/images/image442.webp";
import image441 from "../../asserts/images/image441.webp";
import image440 from "../../asserts/images/image440.webp";
import image439 from "../../asserts/images/image439.webp";
import image438 from "../../asserts/images/image438.webp";

import Video6 from "../../asserts/images/Video 6.mp4";
import testLine from "../../asserts/images/test-Line.webp";
const videos = [
  {
    id: 1,
    thumbnail: image44,
    videoSrc: video1,
  },
  {
    id: 2,
    thumbnail: image443,
    videoSrc: video2,
  },
  {
    id: 3,
    thumbnail: image442,
    videoSrc: video3,
  },
  {
    id: 4,
    thumbnail: image441,
    videoSrc: video4,
  },
  {
    id: 5,
    thumbnail: image440,
    videoSrc: Video5,
  },
  {
    id: 6,
    thumbnail: image439,
    videoSrc: Video6,
  },
  {
    id: 7,
    thumbnail: image438,
    videoSrc: Video7,
  },
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
      <section className="techVerse_testimonials">
        {/* <div className="techVerse_testimonialsContent"> */}
        <div className="width-1600">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="techVerse_testimonialsTextSec">
                  <div className="testimonials_titleHead">
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
                    className="testimonials_title"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    WHAT PEOPLE SAY
                  </h2>
                  <div
                    className="techVerse_testimonialsTextSec-img testimonial-pic"
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
              <div className="col-md-6">
                <div
                  className="testimonial"
                  data-aos="fade-left"
                  data-aos-offset="0"
                  data-aos-duration="3000"
                >
                  <div className="content active" id="tab1">
                    {videos?.map((items, index) => (
                      <div
                        key={index}
                        className={
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
