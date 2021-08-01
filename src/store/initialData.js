import {RANDOM, CARDS, VISIBLE, UNCLICKABLE, WIN } from './dataType';
import bee from '../images/bee-card.jpg'
import blackBeetle from '../images/black-beetle-card.jpg';
import blueButterfly from '../images/blue-butterfly-card.jpg';
import brownBeetle from '../images/brown-beetle-card.jpg';
import brownButterfly from '../images/brown-butterfly-card.jpg';
import coloradoBeetle from '../images/colorado-beetle-card.jpg';
import housefly from '../images/housefly-card.jpg';
import ladybird from '../images/ladybird-card.jpg';
import mantis from '../images/mantis-card.jpg';
import orangeButterfly from '../images/orange-butterfly-card.jpg';
import stickInsect from '../images/stick-insect-card.jpg';
import termite from '../images/termite-card.jpg';

export const initialData = {
    [CARDS]: [
        {card: bee, insect: 'bee'},
        {card: blackBeetle, insect: 'blackBeetle'},
        {card: blueButterfly, insect: 'blueButterfly'},
        {card: brownBeetle, insect: 'brownBeetle'},
        {card: brownButterfly, insect: 'brownButterfly'},
        {card: coloradoBeetle, insect: 'coloradoBeetle'},
        {card: housefly, insect: 'housefly'},
        {card: ladybird, insect: 'ladybird'},
        {card: mantis, insect: 'mantis'},
        {card: orangeButterfly, insect: 'orangeButterfly'},
        {card: stickInsect, insect: 'stickInsect'},
        {card: termite, insect: 'termite'},
        {card: bee, insect: 'bee'},
        {card: blackBeetle, insect: 'blackBeetle'},
        {card: blueButterfly, insect: 'blueButterfly'},
        {card: brownBeetle, insect: 'brownBeetle'},
        {card: brownButterfly, insect: 'brownButterfly'},
        {card: coloradoBeetle, insect: 'coloradoBeetle'},
        {card: housefly, insect: 'housefly'},
        {card: ladybird, insect: 'ladybird'},
        {card: mantis, insect: 'mantis'},
        {card: orangeButterfly, insect: 'orangeButterfly'},
        {card: stickInsect, insect: 'stickInsect'},
        {card: termite, insect: 'termite'},
        ],
    [RANDOM]: [],
    [VISIBLE]: [
        {id: '0', visible: false},
        {id: '1', visible: false},
        {id: '2', visible: false},
        {id: '3', visible: false},
        {id: '4', visible: false},
        {id: '5', visible: false},
        {id: '6', visible: false},
        {id: '7', visible: false},
        {id: '8', visible: false},
        {id: '9', visible: false},
        {id: '10', visible: false},
        {id: '11', visible: false},
        {id: '12', visible: false},
        {id: '13', visible: false},
        {id: '14', visible: false},
        {id: '15', visible: false},
        {id: '16', visible: false},
        {id: '17', visible: false},
        {id: '18', visible: false},
        {id: '19', visible: false},
        {id: '20', visible: false},
        {id: '21', visible: false},
        {id: '22', visible: false},
        {id: '23', visible: false},
    ],
    [UNCLICKABLE]: [
        {id: '0', disable: false},
        {id: '1', disable: false},
        {id: '2', disable: false},
        {id: '3', disable: false},
        {id: '4', disable: false},
        {id: '5', disable: false},
        {id: '6', disable: false},
        {id: '7', disable: false},
        {id: '8', disable: false},
        {id: '9', disable: false},
        {id: '10', disable: false},
        {id: '11', disable: false},
        {id: '12', disable: false},
        {id: '13', disable: false},
        {id: '14', disable: false},
        {id: '15', disable: false},
        {id: '16', disable: false},
        {id: '17', disable: false},
        {id: '18', disable: false},
        {id: '19', disable: false},
        {id: '20', disable: false},
        {id: '21', disable: false},
        {id: '22', disable: false},
        {id: '23', disable: false},
    ],
    [WIN]: []
}