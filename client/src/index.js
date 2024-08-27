import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
    createBrowserRouter, createRoutesFromElements, Route,
    RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/common/ErrorPage/ErrorPage";
import AnimalDetailsPage from "./pages/common/AnimalDetails/AnimalDetailsPage";
import CatsPage from "./pages/common/Cats/CatsPage";
import DogsPage from "./pages/common/Dogs/DogsPage";
import OtherAnimalsPage from "./pages/common/OtherAnimals/OtherAnimalsPage";
import FosterForm from "./pages/client/FosterForm/FosterForm";
import Applicaions from "./pages/client/Applications/Applicaions";
import ProfilePage from "./pages/common/Profile/ProfilePage";
import AdminAddAnimal from "./pages/admin/admin-add-animal/AdminAddAnimal";
import AdminApplicationsPage from "./pages/admin/AdminApplications/AdminApplicationsPage";
import HomePage from "./pages/common/Home/HomePage";
import {GlobalStateProvider} from "./context/GlobalStateContext";
import AnimalsPage from "./pages/common/Animals/AnimalsPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/animals/:animalId",
        element: <AnimalDetailsPage />
    },
    {
        path: "/animals",
        element: <AnimalsPage />
    },
    {
        path: "/cats",
        element: <CatsPage />
    },
    {
        path: "/dogs",
        element: <DogsPage />
    },
    {
        path: "/other",
        element: <OtherAnimalsPage />
    },
    {
        path: "/foster-form/:animalId",
        element: <FosterForm />
    },
    {
        path: "/applications",
        element: <Applicaions />
    },
    {
        path: "/profile",
        element: <ProfilePage />
    },
    {
        path: "/admin/animals",
        element: <AdminAddAnimal />
    },
    {
        path: "/admin/applications",
        element: <AdminApplicationsPage />
    }

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <GlobalStateProvider>
          <RouterProvider router={router} />
      </GlobalStateProvider>
  </React.StrictMode>
);

