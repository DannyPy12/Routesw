import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../Navbar';
import {
    HomePage,
    DashboardPage,
    LoginPage,
    RegisterPage,
	CarrosPage,
    BicicletasPage,
    MotosPage,

	
    
} from '../pages';
import { PrivateRoute } from './PrivateRoute';
import { AuthProvider } from '../context/AuthContext';
import { ModelosMotoPage } from '../pages/ModelosMotoPage';
import { ModelosBicicletas } from '../pages/ModelosBicicletas';
import { ModelosCarros } from '../pages/ModelosCarros';

export const AppRouter = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route path='/' element={<Navbar />}>
                    <Route index element={<HomePage />} />
                    <Route path='login' element={<LoginPage />} />
                    <Route path='register' element={<RegisterPage />} />
                    <Route path='carros' element={<CarrosPage />} />
                    <Route path='motos' element={<MotosPage />} />
                    <Route path='bicicletas' element={<BicicletasPage />} />


                
                    <Route
                        path='dashboard'
                        element={
                            <PrivateRoute>
                                <DashboardPage />
                            </PrivateRoute>
                        }
                    />

<Route
                        path='Modelos Motos'
                        element={
                            <PrivateRoute>
                                <ModelosMotoPage />
                            </PrivateRoute>
                        }
                    />

<Route
                        path='Modelos Bicicletas'
                        element={
                            <PrivateRoute>
                                <ModelosBicicletas />
                            </PrivateRoute>
                        }
                    />

<Route
                        path='Modelos Carros'
                        element={
                            <PrivateRoute>
                                <ModelosCarros />
                            </PrivateRoute>
                        }
                    />
                   
                </Route>
            </Routes>
        </AuthProvider>
    );
};
