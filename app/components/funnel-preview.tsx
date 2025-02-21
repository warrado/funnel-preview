"use client";

import { useRef } from "react";

import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface FunnelPreviewProps {
  children?: React.ReactNode;
  bgColor: string;
}

const FunnelPreview = ({ children, bgColor }: FunnelPreviewProps) => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const style = {
    backgroundColor: bgColor,
  };

  return (
    <div className="flex flex-col items-center justify-items-center">
      <div
        style={{ backgroundImage: `url(/smartphone-cropped.png)` }}
        className="bg-cover bg-center h-[919px] w-[453px] pt-[96px] pb-[103px] pl-[26px] pr-[20px] z-1"
      >
        <div className="h-full w-full p-4" style={style}>
          <Slider
            ref={sliderRef}
            {...settings}
          >
            {children ? (
              children
            ) : (
              <div className="flex justify-center items-center text-center w-full h-full mt-8">
                <p className="text-xl text-gray-500">
                  No funnel data to show. Load a JSON file to display a
                  preview.
                </p>
              </div>
            )}
          </Slider>
        </div>
      </div>
      <div className="grid grid-cols-2 justify-items-center flex-none w-full text-center mt-4">
        {/* 
          I'd love to make those gray if we don't have anything to show/there's no next or prev page
          but I've spent quite a bit of time on this already, and I think I'll pass on that for now.
        */}
        <ArrowLeftCircleIcon
          className="size-12 text-blue-700"
          onClick={() => sliderRef.current?.slickPrev()}
        />
        <ArrowRightCircleIcon
          className="size-12 text-blue-700 z-100"
          onClick={() => sliderRef.current?.slickNext()}
        />
      </div>
    </div>
  );
};

export default FunnelPreview;
