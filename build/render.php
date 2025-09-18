<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

// Get the current post context
$current_post_id = get_the_ID();
if ( ! $current_post_id ) {
	return '';
}

// Get adjacent posts
$previous_post = telex_get_adjacent_post_data( true );
$next_post = telex_get_adjacent_post_data( false );

// If no adjacent posts, don't render the block
if ( ! $previous_post && ! $next_post ) {
	return '';
}

// Get block attributes with defaults
$text_color = $attributes['textColor'] ?? '#ffffff';
$overlay_opacity = $attributes['overlayOpacity'] ?? 0.7;
$card_height = $attributes['cardHeight'] ?? 200;

// Determine grid class based on available posts
$grid_class = 'wp-block-telex-post-navigation__grid';
if ( ( $previous_post && $next_post ) ) {
	// Both posts available
	$grid_class = 'wp-block-telex-post-navigation__grid';
} else {
	// Only one post available
	$grid_class = 'wp-block-telex-post-navigation__grid wp-block-telex-post-navigation__grid--single';
}

// Prepare inline styles
$inline_styles = sprintf(
	'--text-color: %s; --overlay-opacity: %s; --card-height: %spx;',
	esc_attr( $text_color ),
	esc_attr( $overlay_opacity ),
	esc_attr( $card_height )
);

?>
<div <?php echo get_block_wrapper_attributes( array( 'style' => $inline_styles ) ); ?>>
	<div class="wp-block-telex-post-navigation__container">
		<div class="<?php echo esc_attr( $grid_class ); ?>">
			
			<?php if ( $previous_post ) : ?>
				<div class="wp-block-telex-post-navigation__card wp-block-telex-post-navigation__previous <?php echo empty( $previous_post['featured_image'] ) ? 'wp-block-telex-post-navigation__card--no-image' : ''; ?>">
					<div 
						class="wp-block-telex-post-navigation__card-bg"
						<?php if ( $previous_post['featured_image'] ) : ?>
							style="background-image: url('<?php echo esc_url( $previous_post['featured_image'] ); ?>');"
						<?php endif; ?>
					>
						<div class="wp-block-telex-post-navigation__overlay">
							<div class="wp-block-telex-post-navigation__content">
								<span class="wp-block-telex-post-navigation__label">
									<?php esc_html_e( '← Previous', 'post-navigation-block-wp' ); ?>
								</span>
								<h3 class="wp-block-telex-post-navigation__title">
									<?php echo esc_html( $previous_post['title'] ); ?>
								</h3>
							</div>
						</div>
					</div>
					<a 
						href="<?php echo esc_url( $previous_post['permalink'] ); ?>" 
						aria-label="<?php echo esc_attr( sprintf( __( 'Previous post: %s', 'post-navigation-block-wp' ), $previous_post['title'] ) ); ?>"
					></a>
				</div>
			<?php endif; ?>
			
			<?php if ( $next_post ) : ?>
				<div class="wp-block-telex-post-navigation__card wp-block-telex-post-navigation__next <?php echo empty( $next_post['featured_image'] ) ? 'wp-block-telex-post-navigation__card--no-image' : ''; ?>">
					<div 
						class="wp-block-telex-post-navigation__card-bg"
						<?php if ( $next_post['featured_image'] ) : ?>
							style="background-image: url('<?php echo esc_url( $next_post['featured_image'] ); ?>');"
						<?php endif; ?>
					>
						<div class="wp-block-telex-post-navigation__overlay">
							<div class="wp-block-telex-post-navigation__content">
								<span class="wp-block-telex-post-navigation__label">
									<?php esc_html_e( 'Next →', 'post-navigation-block-wp' ); ?>
								</span>
								<h3 class="wp-block-telex-post-navigation__title">
									<?php echo esc_html( $next_post['title'] ); ?>
								</h3>
							</div>
						</div>
					</div>
					<a 
						href="<?php echo esc_url( $next_post['permalink'] ); ?>" 
						aria-label="<?php echo esc_attr( sprintf( __( 'Next post: %s', 'post-navigation-block-wp' ), $next_post['title'] ) ); ?>"
					></a>
				</div>
			<?php endif; ?>
			
		</div>
	</div>
</div>