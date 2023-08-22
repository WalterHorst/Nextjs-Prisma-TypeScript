"use client";
import { Task } from "@prisma/client";
import { useRouter } from "next/navigation";
interface Prop {
  tasks: Task;
}
const Card = ({ tasks }: Prop) => {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push(`/tasks/edit/${tasks.id}`);
      }}
    >
      <h3>{tasks.titulo}</h3>
      <p>{tasks.descripcion}</p>
    </div>
  );
};

export default Card;
