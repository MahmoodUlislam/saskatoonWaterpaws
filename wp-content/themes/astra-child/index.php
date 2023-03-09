<?php get_headers(); ?>

<section class="page-content">
    <div class="grid-container">
        <div class="grid-x">
            <div class="cell">
                <?php if (have_posts()) : ?>
                <?php while (have_posts()) : the_post(); ?>
                <?php the_content(); ?>
                <?php endwhile; ?>
            </div>
        </div>
    </div>
</section>
<?php get_footers(); ?>