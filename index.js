function newImage (source, x, y) {
    let Image = document.createElement('img')
    Image.src = source
    Image.style.position = 'fixed'
    Image.style.left   = x + 'px'
    Image.style.bottom = y + 'px'
    document.body.append(Image)
    return Image
}

function newItem (source, x, y) {
    let Item = newImage(source, x, y)
    Item.addEventListener('dblclick', function() {
        Item.remove()
    })
    return Item
}

let greenChar = newImage('assets/green-character.gif', 100, 100)
let pineTree = newImage('assets/pine-tree.png', 450, 200)
let tree = newImage('assets/tree.png', 200, 300)
let pillar = newImage('assets/pillar.png', 350, 100)
let crate = newImage('assets/crate.png', 150, 200)
let well = newImage('assets/well.png', 500, 425)
let sword  = newItem('assets/sword.png',  500, 405)
let shield = newItem('assets/shield.png', 165, 185)
let staff  = newItem('assets/staff.png',  600, 100)