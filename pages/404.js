import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 4000);
  }, [router]);

  return (
    <div className="py-[280px]">
      <h1 className="font-roboto uppercase text-5xl text-center my-6">
        Ooopsss... That page can&apos;t be found.
      </h1>
      <h2 className="text-center font-roboto text-2xl uppercase">
        <Loader2 className="animate-spin mx-auto my-4" />
        Redirecting to <Link href="/">home</Link> in a few seconds!
      </h2>
    </div>
  );
}
