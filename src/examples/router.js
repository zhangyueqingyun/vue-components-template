import { createRouter, createWebHistory } from 'vue-router';
import Layout from './Layout.vue'
import Home from './Home.vue';
import DemoComponent from './demo-component/demo-component.vue'

const routeConfig = [{
    path: 'demo-component',
    name: 'demo-component',
    title: '示例组件',
    component: DemoComponent
}];

const Router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/components',
        name: 'components',
        component: Layout,
        children: [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            ...routeConfig
        ]
    }]
});

export { routeConfig };

export default Router;