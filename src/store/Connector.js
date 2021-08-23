import {connect} from 'react-redux';
import {setRandomArray, showHiddenCard, stopClick, blockAllCards, setWinCards, unblockCards, coverCards, clearTable, cleanTable} from './actionCreator';

export const Connector = (presentationComponent) => {

    const mapStateToProps = (storeData) => ({
        cards: storeData.cards,
        randomCardsArray: storeData.random,
        isVisibleCard: storeData.visible,
        unClickableArray: storeData.unclickable,
        winCards: storeData.win
    })

    const mapDispatchToProps = {
        setRandomArray: setRandomArray,
        showHiddenCard: showHiddenCard,
        stopClick: stopClick,
        blockAllCards: blockAllCards,
        setWinCards: setWinCards,
        unblockCards: unblockCards,
        coverCards: coverCards,
        clearTable: clearTable,
        cleanTable: cleanTable

    }

    return connect(mapStateToProps, mapDispatchToProps)(presentationComponent);

}

