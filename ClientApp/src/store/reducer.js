export const defaultState = {
    categories: [{}],
    counter: 0,
};

export function reducer(state = defaultState, action = {}) {
    switch (action.type) {
        case 'SET_CATEGORIES':
            return { ...state, categories: action.data };
        
        case 'ADD_CATEGORY':
            state.categories.push(action.data);
            return {...state};

        case 'ADD_ITEM':
            const newItem = action.data;
            state.categories.filter(category => category.id == parseInt(newItem.categoryId))[0].items.push(newItem);
            return { ...state };
            
        case 'REMOVE_ITEM':
            const deleteItem = action.data;
            const categoryOfItem = state.categories.filter(category => category.id == parseInt(deleteItem.categoryId))[0];
            categoryOfItem.items = categoryOfItem.items.filter((item) => item.id != parseInt(deleteItem.id));
            return { ...state };

        case 'ADD_CATEGORY':
            return {
                ...state,
                categories: [...state.categories, action.data]
            };

        default:
            return state;
    }
}