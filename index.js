const utils = require('./helpers/utils');

const desserts = ['akok', 'apple crumble', 'cake', 'cempedak creme', 'cempedak fritters', 'cekodok','cendol','ais kacang','eclair','chocolate','cake','tart', 'muffin', 'brownies', 'cupcake', 'frgál', 'kremrole', 'větrník', 'buchty', 'krapfen', 'kek lapis']
const adjectives = ['bbq', 'berrylicious', 'butterscotch', 'caramel', 'cheesy', 'chocolate', 'salted egg', 'salty', 'smoked', 'strawberry', 'sugar', 'sweet']

function generateDessert({keyword = ''} = {}) {
    const newDessert = keyword ? desserts.filter(dessert => dessert.includes(keyword)) : desserts;
    const dessertIndex = utils.getRandomIndex(newDessert);
    return newDessert[dessertIndex];
}

function generateYummyDessert() {
    const dessertIndex = utils.getRandomIndex(desserts);
    const adjectiveIndex = utils.getRandomIndex(adjectives);
    return `${adjectives[adjectiveIndex]} ${desserts[dessertIndex]}`;
}

exports.generateDessert = generateDessert;
exports.generateYummyDessert = generateYummyDessert;