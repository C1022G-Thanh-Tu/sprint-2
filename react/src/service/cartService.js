import request from '../config/request'

const update = (cart) => {
    return request.put(`/cart`, {...cart})
}

const cartService = {
    update
}

export default cartService