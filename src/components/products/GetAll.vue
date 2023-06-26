<template lang="">
    <div class="container">
        <div class="text-center">
            <h3>Get All Products</h3>
        </div>
        <div class="card">
            <div class="card-header">
                All Products
            </div>
            <div class="card-body">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Category</td>
                            <td>Description</td>
                            <td>Amount</td>
                            <td>Price</td>
                            <td>Created_at</td>
                            <td>Updated_at</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, i) in this.products" :key="i">
                            <td>{{ item.id }}</td>
                            <td>{{ item.category.description }}</td>
                            <td>{{ item.description }}</td>
                            <td>{{ item.amount }}</td>
                            <td>{{ item.price }}</td>
                            <td>{{ item.created_at }}</td>
                            <td>{{ item.updated_at }}</td>
                            <td>
                                <RouterLink :to="{ path: '/products/' + item.id + '/detail'}" class="btn btn-warning btn-sm">Detail</RouterLink>
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

import productService from '../../services/ProductDataService'

export default {
    data() {
        return {
            products: []
        }
    },
    mounted() {
        this.getAll()
    },
    methods: {
        getAll() {
            productService.getAll().then(res => {
                this.products = res.data.data
            }).catch(e => {
                console.log(e)
            })
        }
    },
}
</script>