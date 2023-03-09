<?php
/*
Template Name: Contact-us Page
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
            get_template_part('template-parts/contact-us', 'page');

            // If comments are open or we have at least one comment, load up the comment template.
            if (comments_open() || get_comments_number()) :
                comments_template();
            endif;

        // End the loop.
        endwhile;
        ?>
    </div><!-- .container -->
    <!-- make a demo contact-us page -->

    <div class="grid-container">
        <div class="grid-x">
            <div class="cell">
                <h2>Contact Us</h2>
                <p>Our contact information is as follows:</p>
                <ul>
                    <li>Phone: 555-555-5555</li>
                    <li>Email:
                        <a href="mailto:
                        <?php echo get_option('admin_email'); ?>">
                            <?php echo get_option('admin_email'); ?>
                        </a>
                    </li>
                    <li>Address: 302 Main Street</li>
                </ul>
            </div>
        </div>
    </div>



</main><!-- #main -->

<?php get_footer(); ?>