import PlusIcon from "../assets/icons/plus.svg?react";
import Button from "../components/button";
import useTasks from "../hooks/use-tasks";
import TaskItem from "./task-item";
import useTask from "../hooks/use-task";
export default function TaskList() {
  const { tasks } = useTasks();
  const { prepareTask } = useTask();

  console.log(tasks);

  function handleNewTask() {
    prepareTask();
  }

  return (
    <>
      <section>
        <Button
          icon={PlusIcon}
          className="w-full"
          onClick={handleNewTask}
          disabled={tasks.some((task) => task.state === "creating")}
        >
          Nova Tarefa
        </Button>
      </section>
      <section className="space-y-2">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </section>
    </>
  );
}
