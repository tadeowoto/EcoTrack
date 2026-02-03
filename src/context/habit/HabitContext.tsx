import { createContext } from "react";
import type { Habit } from "../../types/habits";

export type HabitContextType = {
  habitList: Habit[];
};

export const HabitContext = createContext<HabitContextType | null>(null);
