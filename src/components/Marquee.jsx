import { cn } from "../utils/cn";
import { twMerge } from "tailwind-merge";

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={twMerge(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-50/[.1] bg-gradient-to-r from-indigo-500 to-[#1d1d42] hover:bg-[#25257d] hover-animation"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full bg-white/10"
          width="32"
          height="32"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Marquee({ items = [], className, reverse, pauseOnHover = false, ...props }) {
  return (
    <div
      className={cn(
        "relative flex w-full overflow-hidden",
        className
      )}
      style={{
        maskImage:
          "linear-gradient(to left, transparent 0%, black 5%, black 95%, transparent 100%)",
      }}
      {...props}
    >
      <div
        className={cn(
          "flex w-max animate-marquee [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
          reverse && "animate-marquee-reverse"
        )}
      >
        {items.map((item, idx) => (
          <ReviewCard key={idx} {...item} />
        ))}
      </div>
      <div
        className={cn(
          "flex w-max animate-marquee [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
          reverse && "animate-marquee-reverse"
        )}
      >
        {items.map((item, idx) => (
          <ReviewCard key={idx + items.length} {...item} />
        ))}
      </div>
    </div>
  );
}