import {
  createBrowserRouter,
 
} from "react-router";
import HomePage from "../Pages/HomePage";
import LayOut from "../Root/LayOut";
import Service from "../Pages/Service";
import Resume from "../Pages/Resume";
import Contact from "../Pages/Contact";



export const router = createBrowserRouter([
  {
    path: "/",
    Component:LayOut,
    children:[
      {
        index: true,
        Component:HomePage,
      },
      {
         path: "service",
        Component:Service,
      },

      {
         path: "resume",
        Component:Resume,
      },
      {
         path: "contact",
        Component:Contact,
      }
    ]
  
  },
]);