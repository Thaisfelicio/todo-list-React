import useLocalStorage from "use-local-storage";
import { type Task, TASKS_KEY } from "../models/task";

export default function useTasks() {
  const [tasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

  return {
    tasks,
    createdTasksCount: tasks.filter((task) => task.state === "created").length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length,
  };
}
