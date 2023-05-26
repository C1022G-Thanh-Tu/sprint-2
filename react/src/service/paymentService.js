import request from '../config/request'

const pay = ({amount}) => {
    return request.post(`/api/payment/create_payment`, {amount})
}

const sendEmail = (paymentInfo) => {
    return request.post(`/api/payment/send-email`, {...paymentInfo})
}

const paymentService = {
    pay,
    sendEmail
}

export default paymentService