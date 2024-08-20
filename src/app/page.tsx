import Image from "next/image";

export default function Home() {
  return (
  <>
  <div className="flex justify-between mx-20 my-4">
    <div className="text-4xl font-bold">AQ</div>
    <ul className="flex font-mono item-center gap-8 text-2xl">
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
    <button className="text-2xl hover:bg-slate-600 bg-gray-500 p-2 rounded-md">Download More</button>
  </div>
  </>
  );
}
