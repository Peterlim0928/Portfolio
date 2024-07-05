import './App.css';
import HomePage from './Portfolio/Profile/HomePage';
import NavBar from './Portfolio/Utils/NavBar';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProjectPage from './Portfolio/Project/ProjectPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/project",
    element: <ProjectPage />
  },
  {
    path: "*",
    element: <h1>Page not found</h1>
  }
]);

function App() {
  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
