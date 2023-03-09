<?php
/*
Template Name: Gallery Page
* This is the template file for the Gallery page.
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
            get_template_part('template-parts/gallery', 'page');

            // If comments are open or we have at least one comment, load up the comment template.
            if (comments_open() || get_comments_number()) :
                comments_template();
            endif;

        // End the loop.
        endwhile;
        ?>
    </div><!-- .container -->
    <!-- make a demo gallery page -->
    <div class="grid-container">
        <div class="grid-x">
            <div class="cell">
                <h2>Our Gallery</h2>
                <p>Our gallery includes the following:</p>
                <ul>
                    <li>
                        <img width="200px" height="150px" src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Programming_code.jpg" alt="">
                    </li>
                    <li>
                        <img width="200px" height="150px" src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Programming_code.jpg" alt="">
                    </li>
                    <li>
                        <img width="200px" height="150px" src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Programming_code.jpg" alt="">
                    </li>
                    <li>
                        <img width="200px" height="150px" src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Programming_code.jpg" alt="">
                    </li>
                </ul>
            </div>
        </div>
    </div>


</main><!-- #main -->

<?php get_footer(); ?>