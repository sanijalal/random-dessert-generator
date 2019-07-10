const desserts = ['cekodok','cendol','ais kacang','eclair','chocolate','cake','tart', 'muffin', 'brownies', 'cupcake']

function generateDessert() {
    let randomIndex = Math.floor(Math.random() * (desserts.length - 1))
    return desserts[randomIndex]
}

exports.generateDessert = generateDessert