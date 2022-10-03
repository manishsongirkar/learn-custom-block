/**
 * WordPress dependencies
 *
 * @package Learn_Custom_Block
 */

import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = () => {

	const blockProps = useBlockProps.save( { className: 'primary-card-inner-block' } );

	return (
		<div { ...blockProps }>
			<InnerBlocks.Content />
		</div>
	);
};

export default Save;
