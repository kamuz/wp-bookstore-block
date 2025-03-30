import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { store as bookStore } from '@wordpress/core-data';

import './editor.scss';

export default function Edit() {
    const books = useSelect(
        select =>
            select( bookStore ).getEntityRecords( 'postType', 'book' ),
        []
    );
    if( !books ) {
        return <div { ...useBlockProps() }></div>
    } else {
        return (
            <ul { ...useBlockProps() }>
                { console.log( books ) }
                { books.map( ( book ) => (
                    <li><a key={ book.id } href="{ books.link }">{book.title.rendered}</a></li>
                )) }
            </ul>
        )
    }
}