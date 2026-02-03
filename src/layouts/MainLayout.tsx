import SideNav from "../components/SideNav"

interface MainLayoutProps {
    children: React.ReactNode
}


export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="w-screen h-screen flex flex-row items-center justify-center font-display">
            <SideNav />
            <div className="w-4/5 h-full bg-main-bg">
                <main className="w-full h-full">
                    {children}
                </main>
            </div>
        </div>
    )
}