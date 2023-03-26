<?php
/*
Template Name: Services Page
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
        while (have_posts()) : the_post();

            // Include the page content template.
            get_template_part('template-parts/content', 'page');

            // If comments are open or we have at least one comment, load up the comment template.
            if (comments_open() || get_comments_number()) :
                comments_template();
            endif;

        // End the loop.
        endwhile;
        ?>
    </div><!-- .container -->
    <!-- make a demo service page -->
    <div class="grid-container">
        <div class="grid-x">
            <div class="cell">
                <h2>Our Services</h2>
                <p>Our services include the following:</p>
                <ul>
                    <li>Service 1</li>
                    <li>Service 2</li>
                    <li>Service 3</li>
                    <li>Service 4</li>
                    <li>Service 5</li>
                </ul>
            </div>
        </div>
    </div>

</main><!-- #main -->

<?php get_footer(); ?>