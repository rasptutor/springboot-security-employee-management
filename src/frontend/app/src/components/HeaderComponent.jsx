import React from 'react'
import { useNavigate } from 'react-router-dom'

const HeaderComponent = () => {
    const navigate = useNavigate()
    function logOut() {
        navigate('/signin');
    }
    return (
        <div>
            <header>
                <nav className = "navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a href = "https://javaguides.net" className = "navbar-brand">
                            Employee Management Application
                        </a>                        
                        <button className = "btn btn-primary mb-2" onClick={logOut}>Log Out</button>
                    </div>

                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent