<?php
/**
 * Plugin Name:       Post Navigation
 * Description:       A dynamic post navigation block with featured images and customizable styling options.
 * Version:           0.1.0
 * Requires at least: 6.1
 * Requires PHP:      7.4
 * Author:            WordPress Telex
 * License:           GPLv2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       post-navigation-block-wp
 *
 * @package PostNavigation
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function telex_post_navigation_block_init() {
	register_block_type( __DIR__ . '/build/' );
}
add_action( 'init', 'telex_post_navigation_block_init' );

/**
 * Get adjacent post data for the block
 *
 * @param bool $previous Whether to get previous post (true) or next post (false)
 * @return array|null Post data or null if no adjacent post
 */
function telex_get_adjacent_post_data( $previous = true ) {
	$adjacent_post = get_adjacent_post( false, '', $previous );
	
	if ( ! $adjacent_post ) {
		return null;
	}
	
	$featured_image_url = get_the_post_thumbnail_url( $adjacent_post->ID, 'large' );
	
	return array(
		'id'           => $adjacent_post->ID,
		'title'        => get_the_title( $adjacent_post->ID ),
		'permalink'    => get_permalink( $adjacent_post->ID ),
		'featured_image' => $featured_image_url ?: '',
		'date'         => get_the_date( '', $adjacent_post->ID ),
	);
}
