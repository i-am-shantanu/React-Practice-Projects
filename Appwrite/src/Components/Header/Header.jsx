import React from 'react'
import { Container } from '../Container'
import {Logo} from '../Logo'
import { Link } from 'react-router-dom'
import LogoutBtn from './LogoutBtn'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Header() {

    const authStatus = useSelector((state)=>state.auth.status)
    const navigate=useNavigate();

    const navItems=[
        {
            name:'Home',
            slug:'/',
            active:true
        },
        {
            name:'Login',
            slug:'/login',
            active:!authStatus
        },
        {
            name:'Signup',
            slug:'/signup',
            active:!authStatus
        },
        {
            name:'Login',
            slug:'/login',
            active:!authStatus
        },
        {
            name:'All Posts',
            slug:'/allPost',
            active:authStatus
        },
        {
            name:'Add Post',
            slug:'/addPost',
            active:authStatus
        }
    ]
  return (
    <header className='py-3 shadow bg-gray-500'>
        <Container>
            <nav className='flex'>
                <div className='mr-4'>
                    <Link to='/'>
                        <Logo/>
                    </Link>
                </div>

                <div>
                    <ul className='flex ml-auto'>
                        {
                            navItems.filter((obj)=>obj.active).map((obj)=>(<li key={obj.name}>
                                <button
                                onClick={()=>navigate(obj.slug)}
                                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                                >
                                    {obj.name}
                                </button>
                            </li>))
                        }
                    </ul>

                    {
                        authStatus && (
                            <li>
                                <LogoutBtn/>
                            </li>
                        )
                    }
                </div>
            </nav>
        </Container>
    </header>
  )
}

export default Header