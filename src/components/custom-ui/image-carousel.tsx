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
  images: { src: string; alt: string; xPosition: number; yPosition: number }[];
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
              loading="lazy"
              decoding="sync"
              quality={65}
              className="h-[358px] max-h-[52.7rem] w-full rounded-2xl object-cover sm:h-full"
              style={{
                objectPosition: `${image.xPosition}% ${image.yPosition}%`,
              }}
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
