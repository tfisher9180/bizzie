<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Bizzie
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'bizzie' ); ?></a>

	<header id="masthead" class="site-header">
			<div class="navbar">
				<div class="container">
					<div class="flex-container">
						<div class="site-branding">
							<?php if ( has_custom_logo() ) : the_custom_logo(); else: ?>
								<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
							<?php endif; ?>
						</div>
						<nav class="site-navigation">
							<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
								<span class="screen-reader-text"><?php esc_html_e( 'Primary Menu', 'bizzie' ); ?></span>
								<span class="icon"></span>
							</button>
							<?php
								wp_nav_menu( array(
									'theme_location' => 'primary-menu',
									'menu_id'        => 'primary-menu',
									'menu_class'		 => 'menu',
									'container'			 => 'false',
								) );
							?>
						</nav>
					</div><!-- .flex-container -->
			</div><!-- .container -->
		</div><!-- .navbar -->
	</header><!-- #masthead -->

	<div id="content" class="site-content">
