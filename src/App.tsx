import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <MainLayout>
      <main className="w-full h-full p-15 bg-main-bg flex flex-col items-start justify-center gap-10">
        <div className="w-full h-1/2">
          <h1 className="text-2xl font-semibold">Mis Habitos</h1>
          <ul className="flex flex-col gap-2">
            <li>Todo 1</li>
            <li> Todo 2</li>
            <li> Todo 2</li>
            <li> Todo 2</li>
            <li> Todo 2</li>
            <li> Todo 2</li>
            <li> Todo 2</li>
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
