export function drawFunction(setRandomArray, cards) {
    const helpArray = [];
            while(helpArray.length < 24) {
                const randomNumber = Math.floor(Math.random() * 24);
                if (!helpArray.includes(randomNumber)) {
                    helpArray.push(randomNumber);
                    setRandomArray(cards[randomNumber]);
                        
                }
            } 
            helpArray.length = 0;
    
}