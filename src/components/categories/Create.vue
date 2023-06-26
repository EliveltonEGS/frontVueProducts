<template>
    <div class="container">
        <div class="text-center">
            <h3>Create Category</h3>
        </div>
        <div class="card">
            <div class="card-header">
                Create Category
            </div>
            <div class="card-body">
                <div class="row g-3">
                    <div class="col-12">
                        <p v-if="message.error" class="alert alert-danger" role="alert">
                            {{ message.error }}
                        </p>
                        <p v-if="message.success" class="alert alert-success" role="alert">
                            {{ message.success }}
                        </p>
                        <label>Category</label>
                        <input type="text" v-model="model.category.description" class="form-control form-control-sm">
                    </div>
                </div>
                <div class="row g-3 m-1">
                    <div class="col-12 text-center">
                        <button @click="save" class="btn btn-primary btn-sm">Save</button>
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

export default {
    data() {
        return {
            model: {
                category: {
                    description: null
                }
            },
            message: {
                error: null,
                success: null,
            }
        }
    },
    methods: {
        mounted() {
            this.message = false
        },
        save() {
            if (!this.model.category.description) {
                this.message.success = null
                this.message.error = 'This Field is required.'
                return
            }

            categoryService.create({description: this.model.category.description}).then(res => { 
                this.message.error = null
                this.message.success = 'Success!'
            })
        }
    },
}
</script>