function calculateTotal() {
    let lenses = Number(document.querySelector('#Lenses').value);
    let coatings = Number(document.querySelector('#Coatings').value);
    let etc = Number(document.querySelector('#Etc').value);
    let fullTotal = lenses + coatings + etc;
    document.getElementById('total').value = fullTotal;
}

let frame = document.getElementById('Frame');
let lens = document.getElementById('Lenses');

frame.addEventListener('change',()=>{
    if(lens.value == 100 && frame.value == 1 ||lens.value == 100 && frame.value == 2) {
        alert('Please Select a Different Index');
    }
});
