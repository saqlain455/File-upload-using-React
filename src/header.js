import {Link} from 'react-router-dom';
const Header=()=>{
    return (<header>
        <nav >
            <ul style={{flexDirection:'column'}}>
                <li> <Link to='/'>Home</Link></li>
                <li><Link to='/Addpost'>Addpost</Link></li>

            </ul>    
        </nav>
    </header>)
}
export default Header


                // <li><Link to='/Upload'>Upload</Link></li>
                // <li><Link to='/Download'>Download</Link></li>
                // <li><Link to='/Delete'>Delete</Link></li>