import Link from "next/link";

export default function notFound() {
  return (
    <div>
      <h1> Page not found </h1>
      <Link href={"/"}> Back to the home page</Link>
    </div>
  );
}
