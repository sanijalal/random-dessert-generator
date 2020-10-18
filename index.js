const utils = require('./helpers/utils');

const desserts = ['akok', 'apple crumble', 'cempedak creme', 'cempedak fritters', 'cekodok','cendol','ais kacang','eclair','chocolate','cake','tart', 'muffin', 'brownies', 'cupcake', 'frgál', 'kremrole', 'větrník', 'buchty', 'krapfen', 'kek lapis']
const adjectives = ['bbq', 'berrylicious', 'butterscotch', 'caramel', 'cheesy', 'chocolate', 'salted egg', 'salty', 'smoked', 'strawberry', 'sugar', 'sweet']

function generateDessert() {
    const dessertIndex = utils.getRandomIndex(desserts);
    return desserts[dessertIndex];
}

function generateYummyDessert() {
    const dessertIndex = utils.getRandomIndex(desserts);
    const adjectiveIndex = utils.getRandomIndex(adjectives);
    return `${adjectives[adjectiveIndex]} ${desserts[dessertIndex]}`;
}

exports.generateDessert = generateDessert;
exports.generateYummyDessert = generateYummyDessert;