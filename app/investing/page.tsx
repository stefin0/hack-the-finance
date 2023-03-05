import Link from "next/link";

export default function investing() {
  return (
    <>
      <h1 className="text-center mt-8 font-extrabold">
        This is the Investing page by allen.
      </h1>
      <div className="flex justify-center">
        <Link href="" className="bg-slate-700 p-3 rounded mx-2">
          Home
        </Link>
      </div>
   <form>
    <fieldset>
      <legend>Get a feel for the UX here:</legend>
      <label>Enter any number: <input name="number" type="number" step="any" required/></label> 
       <label>Enter any integer: <input name="integer" type="number" step="1" required/></label>
      <label>Submit: <input name="submitter" type="submit"/></label>
   </fieldset>
  </form>
    </>
  );
}
