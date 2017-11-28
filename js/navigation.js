/**
  * Navigation Functions
**/

(function( $ ) {

	// init
	var siteHeader = $( '#masthead' );
	var menuToggle = siteHeader.find( '.menu-toggle' );
	var primaryMenu = $( '#primary-menu' );

	var dropdownMenus = primaryMenu.find( '.sub-menu' );
	var dropdowns = primaryMenu.find( '.menu-item-has-children > a, .page_item_has_children > a' );

	// Menu Item animation CSS
	(function() {
		if ( ! primaryMenu.length || ! primaryMenu.children().length ) {
			return;
		}

		// loop
		primaryMenu.find( '> li' ).each( function( index ) {
			var delay = parseFloat( (index + 1)*0.0215 );
			$( this ).css({
				'animation-delay': delay + 's'
			});
		});
	})();

	// Toggle Menu/Navigation
	(function() {
		if ( ! menuToggle.length || ! primaryMenu.length || ! primaryMenu.children().length ) {
			return;
		}

		// init
		primaryMenu.attr( 'aria-expanded', 'false' );

		// toggle fn
		var togglePrimaryMenuFn = function() {
			var navContainer = $( this ).parent();

			navContainer.toggleClass( 'open' );
			$( this ).add( primaryMenu ).attr( 'aria-expanded', navContainer.hasClass( 'open' ) );
		};

		// click handle
		menuToggle.on( 'click', togglePrimaryMenuFn );
	})();

	// Dropdown Toggle
	(function() {
		if ( ! primaryMenu.length || ! primaryMenu.children().length || ! dropdowns.length ) {
			return;
		}

		// init
		dropdownMenus.attr( 'aria-expanded', 'false' );
		var dropdownToggle = $( '<button />', { 'class': 'dropdown-toggle', 'aria-expanded': false } )
			.append( $( '<span />', { 'class': 'screen-reader-text', text: 'Toggle child menu' } ) )
			.append( $( '<span />', { 'class': 'angle-down' } ) );
		dropdowns.after( dropdownToggle );

		// toggle fn
		var toggleSubmenuFn = function() {
			var submenu = $( this ).siblings( '.sub-menu' );

			$( this ).add( submenu ).toggleClass( 'open' );
			$( this ).add( submenu ).attr( 'aria-expanded', $( this ).hasClass( 'open' ) );
			submenu.slideToggle();
		};

		var dropdownToggles = primaryMenu.find( '.dropdown-toggle' );

		// click handle
		dropdownToggles.on( 'click', toggleSubmenuFn );
	})();

})( jQuery );
