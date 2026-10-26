import Image from "next/image";

type MediaFrameProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

export function MediaFrame({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, 720px",
}: MediaFrameProps) {
  return (
    <div
      className={`media-frame ${className}`}
      data-cursor="view"
      data-cursor-label="View"
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        data-parallax-target
        className="h-auto w-full object-cover"
      />
    </div>
  );
}
