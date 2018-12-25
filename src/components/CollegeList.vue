<template>
    <div>
        <div class="container is-fullheight">
            <h3 class="title has-text-dark is-4">
                College List
            </h3>
            <a href="#/add-college" class="button is-primary is-pulled-right">Add New</a>
            <b-table :data="colleges" :columns="columns" focusable>
                <template slot-scope="props">
                    <b-table-column field="name" label="Name">
                        {{ props.row.name }}
                    </b-table-column>
                    <b-table-column field="update_date" label="Last update">
                        {{ props.row.update_date | moment("MM/DD/YYYY") }}
                    </b-table-column>
                    <b-table-column label="Action">
                        <div class="buttons">
                            <a class="button" @click.stop="details(props.row)">
                                <b-icon icon="file-document-box-outline"></b-icon>
                                <span>View</span>
                            </a>
                        </div>
                    </b-table-column>
                </template>
            </b-table>
        </div>
    </div>
</template>

<script>

import firebase from '../Firebase'
import router from '../router'

export default {
    name: 'CollegeList',
    data() {
        return {
            colleges: [],
            errors: [],
            ref: firebase.firestore().collection('colleges')
        }
    },
    created() {
        this.ref.onSnapshot((querySnapshot) => {
            this.colleges = [];
            querySnapshot.forEach((doc) => {
                this.colleges.push({
                    key: doc.id,
                    name: doc.data().name,
                    update_date: doc.data().update_date.toDate()
                });
            })
        });
    },
    methods: {
        details (college) {
            router.push({ name: 'ShowCollege', params: { id: college.key}})
        }
    }
}

</script>