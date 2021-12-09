import { typesClothes } from "../types/types";


const initialState = {
    clothes: [],
    search: ''
}


export const clothesReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesClothes.register:
            return {
                clothes: [action.payload]
            }
        case typesClothes.list:
            return {
                clothes: [...action.payload]
            }
        case typesClothes.delete:
            return {
                clothes: state.clothes.filter(emp => emp.nombre !== action.payload)
            }
        case  typesClothes.search:
            return{
                clothes: action.payload
            }
        default:
            return state;
    }
}
