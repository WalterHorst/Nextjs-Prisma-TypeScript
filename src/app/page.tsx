import "./page.css";
import { prisma } from "@/libs/prisma";
import Card from "@/components/Card/Card";
const getTasks = async () => {
  const tasks = await prisma.task.findMany();
  return tasks;
};

export const dynamic = "force-dynamic";

export default async function Home() {
  const tasks = await getTasks();
  return (
    <div className="task-container">
      {tasks.map((task: any) => (
        <Card tasks={task} key={task.id}></Card>
      ))}
    </div>
  );
}
