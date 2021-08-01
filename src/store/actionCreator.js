import {RANDOM, UNCLICKABLE, VISIBLE, WIN} from './dataType';
import {STORE, UPDATE, CLEAR,} from './actionType';

export const setRandomArray = (randomCard) => {
    return {
       type: STORE,
       dataType: RANDOM,
       payload: randomCard
    }
}

export const showHiddenCard = (ev) => {
    return {
        type: UPDATE,
        dataType: VISIBLE,
        payload: {id: ev.target.id, visible: true}
    }
}

export const stopClick = (ev) => {
    return {
        type: UPDATE,
        dataType: UNCLICKABLE,
        payload: {id: ev.target.id, disable: true}
    }
}

export const blockAllCards = (elemId) => {
    return {
        type: UPDATE,
        dataType: UNCLICKABLE,
        payload: {id: elemId, disable: true}
    }
}

export const setWinCards  = (winIndexes) => {
    return {
        type: STORE,
        dataType: WIN,
        payload: winIndexes
    }
}

export const unblockCards = (elemId) => {
    return {
        type: UPDATE,
        dataType: UNCLICKABLE,
        payload: {id: elemId, disable: false}
    }
}

export const coverCards = (elemId) => {
    return {
        type: UPDATE,
        dataType: VISIBLE,
        payload: {id: elemId, visible: false}
    }
}

export const clearTable = (typeData) => {
    return {
        type: CLEAR,
        dataType: typeData,
        payload: []
    }
}

export const cleanTable = (elemId, typeData, property) => {
    return {
        type: UPDATE,
        dataType: typeData,
        payload: {id: elemId, [property]: false }
    }
}