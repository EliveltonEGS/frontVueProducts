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
                <div class="text-center mb-3">
                    <RouterLink :to="{ path: '/categories/create' }" class="btn btn-primary btn-sm">New</RouterLink>
                </div>
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
                                <RouterLink :to="{ path: '/categories/' + item.id + '/edit'}" class="btn btn-warning btn-sm">Edit</RouterLink>
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

import categoryService from '../../services/CategoryDataService'

export default {
    data() {
        return {
            categories: [],
        };
        },
        mounted() {
            this.getAll()
        },
        methods: {
            getAll() {
                categoryService.getAll().then(res => {
                   this.categories = res.data.data
                }).catch(e => {
                    console.log(e)
                })
            }
        }
};
</script>
