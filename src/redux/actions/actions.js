import * as AT from './actionsTypes'

export const onEnter = (data) => dispatch => {
    return (dispatch({
        type: AT.ON_ENTER,
        payload: data
    }))
}

export const onSubmit = (ticket) => dispatch => {
    return (dispatch({
        type: AT.ON_SUBMIT,
        payload: ticket
    }))
}

export const onChoose = (address) => dispatch => {
    return (dispatch({
        type: AT.ON_SUBMIT,
        payload: address
    }))

}