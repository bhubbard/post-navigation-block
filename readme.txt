
=== Post Navigation ===

Contributors:      WordPress Telex
Tags:              block, navigation, posts, featured-images, responsive
Tested up to:      6.8
Stable tag:        0.1.0
License:           GPLv2 or later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html
A dynamic post navigation block with featured images and customizable styling options.

== Description ==

The Post Navigation block creates an elegant way for visitors to navigate between your posts. It displays previous and next post links as visually appealing cards with featured images as backgrounds and post titles overlaid as clickable text.

**Key Features:**

* **Visual Navigation**: Shows adjacent posts with their featured images as card backgrounds
* **Responsive Design**: Adapts beautifully to all screen sizes and devices
* **Customizable Styling**: Control text color, overlay opacity, and card dimensions
* **Smart Layout**: Automatically centers single cards when only one adjacent post exists
* **Hover Effects**: Engaging interactions that enhance user experience
* **Fallback Support**: Graceful handling when posts don't have featured images
* **Editor Preview**: Shows layout preview in the editor with placeholder content

**Perfect For:**

* Blog posts and articles
* News websites
* Portfolio sites
* Any content site wanting to improve post-to-post navigation

The block automatically detects the current post context and fetches adjacent posts, making it plug-and-play for any post content area.

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/post-navigation` directory, or install the plugin through the WordPress plugins screen directly.
1. Activate the plugin through the 'Plugins' screen in WordPress
1. Add the "Post Navigation" block to any post or page content
1. Customize the appearance using the block settings in the editor sidebar

== Frequently Asked Questions ==

= Does this work with custom post types? =

Yes! The block automatically works with any public post type that supports navigation between posts.

= What happens if a post doesn't have a featured image? =

The block includes fallback styling with a subtle background color and proper typography to ensure the navigation remains functional and attractive.

= Can I customize the appearance? =

Absolutely! The block includes options to customize text color, overlay opacity, and card dimensions through the block settings panel.

= Is it mobile responsive? =

Yes, the block is fully responsive and adapts to different screen sizes, stacking cards vertically on smaller devices.

= Will it work in page builders? =

The block works anywhere the WordPress block editor is used, including page builders that support Gutenberg blocks.

== Screenshots ==

1. Post navigation block showing previous and next posts with featured images
2. Block settings panel with customization options
3. Mobile responsive layout showing stacked navigation cards
4. Editor preview with placeholder content

== Changelog ==

= 0.1.0 =
* Initial release with full post navigation functionality
* Featured image backgrounds with title overlays
* Customizable styling options
* Responsive design implementation
* Editor preview functionality

== Technical Notes ==

The block uses WordPress's built-in post navigation functions to ensure compatibility and performance. It leverages modern CSS features like CSS Grid and Flexbox for optimal layout control while maintaining broad browser support.
