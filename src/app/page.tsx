import "./page.css";
import axios from "axios";
import Card from "@/components/Card/Card";
const getTasks = async () => {
  const { data } = await axios("http://localhost:3000/api/tasks");
  return data;
};

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
