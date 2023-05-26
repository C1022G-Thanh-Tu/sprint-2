import request from '../config/request'

const pay = ({amount}) => {
    return request.post(`/api/payment/create_payment`, {amount})
}

const paymentService = {
    pay
}

export default paymentService