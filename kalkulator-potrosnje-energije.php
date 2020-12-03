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

                        <div class="col-lg-6 kpeform-field-left kpeform-field"><div class="inner-kpeform-field">
                            <label>Tjelesna masa (kg)</label><br>
                            <input class="input-range" type="range" id="masaRange" name="points" min="10" max="200" value="70" oninput="masaRange()"><input class="spin-button" type="number" id="masaNumber" min="10" max="200" value="70" oninput="masaNumber()">
                        </div></div>

                        <div class="col-lg-6 kpeform-field-right kpeform-field"><div class="inner-kpeform-field">
                            <label>Koliko kcal potrošiti</label><br>
                            <input class="input-range" type="range" id="kcalRange" name="points" min="0" max="2000" value="300" oninput="kcalRange()"><input class="spin-button" type="number" id="kcalNumber" min="0" max="2000" value="300" oninput="kcalNumber()">
                        </div></div>

                        <div class="col-lg-6 kpeform-field-left kpeform-field"><div class="inner-kpeform-field">
                            <label>Vrijeme u minutama</label><br>
                            <input class="input-range" type="range" id="vrijemeRange" name="points" min="0" max="1440" value="20" oninput="vrijemeRange()"><input class="spin-button" type="number" id="vrijemeNumber" min="0" max="1440" value="20" oninput="vrijemeNumber()">
                        </div></div>

                        <div class="col-lg-6 kpeform-field-right kpeform-field"><div class="inner-kpeform-field">
                            <label>Aktivnost</label><br>
                            <select class="select-search" id="aktivnostValue" name="aktivnost">' .
                                $optionValues .
                            '</select>
                        </div></div>

                        <button class="kpebtn" onclick="izracunaj(event)">Pokreni!</button>

                    </div>

                    <div class="rezultatkpe" id="rezultatkpe">
                    </div>
                </div>
                <div class="alert alert-info" role="alert">
                    Radna verzija
                </div>
            </div>';

    return $bmi;
}
add_shortcode('kalkulator_potrosnje_energije', 'kalkulator_potrosnje_energije_form');

/* Include script */
if ( strpos($_SERVER['REQUEST_URI'], 'kalkulator-potrosnje-energije-tjelesnom-aktivnoscu') !== false ) {

    function add_select2_script() {
        wp_enqueue_script( 'select2', plugin_dir_url( __FILE__ ) . 'select2.min.js' );
    }
    add_action('wp_enqueue_scripts','add_select2_script');

    function add_script() {
        wp_enqueue_script( 'script', plugin_dir_url( __FILE__ ) . 'script.js' );
    }
    add_action('wp_enqueue_scripts','add_script');

}
?>