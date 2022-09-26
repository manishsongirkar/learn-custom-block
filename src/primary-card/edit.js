/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, MediaUpload, useBlockProps } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

import './editor.scss';

const Edit = ( props ) => {

	const {
		attributes: { title, description, mediaID, mediaURL },
		setAttributes,
	} = props;

	const blockProps = useBlockProps( {
		className: 'primary-card'
	} );

	const onSelectImage = ( media ) => {

		setAttributes( {
			mediaURL: media.url,
			mediaID: media.id,
		} );
	};

	return (
		<div { ...blockProps }>
			<div className="row">
				<div className="column">
					<div className="image">
						<MediaUpload
							onSelect={ onSelectImage }
							allowedTypes="image"
							value={ mediaID }
							render={ ( { open } ) => (
								<Button className={ mediaID ? 'image-button' : 'button button-large' } onClick={ open }>
									{ ! mediaURL ? (
										__( 'Upload Image', 'learn-custom-block' )
									) : (
										<img
											className="card-image"
											src={ mediaURL }
											alt={ __( 'Upload Image', 'learn-custom-block' ) }
											loading="lazy"
											decoding="async"
										/>
									) }
								</Button>
							) }
						/>
					</div>
				</div>
				<div className="column">
					<RichText
						tagName="h4"
						className="card-title"
						placeholder={ __( 'Write title…', 'learn-custom-block' ) }
						value={ title }
						onChange={ ( value ) => { setAttributes( { title: value } ) } }
					/>
					<RichText
						tagName="div"
						multiline="p"
						className="card-description"
						placeholder={ __( 'Write the description…', 'learn-custom-block' ) }
						value={ description }
						onChange={ ( value ) => { setAttributes( { description: value } ) } }
					/>
				</div>
			</div>
		</div>
	);
};

export default Edit;
