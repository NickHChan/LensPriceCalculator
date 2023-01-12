function calculateTotal() {
    let lenses = Number(document.querySelector('#Lenses').value);
    let coatings = Number(document.querySelector('#Coatings').value);
    let etc = Number(document.querySelector('#Etc').value);
    let fullTotal = lenses + coatings + etc;
    document.getElementById('total').value = fullTotal;
}
