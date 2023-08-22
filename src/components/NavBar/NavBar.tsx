"use client";
import "./Nav.css";

import Link from "next/link";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link href={"/"}>Home</Link>
      <Link href={"/newTask"}>Nueva tarea</Link>
    </div>
  );
};
export default NavBar;
