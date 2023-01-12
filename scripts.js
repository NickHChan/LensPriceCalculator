function calculateTotal() {
    let lenses = Number(document.querySelector('#Lenses').value);
    let coatings = Number(document.querySelector('#Coatings').value);
    let etc = Number(document.querySelector('#Etc').value);
    let frame = Number(document.querySelector('#Frame').value);
    let fullTotal = lenses + coatings + etc + frame;
    document.getElementById('total').value = fullTotal;
}