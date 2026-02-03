import MainLayout from "./layouts/MainLayout";
import { useHabits } from "./hooks/useHabits";

function App() {
  const { habitList } = useHabits();
  return (
    <MainLayout>
      <main className="w-full h-full p-15 bg-main-bg flex flex-col items-start justify-center gap-10">
        <div className="w-full h-1/2">
          <h1 className="text-2xl font-semibold">Mis Habitos</h1>
          <ul className="flex flex-col gap-2">
            {habitList.map((habit) => (
              <li key={habit.id}>{habit.name}</li>
            ))}
          </ul>
        </div>
        <div className="w-full h-1/2">
          <h2 className="text-2xl font-semibold">Equipo</h2>
          <ul className="flex flex-col gap-2">
            <li>Todo 1 con equipo</li>
            <li>Todo 1 con equipo</li>
            <li>Todo 1 con equipo</li>
            <li>Todo 1 con equipo</li>
            <li>Todo 1 con equipo</li>
            <li>Todo 1 con equipo</li>
            <li>Todo 1 con equipo</li>
            <li>Todo 1 con equipo</li>
          </ul>
        </div>
      </main>
    </MainLayout>
  );
}

export default App;
