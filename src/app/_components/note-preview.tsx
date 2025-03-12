import Link from "next/link";
import H from "./h";
import FIP from '_c/fade-in-and-up';
import CoverImage from "./cover-image";

type Props = {
  title: string;
  subtitle?: string;
  description: string;
  date: string;
  slug: string;
  coverImage?: string
};

const NotePreview = ({
  title,
  subtitle,
  description,
  date,
  slug,
  coverImage
}: Props) => {
  return (
    <FIP>
      <div className="block max-w-[720px] p-6 hover:shadow-xl hover:shadow-xxl hover:text-underline rounded-lg transition-shadow duration-200">
        <Link 
          href={`/notes/${slug}`} 
          aria-label={title}>
            {coverImage && (
              <div className="mb-5">
                <CoverImage slug={slug} title={title} src={coverImage} />
              </div>
            )}
  
          <FIP>
            <H s={3} className="text-4xl mb-2 leading-snug">
              {title} {subtitle && (<span className="text-xl text-gray-600 mb-2">— {subtitle}</span>)}
            </H>
            {/* {subtitle && (
              <FIP>
                <p className="text-xl text-gray-600 mb-2">— {subtitle}</p>
              </FIP>
            )} */}
            <FIP>
              <time className="text-sm text-gray-500 ml-4">{new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</time>
            </FIP>
          </FIP>
        </Link>
      </div>
    </FIP>
  );
};

export default NotePreview; 