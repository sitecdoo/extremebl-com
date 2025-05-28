import Image from "next/image";

interface MasonryProps {
  images: {
    src: string;
    alt: string;
    xPosition?: number;
    yPosition?: number;
  }[];
}

function Masonry({ images }: MasonryProps) {
  return (
    <div className="flex h-full w-full flex-col lg:h-[76rem]">
      {/* Mobile Layout */}
      <div className="grid gap-4 lg:hidden">
        <div className="relative aspect-[4/3]">
          <Image
            src={images[0].src}
            alt={images[0].alt}
            fill
            className="rounded-lg object-cover"
            loading="lazy"
            quality={65}
            style={{
              objectPosition: `${images[0].xPosition}% ${images[0].yPosition}%`,
            }}
          />
        </div>

        <div className="grid aspect-[4/3] grid-cols-2 gap-4">
          <div className="relative">
            <Image
              src={images[1].src}
              alt={images[1].alt}
              fill
              className="rounded-lg object-cover"
              sizes="50vw"
              loading="lazy"
              quality={65}
              style={{
                objectPosition: `${images[1].xPosition}% ${images[1].yPosition}%`,
              }}
            />
          </div>
          <div className="relative">
            <Image
              src={images[2].src}
              alt={images[2].alt}
              fill
              className="rounded-lg object-cover"
              sizes="50vw"
              loading="lazy"
              quality={65}
              style={{
                objectPosition: `${images[2].xPosition}% ${images[2].yPosition}%`,
              }}
            />
          </div>
        </div>

        <div className="relative aspect-[4/3]">
          <Image
            src={images[3].src}
            alt={images[3].alt}
            fill
            className="rounded-lg object-cover"
            loading="lazy"
            quality={65}
            style={{
              objectPosition: `${images[3].xPosition}% ${images[3].yPosition}%`,
            }}
          />
        </div>
        <div className="relative aspect-[4/3]">
          <Image
            src={images[4].src}
            alt={images[4].alt}
            fill
            className="rounded-lg object-cover"
            loading="lazy"
            quality={65}
            style={{
              objectPosition: `${images[4].xPosition}% ${images[4].yPosition}%`,
            }}
          />
        </div>
      </div>

      {/* Desktop Layout*/}
      <div className="hidden aspect-square h-full max-h-[73.9375rem] w-full max-w-[102rem] grid-cols-3 gap-5 lg:grid">
        <div className="relative col-span-2 row-span-2">
          <Image
            src={images[0].src}
            alt={images[0].alt}
            fill
            className="rounded-lg object-cover"
            sizes="(min-width: 768px) 66vw"
            loading="lazy"
            quality={65}
            style={{
              objectPosition: `${images[0].xPosition}% ${images[0].yPosition}%`,
            }}
          />
        </div>

        <div className="relative">
          <Image
            src={images[1].src}
            alt={images[1].alt}
            fill
            className="rounded-lg object-cover"
            sizes="(min-width: 768px) 33vw"
            loading="lazy"
            quality={65}
            style={{
              objectPosition: `${images[1].xPosition}% ${images[1].yPosition}%`,
            }}
          />
        </div>

        <div className="relative">
          <Image
            src={images[2].src}
            alt={images[2].alt}
            fill
            className="rounded-lg object-cover"
            sizes="(min-width: 768px) 33vw"
            loading="lazy"
            quality={65}
            style={{
              objectPosition: `${images[2].xPosition}% ${images[2].yPosition}%`,
            }}
          />
        </div>

        <div className="relative">
          <Image
            src={images[3].src}
            alt={images[3].alt}
            fill
            className="rounded-lg object-cover"
            sizes="(min-width: 768px) 33vw"
            loading="lazy"
            quality={65}
            style={{
              objectPosition: `${images[3].xPosition}% ${images[3].yPosition}%`,
            }}
          />
        </div>
        <div className="relative col-span-2">
          <Image
            src={images[4].src}
            alt={images[4].alt}
            fill
            className="rounded-lg object-cover"
            sizes="(min-width: 768px) 66vw"
            loading="lazy"
            quality={65}
            style={{
              objectPosition: `${images[4].xPosition}% ${images[4].yPosition}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Masonry;
