"use client";
import { Carousel, Typography, Button } from "@material-tailwind/react";

const theme = {
  carousel: {
    defaultProps: {
      autoplay: true,
      autoplayDelay: 5000,
      transition: {
        type: "tween",
        duration: 0.5,
      },
      loop: true,
    },
  },
};

export default function HomeCarousel() {
  return (
    <Carousel className="max-w-screen-3xl" {...theme.carousel.defaultProps}>
      <div className="relative w-full h-[100vh] md:h-auto">
        <img
          src="/hero-1.avif"
          alt="image 1"
          className="h-[100vh] w-full object-cover"
        />
        <div
          className="absolute inset-0 grid h-full w-full place-items-center bg-black/75"
          data-aos="zoom-in"
        >
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl nunito"
            >
              How I Write Code
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 nunito"
            >
              I prioritize clear, efficient code through thorough planning and
              best practices, emphasizing modularity, performance, testing, and
              continual refinement for quality and maintainability.
            </Typography>
            {/* <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div> */}
          </div>
        </div>
      </div>
      <div className="relative w-full h-[100vh] md:h-auto">
        <img
          src="/hero-2.avif"
          alt="image 1"
          className="h-[100vh] w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl nunito"
            >
              How I Design User Interfaces
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 nunito"
            >
              I prioritize intuitive, visually appealing user interfaces by
              understanding needs, creating clear designs with frameworks like
              Tailwind CSS and Material-UI. I ensure consistency, usability, and
              stakeholder feedback for beautiful, functional interfaces.
            </Typography>
            {/* <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div> */}
          </div>
        </div>
      </div>
      <div className="relative w-full h-[100vh] md:h-auto">
        <img
          src="/hero-3.avif"
          alt="image 1"
          className="h-[100vh] w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl nunito"
            >
              How I Plan to Design Applications
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 nunito"
            >
              I begin by thoroughly researching project goals and user needs,
              creating detailed plans and prototypes for intuitive, accessible
              designs. Utilizing modern tools and stakeholder feedback, I
              iterate to deliver exceptional user experiences.
            </Typography>
            {/* <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </Carousel>
  );
}
