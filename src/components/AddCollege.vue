<template>
    <div>
        <div class="container is-fullheight">
            <h3 class="title has-text-dark is-4">
                Add new college
            </h3>
            <form id="frmAddCollege" @submit="onSubmit">
                <b-field label="Name">
                    <b-input v-model="college.name" placeholder="Input school name" required></b-input>
                </b-field>
                <div class="buttons">
                    <button class="button is-primary" type="submit">Add New</button>
                    <a href="#/" class="button">Back to list</a>
                </div>
                
            </form>
        </div>
    </div>
</template>

<script>
import firebase from '../Firebase'
import router from '../router'

export default {
    name: 'AddCollege',
    data() {
        return {
            ref: firebase.firestore().collection('colleges'),
            college: {
                name : null,
                admission_statistics : null,
                application_deadlines : null,
                application_requirements_coalition : null,
                application_requirements_common_app : null,
                curriculum_recommendations : null,
                financial_aid_deadlines : null,
                general_information : {
                    academic_calendar : null,
                    address : null,
                    endowment : null,
                    religious_affiliation : null,
                    school_type : null,
                    setting : null,
                    test_codes : { ACT :0 , SAT : 0},
                    year_found : null
                },
                geographic_overview : null,
                major_selection_policy : null,
                majors : null,
                optional_application_components : null,
                sat_act_requirements : null,
                school_specific_essay_topics : null,
                update_date : new Date()
            }
        }
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault()
            this.ref.add(this.college).then(docRef => {
                this.$toast.open({
                    message: 'College created successfully.',
                    type: 'is-success',
                    position: 'is-bottom-right'
                });
                this.college.name = '';
                router.push({
                    name: 'CollegeList'
                })
            }).catch((error) => {
                this.$toast.open({
                    message: 'Error adding document: '.error,
                    type: 'is-danger',
                    position: 'is-bottom-right'
                })
            });
        }
    }
};


</script>

