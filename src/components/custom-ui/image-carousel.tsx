import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";

const ImageCarousel = ({
  images,
}: {
  images: { src: string; alt: string }[];
}) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="h-full max-h-[52.7rem] max-w-7xl"
    >
      <CarouselContent className="rounded-2xl">
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              width={1340}
              height={843}
              priority
              className="h-full max-h-[52.7rem] w-full rounded-2xl"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ImageCarousel;
