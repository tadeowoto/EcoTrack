import { useState } from "react";
import type { Habit } from "../../types/habits";
import { MOCK_HABITS } from "../../mocks/data";
import { HabitContext } from "./HabitContext";

export const HabitProvider = ({ children }: { children: React.ReactNode }) => {
  const [habitList] = useState<Habit[]>(MOCK_HABITS);

  return (
    <HabitContext.Provider value={{ habitList }}>
      {children}
    </HabitContext.Provider>
  );
};
