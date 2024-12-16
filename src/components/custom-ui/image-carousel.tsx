import React, { PropsWithChildren } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";

type ImageCarouselProps = PropsWithChildren<{
  images: { src: string; alt: string }[];
}>;

const ImageCarousel = ({ images, children }: ImageCarouselProps) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="h-full max-h-[52.7rem] max-w-[84.75rem]"
    >
      <CarouselContent className="rounded-2xl">
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              width={1340}
              height={842}
              priority
              className="h-[358px] max-h-[52.7rem] w-full rounded-2xl object-cover sm:h-full"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      {children}
    </Carousel>
  );
};

export default ImageCarousel;
