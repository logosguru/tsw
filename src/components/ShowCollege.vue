<template>
    <section class="section">
        <div class="container">
            <h1 class="title is-spaced">{{college.name}}</h1>
            <div v-for="(info, attribute) in college" :key="attribute">
                <h3 class="subtitle">{{ attribute | snakeToTitleCase }}</h3>
                <div class="content" v-if="info instanceof Object">
                    <table class="table is-bordered is-striped">
                        <tr v-for="(value, key) in info" :key="key">
                            <td class="has-background-light">{{ key | snakeToTitleCase }}:</td>
                            <td>
                                <span v-if="value instanceof Object">
                                    <ul style="margin-top:0;">
                                        <li :key="k2" v-for="(v2, k2) in value">
                                            {{k2}} : {{v2}}
                                        </li>
                                    </ul>
                                </span>
                                <span v-else>
                                    {{ value }}
                                </span>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="content" v-else-if="info !== '' && info !== null">
                    {{ info }}
                </div>
                <div class="notification is-text-centered" v-else>
                    Data not available
                </div>
                <hr />
            </div>
            <nav>
                <a href="#/" class="button is-primary">Back to list</a>
            </nav>
        </div>
    </section>
</template>

<script>
import Vue from 'vue'
import firebase from '../Firebase'
import router from '../router'

export default {
    name: 'ShowCollege',
    data() {
        return {
            key: '',
            college: {}
        }
    },

    created () {
        const ref = firebase.firestore().collection('colleges').doc(this.$route.params.id);
        ref.get().then((doc) => {
            if (doc.exists) {
                this.key = doc.id;
                this.college = doc.data();
                console.log(this.college);
            } else {
                alert('No such document!');
            }
        });
    },

    methods: {
        editcollege (id) {
            router.push({
                name: 'EditCollege',
                params: { id: id }
            })
        },
        deletecollege (id) {
            firebase.firestore().collection('colleges').doc(id).delete().then(() => {
                router.push({
                    name: 'CollegeList'
                })
            }).catch ((error) => {
                alert("Error removing document: " , error);
            });
        }
    }, 

    filters: {
        snakeToTitleCase: function(value) {
            if (!value) return ''
            return value.split('_').map(function(item) {
                return item.charAt(0).toUpperCase() + item.substring(1);
            }).join(' ');
        }, 
    }
}



</script>
