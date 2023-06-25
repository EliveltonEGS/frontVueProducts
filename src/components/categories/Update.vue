<template>
    <div class="container">
        <div class="text-center">
            <h3>Update Category</h3>
        </div>
        <div class="card">
            <div class="card-header">
                All Categories
            </div>
            <div class="card-body">
                <div class="row g-3">
                    <div class="col-12">
                        <label>Category</label>
                        <input type="text" v-model="model.category.description" class="form-control form-control-sm">
                    </div>
                </div>
                <div class="row g-3 m-1">
                    <div class="col-12 text-center">
                        <button @click="update" class="btn btn-primary btn-sm">Update</button>
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

import categoryService from '../../services/CategoryDataService'
import axios from 'axios'

export default {
    data() {
        return {
            model: {
                category: {
                    description: null
                }
            }
        }
    },
    mounted() {
        this.getId(this.$route.params.id)
    },
    methods: {
        update() {
            categoryService.update(
                this.$route.params.id, 
                { description: this.model.category.description }
            ).then(res => {
                this.getId(res.data.data.id)
            }).catch(e => {
                console.log(e)
            })
        },
        getId(id) {
                categoryService.getId(id).then(res => {
                    this.model.category.description = res.data.data[0].description
                }).catch(e => {
                    console.log(e)
                })
            }
    },
}
</script>
