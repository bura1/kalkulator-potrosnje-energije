<?php

/*
Plugin Name: Kalkulator potrošnje energije
Description: Prikazuje Kalkulator potrošnje energije tjelesnom aktivnošću. Potrebno zaljepiti shortcode <strong>[kalkulator_potrosnje_energije]</strong> u objavu ili stranicu.
Version: 1.0
Author: TB
*/

/* Include style */
function add_stylesheet_for_plugin() 
{
    wp_enqueue_style( 'style', plugin_dir_url( __FILE__ ) . 'style.css' );
}
add_action('wp_enqueue_scripts', 'add_stylesheet_for_plugin');

function add_select2_stylesheet() 
{
    wp_enqueue_style( 'select2', plugin_dir_url( __FILE__ ) . 'select2.min.css' );
}
add_action('wp_enqueue_scripts', 'add_select2_stylesheet');

/* Function */
function kalkulator_potrosnje_energije_form() {
    include 'met-list.php';

    $js_METs = json_encode($METs);

    $optionValues = '';
    foreach ($METs as $met) {
        $optionValues .= '<option value="'.$met[1].'">'.$met[0].'</option>';
    }
    
    $bmi =  '<div class="kalkulator-potrosnje-energije">
                <div class="alert alert-warning" role="alert">
                    Kalkulator potrošnje energije tjelesnom aktivnošću
                </div>
                <div class="form-box">
                    <div class="kpeform">

                        <div class="col-lg-12 kpeform-field"><div class="inner-kpeform-field">
                            <label>Tjelesna masa (kg)</label><br>
                            <input class="input-range" type="range" id="masaRange" name="points" min="10" max="200" value="70" oninput="masaRange()"><input class="spin-button masaNumberClass" type="number" id="masaNumber" min="10" max="200" value="70" oninput="masaNumber()">
                        </div></div>

                        <div class="col-lg-12 kpeform-field"><div class="inner-kpeform-field">
                            <label>Aktivnost</label><br>
                            <select class="select-search" id="aktivnostValue" name="aktivnost" onchange="aktivnostOnChange()" style="width:100%">
                                <option></option>' .
                                $optionValues .
                            '</select>
                        </div></div>

                        <div class="col-lg-12 kpeform-field"><div class="inner-kpeform-field">
                            <label>Vrijeme u minutama</label><br>
                            <input class="input-range" type="range" id="vrijemeRange" name="points" min="0" max="240" value="0" oninput="vrijemeRange()" disabled><input class="spin-button vrijemeNumberClass" type="number" id="vrijemeNumber" min="0" max="240" value="0" oninput="vrijemeNumber()" disabled>
                        </div></div>

                        <div class="col-lg-12 kpeform-field"><div class="inner-kpeform-field">
                            <label>Potrošnja energije u kcal</label><br>
                            <input class="input-range" type="range" id="kcalRange" name="points" min="0" max="1000" value="0" oninput="kcalRange()" disabled><input class="spin-button kcalNumberClass" type="number" id="kcalNumber" min="0" max="1000" value="0" oninput="kcalNumber()" disabled>
                        </div></div>

                    </div>

                    <div class="rezultatkpe" id="rezultatkpe">
                    </div>

                    <div class="rezultatnamirnice" id="rezultatnamirnice">
                    </div>

                </div>
                <div class="alert alert-info" role="alert">
                    Radna verzija
                </div>
            </div>';

    return $bmi;
}
add_shortcode('kalkulator_potrosnje_energije', 'kalkulator_potrosnje_energije_form');
/* <button class="kpebtn" id="kpeCalcButton" onclick="izracunaj(event)" disabled>Pokreni!</button> */
/* Include script */
if ( strpos($_SERVER['REQUEST_URI'], 'kalkulator-potrosnje-energije-tjelesnom-aktivnoscu') !== false ) {

    function add_select2_script() {
        wp_enqueue_script( 'select2', plugin_dir_url( __FILE__ ) . 'select2.min.js' );
    }
    add_action('wp_enqueue_scripts','add_select2_script');

    function add_popisNamirnica() {
        wp_enqueue_script( 'popisNamirnica', plugin_dir_url( __FILE__ ) . 'popisNamirnica.js' );
    }
    add_action('wp_enqueue_scripts','add_popisNamirnica');

    function add_script() {
        wp_enqueue_script( 'script', plugin_dir_url( __FILE__ ) . 'script.js' );
    }
    add_action('wp_enqueue_scripts','add_script');

}
?>