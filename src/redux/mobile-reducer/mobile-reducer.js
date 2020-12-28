const INITIALE_STATE = {
    isToggle : false,
};

export const mobileReducer = ( state = INITIALE_STATE , action ) => {

    switch ( action.type) {
        case "TOGGLE":
            return {
                isToggle: !state.isToggle,
            }
        default : 
            return state;
    }
};
