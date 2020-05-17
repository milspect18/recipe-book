
export default (state, action) => {
    switch (action.type) {
        case 'POPULATE_RECIPES':
            return action.recipes;
        case 'ADD_RECIPE':
            return state.concat(action.recipe);
        case 'REMOVE_RECIPE':
            return state.filter((recipe) => action.id !== recipe.id);
        default:
            return state;
    }
}