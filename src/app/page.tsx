import Link from "next/link";
export default function Home() {
  return (
    <main>
      <h1>Aca van a ir las tareas capo</h1>
      <Link href={"/"}>Home</Link>
      <br></br>
      <Link href={"/newTask"}>NewTask</Link>
    </main>
  );
}
