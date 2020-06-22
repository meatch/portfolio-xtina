import { ActionTypes } from './actions.js';

const reducer = (state={}, action) => {
    switch(action.type) {

        /* Items ---------------------------*/
        case (ActionTypes.ITEMS_SET): {
            return {
                ...state,
                items: action.items,
            }
        }

        /* Chosen Item  ---------------------------*/
        case (ActionTypes.CHOSEN_ITEM_SET): {
            return {
                ...state,
                chosenItem: action.chosenItem,
            }
        }

        /* Items ---------------------------*/
        case (ActionTypes.PROFILE_SHOW_SET): {
            return {
                ...state,
                showProfile: action.showProfile,
            }
        }

        /*---------------------------
        | state Default
        ---------------------------*/
        default: {
            return state;
        }
    }
}

export default reducer;