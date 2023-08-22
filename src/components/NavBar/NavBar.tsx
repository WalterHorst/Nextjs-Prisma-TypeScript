"use client";

import Link from "next/link";

const NavBar = () => {
  return (
    <div>
      <Link href={"/"}>Home</Link>
      <Link href={"/newTask"}>Nueva tarea</Link>
    </div>
  );
};
export default NavBar;
