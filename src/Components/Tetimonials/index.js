import React, { useState } from "react";
import "./style.css";
import testimonial from "../../asserts/images/testimonial.mp4";
import vid1 from "../../asserts/images/vid-1.mp4";
import face1 from "../../asserts/images/face-1.png";
import face2 from "../../asserts/images/face-2.png";
import face3 from "../../asserts/images/face-3.png";
import face4 from "../../asserts/images/face-4.png";
import face5 from "../../asserts/images/face-5.png";
import face6 from "../../asserts/images/face-6.png";
import face7 from "../../asserts/images/face-7.png";
import testLine from "../../asserts/images/test-Line.png";
const videos = [
  // {
  //   id: 1,
  //   thumbnail: vid1,
  //   videoSrc: vid1
  // },
  {
    id: 1,
    thumbnail: face1,
    videoSrc: face1
  },
  {
    id: 2,
    thumbnail: face2,
    videoSrc: face2
  },
  {
    id: 3,
    thumbnail: face3,
    videoSrc: face3
  },
  {
    id: 4,
    thumbnail: face4,
    videoSrc: face4
  },
  {
    id: 5,
    thumbnail: face5,
    videoSrc: face5
  },
  {
    id: 6,
    thumbnail: face6,
    videoSrc: face6
  },
  {
    id: 7,
    thumbnail: face7,
    videoSrc: face7
  },

];
const Testimonials = () => {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);;

  const handleThumbnailClick = (video) => {
 
    setSelectedVideo(video);
  };
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
                    {/* {videos?.map((video) => (
                      <img src={video.thumbnail} class="face_2" data-alt="tab2" key={video.id} onClick={() => handleThumbnailClick(video)} />
                    ))} */}
                    {videos.map((video) => (
                      <img
                        src={video.thumbnail}
                        className={`face_${video?.id}  ${selectedVideo.id === video.id ? 'active' : ''}`}
                        data-alt="tab2"
                        key={video.id}
                        onClick={() => handleThumbnailClick(video)}
                        alt={`Thumbnail ${video.id}`}
                      />
                    ))}
                    {/* <img src={face1} class="face_1 active" data-alt="tab1" />
                    <img src={face2} class="face_2" data-alt="tab2" />
                    <img src={face3} class="face_3" data-alt="tab3" />
                    <img src={face4} class="face_4" data-alt="tab4" />
                    <img src={face5} class="face_5" data-alt="tab5" />
                    <img src={face6} class="face_6" data-alt="tab6" />
                    <img src={face7} class="face_7" data-alt="tab7" /> */}
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
                    {selectedVideo && (
                      <div class="rc">
                        <video
                          id="testimonialvideo"
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="auto"
                        >
                          <source src={selectedVideo.videoSrc} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>)}
                    <h2>David Ruffer</h2>
                    <p>Lorem Ipsum is simply dummy</p>
                  </div>
                  <div class="content" id="tab2">
                    <div class="rc">
                      <video
                        id="testimonialvideo"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload
                      >
                        <source src={vid1} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <h2>David Ruffer</h2>
                    <p>Lorem Ipsum is simply dummy</p>
                  </div>
                  <div class="content" id="tab3">
                    <button
                      class="play-icon"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      <i class="fa-solid fa-play"></i>
                    </button>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                      All the.
                    </p>
                    <p>Tab 3</p>
                  </div>
                  <div class="content" id="tab4">
                    <button
                      class="play-icon"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      <i class="fa-solid fa-play"></i>
                    </button>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                      All the.
                    </p>
                    <p>Tab 4</p>
                  </div>
                  <div class="content" id="tab5">
                    <button
                      class="play-icon"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      <i class="fa-solid fa-play"></i>
                    </button>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                      All the.
                    </p>
                    <p>Tab 5</p>
                  </div>
                  <div class="content" id="tab6">
                    <button
                      class="play-icon"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      <i class="fa-solid fa-play"></i>
                    </button>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                      All the.
                    </p>
                    <p>Tab 6</p>
                  </div>
                  <div class="content" id="tab7">
                    <button
                      class="play-icon"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      <i class="fa-solid fa-play"></i>
                    </button>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                      All the.
                    </p>
                    <p>Tab 7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        class="modal fade testimoial_modal"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-body testimonial-video">
              <button
                type="button"
                class="close test_closeBtn"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <iframe
                src="https://www.youtube.com/embed/Jw7s42Op2ao?si=3R5KdKYRpyhcQsdy"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; 
                autoplay; clipboard-write; 
                encrypted-media; gyroscope; 
                picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
