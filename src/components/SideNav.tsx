export default function SideNav() {
  return (
    <nav className="w-1/5 h-full bg-nav-bg flex flex-col items-center justify-center p-5">
      <div className="w-full h-1/6 flex flex-col items-center justify-center ">
        <img src="" alt="user profile" />
        <p>Jhon Doe</p>
        <p>Jhondoe@gmail.com</p>
      </div>
      <div className="w-full h-5/6 flex flex-col items-center justify-center">
        <h2 className="text-lg font-semibold">My Projects</h2>
        <ul className="flex flex-col gap-2">
          <li>
            <a href="#">Project 1</a>
          </li>
          <li>
            <a href="#">Project 2</a>
          </li>
          <li>
            <a href="#">Project 3</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
