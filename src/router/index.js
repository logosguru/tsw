import VueRouter from 'vue-router';
import CollegeList from '@/components/CollegeList'
import ShowCollege from '@/components/ShowCollege'
import AddCollege from '@/components/AddCollege'
import EditCollege from '@/components/EditCollege'

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'CollegeList',
            component: CollegeList
        },
        {
            path: '/show-college/:id',
            name: 'ShowCollege',
            component: ShowCollege
        },
        {
            path: '/add-college/',
            name: 'AddCollege',
            component: AddCollege
        },
        {
            path: '/edit-college/:id',
            name: 'EditCollege',
            component: EditCollege
        }
    ]
});