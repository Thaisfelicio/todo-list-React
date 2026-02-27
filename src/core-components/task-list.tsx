import PlusIcon from "../assets/icons/plus.svg?react";
import Button from "../components/button";
import TaskItem from "./task-item";

export default function TaskList() {
  return (
    <>
      <section>
        <Button icon={PlusIcon} className="w-full">
          Nova Tarefa
        </Button>
      </section>
      <section className="space-y-2">
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </section>
    </>
  );
}
