
import type { Habit } from "../types/habits";

export const MOCK_HABITS: Habit[] = [
  {
    id: "1",
    name: "Ahorrar agua",
    description: "Cerrar la llave mientras me lavo los dientes.",
    isCompleted: false,
    createdAt: new Date(),
  },
  {
    id: "2",
    name: "Reciclar plástico",
    description: "Separar botellas PET del resto de la basura.",
    isCompleted: true,
    createdAt: new Date(),
  },
];