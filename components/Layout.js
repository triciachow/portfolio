import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Tricia C.</title>
      </Head>

      <div className="bg-slate-50 dark:bg-slate-900 dark:text-slate-200">
        {children}
      </div>
    </div>
  );
}
