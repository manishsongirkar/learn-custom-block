/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

import './editor.scss';

const ALLOWED_BLOCKS = [
	'core/columns',
	'core/column',
	'core/image',
	'core/heading',
	'core/paragraph',
	'core/buttons'
];

const TEMPLATE = [
	[
		'core/columns',
		{},
		[
			[
				'core/column',
				{},
				[
					[
						'core/image',
						{}
					],
				]
			],
			[
				'core/column',
				{},
				[
					[
						'core/heading',
						{ level: 3, placeholder: __( 'Heading here', 'learn-custom-block' ) }
					],
					[
						'core/list',
						{ ordered: false, placeholder: __( 'List items here', 'learn-custom-block' ) },
					],
					[
						'core/button',
						{ rel: 'bookmark', text: __( 'Read More', 'learn-custom-block' ) }
					]
				]
			],
		]
	]
];

const Edit = () => {

	const blockProps = useBlockProps( { className: 'primary-card-inner-block' } );

	return (
		<div { ...blockProps }>
			<InnerBlocks
				template={ TEMPLATE }
				allowedBlocks={ ALLOWED_BLOCKS }
			/>
		</div>
	);
};

export default Edit;
