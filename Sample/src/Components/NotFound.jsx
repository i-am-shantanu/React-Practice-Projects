
import {Link} from 'react-router-dom'
function NotFound(){

    return(
        <>
        <h1 style={{textAlign:'center'}}>Page does not exist !!</h1>
        <p  style={{textAlign:'center'}}>Go To <Link to='/'>Home</Link></p>

        </>
    )
}
export default NotFound