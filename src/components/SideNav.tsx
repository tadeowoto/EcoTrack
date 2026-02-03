

export default function SideNav(){
    return(
        <nav className="w-1/5 h-full bg-nav-bg">
                <div>
                    <img src="" alt="user profile" />
                    <p>User Name</p>
                    <p>User Email</p>
                </div>
                <div>
                    <h2 className="text-lg font-semibold">My Projects</h2>
                    <ul>
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
    )
}