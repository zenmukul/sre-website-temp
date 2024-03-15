import React, { Fragment, useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { FreeMode, Navigation, Autoplay } from "swiper";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { Dialog, Transition } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";

const VideoSlider = () => {
  const youtubeAPIKey = `AIzaSyAZbsUY2O_XmpPp-myexKz7r025tvuyI-E`;
  const playlistId = `PLZWOnSwaTEAKE29YyS_VhKzpTO8_xIv_h`;
  const youtubeapi = `https://content.googleapis.com/youtube/v3/playlistItems?playlistId=${playlistId}&part=contentDetails&part=snippet&maxResults=50&key=${youtubeAPIKey}`;
  const [playlistLoading, setPlaylistLoading] = useState(false);
  const [playlistData, setPlaylistData] = useState();
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function fetchYoutubePlaylistData() {
    var request = new Request(youtubeapi);
    setPlaylistLoading(true);
    fetch(request)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setPlaylistData(data.items);
        data.items.map((item) =>
          videoIds.push(item.snippet.resourceId.videoId)
        );
        setPlaylistLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  const [videoIds, setVideoIds] = useState("");
  useEffect(() => {
    fetchYoutubePlaylistData();
  }, []);

  return (
    <>
      <SectionWrapper
        id="videos"
        title="Videos"
        className="
      bg-gray-50 py-12
    "
      >
        <SectionTitle
          title="Videos"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <span className="my-12">
          <Swiper
            slidesPerView={1}
            spaceBetween={5}
            // navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Navigation, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },

              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },

              1280: {
                slidesPerView: 4,
                spaceBetween: 20,
              },

              1536: {
                slidesPerView: 4,
                spaceBetween: 20,
              },

              1920: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            className="my-12 max-w-8xl mx-auto"
          >
            {playlistData &&
              playlistData.map((item, id) => (
                <SwiperSlide
                  onClick={() => {
                    setVideoIds(item);
                    openModal();
                  }}
                  key={id}
                  style={{
                    background: "transparent",
                    paddingBlock: "20px",
                  }}
                >
                  <div
                    className="shadow-md cursor-pointer mx-8 md:m-0 pt-2 pb-4 px-2 rounded-xl  hover:shadow-xl
                 hover:scale-95 transform transition-all duration-500 ease-in-out  md:h-72 bg-white
                  hover:border-gray-200 border-2 border-transparent
                "
                  >
                    <div className="flex flex-col justify-center items-center">
                      <div className="relative w-full h-40">
                        <Image
                          src={
                            item.snippet.thumbnails.standard?.url
                              ? item?.snippet?.thumbnails?.standard?.url
                              : item?.snippet?.thumbnails?.high?.url
                          }
                          alt={item.snippet.title}
                          fill="responsive"
                          sizes="100vw"
                          className="rounded-lg p-0 m-0 pointer-events-none object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <h3 className="text-base md:text-lg font-bold text-center mt-4">
                          {item.snippet.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </span>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-5xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900 flex justify-between items-center mb-6"
                    >
                      {videoIds.snippet ? videoIds.snippet.title : "Loading..."}

                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 flex items-center"
                        onClick={closeModal}
                      >
                        Close
                        <AiOutlineClose className="ml-2" />
                      </button>
                    </Dialog.Title>
                    <div className="mt-2">
                      <iframe
                        // title={`${selectedItem.snippet.title}`}
                        style={{ borderRadius: "8px", border: "none" }}
                        width="100%"
                        height="615px"
                        src={`https://www.youtube.com/embed/${videoIds?.snippet?.resourceId?.videoId}`}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </SectionWrapper>
    </>
  );
};

export default VideoSlider;
