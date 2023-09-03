<div class="body__mobile-swiper">
    <div class="swiper technology-swiper">
        <div class="swiper-wrapper">
            <?php if ( have_rows( 'cycle-swiper' ) ) : $index = 10;?>
                <?php while ( have_rows( 'cycle-swiper' ) ) : the_row(); $index++;?>
                    <div class="swiper-slide" data-index="<?php echo $index ?>">
                        <?php if ( get_sub_field( 'stage-image' ) ) : ?>
                            <img src="<?php the_sub_field( 'stage-image' ); ?>" />
                        <?php endif ?>
                        <div class="swiper-slide__more">
                            <div class="more__sign-stage">
                                <?= file_get_contents(wp_get_attachment_image_url(get_sub_field( 'sign-stage' ))); ?>
                            </div>
                            <p class="more__name-stage">
                                <?php the_sub_field( 'stage-name' ); ?>
                            </p>
                            <p class="more__info-stage">
                                <?php the_sub_field( 'stage-info' ); ?>
                            </p>
                        </div>
                    </div>
                <?php endwhile; ?>
            <?php else : ?>
                <?php // no rows found ?>
            <?php endif; ?>
        </div>
        <div class="swiper-pagination">
        </div>
        <div class="autoplay-progress">
            <svg width="375" height="376" viewBox="0 0 375 376" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="pathAtribute" data-index="1" d="M195.097 7.2019L195.848 7.24614C242.493 9.99101 286.338 30.4062 318.462 64.3368L317.431 65.313C285.556 31.6447 242.049 11.3873 195.765 8.66369L195.797 8.11491H195.097V7.2019Z"/>
                <path class="pathAtribute" data-index="2" d="M335.027 84.4644C363.008 123.937 374.194 173.106 366.501 220.869L365.099 220.644C372.734 173.243 361.631 124.45 333.868 85.2856L335.027 84.4644Z"/>
                <path class="pathAtribute" data-index="3" d="M360.765 245.967C346.968 289.998 317.191 327.27 277.294 350.449L276.581 349.221C316.171 326.22 345.719 289.235 359.41 245.543L360.765 245.967Z"/>
                <path class="pathAtribute" data-index="4" d="M253.892 361.924C210.86 379.271 162.876 379.795 119.476 363.389L119.978 362.061C163.044 378.34 210.66 377.821 253.361 360.607L253.892 361.924Z"/>
                <path class="pathAtribute" data-index="5" d="M95.8337 352.436C55.4601 330.116 24.8946 293.503 10.1445 249.792L11.49 249.338C26.1267 292.713 56.4574 329.045 96.5208 351.194L95.8337 352.436Z"/>
                <path class="pathAtribute" data-index="6" d="M3.63886 224.533C-5.13257 176.733 5.2992 127.402 32.6705 87.2451L33.8439 88.0449C6.68311 127.893 -3.66842 176.844 5.03554 224.277L3.63886 224.533Z"/>
                <path class="pathAtribute" data-index="7" d="M48.8623 66.786C80.2125 32.4587 123.411 11.2934 169.75 7.55713L169.864 8.97254C123.883 12.6799 81.0187 33.6816 49.9108 67.7436L48.8623 66.786Z"/>
                <path class="pathAtributeArrow" data-index="1" d="M315.317 55.725L314.017 56.295L317.797 64.785L309.447 60.705L308.827 61.985L320.677 67.765L315.317 55.725Z" fill="#616161"/>
                <path class="pathAtributeArrow" data-index="2" d="M371.564 213.528L370.328 212.829L365.802 220.947L364.058 211.818L362.662 212.09L365.146 225.038L371.564 213.528Z" fill="#616161"/>
                <path class="pathAtributeArrow" data-index="3" d="M286.344 349.561L286.105 348.162L276.953 349.78L282.929 342.662L281.836 341.751L273.366 351.855L286.344 349.561Z" fill="#616161"/>
                <path class="pathAtributeArrow" data-index="4" d="M125.885 369.886L126.819 368.818L119.79 362.739L129.082 362.884L129.1 361.462L115.917 361.265L125.885 369.886Z" fill="#616161"/>
                <path class="pathAtributeArrow" data-index="5" d="M9.48236 258.859L10.9018 258.851L10.7978 249.558L16.8458 256.614L17.9224 255.685L9.33537 245.68L9.48236 258.859Z" fill="#616161"/>
                <path class="pathAtributeArrow" data-index="6" d="M24.9272 91.9402L25.7539 93.0941L33.2777 87.6387L31.0143 96.6524L32.395 96.994L35.5971 84.2043L24.9272 91.9402Z" fill="#616161"/>
                <path class="pathAtributeArrow" data-index="7" d="M161.034 4.65288L160.699 6.03208L169.741 8.17861L161.431 12.3405L162.073 13.61L173.857 7.69741L161.034 4.65288Z" fill="#616161"/>
            </svg>
        </div>
    </div>
</div>