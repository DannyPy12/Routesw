import React, { useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

export const Navbar = () => {
    const navigate = useNavigate();
    const { isAuthenticated, userName, logout } = useContext(AuthContext);

    const onLogout = () => {
        logout();
        navigate('/login', {
            replace: true,
        });
    };

    return (
        <>
            <header>
                <h1>
                    <Link to='/'>Logo</Link>
                </h1>

                {isAuthenticated ? (
                    <div className='user'>
                        <span className='username'>{userName}</span>
                        <button className='btn-logout' onClick={onLogout}>
                            Cerrar sesión
                        </button>
                        <nav>
                            <Link to='/Modelos Bicicletas'>Modelos Bicicletas</Link>
                            <Link to='/Modelos Carros'>Modelos Carros</Link>
                            <Link to='/Modelos Motos'>Modelos Motos</Link>
                        </nav>
                    </div>
                ) : (
                    <nav>
                        <Link to='/login'>Iniciar sesión</Link>
                        <Link to='/register'>Registrarse</Link>
                        <Link to='/Carros'>Carros</Link>
                        <Link to='/Motos'>Motos</Link>
                        <Link to='/Bicicletas'>Bicicletas</Link>
                    </nav>
                )}
            </header>

            <Outlet />
        </>
    );
};
