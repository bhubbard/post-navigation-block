
  /**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { 
	useBlockProps, 
	InspectorControls, 
	PanelColorSettings 
} from '@wordpress/block-editor';

/**
 * WordPress components
 */
import { 
	PanelBody, 
	RangeControl, 
	Notice 
} from '@wordpress/components';

/**
 * React hooks
 */
import { useState, useEffect } from '@wordpress/element';

/**
 * WordPress data
 */
import { useSelect } from '@wordpress/data';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes, context }) {
	const { textColor, overlayOpacity, cardHeight } = attributes;
	
	const [isInPostEditor, setIsInPostEditor] = useState(false);
	
	// Check if we're in a post editor context
	const { postType, postId } = useSelect((select) => {
		const { getCurrentPostType, getCurrentPostId } = select('core/editor') || {};
		return {
			postType: getCurrentPostType ? getCurrentPostType() : null,
			postId: getCurrentPostId ? getCurrentPostId() : null,
		};
	}, []);
	
	useEffect(() => {
		setIsInPostEditor(postType === 'post' && postId);
	}, [postType, postId]);

	const blockProps = useBlockProps({
		style: {
			'--text-color': textColor,
			'--overlay-opacity': overlayOpacity,
			'--card-height': `${cardHeight}px`,
		},
	});

	// Mock data for preview
	const mockPrevious = {
		title: __('Previous Post Title', 'post-navigation-block-wp'),
		image: 'https://via.placeholder.com/400x200/4a90e2/ffffff?text=Previous+Post',
		url: '#'
	};
	
	const mockNext = {
		title: __('Next Post Title', 'post-navigation-block-wp'),
		image: 'https://via.placeholder.com/400x200/7b68ee/ffffff?text=Next+Post',
		url: '#'
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Appearance Settings', 'post-navigation-block-wp')}>
					<PanelColorSettings
						title={__('Colors', 'post-navigation-block-wp')}
						colorSettings={[
							{
								value: textColor,
								onChange: (color) => setAttributes({ textColor: color || '#ffffff' }),
								label: __('Text Color', 'post-navigation-block-wp'),
							},
						]}
					/>
					<RangeControl
						label={__('Overlay Opacity', 'post-navigation-block-wp')}
						value={overlayOpacity}
						onChange={(value) => setAttributes({ overlayOpacity: value })}
						min={0}
						max={1}
						step={0.1}
					/>
					<RangeControl
						label={__('Card Height (px)', 'post-navigation-block-wp')}
						value={cardHeight}
						onChange={(value) => setAttributes({ cardHeight: value })}
						min={150}
						max={400}
						step={10}
					/>
				</PanelBody>
			</InspectorControls>
			
			<div {...blockProps}>
				{!isInPostEditor && (
					<Notice status="info" isDismissible={false}>
						{__('This block will display post navigation when added to a post. Preview shown below with placeholder content.', 'post-navigation-block-wp')}
					</Notice>
				)}
				
				<div className="wp-block-telex-post-navigation__container">
					<div className="wp-block-telex-post-navigation__grid">
						<div className="wp-block-telex-post-navigation__card wp-block-telex-post-navigation__previous">
							<div 
								className="wp-block-telex-post-navigation__card-bg"
								style={{ backgroundImage: `url(${mockPrevious.image})` }}
							>
								<div className="wp-block-telex-post-navigation__overlay">
									<div className="wp-block-telex-post-navigation__content">
										<span className="wp-block-telex-post-navigation__label">
											{__('← Previous', 'post-navigation-block-wp')}
										</span>
										<h3 className="wp-block-telex-post-navigation__title">
											{mockPrevious.title}
										</h3>
									</div>
								</div>
							</div>
						</div>
						
						<div className="wp-block-telex-post-navigation__card wp-block-telex-post-navigation__next">
							<div 
								className="wp-block-telex-post-navigation__card-bg"
								style={{ backgroundImage: `url(${mockNext.image})` }}
							>
								<div className="wp-block-telex-post-navigation__overlay">
									<div className="wp-block-telex-post-navigation__content">
										<span className="wp-block-telex-post-navigation__label">
											{__('Next →', 'post-navigation-block-wp')}
										</span>
										<h3 className="wp-block-telex-post-navigation__title">
											{mockNext.title}
										</h3>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
	