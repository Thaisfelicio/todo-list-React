import useLocalStorage from "use-local-storage";
import { TASKS_KEY, type Task } from "../models/task";

export default function useTask() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

  function prepareTask() {
    setTasks([
      ...tasks,
      {
        id: Math.random().toString(36).substring(2, 9),
        title: "",
        state: "creating",
      },
    ]);
  }

  function updateTask(id: string, payload: { tittle: Task["title"] }) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, state: "created", ...payload } : task,
      ),
    );
  }

  function updateTaskStatus(id: string, concluded: Task["concluded"]) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              concluded,
            }
          : task,
      ),
    );
  }

  return {
    prepareTask,
    updateTask,
    updateTaskStatus,
  };
}
