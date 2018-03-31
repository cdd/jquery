define( [
	"../var/document"
], function( document ) {
	"use strict";

	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval( code, doc, node, nonce ) {
		doc = doc || document;

		var i,
			script = doc.createElement( "script" );

		if ( nonce && nonce !== "" ) {
      script.setAttribute( "data-nonce", nonce );
			script.setAttribute( "nonce", nonce );
		}

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				if ( node[ i ] ) {
					script[ i ] = node[ i ];
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}

	return DOMEval;
} );
