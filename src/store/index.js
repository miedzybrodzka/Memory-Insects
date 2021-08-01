import {createStore} from 'redux';
import reducer from './reducer';

export default createStore(reducer);

export {setRandomArray, showHiddenCard, stopClick, blockAllCards, setWinCards, unblockCards, coverCards, clearTable, cleanTable} from './actionCreator';