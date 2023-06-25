import http from '../http-common'

class CategoryDataService
{
    async getAll() 
    {
        return await http.get('/category')
    }

    async getId(id) {
        return await http.get('/category/' + id)
    }

    async update(id, data) {
        return await http.put('category/' + id, data)
    }

    async create(data) {
        return await http.post('/category', data);
    }
}

export default new CategoryDataService()