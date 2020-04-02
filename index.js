const desserts = ['cempedak creme', 'cempedak fritters', 'cekodok','cendol','ais kacang','eclair','chocolate','cake','tart', 'muffin', 'brownies', 'cupcake', 'frgál', 'kremrole', 'větrník', 'buchty', 'krapfen']
const adjectives = ['salty', 'cheesy', 'chocolate', 'caramel', 'butterscotch', 'bbq', 'smoked', 'sweet', 'sugar', 'strawberry', 'berrylicious']

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