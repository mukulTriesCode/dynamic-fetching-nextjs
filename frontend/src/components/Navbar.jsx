import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-slate-200 sticky top-0">
      <div className="container flex justify-between py-5 px-2 text-xl">
        <div className="">
          <Link href={"/"}>Logo</Link>
        </div>
        <div className="">
          <ul className="flex gap-8 list-none my-0 [&_li]:my-0">
            {/* <li className="w-fit hover:underline">
              <Link href="/about">About</Link>
            </li> */}
            <li className="w-fit hover:underline">
              <Link href="/blogs">Blogs</Link>
            </li>
            {/* <li className="w-fit hover:underline">
              <Link href="/contact">Contact Us</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
