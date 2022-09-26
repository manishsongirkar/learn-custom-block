/**
 * WordPress dependencies
 *
 * @package Learn_Custom_Block
 */

import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps } from '@wordpress/block-editor';

const Save = ( props ) => {

	const {
		attributes: { title, mediaURL, description },
	} = props;

	const blockProps = useBlockProps.save( {
		className: 'primary-card'
	} );

	return (
		<div { ...blockProps }>
			<div className="row">
				<div className="column">
					{ mediaURL && (
						<img
							className="card-image"
							src={ mediaURL }
							alt={ __( 'Image', 'gutenberg-examples' ) }
						/>
					) }
				</div>
				<div className="column">
					<RichText.Content tagName="h4" className="card-title" value={ title } />
					<RichText.Content tagName="div" className="card-description" value={ description } />
				</div>
			</div>
		</div>
	);
};

export default Save;
