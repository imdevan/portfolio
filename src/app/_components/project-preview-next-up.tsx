import Link from "next/link";
import H from "./h";
import FIP from "_c/fade-in-and-up";
import Image from "next/image";

type Props = {
  title: string;
  coverImage: string;
  slug: string;
  key?: string | number;
};

const NextUpPreview = ({ title, coverImage, slug }: Props) => {
  return (
    <FIP>
      <div className="block rounded max-w-[540px]">
        <Link href={`/project/${slug}`} aria-label={title}>
          <div className="mb-5">
            <Image
              src={coverImage}
              className="rounded mx-auto  shadow-sm hover:shadow-lg transition-shadow duration-200 max-h-[240px] object-cover"
              alt={`Cover Image for ${title}`}
              width={540}
              height={240}
            />
          </div>

          <FIP>
            <H s={4} className=" mb-3 leading-snug">
              {title}
            </H>
          </FIP>
        </Link>
      </div>
    </FIP>
  );
};

export default NextUpPreview;
