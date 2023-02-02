import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full">
      <header className="my-12 flex flex-col gap-y-2 w-full">
        <h1 className="uppercase text-[64px] font-roboto">
          Hello, I&apos;m Tricia
        </h1>
        <p className="font-semibold text-2xl">
          Crafting seamless digital experiences through skilled web development
          and intuitive UI/UX design.
        </p>
      </header>
      <section className="mb-8">
        <h2 className="uppercase font-roboto mb-2">Featured Projects</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="https://triciachow.vercel.app/projects/workgowhere">
            <Image
              src="/imgs/workgowhere.webp"
              width="339px"
              height="199px"
              className="cursor-pointer"
            />
          </Link>
          <Link href="https://triciachow.vercel.app/projects/medicsync">
            <Image
              src="/imgs/medicsync.webp"
              width="339px"
              height="199px"
              className="cursor-pointer"
            />
          </Link>
          <Link href="https://triciachow.vercel.app/projects/shopee-product-design-challenge-2022">
            <Image
              src="/imgs/spdc.webp"
              width="339px"
              height="199px"
              className="cursor-pointer"
            />
          </Link>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="uppercase font-roboto mb-2">Other Projects</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="https://triciachow.vercel.app/projects/real-time-hdb-carpark-availability">
            <Image
              src="/imgs/carpark.webp"
              width="339px"
              height="199px"
              className="cursor-pointer"
            />
          </Link>
          <Link href="https://triciachow.vercel.app/projects/e-commerce-with-shopify-storefrontapi">
            <Image
              src="/imgs/ecommerce.webp"
              width="339px"
              height="199px"
              className="cursor-pointer"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
