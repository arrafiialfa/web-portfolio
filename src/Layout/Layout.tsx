import Navigation from "./Navigation"

export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }){
    return (
    <div className="bg-white text-gray-900 min-h-screen">
        <div className="shadow-md">  
            <Navigation />
        </div>
        <main className="">
            {children}
        </main>
        <footer className="py-4 px-4 sm:px-6 lg:px-8 bg-gray-200 text-gray-700">
            <p className="text-center">&copy; {new Date().getFullYear()} Rafi&apos;s Portfolio. All rights reserved.</p>
        </footer>
    </div>
    )
}