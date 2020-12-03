(function() {
    // select2 search
    jQuery(function($) {
        $(document).ready(function() {
            $('.select-search').select2({
                // placeholder
                searchInputPlaceholder: 'Upišite pojam ...'
            });
        });
    });

    // placeholder funkcija za select2 search
    (function($) {
        var Defaults = $.fn.select2.amd.require('select2/defaults');
        $.extend(Defaults.defaults, {
            searchInputPlaceholder: ''
        });
        var SearchDropdown = $.fn.select2.amd.require('select2/dropdown/search');
        var _renderSearchDropdown = SearchDropdown.prototype.render;
        SearchDropdown.prototype.render = function(decorated) {
            var $rendered = _renderSearchDropdown.apply(this, Array.prototype.slice.apply(arguments));
            this.$search.attr('placeholder', this.options.get('searchInputPlaceholder'));
            return $rendered;
        };
    })(window.jQuery);

})();


/* Masa */
function masaRange() {
    var rangeValue = document.getElementById('masaRange').value;
    document.getElementById('masaNumber').value = rangeValue;
}
function masaNumber() {
    var numberValue = document.getElementById('masaNumber').value;
    document.getElementById('masaRange').value = numberValue;
}
/* kcal */
function kcalRange() {
    var rangeValue = document.getElementById('kcalRange').value;
    document.getElementById('kcalNumber').value = rangeValue;
}
function kcalNumber() {
    var numberValue = document.getElementById('kcalNumber').value;
    document.getElementById('kcalRange').value = numberValue;
}

/* vrijeme */
function vrijemeRange() {
    var rangeValue = document.getElementById('vrijemeRange').value;
    document.getElementById('vrijemeNumber').value = rangeValue;
}
function vrijemeNumber() {
    var numberValue = document.getElementById('vrijemeNumber').value;
    document.getElementById('vrijemeRange').value = numberValue;
}


function izracunaj(e) {

    var masa = document.getElementById('masaRange').value;
    var kcal = document.getElementById('kcalRange').value;
    var vrijeme = document.getElementById('vrijemeRange').value;
    var aktivnost = document.getElementById('aktivnostValue');
    var aktivnostTekst = aktivnost.options[aktivnost.selectedIndex].text;
    var rezultat = document.getElementById('rezultatkpe');


    var rezultatVrijeme = izracunajVrijeme(masa, kcal, vrijeme, aktivnost.value);
    var rezultatKcal = izracunajPotrosnjuKcal(masa, kcal, vrijeme, aktivnost.value);
    var zakljucak1 = "Uz aktivnost <b>" + aktivnostTekst + "</b> potrebno je " + rezultatVrijeme + 
        " minuta da bi potrošili " + kcal + " kalorija.";
    var zakljucak2 = "Za " + vrijeme + " minuta aktivnosti <b>" + aktivnostTekst + "</b> potrošili bi " + rezultatKcal + " kalorija.";

    rezultat.style.display = "block";
    rezultat.innerHTML = "Vrijeme: " + rezultatVrijeme + " minuta<br>Potrošnja energije: " + 
        rezultatKcal + " kcal<br><br>" + zakljucak1 + "<br><br>" + zakljucak2;

}

function izracunajVrijeme(masa, kcal, vrijeme, aktivnost) {
    // min = 60 x kcal / (MET x kg)
    var result = 60 * kcal / (aktivnost * masa);
    return Math.round(result * 10) / 10;
}

function izracunajPotrosnjuKcal(masa, kcal, vrijeme, aktivnost) {
    // kcal = (min * MET * kg) / 60
    var result = (vrijeme * aktivnost * masa) / 60; 
    return Math.round(result * 10) / 10;
}