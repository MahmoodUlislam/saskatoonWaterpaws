<?php
/*
*Template Name: Grooming Services
* This is the template file for the Service page.
*
* @link https://developer.wordpress.org/themes/basics/template-hierarchy/
*
* @package Astra Child Theme
*/
get_header(); ?>

<main id="main" class="site-main">
    <div class="container">
        <?php
        // Start the loop.
        while (have_posts()) :
            the_post();
        ?>

            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <header class="entry-header">
                    <h1 class="entry-title"><?php the_title(); ?></h1>
                </header>

                <div class="entry-content">
                    <?php the_content(); ?>
                </div>

            </article><!-- #post-## -->

        <?php endwhile; // End the loop. 
        ?>

    </div><!-- .container -->

    <main>
        <!-- #main -->

        <?php get_footer(); ?>