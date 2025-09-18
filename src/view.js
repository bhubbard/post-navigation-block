
  /**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

document.addEventListener('DOMContentLoaded', function() {
	// Add keyboard navigation support
	const navigationCards = document.querySelectorAll('.wp-block-telex-post-navigation__card a');
	
	navigationCards.forEach(card => {
		// Handle keyboard navigation
		card.addEventListener('keydown', function(e) {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				this.click();
			}
		});
		
		// Add ARIA labels for better accessibility
		const cardElement = card.closest('.wp-block-telex-post-navigation__card');
		const titleElement = cardElement.querySelector('.wp-block-telex-post-navigation__title');
		const labelElement = cardElement.querySelector('.wp-block-telex-post-navigation__label');
		
		if (titleElement && labelElement) {
			card.setAttribute('aria-label', labelElement.textContent + ': ' + titleElement.textContent);
		}
	});
	
	// Preload images on hover for better performance
	const cardBackgrounds = document.querySelectorAll('.wp-block-telex-post-navigation__card-bg');
	cardBackgrounds.forEach(bg => {
		const card = bg.closest('.wp-block-telex-post-navigation__card');
		card.addEventListener('mouseenter', function() {
			const bgImage = window.getComputedStyle(bg).backgroundImage;
			if (bgImage && bgImage !== 'none') {
				// Image is already loaded as background
				return;
			}
		});
	});
});
	