import AboutPage from '../views/About.js';
import ContactPage from '../views/Contact.js'; 
import HomePage from '../views/Home.js';

const routes = [
  {
    path: "/home",
    name: "Home Page",
    layout: "",
    component: HomePage
  },
  {
    path:"/about",
    name: "About Page",
    layout: "",
    component: AboutPage
  },
  {
    path:"/contact",
    name: "Contact Page",
    layout: "",
    component: ContactPage
  },
];

export default routes;
