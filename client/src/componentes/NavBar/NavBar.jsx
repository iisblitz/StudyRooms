import { Link } from 'react-router-dom'
import 'bootstrap'
import logo from '../../recursos/logo2.png'
import home from '../../recursos/home.png'
import DropDown from './DropDown'
import SearchBar from "./SearchBar"
import { useSelector } from 'react-redux'


const NavBar = () => {

    const userInfo = useSelector(state => state.loginReducer.userInfo);

    return (
        <nav className='customNavbar d-flex bg-dark '>
            <div className='col d-flex justify-content-center'>
                <div className='row w-100 p-0 m-0 justify-content-center'>

                    <div className='col d-flex justify-content-center'>
                        <img src={logo} height="50px" alt="logo" />
                    </div>


                </div>
            </div>
            <div className='col'>
                <div role="group" aria-label="Basic example" className=' d-flex'>
                    <Link to="/Home"><button type="button" className="btn btn-light m-1" >Home</button></Link>
                    <Link to="/AskQuestion"><button type="button"  className="btn btn-light m-1 " >Ask Question</button></Link>
                    <Link to="/Donations"><button type="button"  className="btn btn-light m-1" > Donate</button></Link>
                    {userInfo && userInfo.isAdmin && (
                        <>
                            <Link to="/admin-panel"><button type="button" className="btn btn-danger m-1">Users</button></Link>
                            <Link to="/categories"><button type="button" className="btn btn-danger m-1">Categories</button></Link>
                        </>
                    )}
                </div>
            </div>
            <div className='col'>
                <form className='d-flex'>
                    <input type="search" placeholder="Search" className='form-control w-50' aria-label="Search" />
                    <button type="submit" className=' btn btn-light m-1 '>Search</button>
                </form>
            </div>
            <div>
                <DropDown />
            </div>
        </nav>
    );
}

export default NavBar;