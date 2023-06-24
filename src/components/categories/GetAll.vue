<template>
    <div class="container">
        <div class="text-center">
            <h3>Get All Categories</h3>
        </div>
        <div class="card">
            <div class="card-header">
                All Categories
            </div>
            <div class="card-body">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Category</td>
                            <td>CreatedAt</td>
                            <td>UpdatedAt</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, i) in this.categories" :key="i">
                            <td>{{ item.id }}</td>
                            <td>{{ item.description }}</td>
                            <td>{{ item.created_at }}</td>
                            <td>{{ item.updated_at }}</td>
                            <td>
                                <a href="#" class="btn btn-warning btn-sm">Edit</a>
                                <a href="#" class="btn btn-danger btn-sm m-1">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="card-footer">
                Front end Vue
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"

export default {
    data() {
        return {
            categories: []
        };
        },
        mounted() {
            this.getAll()
        },
        methods: {
            getAll() {
                axios.get(`http://localhost:8080/category`).then(res => {this.categories = res.data.data})
            }
        }
};
</script>
