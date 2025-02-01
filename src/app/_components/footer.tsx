import Container from "_c/container";
import FooterLeaf from "_c/footer-leaf";
import Link from "next/link"

export function Footer() {
  return (
    <footer className="">
      <FooterLeaf />
      
      <Container className="max-w-7xl">
        <div className="my-28 flex flex-col lg:flex-row gap-4 items-center w-full">
          <div className="flex flex-col items-center lg:items-start gap-4 lg:pl-4 lg:w-1/2">
            <Link
              href="/contact"
              className="hover:underline"
            >
              Contact
            </Link>
            <a
              href={`https://linkedin.com/in/devanhuapaya`}
              target="_blank"
              className="hover:underline"
            >
              LinkedIn
            </a>
            <a
              href={`https://unsplash.com/@devin_photography`}
              target="_blank"
              className="hover:underline"
            >
              Photography
            </a>
          </div>
  
          <div className="lg:text-right lg:w-1/2">
            <Link href='/' className="hover:underline">
              © Devan Huapaya 2025
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
