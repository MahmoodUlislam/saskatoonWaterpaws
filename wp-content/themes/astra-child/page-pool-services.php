<?php

/**
 * Template Name: Pool Services
 *
 * This is the template file for the Pool Services page.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Astra Child Theme
 */
?>
<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}
get_header(); ?>

<div id="primary" class="content-area">
    <main id="main" class="site-main">

        <?php
        while (have_posts()) :
            the_post();
        ?>

        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <header class="entry-header">
                <?php the_title('<h1 class="entry-title">', '</h1>'); ?>
            </header><!-- .entry-header -->

            <div class="entry-content">
                <?php the_content(); ?>
            </div><!-- .entry-content -->

        </article><!-- #post-<?php the_ID(); ?> -->

        <?php endwhile; // End of the loop. 
        ?>

    </main><!-- #main -->
</div><!-- #primary -->

<?php
get_footer();