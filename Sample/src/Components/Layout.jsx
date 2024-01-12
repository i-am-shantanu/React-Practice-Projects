import './Layout.css'
import { NavLink,Outlet } from 'react-router-dom'
function Layout(){


    return(<>

        <header>
        <div className="nav">
        <NavLink to='/'><h1>Home</h1></NavLink>
        <NavLink to='about'><h1>About</h1></NavLink>
        <NavLink to='help'><h1>Help</h1></NavLink>
        </div>
        </header>
        <main>
            <Outlet/>
        </main>

    </>)
}
export default Layout