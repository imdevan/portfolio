import { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "_c/container";
import AnimateIn from "_c/animate-in";
import H from "_c/h";

export default async function Post(props: Params) {
  return (
      <Container>
          <div className="flex w-full h-vh max-w-7xl items-center">
          <AnimateIn >
            <H className="mb-16">
              Hello There!
            </H>
    
            <AnimateIn>
              <ul>
                <AnimateIn>
                  <li className="mb-12">
                      <a
                        href={`https://linkedin.com/in/devanhuapaya`}
                        target="_blank"
                        className="hover:underline"
                        >
                        <H s={2}>
                          LinkedIn
                        </H>
                      </a>
                  </li>
                  <li>
                    <AnimateIn>
                      <a
                        href={`mailto:huapayadevan@gmail.com`}
                        target="_blank"
                        className="hover:underline"
                        >
                        <H s={2}>
                          Email
                        </H>
                      </a>
                    </AnimateIn>
                  </li>
                </AnimateIn>
              </ul>
            </AnimateIn>
          </AnimateIn>
          </div>
      </Container>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const title = `Contact | Devan Huapaya`;

  return {
    title,
    openGraph: {
      title,
    },
  };
}
