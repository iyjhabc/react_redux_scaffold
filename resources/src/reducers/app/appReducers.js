//reducer
//最初的状态是"Hello"
const initialState = {
    text: 'Hello'
}

export function myApp(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_TEXT':
            return {
                text:state.text=='Hellox'?'Stark':'Hellox'
            }
        case 'BUTTON_CLICK':
            return {
                text: 'You just click button'
            }
        default:
            return {
                text:'Hellox'
            }
    }
}