const desserts = ['apple crumble', 'cempedak creme', 'cempedak fritters', 'cekodok','cendol','ais kacang','eclair','chocolate','cake','tart', 'muffin', 'brownies', 'cupcake', 'frgál', 'kremrole', 'větrník', 'buchty', 'krapfen', 'kek lapis']
const adjectives = ['bbq', 'berrylicious', 'butterscotch', 'caramel', 'cheesy', 'chocolate', 'salted egg', 'salty', 'smoked', 'strawberry', 'sugar', 'sweet']

function generateDessert() {
    let randomIndex = Math.floor(Math.random() * (desserts.length - 1))
    return desserts[randomIndex]
}

function generateYummyDessert() {
    let randomIndex = Math.floor(Math.random() * (desserts.length - 1))
    let adjectiveIndex = Math.floor(Math.random() * (adjectives.length - 1))
    return `${adjectives[adjectiveIndex]} ${desserts[randomIndex]}`
}

exports.generateDessert = generateDessert
exports.generateYummyDessert = generateYummyDessert
