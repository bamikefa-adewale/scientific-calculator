/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
import { Typography, Button } from "@material-tailwind/react";
import Register from "./page/Register";
import { Carousel } from "flowbite-react";

export function CarouselWithContent() {
  return (
    <Carousel
      className="w-full"
      onSlideChange={(index) => console.log("onSlideChange()", index)}
    >
      <div className="relative ">
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 1"
          className=" object-cover"
        />

        <div className="absolute inset-0 grid h-[100%] w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4  text-3xl font-bold md:text-4xl lg:text-5xl leading-6  text-white"
            >
              Welcome To Federal Polytechnic Offa
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-white justify-center 	"
            >
              The Federal Polytechnic, Offa came into existence in 1992. A
              presidential pronouncement of its establishment was made at the
              Palace of His Royal Highness, Olofa of Offa, late Oba Mustapha
              Olawoore Olanipekun Ariwajoye II, by the then Military President,
              Ibrahim Babangida during a state visit in 1991.
            </Typography>
            <div className="flex justify-center gap-2 ">
              <Button className="rounded-full p-5  text-white  bg-deep-orange-800 hover:bg-gray-700">
                <Register />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative ">
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl text-white"
            >
              School Of Computing Scientific Calculator
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-white"
            >
              The Computer Science Department was established in October 1992
              with intake of 120 National Diploma (ND) students. The Higher
              National Diploma (HND) programme took off in 1995 with an intake
              of 60 students. The staff and student population has grown
              steadily ever since.
            </Typography>
            <div className="flex justify-center gap-2 ">
              <Button className="rounded-full p-5  text-white  bg-deep-orange-800 hover:bg-gray-700">
                <Register />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative ">
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 grid h-[100%] w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl text-white"
            >
              Instruction On How To Use The Calculator
            </Typography>
            <div color="white" className="mb-12 opacity-80 text-white">
              Using a scientific calculator involves several steps to perform
              various mathematical operations. Here is a brief guide on how to
              use one: 1. Basic Arithmetic 2.Trigonometric Functions
              <div className="text-2xl">
                <h1 className="text-[orange] text-3xl"> Note:</h1>
                <p>
                  1 : Sine: Enter the number, press the sin button, and then
                  press "="
                </p>
                <p>
                  2 : Cosine: Enter the number, press the cos button, and then
                  press "="
                </p>
                <p>
                  3 : Tangent: Enter the number, press the tan button, and then
                  press "="
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-2 ">
              <Button className="rounded-full p-5  text-white  bg-deep-orange-800 hover:bg-gray-700">
                <Register />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
