<div class="products__cards">
    <div class="cards__prevButton swiperProducts-button-prev">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 28L0 14L14 0L16.4938 2.45L6.69375 12.25L28 12.25L28 15.75L6.69375 15.75L16.4938 25.55L14 28Z" fill="#1F4D30"/>
        </svg>
    </div>
    <div class="cards__products-cards swiper swiperProducts">
        <div class="cards__card swiper-wrapper">
            <?php $child_categories = get_categories(array(
                    'child_of' => 5,
                    'hide_empty' => 1,
                    'orderby' => 'id',
                    'order' => 'ASC')
            );

            if (!empty($child_categories)) {
                foreach ($child_categories as $category) {
                    $taxonomy_prefix = 'category';
                    $term_id = $category->term_id;
                    $term_id_prefixed = $taxonomy_prefix .'_'. $term_id; ?>
                    <a class="card__product swiper-slide" href="/production/#anchor_<?php echo $category->name; ?>">
                        <div class="product__image">
                            <img class="image__image" src="<?php the_field( 'category-image', $term_id_prefixed ); ?>">
                            <div class="image__hover">
                                <svg width="228" height="350" viewBox="0 0 228 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="228" height="350" rx="15" fill="#47B16F"/>
                                </svg>
                            </div>
                        </div>
                        <div class="product__category"><?php echo $category->name; ?></div>
                    </a>
                <?php }
            } ?>
        </div>
    </div>
    <div class="cards__nextButton swiperProducts-button-next">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 6.8343e-07L28 14L14 28L11.5062 25.55L21.3063 15.75L-8.3642e-07 15.75L-5.3044e-07 12.25L21.3063 12.25L11.5063 2.45L14 6.8343e-07Z" fill="#1F4D30"/>
        </svg>
    </div>
</div>