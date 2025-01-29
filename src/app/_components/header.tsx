import Link from "next/link";
import { Roboto_Slab } from "next/font/google";
import cn from "classnames";

const robotoSlab = Roboto_Slab({ subsets: ["latin"] });

const Header = () => {
  return (
    <div className="fixed top-0 left-0 bg-gradient-to-b dark:from-zinc-900 from-white to-transparent dark:text-neutral-50 transition-colors duration-200 w-full z-50">
      <div className="container p-8">
        <h2 className={cn(robotoSlab.className, "text-xl md:text-xl font-bold tracking-tight")}>
          <Link href="/" className="hover:underline">
            DH
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default Header;
