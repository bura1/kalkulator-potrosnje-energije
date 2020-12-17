(function() {
    // select2 search
    jQuery(function($) {
        $(document).ready(function() {
            $('.select-search').select2({
                searchInputPlaceholder: 'Upišite pojam ...',
                placeholder: 'odaberite aktivnost'
            });
        });

        // disable auto-focus on select2 search input
        $(document).ready(function(){
            $('select').on('select2:open', function() {
                $('.select2-search input').prop('focus', 0);
            });
        });

        // max vrijeme input number
        $('.vrijemeNumberClass').on('keyup keydown change', function(e){
            if ($(this).val() > 240 && e.keyCode !== 46 && e.keyCode !== 8) {
               e.preventDefault();     
               $(this).val(240);
            }
        });

        // max masa input number
        $('.masaNumberClass').on('keyup keydown change', function(e){
            if ($(this).val() > 200 && e.keyCode !== 46 && e.keyCode !== 8) {
               e.preventDefault();     
               $(this).val(200);
            }
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

    var vrijeme = document.getElementById('vrijemeRange').value;
    var aktivnost = document.getElementById('aktivnostValue');
    var rezultatKcal = izracunajPotrosnjuKcal(rangeValue, vrijeme, aktivnost.value);
    var kcalSlider = document.getElementById('kcalRange');
    var kcalSliderNum = document.getElementById('kcalNumber');
    kcalSlider.max = (240 * aktivnost.value * rangeValue) / 60;
    kcalSliderNum.max = (240 * aktivnost.value * rangeValue) / 60;
    kcalSlider.value = rezultatKcal;
    kcalSliderNum.value = rezultatKcal;

    kalkulator();
}
function masaNumber() {
    var numberValue = document.getElementById('masaNumber').value;
    document.getElementById('masaRange').value = numberValue;

    var vrijeme = document.getElementById('vrijemeRange').value;
    var aktivnost = document.getElementById('aktivnostValue');
    var rezultatKcal = izracunajPotrosnjuKcal(numberValue, vrijeme, aktivnost.value);
    var kcalSlider = document.getElementById('kcalRange');
    var kcalSliderNum = document.getElementById('kcalNumber');
    kcalSlider.max = (240 * aktivnost.value * numberValue) / 60;
    kcalSliderNum.max = (240 * aktivnost.value * numberValue) / 60;
    kcalSlider.value = rezultatKcal;
    kcalSliderNum.value = rezultatKcal;

    kalkulator();
}

/* vrijeme */
function vrijemeRange() {
    var rangeValue = document.getElementById('vrijemeRange').value;
    document.getElementById('vrijemeNumber').value = rangeValue;

    if (rangeValue > 0 && document.getElementById('aktivnostValue').value) {
        document.getElementById('rezultatkpe').style.display = "block";
    } else {
        document.getElementById('rezultatkpe').style.display = "none";
        document.getElementById('rezultatnamirnice').style.display = "none";
    }

    var masa = document.getElementById('masaRange').value;
    var aktivnost = document.getElementById('aktivnostValue');
    var rezultatKcal = izracunajPotrosnjuKcal(masa, rangeValue, aktivnost.value);
    var kcalSlider = document.getElementById('kcalRange');
    var kcalSliderNum = document.getElementById('kcalNumber');
    kcalSlider.max = (240 * aktivnost.value * masa) / 60;
    kcalSliderNum.max = (240 * aktivnost.value * masa) / 60;
    kcalSlider.value = rezultatKcal;
    kcalSliderNum.value = rezultatKcal;

    kalkulator();
}

function vrijemeNumber() {
    var numberValue = document.getElementById('vrijemeNumber').value;
    document.getElementById('vrijemeRange').value = numberValue;

    if (numberValue > 0  && document.getElementById('aktivnostValue').value) {
        document.getElementById('rezultatkpe').style.display = "block";
    } else {
        document.getElementById('rezultatkpe').style.display = "none";
        document.getElementById('rezultatnamirnice').style.display = "none";
    }

    var masa = document.getElementById('masaRange').value;
    var aktivnost = document.getElementById('aktivnostValue');
    var rezultatKcal = izracunajPotrosnjuKcal(masa, numberValue, aktivnost.value);
    var kcalSlider = document.getElementById('kcalRange');
    var kcalSliderNum = document.getElementById('kcalNumber');
    kcalSlider.max = (240 * aktivnost.value * masa) / 60;
    kcalSliderNum.max = (240 * aktivnost.value * masa) / 60;
    kcalSlider.value = rezultatKcal;
    kcalSliderNum.value = rezultatKcal;

    kalkulator();
}

/* kcal */
function kcalRange() {
    var rangeValue = document.getElementById('kcalRange').value;
    document.getElementById('kcalNumber').value = rangeValue;

    var masa = document.getElementById('masaRange').value;
    var aktivnost = document.getElementById('aktivnostValue');
    var rezultatVrijeme = izracunajVrijeme(masa, rangeValue, aktivnost.value);
    var vrijemeSlider = document.getElementById('vrijemeRange');
    var vrijemeSliderNum = document.getElementById('vrijemeNumber');
    var kcalSlider = document.getElementById('kcalRange');
    var kcalSliderNum = document.getElementById('kcalNumber');
    kcalSlider.max = (240 * aktivnost.value * masa) / 60;
    kcalSliderNum.max = (240 * aktivnost.value * masa) / 60;
    vrijemeSlider.value = rezultatVrijeme;
    vrijemeSliderNum.value = rezultatVrijeme;

    if (vrijemeSliderNum.value > 0 && document.getElementById('aktivnostValue').value) {
        document.getElementById('rezultatkpe').style.display = "block";
    } else {
        document.getElementById('rezultatkpe').style.display = "none";
        document.getElementById('rezultatnamirnice').style.display = "none";
    }

    kalkulator();
}

function kcalNumber() {
    var numberValue = document.getElementById('kcalNumber').value;
    document.getElementById('kcalRange').value = numberValue;

    var masa = document.getElementById('masaRange').value;
    var aktivnost = document.getElementById('aktivnostValue');
    var rezultatVrijeme = izracunajVrijeme(masa, numberValue, aktivnost.value);
    var vrijemeSlider = document.getElementById('vrijemeRange');
    var vrijemeSliderNum = document.getElementById('vrijemeNumber');
    var kcalSlider = document.getElementById('kcalRange');
    var kcalSliderNum = document.getElementById('kcalNumber');
    kcalSlider.max = (240 * aktivnost.value * masa) / 60;
    kcalSliderNum.max = (240 * aktivnost.value * masa) / 60;
    vrijemeSlider.value = rezultatVrijeme;
    vrijemeSliderNum.value = rezultatVrijeme;

    if (vrijemeSliderNum.value > 0 && document.getElementById('aktivnostValue').value) {
        document.getElementById('rezultatkpe').style.display = "block";
    } else {
        document.getElementById('rezultatkpe').style.display = "none";
        document.getElementById('rezultatnamirnice').style.display = "none";
    }

    kalkulator();
}

/* Aktivnost onChange */
function aktivnostOnChange() {
    document.getElementById("vrijemeRange").disabled = false;
    document.getElementById("vrijemeNumber").disabled = false;
    document.getElementById("kcalRange").disabled = false;
    document.getElementById("kcalNumber").disabled = false;

    if (document.getElementById('vrijemeRange').value > 0) {
        //document.getElementById("kpeCalcButton").disabled = false;
    }

    if (document.getElementById('vrijemeRange').value > 0) {
        //document.getElementById("kpeCalcButton").disabled = false;
        document.getElementById('rezultatkpe').style.display = "block";
    }

    kalkulator();
}

function kalkulator() {
    var masa = document.getElementById('masaRange').value;
    var vrijeme = document.getElementById('vrijemeNumber').value;
    var aktivnost = document.getElementById('aktivnostValue');
    var aktivnostTekst = aktivnost.options[aktivnost.selectedIndex].text;
    var rezultat = document.getElementById('rezultatkpe');
    var rezultatnamirnice = document.getElementById('rezultatnamirnice');

    if (aktivnost.value && vrijeme != 0) {
        var rezultatKcal = izracunajPotrosnjuKcal(masa, vrijeme, aktivnost.value);

        var namirnice = izracunajNamirnice(rezultatKcal);
        var zakljucak1 = "Za " + vrijeme + " minuta aktivnosti <i>" + aktivnostTekst + "</i> potrošili biste " + rezultatKcal + " kcal.";
        rezultat.innerHTML = zakljucak1;

        if (namirnice.length != 0) {
            var namirniceString = "<br><table><tr><th>Proizvod (100g)</th><th>kcal</th></tr>";
            namirnice.forEach(element => 
                namirniceString += "<tr><td>"+element[0]+"</td><td>"+element[1]+"</td></tr>"
            );
            namirniceString += "</table>";
            rezultatnamirnice.style.display = "block";
            rezultatnamirnice.innerHTML = namirniceString;
        } else {
            rezultatnamirnice.style.display = "none";
        }
    }
    
}

function izracunajVrijeme(masa, kcal, aktivnost) {
    // min = 60 x kcal / (MET x kg)
    var result = 60 * kcal / (aktivnost * masa);
    console.log(result);
    return Math.round(result * 10) / 10;
}

function izracunajPotrosnjuKcal(masa, vrijeme, aktivnost) {
    // kcal = (min * MET * kg) / 60
    var result = (vrijeme * aktivnost * masa) / 60;
    //console.log(vrijeme + " * " + aktivnost + " * " + masa + " / " + 60 + " = " + result);
    return Math.round(result * 10) / 10;
}

function izracunajNamirnice(kcal) {
    var namirniceFiltrirane = popisNamirnica.filter(function(e) {
        return (e[1] > kcal-30) && (e[1] < kcal+30);
    });
    
    /*if (namirniceFiltrirane.length == 0) {
        var offset = 30;
        while(namirniceFiltrirane.length == 0 && offset < 51) {
            console.log(offset);
            var namirniceFiltrirane = popisNamirnica.filter(function(e) {
                return (e[1] > kcal-offset) && (e[1] < kcal+offset);
            });
            offset += 10;
        }
    }*/
    return namirniceFiltrirane;
}