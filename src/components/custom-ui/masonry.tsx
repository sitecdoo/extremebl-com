import Image from "next/image";

interface MasonryProps {
  images: { src: string; alt: string }[];
}

function Masonry({ images }: MasonryProps) {
  return (
    <div className="flex h-full w-full flex-col p-4 md:h-[76rem]">
      {/* Mobile Layout */}
      <div className="grid gap-4 md:hidden">
        <div className="relative aspect-[4/3]">
          <Image
            src={images[0].src}
            alt={images[0].alt}
            fill
            className="rounded-lg object-cover"
            priority
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
              priority
            />
          </div>
          <div className="relative">
            <Image
              src={images[2].src}
              alt={images[2].alt}
              fill
              className="rounded-lg object-cover"
              sizes="50vw"
              priority
            />
          </div>
        </div>

        {images.slice(3).map((image, index) => (
          <div key={index} className="relative aspect-[4/3]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="rounded-lg object-cover"
              priority
            />
          </div>
        ))}
      </div>

      {/* Desktop Layout*/}
      <div className="hidden aspect-square h-full max-h-[73.9375rem] w-full max-w-[102rem] grid-cols-3 gap-5 md:grid">
        <div className="relative col-span-2 row-span-2">
          <Image
            src={images[0].src}
            alt={images[0].alt}
            fill
            className="rounded-lg object-cover"
            sizes="(min-width: 768px) 66vw"
            priority
          />
        </div>

        <div className="relative">
          <Image
            src={images[1].src}
            alt={images[1].alt}
            fill
            className="rounded-lg object-cover"
            sizes="(min-width: 768px) 33vw"
            priority
          />
        </div>

        <div className="relative">
          <Image
            src={images[2].src}
            alt={images[2].alt}
            fill
            className="rounded-lg object-cover"
            sizes="(min-width: 768px) 33vw"
            priority
          />
        </div>

        <div className="relative">
          <Image
            src={images[3].src}
            alt={images[3].alt}
            fill
            className="rounded-lg object-cover"
            sizes="(min-width: 768px) 33vw"
            priority
          />
        </div>
        <div className="relative col-span-2">
          <Image
            src={images[4].src}
            alt={images[4].alt}
            fill
            className="rounded-lg object-cover"
            sizes="(min-width: 768px) 66vw"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default Masonry;
