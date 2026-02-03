
import { useContext } from "react";
import { HabitContext } from "../context/habit/HabitContext";

export const useHabits = () => {
 const context = useContext(HabitContext);
 if(!context) throw new Error("useHabits must be used within a HabitProvider");
 return context
}

//con esto me aseguro que el contexto existe