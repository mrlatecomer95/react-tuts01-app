import Dashboard from "../views/Dashboard";

const routesadmin = [
    {
        path: "/dashboard",
        name:"Dashboard",
        component:Dashboard,
        layout: "/admin",
    },
    {
        path: "/admin",
        name:"Home",
        component:"",
        layout: "",
    }
];

export default routesadmin;
