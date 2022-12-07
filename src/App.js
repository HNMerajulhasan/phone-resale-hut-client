import "./App.css";
import { RouterProvider } from "react-router-dom";

import router from "./Layout/Routes.js/Routes";
import { Toaster } from "react-hot-toast";

//App.js component hero 
function App() {
  return (
    <div className="w-11/12 mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
