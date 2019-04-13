<?php

/**
 * Plugin Name: JHDC Wordpress Gist
 * Author: Jimmy Howe
 * Version: 1.0.0
 */

function jhdc_wordpress_gist_load_plugin() {
	wp_enqueue_script( 'jhdc-wordpress-gist-touch-me', plugin_dir_url( __FILE__ ) . 'jhdc-wordpress-gist.js',
		[ 'wp-blocks', 'wp-i18n', 'wp-editor' ] );
}

add_action( 'enqueue_block_editor_assets', 'jhdc_wordpress_gist_load_plugin' );