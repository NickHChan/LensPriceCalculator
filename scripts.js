function calculateTotal() {
    let lenses = Number(document.querySelector('#Lenses').value);
    let coatings = Number(document.querySelector('#Coatings').value);
    let etc = Number(document.querySelector('#Etc').value);
    let fullTotal = lenses + coatings + etc +105;
    document.getElementById('total').value = fullTotal;
}

let frame = document.getElementById('Frame');
let lens = document.getElementById('Lenses');
let etc = document.getElementById('Etc');

frame.addEventListener('change',()=>{
    if(lens.value == 100 && frame.value == 1 ||lens.value == 100 && frame.value == 2) {
        alert('Please Select a Different Index');
    }
});

etc.addEventListener('change',()=>{
    let selectedEtc = etc.selectedIndex;
    let selectedLens = lens.selectedIndex;
    console.log(selectedEtc);
    if(selectedEtc == 1 && selectedLens == 4) {
        alert(`Index 1.74 cannot have transitions`)
    } else if (selectedEtc == 2 && selectedLens == 4){
            alert(`Index 1.74 cannot be tinted`)
    }   else if (selectedEtc == 3 && selectedLens == 4){
         alert(`Index 1.74 cannot have polarized filter`)
}
})