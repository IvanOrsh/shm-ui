import { useEffect } from "react";
import { RxLink2 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";

type TitleProps = {
  id: string;
  title: string;
};

export default function Title({ id, title }: TitleProps) {
  const location = useLocation();

  const scrollToElement = (id: string) => {
    const anchor = document.getElementById(id);

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    if (location.hash) {
      if (location.hash === `#${id}`) {
        scrollToElement(id);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return () => {
      window.scrollTo({ top: 0, behavior: "instant" });
    };
  }, [id, location]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    history.pushState({}, "", `#${id}`);
    scrollToElement(id);
  };

  return (
    <h2 id={id} className="scroll-mt-24">
      <Link
        to={`#${id}`}
        onClick={handleClick}
        className="group relative text-lg font-bold text-gray-800 dark:text-white"
      >
        <span className="absolute -left-4 top-1 inline-block shrink-0 opacity-0 transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-[2rem] group-hover:-left-6 group-hover:opacity-100">
          <RxLink2 className="h-3.5 w-3.5 text-emerald-600" />
        </span>
        {title}
      </Link>
    </h2>
  );
}
