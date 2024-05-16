import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hook/useForm';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const { name, email, password, onInputChange, onResetForm } =
        useForm({
            name: '',
            email: '',
            password: '',
        });

    const onLogin = e => {
        e.preventDefault();
        login(name); 
        navigate('/dashboard', {
            replace: true,
        });
        onResetForm();
    };

    return (
        <div className='wrapper'>
            <form onSubmit={onLogin}>
                <h1>Iniciar Sesión</h1>

                <div className='input-group'>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        value={name}
                        onChange={onInputChange}
                        required
                        autoComplete='off'
                    />
                    <label htmlFor='name'>Nombre:</label>
                </div>

                <div className='input-group'>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        value={email}
                        onChange={onInputChange}
                        required
                        autoComplete='off'
                    />
                    <label htmlFor='email'>Email:</label>
                </div>
                <div className='input-group'>
                    <input
                        type='password'
                        name='password'
                        id='password'
                        value={password}
                        onChange={onInputChange}
                        required
                        autoComplete='off'
                    />
                    <label htmlFor='password'>Contraseña:</label>
                </div>

                <button>Entrar</button>
            </form>
        </div>
    );
};
