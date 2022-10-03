/**
 * Primary Card Inner Block.
 *
 * @package Learn_Custom_Block
 */

/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import metadata from './block.json';

import Edit from './edit';
import Save from './save';

import './style.scss';

// Register the block.
registerBlockType(
	metadata.name,
	{
		/**
		 * Edit Method.
		 *
		 * @see ./edit.js
		 */
		edit: Edit,

		/**
		 * Save Method.
		 *
		 * @see ./save.js
		 */
		save: Save,
	}
);
