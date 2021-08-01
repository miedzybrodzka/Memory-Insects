import {STORE, UPDATE, CLEAR,} from './actionType';
import {initialData} from './initialData';

export default function (storeData, action) {
    
    switch(action.type) {
        case STORE:
            return {
                ...storeData,
                [action.dataType]: storeData[action.dataType].concat(action.payload)
            }
        case UPDATE:
            return {
                ...storeData,
                [action.dataType]: storeData[action.dataType].map(elem => elem.id === action.payload.id? action.payload : elem)
            }
        case CLEAR:
            return {
                ...storeData,
                [action.dataType]: action.payload
            }

        default:
            return storeData || initialData;
    }
}