"use client";

import { useEffect, useState } from "react";

import ArrowButton from "../atoms/ArrowButton";
import RatingProfileCard from "../molecules/RatingProfileCard";

const PublicExpertReviewSlider = ({ reviews }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalReviews = reviews.length;

  useEffect(() => {
    const interval = setInterval(() => {
      nextReview();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalReviews);
  };

  const prevReview = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + totalReviews) % totalReviews
    );
  };

  return (
    <section className="relative max-w-[676px] w-full shadow rounded-lg">
      <ArrowButton
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        }
        onClick={prevReview}
        position="left"
        extraStyle="p-2"
      />
      <ArrowButton
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        }
        onClick={nextReview}
        position="right"
        extraStyle="p-2"
      />
      <RatingProfileCard
        name="Mike Kane"
        userName=""
        rating={4}
        description="Find your project dream team today. Start by browsing profiles of artisans and handymen, and hire the experts who will bring your vision to life."
        profileImage={{
          src: "/dummyImages/profilePic.png",
          alt: "profile picture",
        }}
      />
    </section>
  );
};

export default PublicExpertReviewSlider;
