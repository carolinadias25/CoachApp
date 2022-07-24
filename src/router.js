import {createRouter, createWebHistory} from 'vue-router';

import CoachDetail from './pages/coaches/CoachesDetails';
import CoachesList from './pages/coaches/CoachesList';
import CoachRegistration from './pages/coaches/CoachRegistration';
import CoachContact from './pages/requests/ContactCoach';
import RequestsReceived from './pages/requests/RequestsReceived';
import NotFound from './pages/NotFound'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/', redirect:'/coaches'},
        {path: '/coaches', component: CoachesList},
        {path: '/coaches/:id', component:CoachDetail, children:[
                {path: 'contact', component:CoachContact}, // /coaches/c1/contact
            ]},
        {path: '/register', component:CoachRegistration},
        {path: '/requests', component:RequestsReceived},
        {path: '/:notFound(.*)', component:NotFound},
    ]
});

export default router;