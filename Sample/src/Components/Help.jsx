import { NavLink, Outlet } from "react-router-dom";


function Help(){

    return(
        <>
        <div className="help">
        <h1>
                Welcome To Help !!
            </h1>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptatibus culpa, nemo vero molestiae est. Ducimus expedita vero aut dolor sint! Optio quaerat esse est quae suscipit quod accusamus sequi?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odio ipsa vel nulla blanditiis a optio. Aperiam, omnis dolores perspiciatis quibusdam totam praesentium magnam animi aut, id rem excepturi consectetur!
            </p>
        </div>
        <div className="help-nav">
        <NavLink to='Faq'><h1>Faq</h1></NavLink>
        </div>
        <Outlet />
        </>
    )
}
export default Help