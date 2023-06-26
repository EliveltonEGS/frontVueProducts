import http from '../http-common'

class ProductDataService 
{
    async getAll() 
    {
        return await http.get('/product')
    }

    async getId(id) 
    {
        return await http.get('/product/' + id)
    }
}

export default new ProductDataService()