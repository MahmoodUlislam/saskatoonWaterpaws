<?php

/**
 * Template Name: Pool Services Page
 *
 * This is the template file for the Pool Services page.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Astra Child Theme
 */

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
        <!-- make a layout for about page -->
        <div class="grid-container">
            <div class="grid-x">
                <div class="cell">
                    <h2>Our Mission</h2>
                    <p>Our mission is to provide the best possible service
                        to our customers. We are committed to providing
                        quality products and services at competitive prices.
                        We are dedicated to providing a safe and healthy
                        work environment for our employees. We are committed
                        to the highest standards of integrity and ethical
                        conduct in all of our business dealings.</p>
                </div>
            </div>
            <div class="grid-x">
                <div class="cell">
                    <h2>Our Vision</h2>
                    <p>Our vision is to be the best in the industry. We
                        will achieve this by providing the best possible
                        service to our customers. We will achieve this by
                        providing quality products and services at
                        competitive prices. We will achieve this by
                        providing a safe and healthy work environment for
                        our employees. We will achieve this by providing the
                        highest standards of integrity and ethical conduct
                        in all of our business dealings.</p>
                </div>
            </div>
            <div class="grid-x">
                <div class="cell">
                    <h2>Our Values</h2>
                    <p>Our values are the foundation of our company. We
                        are committed to providing the best possible service
                        to our customers. We are committed to providing
                        quality products and services at competitive prices.
                        We are dedicated to providing a safe and healthy
                        work environment for our employees. We are committed
                        to the highest standards of integrity and ethical
                        conduct in all of our business dealings.</p>
                </div>
            </div>
        </div>


        <?php endwhile; // End of the loop. 
        ?>

    </main><!-- #main -->
</div><!-- #primary -->

<?php
get_footer();