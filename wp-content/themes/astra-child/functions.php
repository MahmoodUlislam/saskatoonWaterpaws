<?php
add_action('wp_enqueue_scripts', 'astra_child_enqueue_styles');
function astra_child_enqueue_styles()
{
    wp_enqueue_style('astra-child-style', get_stylesheet_directory_uri() . '/style.css', array('astra-theme-css'), wp_get_theme()->get('Version'));
}
