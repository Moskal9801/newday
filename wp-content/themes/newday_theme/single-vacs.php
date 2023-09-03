<?php wp_head(); ?>

<div class="single-vacancy">
    <div class="single-vacancy__body">
        <p class="body__name">
            <?php the_field( 'vacancy-name' ); ?>
        </p>
        <div class="body__duties">
            <p class="duties__name">
                Что входит в обязанности:
            </p>
            <?php if ( have_rows( 'vacancy-duties' ) ) : ?>
                <?php while ( have_rows( 'vacancy-duties' ) ) : the_row(); ?>
                    <div class="duties__info">
                        <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2.5" cy="2.5" r="2.5" fill="#8E8E8E"/>
                        </svg>
                        <p><?php the_sub_field( 'duties' ); ?></p>
                    </div>
                <?php endwhile; ?>
            <?php endif; ?>
        </div>
        <div class="body__requirements">
            <p class="requirements__name">
                Требования:
            </p>
            <?php if ( have_rows( 'vacancy-requirements' ) ) : ?>
                <?php while ( have_rows( 'vacancy-requirements' ) ) : the_row(); ?>
                    <div class="requirements__info">
                        <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2.5" cy="2.5" r="2.5" fill="#8E8E8E"/>
                        </svg>
                        <p><?php the_sub_field( 'requirements' ); ?></p>
                    </div>
                <?php endwhile; ?>
            <?php endif; ?>
        </div>
        <div class="body__conditions">
            <p class="conditions__name">
                Условия:
            </p>
            <?php if ( have_rows( 'vacancy-conditions' ) ) : ?>
                <?php while ( have_rows( 'vacancy-conditions' ) ) : the_row(); ?>
                    <div class="conditions__info">
                        <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2.5" cy="2.5" r="2.5" fill="#8E8E8E"/>
                        </svg>
                        <p><?php the_sub_field( 'conditions' ); ?></p>
                    </div>
                <?php endwhile; ?>
            <?php endif; ?>
        </div>
        <a class="body__button open-popup__vacancy">
            Оставить резюме
        </a>
    </div>
    <a class="single-vacancy__closed" href="/vacs/">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5492 16L8.00515 9.44987L1.46109 16L0 14.5398L6.55434 8L0 1.46015L1.46109 0L8.00515 6.55013L14.5492 0.010283L16 1.46015L9.45595 8L16 14.5398L14.5492 16Z" stroke="#000000" fill="#000000"/>
        </svg>
    </a>
</div>

    <div class="popup__vacancy popup-vacancy mfp-hide mfp-with-anim">
        <p class="vacancy__first-text">
            Хотите попасть к нам в команду?
        </p>
        <p class="vacancy__second-text">
            Заполните анкету и приложите свое резюме. Мы обязательно свяжемся с вами и пригласим на собеседование.
        </p>
        <div class="vacancy__info-area">
            <?= do_shortcode( '[contact-form-7 id="265" title="Отклик на вакансию"]' ) ?>
        </div>
    </div>

    <div class="popup__sent mfp-hide mfp-with-anim">
        <div class="sent__info">
            <div class="info__image">
                <svg width="127" height="119" viewBox="0 0 127 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 111.605V13.4977C0 10.0332 1.23498 7.06638 3.70495 4.59717C6.17072 2.13216 9.13636 0.899658 12.6019 0.899658H113.417C116.882 0.899658 119.85 2.13216 122.32 4.59717C124.786 7.06638 126.019 10.0332 126.019 13.4977V89.0857C126.019 92.5501 124.786 95.517 122.32 97.9862C119.85 100.451 116.882 101.684 113.417 101.684H25.2038L10.7116 116.171C8.7163 118.166 6.43116 118.611 3.85618 117.507C1.28539 116.407 0 114.439 0 111.605ZM12.6019 96.487L20.0055 89.0857H113.417V13.4977H12.6019V96.487Z" fill="#47B16F"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M91.9391 27.3236C94.7453 29.3815 95.3519 33.3246 93.294 36.1308L65.5701 73.9361C64.4921 75.4061 62.8303 76.3372 61.0137 76.489C59.1971 76.6408 57.4038 75.9984 56.0968 74.7277L33.4136 52.6746C30.9185 50.2489 30.8623 46.2598 33.2881 43.7647C35.7138 41.2696 39.7029 41.2135 42.198 43.6392L59.6898 60.6451L83.1319 28.6786C85.1898 25.8724 89.1329 25.2658 91.9391 27.3236Z" fill="#47B16F"/>
                </svg>
            </div>
            <div class="info__text">
                Ваше сообщение успешно отправлено!
            </div>
        </div>
    </div>

    <div class="popup__failed mfp-hide mfp-with-anim">
        <div class="failed__info">
            <div class="info__image">
                <svg width="126" height="117" viewBox="0 0 126 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="mfp-close" d="M56.7 28.2977V53.4513C56.7 55.233 57.3048 56.7254 58.5144 57.9286C59.7198 59.136 61.215 59.7397 63 59.7397C64.785 59.7397 66.2823 59.136 67.4919 57.9286C68.6973 56.7254 69.3 55.233 69.3 53.4513V28.2977C69.3 26.516 68.6973 25.0215 67.4919 23.8141C66.2823 22.6109 64.785 22.0094 63 22.0094C61.215 22.0094 59.7198 22.6109 58.5144 23.8141C57.3048 25.0215 56.7 26.516 56.7 28.2977ZM63 78.6048C64.785 78.6048 66.2823 78.0012 67.4919 76.7938C68.6973 75.5906 69.3 74.0982 69.3 72.3165C69.3 70.5347 68.6973 69.0402 67.4919 67.8328C66.2823 66.6297 64.785 66.0281 63 66.0281C61.215 66.0281 59.7198 66.6297 58.5144 67.8328C57.3048 69.0402 56.7 70.5347 56.7 72.3165C56.7 74.0982 57.3048 75.5906 58.5144 76.7938C59.7198 78.0012 61.215 78.6048 63 78.6048ZM0 110.518V12.5768C0 9.11816 1.2348 6.15633 3.7044 3.69128C6.1698 1.23043 9.135 0 12.6 0H113.4C116.865 0 119.832 1.23043 122.302 3.69128C124.767 6.15633 126 9.11816 126 12.5768V88.0374C126 91.496 124.767 94.4579 122.302 96.9229C119.832 99.3838 116.865 100.614 113.4 100.614H25.2L10.71 115.077C8.715 117.069 6.4302 117.513 3.8556 116.411C1.2852 115.312 0 113.348 0 110.518ZM12.6 95.4263L20.0025 88.0374H113.4V12.5768H12.6V95.4263Z" fill="#E84148"/>
                </svg>
            </div>
            <div class="info__text">
                <p class="text__top">
                    Что-то пошло не так
                </p>
                <p class="text__bottom">
                    Попробуйте еще раз
                </p>
            </div>
        </div>
    </div>

<?php wp_footer(); ?>