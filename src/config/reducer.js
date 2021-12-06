

const reducer = (state, action) => {
    if( action.type === 'CHECKED_FOOTER_NAV_ITEM') {
        return { ...state, checkedFooterNavItem: action.payload }
    }
    return state
}

export default reducer