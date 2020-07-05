<template>
    <div>
        <div class="row">
            <div class="col s6">
                <h2>Create Teacher</h2>
                <form action="" method="post" @submit.prevent="createTeacherHandle">
                    <div class="input-field col s6">
                        <input id="name" type="text" class="validate" v-model.trim="teacher.name">
                        <label for="name">Teacher Name</label>
                    </div>

                    <div class="input-field col s6">
                        <input id="age" type="number" class="validate" v-model.number.trim="teacher.age">
                        <label for="age">Teacher Age</label>
                    </div>

                        <button type="submit" class="btn btn-primary">Create</button>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col s6">
                <h2>Teachers Table</h2>
                <table>
                    <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                    </thead>

                    <tbody v-if="teachers.length">
                    <tr v-for="teacher in teachers" :key="teacher.id">
                        <td>{{teacher.id}}</td>
                        <td>{{teacher.name}}</td>
                        <td>{{teacher.age}}</td>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        there is no teachers
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="col s6">
                <h2>Students Table</h2>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "Home",
        data() {
            return {
                teacher: {
                    name: '',
                    age: ''
                },
                teachers: []
            }
        },
        methods: {
            createTeacherHandle() {
                axios.post('/api/teacher/', {
                    name: this.teacher.name,
                    age: this.teacher.age
                })
                    .then(res => {
                        this.teacher.name = ''
                        this.teacher.age = ''
                    })
                    .catch(err => {

                    })
            },

            getTeachers() {
                axios.get('/api/teacher')
                    .then(res => {
                        this.teachers = res.data
                    })
                    .catch(err => {

                    })
            }
        },
        mounted() {
            this.getTeachers()
        }
    }
</script>

<style>

</style>
