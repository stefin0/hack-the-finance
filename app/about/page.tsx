import Link from "next/link";

export default function About() {
  return (
    <>
      <h1 className="text-center mt-8 font-extrabold">
        This is the About page.
      </h1>
      <div className="flex justify-center">
        <Link href="" className="bg-slate-700 p-3 rounded mx-2">
          Home
        </Link>
      </div>
    </>
  );
}
