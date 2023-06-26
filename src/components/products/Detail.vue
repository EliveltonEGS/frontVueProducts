<template>
    <div class="container">
        <div class="text-center">
            <h3>Detail Product</h3>
        </div>
        <div class="card">
            <div class="card-header">
                Detail Product
            </div>
            <div class="card-body">
                <div class="row g-3">
                    <div class="col-12">
                        <label>Product</label>
                        <input type="text" v-model="model.product.description" class="form-control form-control-sm">
                    </div>
                </div>
                <div class="row g-3">
                    <div class="col-6">
                        <label>Category</label>
                        <input type="text" v-model="model.product.category" class="form-control form-control-sm">
                    </div>
                    <div class="col-3">
                        <label>Amount</label>
                        <input type="text" v-model="model.product.amount" class="form-control form-control-sm">
                    </div>
                    <div class="col-3">
                        <label>Price</label>
                        <input type="text" v-model="model.product.price" class="form-control form-control-sm">
                    </div>
                </div>
                <div class="row g-3 m-1">
                    <div class="col-12 text-center">
                        <RouterLink to="/products" class="btn btn-warning btn-sm">Back</RouterLink>
                    </div>
                </div>
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
            model: {
                product: {
                    description: null,
                    category: null,
                    amount: null,
                    price: null
                }
            }
        }
    },
    mounted() {
        this.getId(this.$route.params.id)
    },
    methods: {
        getId(id) {
             productService.getId(id).then(res => {
                this.setValues(res)
            }).catch(e => {
                console.log(e)
            })
        },
        setValues(response) {
            this.model.product.description = response.data.data.description
            this.model.product.category = response.data.data.category.description
            this.model.product.amount = response.data.data.amount
            this.model.product.price = response.data.data.price
        }
    },
}
</script>