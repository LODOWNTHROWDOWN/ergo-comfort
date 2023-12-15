import { createRouter, createWebHistory } from 'vue-router';
import FormContainer from '../components/FormTemplate.vue';
import SummaryPage from '../views/SummaryPage.vue';
import Introduction from "@/components/FormIntroduction";

const routes = [
    { path: '/', component: Introduction },
    { path: '/form', component: FormContainer },
    {
        path: '/summary',
        component: SummaryPage,
        name: 'Summary', // Ensure this name is correctly defined
        props: true
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
