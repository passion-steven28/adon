import { Outlet } from "react-router-dom"
import NavBar from "../shared/nav-bar"
import Footer from "../shared/footer"

const Layout = () => {
    return (
        <>
            <NavBar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout