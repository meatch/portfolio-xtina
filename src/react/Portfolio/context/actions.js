/*---------------------------
| Action Types
---------------------------*/
export const ActionTypes = {
    ITEMS_SET: 'ITEMS_SET',
    CHOSEN_ITEM_SET: 'CHOSEN_ITEM_SET',
    PROFILE_SHOW_SET: 'PROFILE_SHOW_SET',
}

/*---------------------------
| Action Creators
---------------------------*/
/* Items ---------------------------*/
export const itemsSet = (items) => {
    return {
        type: ActionTypes.ITEMS_SET,
        items: items,
    }
}

/* Chosen Item ---------------------------*/
export const chosenItemSet = (item) => {
    return {
        type: ActionTypes.CHOSEN_ITEM_SET,
        chosenItem: item,
    }
}

/* Show Profile over Gallery ---------------------------*/
export const profileShowSet = (showProfile) => {
    return {
        type: ActionTypes.PROFILE_SHOW_SET,
        showProfile: showProfile,
    }
}
