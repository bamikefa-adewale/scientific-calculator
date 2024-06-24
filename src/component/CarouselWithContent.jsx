/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
import { Typography } from "@material-tailwind/react";
import { Carousel } from "flowbite-react";

export function CarouselWithContent() {
  return (
    <Carousel
      className="w-full"
      onSlideChange={(index) => ("onSlideChange()", index)}
    >
      <div className="relative ">
        <img
          src="https://res.cloudinary.com/dbrub0d6r/image/upload/v1718720292/photo-1523050854058-8df90110c9f1_uvdpzy.avif"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75 px-4 sm:px-6 lg:px-8">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 py-3 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-6  text-white"
            >
              Welcome To Federal Polytechnic Offa
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-base sm:text-lg md:text-xl lg:text-2xl"
            >
              The Federal Polytechnic, Offa came into existence in 1992. A
              presidential pronouncement of its establishment was made at the
              Palace of His Royal Highness, Olofa of Offa, late Oba Mustapha
              Olawoore Olanipekun Ariwajoye II, by the then Military President,
              Ibrahim Babangida during a state visit in 1991.
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative ">
        <img
          src="https://res.cloudinary.com/dbrub0d6r/image/upload/v1718720689/photo-1528901166007-3784c7dd3653_khysya.avif"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75 px-4 sm:px-6 lg:px-8">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 py-3 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-6  text-white"
            >
              School Of Computing (Scientific Calculator)
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-base sm:text-lg md:text-xl lg:text-2xl"
            >
              The Computer Science Department was established in October 1992
              with intake of 120 National Diploma (ND) students. The Higher
              National Diploma (HND) programme took off in 1995 with an intake
              of 60 students. The staff and student population has grown
              steadily ever since.
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative ">
        <img
          src="https://res.cloudinary.com/dbrub0d6r/image/upload/v1718721690/photo-1625225233840-695456021cde_qzskcs.avif"
          alt="image 3"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75 px-4 sm:px-6 lg:px-8">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 py-3 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-6  text-white"
            >
              PROJECT TOPIC (Simple Scientific Calculator)
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-base sm:text-lg md:text-xl lg:text-2xl"
            >
              A scientific calculator is a versatile device designed to perform
              advanced mathematical, engineering, and scientific calculations.
              Unlike basic calculators, scientific calculators offer functions
              like trigonometric, logarithmic, and exponential calculations,
              which are essential for fields such as physics, chemistry, and
              engineering. They typically feature a multi-line display, allowing
              users to view and edit complex equations.
            </Typography>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
