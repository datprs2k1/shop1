const Admin = () => import("../admin/App.vue");
const Dashboard = () => import("../admin/Dashboard/Index.vue");
const Login = () => import("../admin/Login/Index.vue");
const Category = () => import("../admin/Category/Index.vue");

const routes = [
    {
        path: "/admin",
        component: Admin,
        children: [
            {
                path: "",
                name: "admin.dashboard",
                component: Dashboard,
                meta: {
                    title: "Admin",
                    requireAuth: true,
                    role: "Admin",
                },
            },
            {
                path: "login",
                name: "login",
                component: Login,
                meta: {
                    title: "Login",
                },
            },
            {
                path: "category",
                name: "admin.category",
                component: Category,
                meta: {
                    title: "Danh sách danh mục",
                },
            },
        ],
    },
];

export default routes;
