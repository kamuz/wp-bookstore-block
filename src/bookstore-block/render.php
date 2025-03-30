<?php

$args = array(
	'post_type'      => 'book',
	'posts_per_page' => -1,
);

$query = new WP_Query( $args );
?>

<?php if ( ! $query->have_posts() ) : ?>
	<ul class="bookstore-block"><li>No books found.</li></ul>
<?php endif; ?>

<ul class="bookstore-block">
<?php while ( $query->have_posts() ) : ?>
	<?php $query->the_post(); ?>
	<li><a href="<?php echo esc_url( get_permalink() ); ?>"><?php echo esc_html( get_the_title() ); ?></a></li>
<?php endwhile; ?>
</ul>

<?php wp_reset_postdata(); ?>