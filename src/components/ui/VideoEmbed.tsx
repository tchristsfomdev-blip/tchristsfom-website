type VideoEmbedProps = {
  youtubeId: string;
  title: string;
  className?: string;
};

/**
 * Privacy-friendly YouTube embed (youtube-nocookie).
 */
export function VideoEmbed({ youtubeId, title, className = "" }: VideoEmbedProps) {
  return (
    <div className={`video-embed ${className}`}>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
