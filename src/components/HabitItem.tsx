import type { Habit } from "../types/habits";

interface HabitItemProps {
  habit: Habit;
}

export default function HabitItem({ habit }: HabitItemProps) {
  return (
    <li className="w-full h-1/6 bg-nav-bg flex flex-col items-center justify-center p-5">
      <p>{habit.name}</p>
      <p>{habit.description}</p>
      <button>Marcar como completado</button>
    </li>
  );
}
