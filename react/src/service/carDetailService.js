import request from '../config/request'

const findAll = () => {
    return request.get("/cart-detail")
}

const listTotalALL = (page) => {
    return request.get(`/cart-detail/list?page=${page?page:0}`)
}

const save = (cartDetail) => {
    return request.post(`/cart-detail`, {...cartDetail})
}

const remove = (id) => {
    return request.delete(`/cart-detail/${id}`)
}

const update = (id, quantity) => {
    return request.put(`cart-detail/${id}/${quantity}`)
}

const cartDetailService = {
    findAll,
    save,
    remove,
    update,
    listTotalALL
}

export default cartDetailService