export interface PageFrameProps {
  children: React.ReactNode;
  footer?: React.ReactNode;
  header?: React.ReactNode;
}

export default function PageFrame(props: PageFrameProps) {
  return (
    <div className="relative flex flex-col items-center w-full bg-foreground text-background overflow-hidden p-6 pt-0">
      <header className="w-full">{props.header}</header>
      <div className="p-6 flex flex-col rounded-[50px] bg-background z-0 relative overflow-hidden w-[calc(100%-var(--frame-width))] [&>img]:absolute [&>img]:w-[min(340px,80vw)] [&>img]:opacity-85 md:[&>img]:opacity-100 md:[&>img]:w-[min(640px,55vw)] [&>img]:h-auto [&>img]:max-h-375 [&>img]:object-contain [&>img]:pointer-events-none [&>img]:z-0 [&>img]:blur-[100px] [&>img]:translate-z-0">
        {/* Global background shade effects, ordered top-to-bottom as in design */}
        <img
          src="/ShadeEffect1.svg"
          alt=""
          aria-hidden
          className="top-25 -left-55"
        />
        <img
          src="/ShadeEffect2.svg"
          alt=""
          aria-hidden
          className="top-30 -right-45 lg:-right-55"
        />
        <img
          src="/ShadeEffect3.svg"
          alt=""
          aria-hidden
          className="top-140 -left-45 md:top-130 md:-left-60"
        />
        <img
          src="/ShadeEffect4.svg"
          alt=""
          aria-hidden
          className="top-245 -right-45 hidden md:block lg:-right-65"
        />
        <img
          src="/ShadeEffect5.svg"
          alt=""
          aria-hidden
          className="-bottom-45 -right-45 hidden md:block lg:-right-55"
        />
        <div className="text-foreground">{props.children}</div>
      </div>
      {props.footer}
    </div>
  );
}
