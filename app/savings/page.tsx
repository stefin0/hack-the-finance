import Link from "next/link";

export default function savings() {
  return (
    <>
      <h1 className="text-center mt-8 font-extrabold">
        This is the Savings page.
      </h1>
      <div className="flex justify-center">
        <Link href="" className="bg-slate-700 p-3 rounded mx-2">
          Home
        </Link>
      </div>

    </>
  );
}
