document.addEventListener('DOMContentLoaded', function () {
    let getCoords = (elem) => {
        let box = elem.getBoundingClientRect();
        return {
            top: box.top + window.scrollY,
            right: box.right + window.scrollX,
            bottom: box.bottom + window.scrollY,
            left: box.left + window.scrollX,
            height: box.height,
        };
    } 

    const newfunction = () => {
        
    }

    let isOnScreen = (elem) => {
            let coefficient;
            window.innerWidth <= 768 ? coefficient = .75 : coefficient = .9;
            return window.scrollY > (getCoords(elem).top - window.innerHeight / coefficient);
        },
        isMobile = () => {
            // return window.outerWidth <= 768;
            return window.outerWidth <= 1200;
        },
        isExist = (selector) => {
            return document.querySelector(selector);
        },
        playAnimations = () => {
            let toAnimate = document.querySelectorAll('.animated');

            if (toAnimate) {
                for (let i of toAnimate) {
                    if (isOnScreen(i)) {
                        i.style.transform = 'translate(0, 0)';
                        i.style.opacity = '1';
                    }
                }
                window.addEventListener('scroll', function () {
                    for (let i of toAnimate) {
                        if (isOnScreen(i)) {
                            i.style.transform = 'translateX(0)';
                            i.style.opacity = '1';
                        }
                    }
                });
            }
        }

    if (!isExist('.single-vacancy__body')) {
        if (isMobile()) {
            //ГАМБУРГЕР В МОБИЛЬНОЙ ВЕРСИИ
            let hamburgerIcon = document.querySelector('#hamburger-icon'),
                mobileBackground = document.querySelector('#mobileBackground'),
                mobileMenu = document.querySelector('#mobile-menu'),
                mobileProductsActive = document.querySelectorAll('#mobileProductsActive'),
                mobileProducts = document.querySelector('#mobileProducts'),
                scrollToUp = document.querySelector('#scrollToUp'),
                backHeader = document.querySelector('#backHeader');

            hamburgerIcon.onclick = function (e) {
                e.preventDefault();
                hamburgerIcon.classList.toggle('active');
                mobileMenu.classList.toggle('mobile-menu__active');
                mobileBackground.classList.toggle('mobile-background__active');
            };

            mobileProductsActive.forEach(mobileProductsActive => {
                mobileProductsActive.onclick = function (e) {
                    e.preventDefault();
                    backHeader.classList.toggle('unactive');
                    mobileProducts.classList.toggle('mobile-products__active');
                    mobileMenu.classList.toggle('mobile-menu__active');
                };
            });

            mobileBackground.onclick = function (e) {
                e.preventDefault();
                hamburgerIcon.classList.remove('active');
                backHeader.classList.remove('unactive');
                mobileMenu.classList.remove('mobile-menu__active');
                mobileProducts.classList.remove('mobile-products__active');
                mobileBackground.classList.remove('mobile-background__active');
            }

            scrollToUp.onclick = function (e) {
                e.preventDefault();
                hamburgerIcon.classList.remove('active');
                backHeader.classList.remove('unactive');
                mobileMenu.classList.remove('mobile-menu__active');
                mobileProducts.classList.remove('mobile-products__active');
                mobileBackground.classList.remove('mobile-background__active');
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }

            //ХЭДЕР ВОЗВРАТА НАВЕРХ
            let prevScrollpos = window.scrollY;


            window.addEventListener('scroll', function() {
                let currentScrollPos = window.scrollY;

                let mobileMenu = document.getElementById("mobile-menu"),
                    mobileProducts = document.getElementById("mobileProducts");
                mobileMenu.style.top = currentScrollPos + "px";
                mobileProducts.style.top = currentScrollPos + 65 + "px";

                if (window.scrollY <= 10) {
                    document.querySelector('#backToUp').classList.add('hide');
                    document.querySelector('#backHeader').classList.remove('hamburgerActive');
                    document.querySelector('.content__first-logo').classList.remove('hide');
                    mobileProducts.style.top = currentScrollPos + "px";
                } else if (prevScrollpos > currentScrollPos) {
                    document.querySelector('#backHeader').classList.remove('hide');
                    document.querySelector('#backToUp').classList.remove('hide');
                    document.querySelector('.content__first-logo').classList.add('hide');
                    document.querySelector('#backHeader').classList.add('hamburgerActive');
                    hamburgerIcon.classList.remove('active');
                    backHeader.classList.remove('unactive');
                    mobileMenu.classList.remove('mobile-menu__active');
                    mobileProducts.classList.remove('mobile-products__active');
                    mobileBackground.classList.remove('mobile-background__active');
                } else {
                    document.querySelector('#backHeader').classList.add('hide');
                    document.querySelector('#backToUp').classList.add('hide');
                    document.querySelector('.content__first-logo').classList.add('hide');
                    document.querySelector('#backHeader').classList.remove('hamburgerActive');
                    hamburgerIcon.classList.remove('active');
                    backHeader.classList.remove('unactive');
                    mobileMenu.classList.remove('mobile-menu__active');
                    mobileProducts.classList.remove('mobile-products__active');
                    mobileBackground.classList.remove('mobile-background__active');
                }
                prevScrollpos = currentScrollPos;
            });

        } else {
            //МЕНЮ ХЭДЕРА В ДЕСКТОПНОЙ ВЕРСИИ
            let areaMenu = document.querySelector('#areaMenu'),
                desktopBackground = document.querySelector('#desktopBackground'),
                desktopMenu = document.querySelector('#desktopMenu'),
                innerPageDesktopMenu = document.querySelector('#innerPageDesktopMenu'),
                cardHit = document.querySelector('#cardHit'),
                cardNew = document.querySelector('#cardNew');

            areaMenu.onclick = function (e) {
                e.preventDefault();
                areaMenu.classList.toggle('area-menu__active');
                desktopBackground.classList.toggle('desktop-background__active');
                desktopMenu.classList.toggle('desktop-menu__active');
                if (isExist('.inner-page') || isExist('.privacy-policy') || isExist('.documents')) {
                    innerPageDesktopMenu.classList.toggle('innerPageDesktopMenu__active');
                }

            };
            desktopBackground.onclick = function (e) {
                e.preventDefault();
                areaMenu.classList.toggle('area-menu__active');
                desktopBackground.classList.toggle('desktop-background__active');
                desktopMenu.classList.toggle('desktop-menu__active');
                if (isExist('.inner-page') || isExist('.privacy-policy') || isExist('.documents')) {
                    innerPageDesktopMenu.classList.toggle('innerPageDesktopMenu__active');
                }
            }

        }

        //ЯКОРИ ФУТЕРА
        if (!isExist('.desktop-404')) {
            const mapLink = document.querySelector('.menu-item-31 a'),
                opinionLink = document.querySelector('.menu-item-32 a'),
                historyLink = document.querySelector('.menu-item-26 a'),
                productionLink = document.querySelector('.menu-item-27 a'),
                achievementsLink = document.querySelector('.menu-item-29 a');

            mapLink.href = '/to-buyers#map-anchor';
            opinionLink.href = '/to-buyers#opinion-anchor';
            historyLink.href = '/about#history-anchor';
            productionLink.href = '/about#production-anchor';
            achievementsLink.href = '/about#achievements-anchor';
        }

        //ЯКОРИ МЕНЮ
        let categories = document.querySelectorAll('.first-column__category a');

        for (let category of categories) {
            category.onclick = function () {
                let categoryLink = category.href,
                    categoryHash = categoryLink.substring(categoryLink.indexOf('#')),
                    elementToScroll = document.querySelector(categoryHash);

                window.scrollTo({
                    top: getCoords(elementToScroll).top - 45,
                    behavior: "smooth",
                })
            }
        }

        if(!isMobile()) {
            let categoriesHits = document.querySelectorAll('.second-column__anchor');

            for (let category of categoriesHits) {
                category.onclick = function () {
                    let areaMenu = document.querySelector('#areaMenu'),
                        desktopBackground = document.querySelector('#desktopBackground'),
                        desktopMenu = document.querySelector('#desktopMenu'),
                        innerPageDesktopMenu = document.querySelector('#innerPageDesktopMenu');

                    areaMenu.classList.toggle('area-menu__active');
                    desktopBackground.classList.toggle('desktop-background__active');
                    desktopMenu.classList.toggle('desktop-menu__active');
                    if (isExist('.inner-page') || isExist('.privacy-policy') || isExist('.documents')) {
                        innerPageDesktopMenu.classList.toggle('innerPageDesktopMenu__active');
                    }

                    let categoryLink = category.href,
                        categoryHash = categoryLink.substring(categoryLink.indexOf('#')),
                        elementToScroll = document.querySelector(categoryHash);

                    window.scrollTo({
                        top: getCoords(elementToScroll).top - 45,
                        behavior: "smooth",
                    })
                }
            }
        }

        //ПОПАП ОБРАТНОЙ СВЯЗИ
        $('.open-popup__about').magnificPopup({
            type: 'inline',
            // removalDelay: 500,
            callbacks: {
                beforeOpen: function () {
                    this.st.mainClass = this.st.el.attr('data-effect');
                },
                beforeClose: function() {
                    var form = this.content.find('form');
                    if (form.length) {
                        form[0].reset();
                    }
                },
            },
            midClick: true,
            items: {
                src: '.popup-about',
            }
        });

        var input = document.querySelector('input[name=your-name]');
        input.addEventListener('input', function() {
            this.value = this.value.replace(/[^a-zA-Zа-яА-Я]/g, '');
        });

        var input = document.querySelector('input[name=your-phone]');
        input.addEventListener('input', function() {
            this.value = this.value.replace(/[^\d]/g, '');
        });
    }

     if (isExist('.home-body')) {
         playAnimations();

         var mySwiper = new Swiper(".carousel-swiper", {
             autoplay: {
                 delay: 2000,
                 disableOnInteraction: false
             },
             effect: "fade",
             pagination: {
                 el: '.swiper-pagination',
                 type: 'bullets',
                 clickable: true,
                 bulletClass: 'swiper-pagination-bullet',
                 bulletActiveClass: 'swiper-pagination-bullet-active',
                 renderBullet: function (index, className) {
                     return '<span class="' + className + '" data-index="' + index + '">' +
                         '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                         '<path d="M5.99973 11.56C9.19193 11.56 11.7797 8.97221 11.7797 5.78C11.7797 2.58779 9.19193 0 5.99973 0C2.80752 0 0.219727 2.58779 0.219727 5.78C0.219727 8.97221 2.80752 11.56 5.99973 11.56Z" fill="#FFFFFF"/>' +
                         '</svg>' +
                         '</span>';
                 }
             },
             on: {
                 slideChange: function () {
                     var activeBullet = this.pagination.bullets[this.activeIndex];
                     var activeIndex = activeBullet.getAttribute('data-index');
                     var pathAttributes;
                     if (activeIndex === '0') {
                         pathAttributes = document.querySelectorAll('.pathAtribute[data-index="7"]');
                     } else {
                         pathAttributes = document.querySelectorAll('.pathAtribute[data-index="' + activeIndex + '"]');
                     }
                     if (activeIndex === '1') {
                         document.querySelectorAll('.pathAtribute').forEach(function (pathAttribute) {
                             pathAttribute.classList.remove('active');
                         });
                     }
                     pathAttributes.forEach(function (pathAttribute) {
                         pathAttribute.classList.add('active');
                     });


                     var pathAttributesArrow;
                     if (activeIndex === '0') {
                         pathAttributesArrow = document.querySelectorAll('.pathAtributeArrow[data-index="7"]');
                     } else {
                         pathAttributesArrow = document.querySelectorAll('.pathAtributeArrow[data-index="' + activeIndex + '"]');
                     }
                     if (activeIndex === '1') {
                         document.querySelectorAll('.pathAtributeArrow').forEach(function (pathAttributeArrow) {
                             pathAttributeArrow.classList.remove('activeArrow');
                         });
                     }
                     pathAttributesArrow.forEach(function (pathAttributeArrow) {
                         pathAttributeArrow.classList.add('activeArrow');
                     });
                 }
             }
         });

         var paginationBullets = document.querySelectorAll('.swiper-pagination-bullet');
         paginationBullets.forEach(function (bullet) {
             bullet.addEventListener('click', function () {
                 var activeBullet = this;
                 var activeIndex = activeBullet.getAttribute('data-index');
                 var pathAttributes = document.querySelectorAll('.pathAtribute');
                 pathAttributes.forEach(function (pathAttribute) {
                     var pathIndex = pathAttribute.getAttribute('data-index');
                     if (activeIndex === '0' || pathIndex <= activeIndex) {
                         pathAttribute.classList.add('active');
                     } else {
                         pathAttribute.classList.remove('active');
                     }
                 });


                 var pathAttributesArrow = document.querySelectorAll('.pathAtributeArrow');
                 pathAttributesArrow.forEach(function (pathAttributeArrow) {
                     var pathIndex = pathAttributeArrow.getAttribute('data-index');
                     if (activeIndex === '0' || pathIndex <= activeIndex) {
                         pathAttributeArrow.classList.add('activeArrow');
                     } else {
                         pathAttributeArrow.classList.remove('activeArrow');
                     }
                 });
             });
         });

         //СЛАЙДЕР ДЛЯ ПРОДУКОВ (ГЛАВНАЯ СТРАНИЦА)
        var swiper = new Swiper(".swiperProducts", {
            loop: true,
            slidesPerView: 4,
            navigation: {
                nextEl: ".swiperProducts-button-next",
                prevEl: ".swiperProducts-button-prev",
            },
        });

        //СЛАЙДЕР ДЛЯ МАГАЗИНОВ (ГЛАВНАЯ СТРАНИЦА)
        var swiper = new Swiper(".swiperShops", {
            loop: true,
            slidesPerView: 'auto',
            navigation: {
                nextEl: ".swiperShops-button-next",
                prevEl: ".swiperShops-button-prev",
            },
            breakpoints: {
                480: {
                    slidesPerView: 3,
                },
            },
        });

    } else if (isExist('.products-body')) {

         const cardsProducts = document.querySelectorAll('.products__cards');

         cardsProducts.forEach(cardsProduct => {
             const productName = cardsProduct.querySelector('.name__p');
             const productBody = cardsProduct.querySelector('.product__body');
             const cardsProductsHeight = cardsProduct.offsetHeight;
             const productBodyHeight = productBody.offsetHeight;
             const productNameHeight = productName.offsetHeight;
             const cardsNameHeight = (cardsProductsHeight - productBodyHeight) + productNameHeight;
             const cardsName = cardsProduct.querySelector('.cards__name');
             cardsName.style.height = `${cardsNameHeight}px`;
         });

         jQuery(document).ready(function($) {

             $('.open-popup__products').on('click', function(e) {
                 e.preventDefault();
                 var postID = $(this).data('post-id');

                 $.ajax({
                     url: '/wp-admin/admin-ajax.php',
                     type: 'POST',
                     data: {
                         action: 'get_acf_fields',
                         post_id: postID
                     },
                     success: function(response) {
                         let data = response.data,
                             name = data.name,
                             products_image_urls = data.image,
                             sort = data.sort,
                             description = data.description,
                             features = data.features,
                             caloric = data.caloric,
                             fats = data.fats,
                             squirrels = data.squirrels,
                             carbohydrates = data.carbohydrates,
                             weight = data.weight;

                         $('.title__name').text(name);
                         if (sort === '') {
                             // if(!isMobile()) {
                             //     $('.info__sort').css('margin-top', '65px');
                             // }
                             $('.sort__title').css('display', 'none');
                             $('.sort__name').css('display', 'none');
                         } else {
                             $('.sort__title').css('display', 'block');
                             if(!isMobile()) {
                                 $('.info__sort').css('margin-top', '');
                             }
                             $('.sort__name').css('display', 'block');
                             $('.sort__name').text(sort);
                         }
                         if (description === '') {
                             if(!isMobile()) {
                                 $('.info__description').css('margin-top', '65px');
                             }
                             $('.description__title').css('display', 'none');
                             $('.description__name').css('display', 'none');
                         } else {
                             if(!isMobile()) {
                                 $('.info__description').css('margin-top', '');
                             }
                             $('.description__title').css('display', 'block');
                             $('.description__name').css('display', 'block');
                             $('.description__name').text(description);
                         }
                         if (features === 'Товар новый') {
                             $('.title__sign').html('<svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                                 '<circle cx="37.5" cy="37.5" r="37.5" fill="#47B16F"/>\n' +
                                 '<path d="M13.52 21.839L9.59418 18.6705L10.3305 17.7596L11.8734 19.0049L13.2353 17.3199L11.6924 16.0746L12.4286 15.1637L16.3545 18.3323L15.6182 19.2432L14.0097 17.945L12.6478 19.6299L14.2563 20.9281L13.52 21.839Z" fill="white"/>\n' +
                                 '<path d="M20.4093 14.055C20.3316 14.7288 19.9907 15.305 19.3868 15.7837C18.7828 16.2624 18.1417 16.4644 17.4635 16.3898C16.7893 16.3121 16.2142 15.9734 15.7382 15.3737C15.2623 14.7741 15.0632 14.1374 15.1409 13.4637C15.2226 12.7868 15.5655 12.209 16.1694 11.7303C16.7734 11.2516 17.4125 11.0511 18.0867 11.1289C18.7649 11.2035 19.342 11.5406 19.818 12.1402C20.2939 12.7399 20.491 13.3781 20.4093 14.055ZM17.7514 15.3118C18.1147 15.3755 18.4584 15.279 18.7823 15.0222C19.1063 14.7654 19.2786 14.453 19.2993 14.085C19.3167 13.713 19.1637 13.3231 18.84 12.9153C18.5164 12.5076 18.1729 12.2719 17.8096 12.2082C17.4431 12.1405 17.0978 12.235 16.7739 12.4918C16.4499 12.7486 16.2792 13.063 16.2617 13.435C16.241 13.803 16.3925 14.1909 16.7162 14.5987C17.0398 15.0064 17.3849 15.2441 17.7514 15.3118Z" fill="white"/>\n' +
                                 '<path d="M22.5775 13.3992L20.2764 8.90964L21.7825 8.13884C22.2413 7.90399 22.6493 7.8385 23.0065 7.94236C23.3614 8.04167 23.618 8.24575 23.7762 8.5546C23.867 8.73173 23.9089 8.9253 23.9018 9.13531C23.8993 9.343 23.8396 9.53411 23.7226 9.70865L23.7295 9.72228C24.0303 9.66009 24.3011 9.6906 24.5421 9.81382C24.7876 9.93471 24.9755 10.1223 25.1058 10.3767C25.2921 10.74 25.3131 11.1335 25.1689 11.557C25.0269 11.9737 24.7037 12.3111 24.1994 12.5692L22.5775 13.3992ZM23.1872 12.0208L23.6165 11.8011C24.0935 11.557 24.2413 11.2578 24.0597 10.9035C23.9829 10.7536 23.869 10.6657 23.718 10.6397C23.5671 10.6138 23.394 10.6508 23.1986 10.7508L22.6739 11.0194L23.1872 12.0208ZM22.2409 10.1746L22.5544 10.0141C22.727 9.92578 22.8389 9.81404 22.8901 9.67892C22.9389 9.53925 22.9296 9.40356 22.8621 9.27185C22.7899 9.13105 22.6806 9.04081 22.5341 9.00113C22.3921 8.95912 22.228 8.98578 22.0417 9.08112L21.7555 9.2276L22.2409 10.1746Z" fill="white"/>\n' +
                                 '<path d="M26.9059 11.233L25.5271 6.38015L26.6539 6.06046L27.2921 8.30649C27.3953 8.66978 27.4657 8.93627 27.5033 9.10598L27.518 9.1018C27.5814 8.91405 27.6705 8.67659 27.7852 8.3894L28.937 5.41273L30.0638 5.09304L31.4426 9.94593L30.3158 10.2656L29.6149 7.79867C29.5145 7.4452 29.4563 7.21237 29.4403 7.10018L29.4256 7.10436C29.4059 7.14709 29.363 7.25741 29.2968 7.43534C29.2292 7.60835 29.1772 7.74249 29.1406 7.83776L27.9517 10.9363L26.9059 11.233Z" fill="white"/>\n' +
                                 '<path d="M32.9769 9.65275L32.6757 4.61679L33.8449 4.54696L33.9633 6.5262L36.1259 6.39705L36.0075 4.41782L37.1768 4.34799L37.4779 9.38396L36.3087 9.45378L36.1853 7.39049L34.0227 7.51964L34.1461 9.58293L32.9769 9.65275Z" fill="white"/>\n' +
                                 '<path d="M39.0329 9.43197L39.7364 4.4363L40.8963 4.59939L40.6155 6.59311L41.0324 6.65174C41.2245 6.67875 41.3864 6.62679 41.5183 6.49587C41.6551 6.36565 41.7976 6.15892 41.9458 5.87567C42.0939 5.59242 42.2176 5.39078 42.317 5.27075C42.5726 4.95623 42.9127 4.82882 43.3372 4.88852C43.5747 4.92192 43.7676 4.97996 43.9157 5.06263L43.7737 6.07086C43.6639 6.00903 43.5508 5.96995 43.4346 5.9536C43.288 5.93299 43.1665 5.97259 43.07 6.07241C43.0397 6.10423 42.9188 6.28565 42.7073 6.61668C42.4965 6.94265 42.3052 7.14768 42.1336 7.23178L42.1315 7.24694C42.3266 7.36199 42.4699 7.55222 42.5614 7.81762L43.3237 10.0353L41.9818 9.84664L41.5075 8.16421C41.4494 7.95503 41.3917 7.8155 41.3345 7.74561C41.2831 7.67138 41.217 7.62859 41.1361 7.61722L40.4842 7.52554L40.1928 9.59507L39.0329 9.43197Z" fill="white"/>\n' +
                                 '<path d="M43.8667 10.1117L47.3933 5.96599L48.3053 6.27998L48.6296 11.7515L47.4425 11.3428L47.3782 10.0495L45.8292 9.51622L45.0031 10.503L43.8667 10.1117ZM46.4448 8.74041L47.3497 9.05191L47.3523 8.31606C47.354 7.99816 47.3646 7.74813 47.3842 7.56596L47.3697 7.56098C47.2827 7.70375 47.1289 7.90718 46.9083 8.17128L46.4448 8.74041Z" fill="white"/>\n' +
                                 '<path d="M53.9358 14.7921L57.2463 10.9852L58.1307 11.7532L56.8296 13.2494L58.4655 14.6699L59.7666 13.1737L60.651 13.9416L57.3405 17.7485L56.4561 16.9806L57.8124 15.4208L56.1766 14.0004L54.8202 15.5601L53.9358 14.7921Z" fill="white"/>\n' +
                                 '<path d="M61.5329 21.8778C60.861 21.7819 60.2938 21.4257 59.8312 20.8093C59.3685 20.193 59.1837 19.547 59.2765 18.8716C59.3724 18.2002 59.7267 17.6349 60.3393 17.1758C60.9519 16.7167 61.5941 16.5351 62.266 16.6311C62.9409 16.7311 63.5097 17.0894 63.9723 17.7057C64.4349 18.3221 64.6183 18.966 64.5224 19.6374C64.4295 20.3129 64.0768 20.8802 63.4642 21.3393C62.8516 21.7984 62.2078 21.9779 61.5329 21.8778ZM60.3471 19.1885C60.2737 19.5497 60.361 19.8956 60.6092 20.2263C60.8573 20.5569 61.1652 20.7375 61.5328 20.7682C61.9044 20.7958 62.2986 20.6535 62.7151 20.3413C63.1317 20.0291 63.3767 19.6924 63.4502 19.3311C63.5278 18.9669 63.4425 18.6194 63.1943 18.2888C62.9462 17.9582 62.6363 17.7791 62.2646 17.7515C61.897 17.7208 61.5049 17.8616 61.0883 18.1738C60.6718 18.486 60.4247 18.8242 60.3471 19.1885Z" fill="white"/>\n' +
                                 '<path d="M62.1001 24.0872L66.6636 21.9364L67.3857 23.4664C67.6057 23.9326 67.6581 24.3424 67.5427 24.6958C67.4319 25.047 67.2196 25.2966 66.9056 25.4446C66.7256 25.5294 66.5307 25.5649 66.3209 25.5509C66.1133 25.5415 65.9242 25.4755 65.7534 25.3529L65.7396 25.3594C65.792 25.6619 65.7528 25.9315 65.6218 26.1681C65.493 26.4094 65.2993 26.5909 65.0408 26.7127C64.6714 26.8868 64.2774 26.8948 63.8585 26.7368C63.4465 26.5812 63.1195 26.2472 62.8777 25.7349L62.1001 24.0872ZM63.4587 24.7417L63.6645 25.1779C63.8933 25.6625 64.1877 25.82 64.5478 25.6502C64.7001 25.5784 64.7917 25.4676 64.8225 25.3176C64.8533 25.1677 64.8219 24.9935 64.7282 24.795L64.4766 24.262L63.4587 24.7417ZM65.3353 23.8573L65.4856 24.1757C65.5684 24.3511 65.6765 24.4666 65.81 24.5222C65.9481 24.5756 66.0841 24.5708 66.2179 24.5077C66.3611 24.4402 66.4548 24.334 66.4992 24.1889C66.5458 24.0485 66.5245 23.8836 66.4351 23.6944L66.2979 23.4036L65.3353 23.8573Z" fill="white"/>\n' +
                                 '<path d="M64.1229 28.4816L69.0204 27.2707L69.3019 28.4077L67.0352 28.9681C66.6686 29.0587 66.3998 29.1199 66.2289 29.1517L66.2326 29.1665C66.4181 29.2363 66.6525 29.3335 66.9357 29.458L69.8723 30.7113L70.1538 31.8483L65.2563 33.0591L64.9748 31.9222L67.4644 31.3066C67.8211 31.2184 68.0558 31.1683 68.1685 31.1562L68.1648 31.1413C68.1228 31.1202 68.014 31.0735 67.8383 31.0013C67.6677 30.9278 67.5353 30.8711 67.4414 30.8313L64.3842 29.5368L64.1229 28.4816Z" fill="white"/>\n' +
                                 '<path d="M65.516 34.5947L70.5587 34.4435L70.5938 35.6143L68.6119 35.6737L68.677 37.8392L70.6588 37.7798L70.694 38.9506L65.6513 39.1017L65.6161 37.931L67.6822 37.869L67.6172 35.7035L65.5511 35.7655L65.516 34.5947Z" fill="white"/>\n' +
                                 '<path d="M65.5381 40.6457L70.5086 41.509L70.3079 42.6629L68.3242 42.3184L68.2521 42.7332C68.2188 42.9243 68.2655 43.0878 68.3921 43.2237C68.5178 43.3647 68.7198 43.5138 68.9981 43.6709C69.2764 43.828 69.4739 43.9581 69.5907 44.0613C69.8967 44.3268 70.0131 44.6708 69.9396 45.0931C69.8985 45.3295 69.8342 45.5203 69.7468 45.6657L68.7436 45.4915C68.809 45.3837 68.8517 45.272 68.8718 45.1563C68.8972 45.0105 68.8615 44.8878 68.7649 44.7881C68.7341 44.7569 68.5567 44.6302 68.2327 44.4082C67.9137 44.187 67.715 43.9893 67.6365 43.8151L67.6214 43.8125C67.5001 44.0038 67.3053 44.1409 67.037 44.2238L64.7955 44.9146L65.0277 43.5796L66.7248 43.1595C66.9358 43.1081 67.0772 43.0549 67.1489 43C67.2247 42.9511 67.2697 42.8863 67.2836 42.8059L67.3965 42.1573L65.3373 41.7996L65.5381 40.6457Z" fill="white"/>\n' +
                                 '<path d="M64.6734 45.4418L68.6838 49.119L68.3354 50.0185L62.8538 50.139L63.3073 48.9683L64.6025 48.9521L65.1943 47.4245L64.2392 46.5626L64.6734 45.4418ZM65.9464 48.0684L65.6008 48.9607L66.3362 48.9907C66.654 49.0042 66.9035 49.0241 67.0848 49.0505L67.0904 49.0362C66.9509 48.944 66.7534 48.7827 66.4978 48.5525L65.9464 48.0684Z" fill="white"/>\n' +
                                 '<path d="M7.36085 26.3596L12.1956 27.8008L11.8605 28.9231L9.9604 28.3567L9.34068 30.4327L11.2408 30.9991L10.9058 32.1214L6.07105 30.6803L6.40609 29.5579L8.38694 30.1484L9.00666 28.0724L7.02581 27.4819L7.36085 26.3596Z" fill="white"/>\n' +
                                 '<path d="M5.93406 37.0541C5.49256 36.539 5.30139 35.8973 5.36056 35.1289C5.41972 34.3605 5.70709 33.753 6.22264 33.3064C6.7378 32.8648 7.37703 32.6734 8.14033 32.7321C8.90362 32.7908 9.50602 33.0777 9.94752 33.5928C10.3886 34.113 10.5796 34.7573 10.5204 35.5256C10.4613 36.294 10.1741 36.899 9.65894 37.3405C9.14338 37.7872 8.50396 37.9811 7.74066 37.9224C6.97737 37.8638 6.37517 37.5743 5.93406 37.0541ZM6.81794 34.2505C6.52435 34.4736 6.36168 34.7913 6.32994 35.2034C6.2982 35.6156 6.41032 35.9544 6.6663 36.2198C6.92737 36.4855 7.31742 36.6384 7.83646 36.6783C8.35551 36.7182 8.76182 36.6266 9.05542 36.4035C9.3541 36.1807 9.51931 35.8633 9.55105 35.4511C9.58279 35.0389 9.46812 34.6999 9.20706 34.4342C8.95108 34.1688 8.56357 34.0162 8.04453 33.9762C7.52549 33.9363 7.11662 34.0277 6.81794 34.2505Z" fill="white"/>\n' +
                                 '<path d="M5.3144 39.5786L10.3281 39.0175L10.5165 40.6988C10.5739 41.2111 10.4909 41.6158 10.2674 41.913C10.049 42.2097 9.76736 42.3773 9.42246 42.4159C9.22465 42.438 9.02877 42.4086 8.83481 42.3276C8.64142 42.2516 8.48377 42.128 8.36187 41.9568L8.34665 41.9585C8.29847 42.2618 8.17414 42.5042 7.97367 42.6858C7.77376 42.8725 7.53179 42.9818 7.24776 43.0136C6.842 43.059 6.46652 42.9392 6.12132 42.6543C5.78175 42.3739 5.58043 41.9522 5.51733 41.3893L5.3144 39.5786ZM6.38825 40.637L6.44196 41.1163C6.50165 41.6489 6.7293 41.893 7.12491 41.8487C7.29229 41.83 7.4148 41.7547 7.49246 41.6227C7.57011 41.4908 7.59672 41.3158 7.57228 41.0977L7.50662 40.5119L6.38825 40.637ZM8.45001 40.4063L8.48923 40.7562C8.51083 40.949 8.57579 41.0932 8.68409 41.1889C8.79747 41.2841 8.9277 41.3234 9.07479 41.307C9.23202 41.2894 9.3551 41.2191 9.44404 41.0962C9.53354 40.9783 9.56664 40.8154 9.54333 40.6075L9.50752 40.2879L8.45001 40.4063Z" fill="white"/>\n' +
                                 '<path d="M5.95191 44.853L10.763 43.3348L11.1126 44.4527L8.88592 45.1554C8.52576 45.269 8.26141 45.3471 8.09289 45.3896L8.09746 45.4042C8.28672 45.4622 8.52634 45.5444 8.81632 45.651L11.8209 46.7177L12.1705 47.8356L7.35944 49.3538L7.00984 48.2359L9.45555 47.4642C9.80598 47.3536 10.037 47.2887 10.1487 47.2695L10.1441 47.2549C10.1009 47.2364 9.98951 47.1967 9.80999 47.1356C9.63533 47.0729 9.49992 47.0247 9.40377 46.9908L6.27637 45.8905L5.95191 44.853Z" fill="white"/>\n' +
                                 '<path d="M8.17381 51.2996L12.5703 48.8252L13.1492 49.8434L11.4213 50.8159L12.4922 52.6992L14.2201 51.7267L14.799 52.7449L10.4026 55.2193L9.82361 54.2011L11.6249 53.1873L10.554 51.304L8.75275 52.3178L8.17381 51.2996Z" fill="white"/>\n' +
                                 '<path d="M11.5622 56.9051L15.3938 53.6233L16.1564 54.5124L14.6272 55.8221L14.9013 56.1417C15.0276 56.2889 15.1835 56.357 15.369 56.3459C15.5578 56.3387 15.8015 56.2779 16.1 56.1634C16.3984 56.0488 16.6246 55.9794 16.7786 55.9551C17.1784 55.8882 17.5179 56.0174 17.797 56.3428C17.9531 56.5249 18.0595 56.6959 18.116 56.8558L17.3427 57.5181C17.3011 57.3991 17.2421 57.2951 17.1657 57.206C17.0694 57.0937 16.952 57.043 16.8135 57.0541C16.7698 57.0579 16.5591 57.1141 16.1814 57.2225C15.8076 57.3276 15.5285 57.355 15.3441 57.3046L15.3325 57.3146C15.4028 57.5299 15.3845 57.7673 15.2777 58.0268L14.3831 60.194L13.501 59.1655L14.2576 57.5901C14.3523 57.3948 14.4013 57.252 14.4046 57.1618C14.4152 57.0722 14.3938 56.9963 14.3407 56.9344L13.912 56.4346L12.3247 57.7941L11.5622 56.9051Z" fill="white"/>\n' +
                                 '<path d="M15.0697 60.9072L19.8061 58.2014L20.5605 58.8026L19.0091 64.0465L18.0273 63.264L18.4056 62.0287L17.1244 61.0077L16.0096 61.6562L15.0697 60.9072ZM17.969 60.4865L18.7173 61.0829L18.9697 60.3932C19.0791 60.0954 19.174 59.8643 19.2544 59.7L19.2424 59.6904C19.1118 59.7952 18.8975 59.9344 18.5996 60.1081L17.969 60.4865Z" fill="white"/>\n' +
                                 '<path d="M25.1714 67.451L26.6928 62.6409L27.8097 62.9937L27.2117 64.8842L29.2777 65.5367L29.8756 63.6462L30.9925 63.999L29.4711 68.809L28.3542 68.4563L28.9775 66.4855L26.9116 65.833L26.2883 67.8038L25.1714 67.451Z" fill="white"/>\n' +
                                 '<path d="M35.8559 69.0509C35.3338 69.4843 34.6891 69.6654 33.9218 69.5943C33.1544 69.5232 32.5515 69.2264 32.1131 68.7039C31.6797 68.182 31.4985 67.5398 31.5692 66.7776C31.64 66.0153 31.9364 65.4175 32.4584 64.9841C32.9856 64.5511 33.6328 64.3702 34.4002 64.4414C35.1675 64.5125 35.7679 64.809 36.2012 65.331C36.6397 65.8535 36.8235 66.4958 36.7527 67.2581C36.682 68.0204 36.383 68.618 35.8559 69.0509ZM33.0665 68.1234C33.285 68.4205 33.6 68.5881 34.0117 68.6262C34.4233 68.6644 34.7638 68.5576 35.0332 68.3057C35.3031 68.0489 35.4621 67.6612 35.5102 67.1429C35.5583 66.6246 35.4732 66.2169 35.2547 65.9198C35.0367 65.6177 34.7219 65.4476 34.3103 65.4094C33.8987 65.3713 33.5579 65.4806 33.288 65.7375C33.0186 65.9893 32.8599 66.3744 32.8117 66.8928C32.7636 67.4111 32.8485 67.8213 33.0665 68.1234Z" fill="white"/>\n' +
                                 '<path d="M38.3782 69.7081L37.8961 64.6862L39.5802 64.5248C40.0933 64.4756 40.4967 64.5651 40.7904 64.7933C41.0835 65.0164 41.2467 65.3007 41.2798 65.6462C41.2989 65.8443 41.2664 66.0397 41.1823 66.2323C41.1033 66.4244 40.9773 66.5801 40.8041 66.6992L40.8056 66.7145C41.1081 66.7675 41.3485 66.8957 41.527 67.0991C41.7105 67.3019 41.816 67.5456 41.8433 67.8301C41.8823 68.2365 41.7567 68.61 41.4664 68.9506C41.1806 69.2856 40.7558 69.4802 40.1919 69.5342L38.3782 69.7081ZM39.4534 68.6514L39.9335 68.6054C40.467 68.5542 40.7147 68.3305 40.6766 67.9343C40.6605 67.7666 40.5871 67.6429 40.4564 67.5631C40.3257 67.4834 40.1511 67.454 39.9327 67.4749L39.3459 67.5312L39.4534 68.6514ZM39.2552 66.5862L39.6057 66.5526C39.7988 66.5341 39.944 66.4715 40.0414 66.3647C40.1384 66.2529 40.1797 66.1233 40.1656 65.976C40.1505 65.8185 40.0822 65.6943 39.9606 65.6034C39.8442 65.5121 39.6818 65.4763 39.4735 65.4963L39.1535 65.527L39.2552 66.5862Z" fill="white"/>\n' +
                                 '<path d="M43.6592 69.124L42.2347 64.2844L43.3585 63.9541L44.0178 66.194C44.1244 66.5563 44.1973 66.8221 44.2365 66.9915L44.2512 66.9871C44.3128 66.7988 44.3996 66.5605 44.5116 66.2723L45.6354 63.2849L46.7591 62.9546L48.1836 67.7943L47.0599 68.1246L46.3357 65.6643C46.232 65.3118 46.1716 65.0795 46.1546 64.9675L46.1399 64.9718C46.1206 65.0147 46.0787 65.1255 46.0142 65.304C45.9483 65.4777 45.8975 65.6123 45.8618 65.7079L44.7022 68.8175L43.6592 69.124Z" fill="white"/>\n' +
                                 '<path d="M50.1475 67.0288L47.7381 62.5964L48.7675 62.0376L49.7145 63.7796L51.6186 62.7461L50.6716 61.0041L51.701 60.4453L54.1104 64.8778L53.081 65.4365L52.0939 63.6205L50.1898 64.654L51.1769 66.47L50.1475 67.0288Z" fill="white"/>\n' +
                                 '<path d="M55.817 63.7339L52.5931 59.8535L53.4946 59.1056L54.7812 60.6543L55.1053 60.3854C55.2545 60.2616 55.3251 60.1069 55.3169 59.9214C55.3127 59.7326 55.2556 59.4882 55.1456 59.1881C55.0357 58.8881 54.9697 58.661 54.9478 58.5068C54.8871 58.1062 55.0217 57.7691 55.3516 57.4954C55.5362 57.3422 55.709 57.2387 55.8699 57.1848L56.5205 57.9679C56.4008 58.0075 56.2958 58.0648 56.2055 58.1398C56.0916 58.2343 56.0391 58.3508 56.048 58.4893C56.0512 58.533 56.1041 58.7445 56.2067 59.1235C56.306 59.4987 56.3291 59.778 56.2758 59.9614L56.2856 59.9732C56.5021 59.9063 56.7393 59.9283 56.9973 60.0392L59.1518 60.9673L58.109 61.8325L56.5445 61.0515C56.3505 60.9538 56.2084 60.9026 56.1182 60.8978C56.0287 60.8859 55.9525 60.906 55.8896 60.9582L55.3829 61.3785L56.7185 62.986L55.817 63.7339Z" fill="white"/>\n' +
                                 '<path d="M59.881 60.2976L57.2523 55.5369L57.8701 54.7961L63.1072 56.429L62.3031 57.3932L61.0696 56.9957L60.0204 58.2539L60.6508 59.3746L59.881 60.2976ZM59.5127 57.4043L60.1256 56.6694L59.4377 56.4066C59.1407 56.2926 58.9104 56.1942 58.7468 56.1114L58.737 56.1232C58.8398 56.255 58.9756 56.4706 59.1445 56.7701L59.5127 57.4043Z" fill="white"/>\n' +
                                 '<path d="M28.2243 44.5842H26.0786L20.4485 37.1825C20.3173 37.0119 19.8317 36.3557 18.9918 35.2139H18.9524C18.9787 35.5551 18.9918 36.2244 18.9918 37.2218V44.5842H16.6295V31.6115H18.9721L24.4053 38.7179C25.114 39.676 25.593 40.3453 25.8424 40.7259H25.8817C25.8555 39.8072 25.8424 39.0788 25.8424 38.5408V31.6115H28.2243V44.5842ZM31.3744 44.5842V31.6115H38.54L37.8904 33.6194H33.7367V37.0053H37.8904V39.0132H33.7367V42.5763H38.5597V44.5842H31.3744ZM44.4053 44.663L39.8186 31.6115H42.4958L44.8778 39.0723C45.009 39.466 45.219 40.1944 45.5077 41.2574H45.5471C45.7177 40.6537 45.9408 39.9319 46.2164 39.092L47.9684 33.8753L47.1613 31.6115H49.563L52.063 38.9542C52.4174 39.9516 52.6601 40.7127 52.7914 41.2377H52.8504C53.1392 40.0828 53.336 39.3348 53.441 38.9935L55.6851 31.6115H58.1262L53.756 44.663H51.748L49.7992 39.1707C49.4448 38.1733 49.2086 37.4515 49.0905 37.0053H49.0314C48.8477 37.6746 48.618 38.3898 48.3424 39.151L46.3739 44.663H44.4053Z" fill="white"/>\n' +
                                 '</svg>\n');
                         } else if (features === 'Товар популярный') {
                             $('.title__sign').html('<svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                                 '<circle cx="37.5" cy="37.5" r="37.5" fill="#EE7100"/>\n' +
                                 '<path d="M9.20888 39.9369L6.33515 37.9887L3.54764 39.8423V38.434L5.37533 37.2205L3.46143 35.9458V34.5764L6.28917 36.4969L9.1629 34.6042V36.0126L7.28923 37.265L9.20888 38.5453V39.9369Z" fill="white"/>\n' +
                                 '<path d="M9.20919 34.0587L3.62842 33.0122L3.87556 31.7598L6.45616 32.2441C6.87573 32.322 7.18034 32.3832 7.37001 32.4333C7.21483 32.2775 7.02516 32.0715 6.79526 31.821L4.38708 29.2159L4.63997 27.969L10.215 29.0155L9.96211 30.2735L7.12862 29.7169C6.72055 29.6389 6.45616 29.6 6.33547 29.561L6.59985 29.8449L6.91021 30.1956L9.42185 32.8786L9.20919 34.0587Z" fill="white"/>\n' +
                                 '<path d="M11.0025 27.0838L6.76659 25.4138L6.14587 26.9168L5.11133 26.5104L6.91028 22.2242L7.80688 22.959L7.26087 24.2393L11.4967 25.9093L11.0025 27.0838Z" fill="white"/>\n' +
                                 '<path d="M13.2322 22.4803L8.63428 19.2462L11.4678 15.4666L16.0657 18.7062L15.2898 19.736L11.5942 17.1365L10.3125 18.8454L14.0081 21.445L13.2322 22.4803Z" fill="white"/>\n' +
                                 '<path d="M16.7842 17.9496L12.876 13.9528L14.0255 12.9008C14.3356 12.5912 14.7124 12.3518 15.129 12.1994C15.4566 12.0859 15.8127 12.0743 16.1475 12.1661C16.4823 12.2579 16.7792 12.4486 16.9969 12.7115C17.2454 12.9645 17.4183 13.2781 17.4969 13.6188C17.5792 13.998 17.518 14.3931 17.3245 14.7321C17.1329 15.0943 16.8737 15.4189 16.5601 15.6896L16.4566 15.7842L17.7326 17.0979L16.7842 17.9496ZM15.7325 15.016L15.8934 14.8713C16.0395 14.7503 16.1571 14.6003 16.2382 14.4315C16.2902 14.2904 16.296 14.1373 16.2548 13.9928C16.2137 13.8484 16.1276 13.7198 16.0083 13.6244C15.9163 13.5163 15.7948 13.4355 15.6576 13.3912C15.5203 13.3469 15.373 13.3409 15.2324 13.3739C15.0315 13.4315 14.8506 13.5412 14.7094 13.6912L14.5657 13.8248L15.7325 15.016Z" fill="white"/>\n' +
                                 '<path d="M23.9108 11.7538C23.8175 12.1178 23.6493 12.4597 23.4162 12.7591C23.1831 13.0585 22.89 13.3092 22.5544 13.4961C22.2367 13.7114 21.8762 13.8603 21.4959 13.9333C21.1156 14.0063 20.7237 14.0018 20.3453 13.9202C19.9668 13.8385 19.6101 13.6814 19.2978 13.4589C18.9854 13.2364 18.7244 12.9533 18.5311 12.6278C18.3121 12.3168 18.1605 11.9661 18.0854 11.5968C18.0103 11.2275 18.0134 10.8472 18.0943 10.4791C18.1869 10.1171 18.3537 9.77684 18.5848 9.47849C18.8158 9.18014 19.1064 8.92981 19.4392 8.74235C19.7602 8.52756 20.1229 8.37829 20.5053 8.30364C20.8877 8.229 21.2817 8.23054 21.6635 8.30816C22.0403 8.39238 22.3953 8.55041 22.7067 8.77251C23.018 8.9946 23.2791 9.27608 23.474 9.59959C23.6959 9.91021 23.8493 10.2619 23.9245 10.6326C23.9996 11.0032 23.995 11.385 23.9108 11.7538ZM20.7784 12.8059C20.9801 12.8534 21.1896 12.8611 21.3944 12.8285C21.5993 12.7958 21.7952 12.7236 21.9706 12.6161C22.146 12.5086 22.2972 12.3679 22.4153 12.2026C22.5334 12.0372 22.6159 11.8505 22.6578 11.6536C22.7064 11.1851 22.5755 10.7156 22.29 10.3344C22.0549 9.92126 21.673 9.60481 21.2152 9.44373C21.0144 9.3884 20.8034 9.37718 20.5976 9.41088C20.3918 9.44459 20.1963 9.52237 20.0255 9.63856C19.8448 9.73906 19.6892 9.87701 19.57 10.0425C19.4508 10.208 19.3708 10.397 19.3358 10.596C19.2884 11.0653 19.4214 11.535 19.7094 11.9153C19.9388 12.3306 20.32 12.6482 20.7784 12.8059Z" fill="white"/>\n' +
                                 '<path d="M25.8772 13.2512L24.9634 10.7129L25.3025 10.5904C25.6588 9.73315 25.6243 8.18196 25.199 5.93681L28.2164 4.89587L29.751 9.05404L30.5269 8.78685L31.4523 11.3252L30.2625 11.7371L29.6878 10.2453L26.5094 11.3586L27.0842 12.8504L25.8772 13.2512ZM28.4923 9.50493L27.3428 6.31533L26.5152 6.59922C26.8066 7.76436 26.8477 8.97506 26.6359 10.1562L28.4923 9.50493Z" fill="white"/>\n' +
                                 '<path d="M30.9292 9.8332L32.3488 4.06074L33.4236 3.91602L36.5502 9.07615L35.1478 9.26541L34.4236 8.04079L32.596 8.28571L32.2684 9.65507L30.9292 9.8332ZM32.8144 7.22808L33.8834 7.08335L33.5098 6.36527C33.3798 6.1226 33.2628 5.87364 33.1592 5.61936C33.1301 5.89528 33.0801 6.16877 33.0098 6.43764L32.8144 7.22808Z" fill="white"/>\n' +
                                 '<path d="M36.4404 8.95954L37.6646 6.94447C37.7551 6.78275 37.8693 6.63462 38.0037 6.50472C38.0999 6.42218 38.2137 6.36134 38.3371 6.32659C38.1976 6.21386 38.0972 6.06227 38.0497 5.8924C37.9865 5.70314 37.9463 5.48048 37.8773 5.26896C37.8517 5.10855 37.8014 4.95279 37.7279 4.80694C37.6935 4.74356 37.6424 4.6901 37.5798 4.65197C37.5173 4.61385 37.4454 4.59242 37.3715 4.58985C37.2304 4.57768 37.0881 4.59089 36.952 4.62881L37.0554 3.51551C37.2671 3.46074 37.4879 3.44749 37.7049 3.47655C37.9193 3.48632 38.1267 3.55407 38.3034 3.67213C38.4802 3.79019 38.6193 3.95384 38.7049 4.14453C38.7891 4.32328 38.8546 4.50977 38.9003 4.70118C38.9578 4.93497 39.0038 5.13536 39.0325 5.29679C39.0665 5.45387 39.1351 5.60198 39.2337 5.73098C39.2801 5.79364 39.3402 5.84559 39.4098 5.88312C39.4793 5.92065 39.5566 5.94283 39.636 5.94807L40.0038 5.98147L40.2165 3.75487L41.4752 3.8662L41.2683 6.0928L41.6361 6.1262C41.715 6.13555 41.7951 6.12793 41.8706 6.10387C41.9461 6.07982 42.0152 6.03992 42.0729 5.98703C42.1933 5.87615 42.2874 5.74131 42.3488 5.59181C42.412 5.43595 42.4925 5.25226 42.5902 5.03516C42.6711 4.84073 42.7712 4.65432 42.8891 4.47852C43.0136 4.31248 43.1831 4.18301 43.3789 4.10442C43.5746 4.02584 43.789 4.00119 43.9983 4.0332C44.2154 4.04641 44.428 4.09929 44.6248 4.18906L44.5213 5.30236C44.3957 5.24099 44.2592 5.20322 44.119 5.19103C44.0462 5.18417 43.9728 5.19423 43.9048 5.22037C43.8369 5.24651 43.7763 5.28797 43.7282 5.34132C43.6311 5.47387 43.5519 5.61791 43.4926 5.76994C43.4121 5.9616 43.318 6.1476 43.2109 6.32659C43.1293 6.48316 43.0038 6.61432 42.8488 6.70511C42.9642 6.76193 43.0661 6.84158 43.1477 6.9389C43.2529 7.09045 43.336 7.25528 43.3948 7.42876L44.2282 9.62195L42.7626 9.49392L42.2166 7.73491C42.17 7.57592 42.1044 7.42274 42.0212 7.27846C41.9974 7.244 41.966 7.21512 41.9292 7.19393C41.8924 7.17274 41.8512 7.15978 41.8085 7.156L41.1763 7.10033L40.9637 9.32693L39.705 9.2156L39.9119 6.989L39.2739 6.93334C39.2316 6.92994 39.1891 6.93567 39.1493 6.95011C39.1096 6.96455 39.0736 6.98734 39.044 7.01684C38.9356 7.14404 38.8448 7.28439 38.7739 7.43432L37.906 9.07087L36.4404 8.95954Z" fill="white"/>\n' +
                                 '<path d="M50.6484 12.021L53.9187 10.7686L53.8613 7.47876L55.0912 8.2358L55.1315 10.3789L57.258 9.59959L58.4477 10.3344L55.2406 11.5646L55.2981 14.9045L54.0682 14.1474L54.0279 11.9208L51.8439 12.7502L50.6484 12.021Z" fill="white"/>\n' +
                                 '<path d="M55.7231 15.2162L59.6831 11.2695L60.6257 12.1602L58.7923 13.986C58.4992 14.281 58.2808 14.4925 58.1313 14.6206C58.3497 14.5816 58.6314 14.5315 58.9762 14.487L62.5281 13.9303L63.4707 14.821L59.5107 18.7676L58.5681 17.877L60.5797 15.873C60.7581 15.6751 60.9501 15.4891 61.1545 15.3164C61.1028 15.3164 60.9706 15.3164 60.7637 15.372L60.2809 15.4444L56.591 16.001L55.7231 15.2162Z" fill="white"/>\n' +
                                 '<path d="M60.769 20.4931L64.5164 17.9492L63.5623 16.6244L64.4762 16.0121L67.2062 19.8029L66.1084 20.1758L65.275 19.018L61.5105 21.5396L60.769 20.4931Z" fill="white"/>\n' +
                                 '<path d="M63.5459 24.7907L68.8565 22.8257L70.5808 27.1898L65.2701 29.1492L64.7988 27.9691L69.0634 26.3882L68.2875 24.4177L64.0172 25.9986L63.5459 24.7907Z" fill="white"/>\n' +
                                 '<path d="M65.5 30.1511L71.0865 29.177L71.3681 30.6855C71.4634 31.1073 71.4634 31.544 71.3681 31.9658C71.2861 32.2944 71.1002 32.59 70.8365 32.8115C70.5728 33.033 70.2443 33.1694 69.8968 33.2016C69.542 33.2652 69.176 33.2324 68.8393 33.1069C68.4779 32.9625 68.178 32.7034 67.9886 32.3722C67.7852 32.0161 67.649 31.6278 67.5863 31.2255V31.0863L65.7529 31.4092L65.5 30.1511ZM68.6094 30.9082L68.6496 31.1197C68.6729 31.3037 68.7376 31.4804 68.8393 31.6374C68.9331 31.7559 69.0621 31.8439 69.2089 31.8897C69.3558 31.9354 69.5135 31.9368 69.6612 31.8934C69.8056 31.8776 69.9425 31.8227 70.0563 31.7351C70.1701 31.6475 70.2563 31.5307 70.3049 31.398C70.3555 31.2025 70.3555 30.9979 70.3049 30.8024L70.2704 30.6132L68.6094 30.9082Z" fill="white"/>\n' +
                                 '<path d="M66.9654 39.319C66.542 38.9172 66.2546 38.4003 66.1413 37.8367C66.028 37.2732 66.0942 36.6897 66.331 36.1634C66.5678 35.637 66.9641 35.1928 67.4674 34.8895C67.9707 34.5863 68.5573 34.4382 69.1494 34.465C69.5366 34.4548 69.9218 34.5222 70.2808 34.663C70.6399 34.8038 70.965 35.015 71.2357 35.2833C71.7883 35.8317 72.0933 36.5703 72.0836 37.3366C72.0739 38.1028 71.7503 38.8339 71.184 39.3691C70.6177 39.9043 69.8551 40.1996 69.064 40.1902C68.2728 40.1808 67.5179 39.8674 66.9654 39.319ZM67.77 36.2017C67.6184 36.3391 67.497 36.5047 67.4129 36.6885C67.3288 36.8724 67.2838 37.0707 67.2806 37.2718C67.2774 37.4728 67.316 37.6724 67.3942 37.8587C67.4723 38.045 67.5884 38.2141 67.7355 38.356C68.1287 38.6237 68.5957 38.771 69.0762 38.779C69.5568 38.7869 70.0287 38.6551 70.4311 38.4005C70.5827 38.2631 70.7041 38.0976 70.7882 37.9137C70.8723 37.7299 70.9172 37.5315 70.9205 37.3305C70.9237 37.1294 70.8851 36.9298 70.8069 36.7436C70.7288 36.5573 70.6127 36.3882 70.4656 36.2463C70.0882 35.9503 69.6114 35.7997 69.1264 35.8232C68.6418 35.7855 68.1596 35.9201 67.77 36.2017Z" fill="white"/>\n' +
                                 '<path d="M64.5865 40.1373L67.2591 40.7719L67.1786 41.117C67.7533 41.8741 69.0867 42.6923 71.2593 43.5719L70.5121 46.5945L66.1096 45.548L65.8969 46.3384L63.2358 45.6983L63.5347 44.507L65.1268 44.8744L65.9084 41.6959L64.2934 41.3286L64.5865 40.1373ZM66.3969 44.3066L69.7994 45.0915L70.0063 44.2677C68.8451 43.8712 67.7794 43.25 66.874 42.4419L66.3969 44.3066Z" fill="white"/>\n' +
                                 '<path d="M64.7929 46.0656L69.0173 50.374L68.5518 51.3482L62.3848 51.0643L62.9595 49.8229L64.4136 49.9064L65.1953 48.2866L64.1895 47.2735L64.7929 46.0656ZM66.0229 49.0214L65.5631 49.9677L66.3907 50.0567C66.7413 50.0957 67.023 50.1347 67.2241 50.1736C67.0026 50.002 66.7933 49.816 66.5976 49.617L66.0229 49.0214Z" fill="white"/>\n' +
                                 '<path d="M62.5392 51.0309L63.6025 53.1294C63.6935 53.2898 63.7593 53.4624 63.7979 53.6416C63.8298 53.764 63.8298 53.8921 63.7979 54.0145C63.9704 53.9644 64.1542 53.9644 64.3267 54.0145C64.5381 54.0651 64.7455 54.1303 64.9474 54.2093C65.1015 54.2734 65.2639 54.3165 65.4302 54.3374C65.5027 54.3418 65.5753 54.329 65.6414 54.2998C65.7076 54.2707 65.7653 54.2262 65.8095 54.1704C65.8971 54.0625 65.9634 53.9398 66.0049 53.8086L66.8958 54.4932C66.8282 54.6967 66.7208 54.8856 66.5797 55.0499C66.4561 55.2189 66.2862 55.3511 66.0892 55.4318C65.8923 55.5124 65.676 55.5382 65.4647 55.5063C65.2569 55.4709 65.0529 55.4169 64.8554 55.3449L64.2807 55.1278C64.1278 55.0667 63.9632 55.0382 63.7979 55.0443C63.718 55.0481 63.6399 55.069 63.5693 55.1056C63.4987 55.1422 63.4374 55.1935 63.3898 55.2558L63.1599 55.5342L64.9589 56.9147L64.1715 57.8777L62.3553 56.4805L62.1254 56.7644C62.073 56.8222 62.0349 56.8909 62.0139 56.9652C61.993 57.0395 61.9899 57.1174 62.0047 57.193C62.0326 57.3516 62.0974 57.502 62.1944 57.6327L62.5507 58.1393C62.6686 58.3151 62.7687 58.5015 62.8496 58.6959C62.9308 58.8879 62.9549 59.098 62.9194 59.3026C62.8839 59.5072 62.79 59.6981 62.6484 59.8538C62.5161 60.0207 62.3547 60.1638 62.1714 60.2768L61.2805 59.5921C61.4011 59.5215 61.5081 59.4311 61.5966 59.325C61.6439 59.2713 61.6761 59.2067 61.6902 59.1375C61.7042 59.0683 61.6997 58.9968 61.6771 58.9297C61.6208 58.7753 61.5393 58.6306 61.4357 58.5011C61.3135 58.322 61.2022 58.1361 61.1024 57.9445C61.0131 57.792 60.9694 57.6186 60.9759 57.4435C60.8639 57.5077 60.7379 57.5458 60.6081 57.5548C60.4141 57.561 60.2203 57.5385 60.0333 57.488L57.6826 56.9314L58.6022 55.8181L60.4184 56.3413C60.5808 56.3923 60.7485 56.4259 60.9184 56.4415C60.9621 56.4407 61.0049 56.4302 61.0438 56.4109C61.0826 56.3916 61.1164 56.364 61.1426 56.3302L61.5392 55.8515L59.7172 54.4543L60.5046 53.4913L62.3266 54.8885L62.7231 54.4042C62.7501 54.3718 62.7693 54.3341 62.7793 54.2936C62.7892 54.2531 62.7897 54.211 62.7806 54.1704C62.7278 54.0127 62.6564 53.8614 62.568 53.7195L61.6254 52.1219L62.5392 51.0309Z" fill="white"/>\n' +
                                 '<path d="M4.81836 47.7857L8.26683 48.5093L10.1175 45.7261L10.6923 47.0175L9.48529 48.8433L11.7153 49.3165L12.29 50.5745L8.91054 49.862L7.02538 52.6452L6.45064 51.3538L7.68059 49.5002L5.38161 49.0103L4.81836 47.7857Z" fill="white"/>\n' +
                                 '<path d="M7.77783 53.9644L12.4333 50.7915L13.1919 51.838L11.0366 53.2964C10.688 53.5339 10.4293 53.7009 10.2607 53.7974C10.4849 53.7974 10.7723 53.7974 11.1171 53.7974L14.7093 53.9199L15.4679 54.9664L10.8125 58.1226L10.0538 57.0761L12.4218 55.4674C12.6398 55.3129 12.8662 55.1699 13.1 55.0387H12.7091H12.2149L8.47902 54.9218L7.77783 53.9644Z" fill="white"/>\n' +
                                 '<path d="M12.9277 60.3158L16.1348 57.1596L14.9451 56.0463L15.7267 55.2448L19.1292 58.49L18.1119 59.0467L17.0716 58.0558L13.8703 61.212L12.9277 60.3158Z" fill="white"/>\n' +
                                 '<path d="M17.7441 64.3793L20.7041 59.6979L24.825 62.1137L21.8536 66.7952L20.7041 66.1327L23.072 62.3475L21.2041 61.2342L18.8362 65.0194L17.7441 64.3793Z" fill="white"/>\n' +
                                 '<path d="M23.6128 67.5691L25.6474 62.4313L27.1302 62.9879C27.5579 63.1265 27.9499 63.3524 28.2797 63.6503C28.5259 63.8883 28.6897 64.1945 28.7484 64.5266C28.8071 64.8587 28.7578 65.2002 28.6073 65.504C28.4781 65.8308 28.2595 66.1175 27.9751 66.3334C27.6595 66.558 27.2744 66.6719 26.8831 66.6562C26.4577 66.6329 26.0397 66.5388 25.6474 66.3779L25.5095 66.3278L24.8427 67.9978L23.6128 67.5691ZM25.9118 65.3815L26.1244 65.4594C26.3051 65.5374 26.5014 65.5754 26.6992 65.5708C26.8532 65.5534 26.998 65.4907 27.1141 65.3912C27.2302 65.2917 27.3121 65.1601 27.3486 65.0141C27.4103 64.8864 27.4333 64.7443 27.415 64.6044C27.3967 64.4645 27.3378 64.3325 27.2452 64.2237C27.104 64.0737 26.9231 63.964 26.7222 63.9064L26.5382 63.834L25.9118 65.3815Z" fill="white"/>\n' +
                                 '<path d="M33.8025 69.5619C33.1547 70.0048 32.3517 70.1803 31.5703 70.0498C30.7889 69.9193 30.0929 69.4935 29.6356 68.8661C29.1783 68.2387 28.9971 67.461 29.1319 66.7041C29.2666 65.9473 29.7062 65.2733 30.3541 64.8304C30.8322 64.4927 31.4046 64.3031 31.996 64.2865C32.5875 64.2698 33.1703 64.4269 33.6678 64.7371C34.1653 65.0473 34.5542 65.4961 34.7835 66.0244C35.0127 66.5527 35.0715 67.1359 34.952 67.6971C34.9025 68.0676 34.7749 68.4243 34.5772 68.7451C34.3795 69.0659 34.1158 69.3439 33.8025 69.5619ZM30.7564 68.2928C30.8669 68.4642 31.0146 68.6103 31.1893 68.7208C31.364 68.8314 31.5615 68.9037 31.7679 68.9329C31.9677 68.9717 32.1738 68.9685 32.3721 68.9233C32.5705 68.8782 32.7564 68.7922 32.9174 68.6713C33.279 68.3574 33.5082 67.9253 33.5612 67.4578C33.678 67.0005 33.6187 66.5176 33.3945 66.0996C33.2846 65.9281 33.1369 65.7824 32.962 65.6727C32.7871 65.5629 32.5894 65.492 32.3829 65.465C32.1836 65.4239 31.9775 65.4255 31.7789 65.4697C31.5803 65.5139 31.3941 65.5997 31.2334 65.721C30.8719 66.035 30.6427 66.4671 30.5897 66.9345C30.4729 67.3918 30.5322 67.8747 30.7564 68.2928Z" fill="white"/>\n' +
                                 '<path d="M35.9641 72.078L35.8779 69.4061H36.24C36.8492 68.6935 37.3033 67.1795 37.6079 64.9529L40.815 64.8527L40.9587 69.2669H41.7806L41.8668 71.9388L40.6023 71.9778L40.5449 70.3913L37.1769 70.4971L37.2286 72.0835L35.9641 72.078ZM39.6425 69.2947L39.5276 65.9047H38.6482C38.5602 67.0934 38.2239 68.2524 37.6596 69.3114L39.6425 69.2947Z" fill="white"/>\n' +
                                 '<path d="M42.7744 70.1797L43.694 64.307L44.7515 64.0732L48.292 68.9495L46.9183 69.2556L46.0849 68.0978L44.286 68.4986L44.0848 69.8847L42.7744 70.1797ZM44.4182 67.3964L45.47 67.1626L45.0332 66.478C44.8435 66.1829 44.7056 65.9213 44.6136 65.7655C44.6092 66.0433 44.5842 66.3205 44.5389 66.5949L44.4182 67.3964Z" fill="white"/>\n' +
                                 '<path d="M49.2916 68.7323V66.3943C49.2786 66.2073 49.296 66.0194 49.3433 65.8377C49.382 65.717 49.4489 65.6065 49.5387 65.5148C49.3623 65.484 49.1987 65.4048 49.0674 65.2866C48.8987 65.1503 48.7393 65.0034 48.5904 64.8468C48.4828 64.7237 48.3569 64.6168 48.2168 64.5296C48.1535 64.4954 48.0823 64.4775 48.0099 64.4775C47.9375 64.4775 47.8663 64.4954 47.803 64.5296C47.6742 64.5885 47.559 64.6718 47.4639 64.7745L46.9639 63.7781C47.1191 63.6299 47.3 63.5093 47.4984 63.4218C47.6856 63.3225 47.8977 63.2756 48.1108 63.2864C48.324 63.2972 48.5299 63.3653 48.7053 63.4831C48.8758 63.6011 49.0337 63.7354 49.1766 63.8838C49.3491 64.0564 49.4927 64.2067 49.6077 64.3292C49.7199 64.4471 49.8572 64.5401 50.01 64.6019C50.0819 64.6347 50.1604 64.6517 50.2399 64.6517C50.3194 64.6517 50.3979 64.6347 50.4698 64.6019L50.8032 64.4461L49.7974 62.4254L50.9469 61.8688L51.9584 63.8894L52.2918 63.7335C52.3646 63.7021 52.4292 63.6553 52.4809 63.5966C52.5326 63.5378 52.5701 63.4686 52.5906 63.394C52.6256 63.2381 52.6256 63.0767 52.5906 62.9208C52.5906 62.7538 52.5331 62.5534 52.4987 62.3141C52.4743 62.1125 52.4743 61.9089 52.4987 61.7073C52.5113 61.5009 52.5831 61.3021 52.706 61.1329C52.8288 60.9638 52.9978 60.8312 53.1941 60.7499C53.3886 60.6556 53.5987 60.5953 53.8148 60.5718L54.3091 61.5626C54.1698 61.5754 54.0337 61.6112 53.9068 61.6684C53.8404 61.6978 53.7826 61.7427 53.7385 61.799C53.6943 61.8554 53.6653 61.9214 53.6539 61.9912C53.63 62.1518 53.63 62.3149 53.6539 62.4755C53.6884 62.6837 53.7095 62.8938 53.7171 63.1045C53.7315 63.2807 53.6915 63.457 53.6022 63.6111C53.7313 63.6022 53.8609 63.6212 53.9815 63.6667C54.1548 63.7416 54.3156 63.841 54.4585 63.9618L56.338 65.4369L55.0103 66.0548L53.6079 64.819C53.4834 64.705 53.3466 64.6042 53.1999 64.5184C53.1613 64.5006 53.119 64.4914 53.0763 64.4914C53.0335 64.4914 52.9913 64.5006 52.9527 64.5184L52.378 64.7912L53.3895 66.8118L52.24 67.3685L51.2285 65.3478L50.6537 65.615C50.6142 65.6317 50.5791 65.6569 50.5512 65.6887C50.5233 65.7206 50.5033 65.7582 50.4928 65.7987C50.4756 65.9634 50.4756 66.1294 50.4928 66.2941L50.625 68.1255L49.2916 68.7323Z" fill="white"/>\n' +
                                 '<path d="M27.0141 25.8743C27.0141 25.4624 27.0141 25.0839 27.0141 24.7054C27.0141 24.3268 27.152 24.2211 27.5313 24.2211H48.2509C48.7394 24.2211 48.8256 24.3101 48.8256 24.7777C48.8256 25.1284 48.8256 25.4791 48.8256 25.891C49.0785 25.8409 49.2969 25.7964 49.5096 25.763C50.5138 25.5394 51.5615 25.5797 52.5442 25.8799C53.2436 26.1003 53.8585 26.5189 54.3094 27.0816C54.7603 27.6444 55.0263 28.3252 55.0731 29.0361C55.1945 30.4408 54.9391 31.852 54.3317 33.133C53.3032 35.4792 51.7643 37.5829 49.8199 39.3007C48.349 40.6589 46.6676 41.7858 44.8369 42.6406C44.7553 42.6796 44.6843 42.7368 44.63 42.8076C43.718 44.0552 42.5425 45.1006 41.1815 45.8747C41.1423 45.8881 41.1083 45.913 41.0843 45.9459C41.0603 45.9788 41.0474 46.0181 41.0474 46.0584C41.0474 46.0987 41.0603 46.138 41.0843 46.1709C41.1083 46.2038 41.1423 46.2287 41.1815 46.2421C41.439 46.3847 41.6512 46.5931 41.7949 46.8444C41.9386 47.0957 42.0083 47.3805 41.9964 47.6675C41.9846 47.9546 41.8916 48.233 41.7276 48.4724C41.5637 48.7119 41.335 48.9031 41.0666 49.0254C41.0206 49.0254 40.9516 49.0977 40.9516 49.1311C40.9262 49.3781 40.9496 49.6274 41.0206 49.8659C41.77 51.3745 42.8532 52.7048 44.1932 53.7624C44.2715 53.8077 44.3306 53.8785 44.3601 53.9621C44.3896 54.0457 44.3875 54.1367 44.3541 54.2189C44.3217 54.3084 44.258 54.3841 44.174 54.4329C44.0901 54.4817 43.9911 54.5005 43.8943 54.4861C42.5552 54.4861 41.216 54.4861 39.8711 54.4861H32.0201C31.8924 54.4869 31.7663 54.4583 31.6523 54.4026C31.6012 54.367 31.5597 54.3202 31.531 54.266C31.5023 54.2118 31.4874 54.1518 31.4874 54.0909C31.4874 54.03 31.5023 53.9699 31.531 53.9157C31.5597 53.8615 31.6012 53.8147 31.6523 53.7791C32.9852 52.7276 34.0708 51.4124 34.8363 49.9216C34.9248 49.6751 34.9523 49.412 34.9168 49.1534C34.9168 49.12 34.8536 49.0643 34.8076 49.0476C34.5404 48.9245 34.313 48.7331 34.1498 48.4941C33.9866 48.2551 33.8938 47.9775 33.8813 47.6912C33.8689 47.4049 33.9374 47.1208 34.0793 46.8693C34.2213 46.6179 34.4313 46.4088 34.6869 46.2644C34.7261 46.2509 34.7601 46.2261 34.7841 46.1932C34.8081 46.1603 34.821 46.121 34.821 46.0807C34.821 46.0404 34.8081 46.0011 34.7841 45.9682C34.7601 45.9353 34.7261 45.9104 34.6869 45.897C33.3166 45.1179 32.1301 44.0693 31.204 42.8187C31.1394 42.7364 31.0544 42.6713 30.9568 42.6295C27.7803 41.1255 25.0744 38.8295 23.1173 35.9775C22.1062 34.5914 21.3731 33.0335 20.9563 31.3851C20.715 30.4457 20.6973 29.4654 20.9045 28.5184C21.0765 27.7305 21.5134 27.0201 22.1467 26.4983C22.7801 25.9766 23.5742 25.673 24.4047 25.635C25.1996 25.5908 25.9969 25.6564 26.7727 25.8298L27.0141 25.8743ZM46.9175 38.5437C46.9819 38.5033 47.0433 38.4586 47.1014 38.4101C47.6762 37.8979 48.2911 37.4081 48.8256 36.857C50.2762 35.448 51.4093 33.763 52.1534 31.9084C52.4767 31.1345 52.6331 30.3048 52.6132 29.4703C52.6311 29.2795 52.6061 29.0872 52.5398 28.9067C52.4736 28.7261 52.3677 28.5617 52.2294 28.4246C52.0912 28.2876 51.9239 28.1812 51.7392 28.1128C51.5544 28.0444 51.3565 28.0157 51.1591 28.0285C50.3908 28.0097 49.6254 28.1266 48.9004 28.3737C48.8683 28.3941 48.8414 28.4212 48.8215 28.453C48.8016 28.4848 48.7893 28.5204 48.7854 28.5574C48.6647 29.7709 48.5785 30.9899 48.4291 32.2034C48.2044 33.953 47.8198 35.6799 47.2796 37.3636C47.1876 37.7421 47.0554 38.1206 46.9175 38.5437ZM29.423 38.6538C29.423 38.6538 28.5467 37.3449 28.2957 36.4618C27.6376 33.9963 27.2352 31.4733 27.0945 28.9303C27.06 28.3737 27.0945 28.3737 26.5198 28.2679C25.8399 28.0634 25.1234 27.999 24.4162 28.0786C24.1378 28.0958 23.8743 28.2064 23.6708 28.3912C23.4674 28.5761 23.3367 28.8238 23.3012 29.0917C23.2514 29.3448 23.2302 29.6024 23.238 29.8599C23.3027 30.8458 23.5704 31.8092 24.0254 32.6933C24.7901 34.2869 25.841 35.7362 27.129 36.9739C27.8154 37.6318 28.846 38.6538 29.423 38.6538Z" stroke="white" stroke-width="1.13447" stroke-miterlimit="10"/>\n' +
                                 '<path d="M38.0768 28.8462L39.5418 31.4453L42.4663 32.0353L40.4471 34.2317L40.7897 37.1955L38.0768 35.9539L35.364 37.1955L35.7065 34.2317L33.6873 32.0353L36.6119 31.4453L38.0768 28.8462Z" stroke="white"/>\n' +
                                 '</svg>\n');
                         } else {
                             $('.title__sign').html('');
                         }
                         $('.info__caloric').text(caloric);
                         $('.info__squirrels').text(squirrels);
                         $('.info__weight').text(weight);
                         $('.info__fats').text(fats);
                         $('.info__carbohydrates').text(carbohydrates);

                         if (products_image_urls === false) {
                             $('.popup__image').html('<svg width="575" height="710" viewBox="0 0 575 710" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                                 '<path d="M0 0H575V710H0V0Z" fill="#E4E4E4"/>\n' +
                                 '<path d="M288.824 236.105L297.92 245.294L316.935 246.635L301.728 252.029L306.333 262.673L288.142 256.738L270.491 262.673L275.096 252.485L261.793 246.007L280.127 245.465L288.824 236.105M288.824 228H288.682C287.613 228.03 286.559 228.272 285.584 228.713C284.608 229.154 283.729 229.785 282.997 230.568L276.574 237.475L261.623 237.931C259.821 237.975 258.087 238.626 256.7 239.781C255.313 240.936 254.353 242.526 253.977 244.295C253.602 246.066 253.826 247.911 254.614 249.54C255.402 251.168 256.708 252.486 258.326 253.285L264.579 256.31L263.214 259.306C262.563 260.743 262.343 262.34 262.58 263.9C262.817 265.461 263.502 266.919 264.55 268.096C265.313 268.93 266.24 269.597 267.272 270.054C268.304 270.511 269.42 270.748 270.548 270.75C271.416 270.757 272.28 270.622 273.106 270.35L288.227 265.242L303.917 270.35C304.713 270.622 305.549 270.757 306.39 270.75C307.515 270.758 308.63 270.526 309.659 270.068C310.688 269.61 311.609 268.938 312.359 268.096C313.383 266.953 314.061 265.54 314.312 264.023C314.564 262.506 314.379 260.949 313.78 259.534L312.643 256.88L319.692 254.369C321.433 253.745 322.907 252.54 323.869 250.956C324.832 249.372 325.223 247.504 324.979 245.665C324.729 243.822 323.856 242.121 322.505 240.848C321.154 239.575 319.408 238.807 317.56 238.673L301.558 237.532L294.594 230.511C293.851 229.755 292.966 229.153 291.991 228.742C291.015 228.33 289.968 228.117 288.909 228.114L288.824 228Z" fill="#B6B6B6"/>\n' +
                                 '<path d="M287.986 344.85C256.562 344.85 231 322.278 231 294.504C231 276.878 241.653 260.39 258.788 251.264C259.255 251.017 259.764 250.865 260.289 250.817C260.813 250.769 261.342 250.825 261.845 250.984C262.348 251.142 262.815 251.399 263.219 251.74C263.623 252.081 263.956 252.499 264.2 252.97C264.686 253.917 264.781 255.019 264.464 256.036C264.147 257.054 263.444 257.903 262.509 258.4C247.769 266.161 238.976 279.664 238.976 294.504C238.976 317.815 260.959 336.805 287.986 336.805C315.013 336.805 336.996 317.815 336.996 294.504C336.996 280.289 328.71 267.013 314.844 259.139C314.389 258.881 313.988 258.536 313.665 258.122C313.343 257.708 313.104 257.235 312.962 256.728C312.821 256.221 312.78 255.691 312.842 255.168C312.904 254.645 313.067 254.14 313.322 253.681C313.839 252.746 314.701 252.057 315.721 251.764C316.741 251.47 317.835 251.597 318.762 252.117C335.192 261.441 345 277.276 345 294.504C345 322.278 319.41 344.85 287.986 344.85Z" fill="#B6B6B6"/>\n' +
                                 '<path d="M321.263 296.398H320.905C320.432 296.348 319.973 296.195 319.554 295.948C319.134 295.701 318.763 295.365 318.461 294.958C318.159 294.552 317.932 294.083 317.793 293.579C317.654 293.075 317.607 292.546 317.652 292.021C317.652 291.851 318.037 286.337 315.092 283.751C314.707 283.43 314.384 283.027 314.142 282.566C313.899 282.105 313.743 281.594 313.681 281.065C313.618 280.535 313.652 279.997 313.78 279.482C313.908 278.968 314.128 278.486 314.426 278.067C314.713 277.638 315.075 277.277 315.489 277.006C315.904 276.734 316.364 276.557 316.841 276.486C317.318 276.414 317.804 276.45 318.268 276.589C318.733 276.729 319.168 276.971 319.548 277.3C325.848 282.614 325.028 292.334 325.002 292.732C324.918 293.757 324.484 294.707 323.789 295.389C323.094 296.07 322.19 296.431 321.263 296.398V296.398Z" fill="#B6B6B6"/>\n' +
                                 '<path d="M200.406 396.36C198.102 396.36 196.026 395.976 194.178 395.208V391.464C195.978 392.304 197.946 392.724 200.082 392.724C201.642 392.724 202.854 392.412 203.718 391.788C204.582 391.14 205.014 390.228 205.014 389.052C205.014 386.796 203.238 385.668 199.686 385.668C198.558 385.668 197.658 385.692 196.986 385.74V382.176C197.514 382.224 198.246 382.248 199.182 382.248C202.71 382.248 204.474 381.132 204.474 378.9C204.474 377.892 204.126 377.112 203.43 376.56C202.758 375.984 201.726 375.696 200.334 375.696C198.534 375.696 196.71 376.176 194.862 377.136L193.71 373.788C195.87 372.636 198.27 372.06 200.91 372.06C203.55 372.06 205.554 372.684 206.922 373.932C208.314 375.156 209.01 376.668 209.01 378.468C209.01 381.036 207.69 382.812 205.05 383.796V383.868C206.49 384.132 207.594 384.732 208.362 385.668C209.154 386.604 209.55 387.78 209.55 389.196C209.55 391.332 208.77 393.06 207.21 394.38C205.65 395.7 203.382 396.36 200.406 396.36ZM212.117 402.012V392.544H213.233C214.409 391.104 215.333 389.4 216.005 387.432C216.701 385.44 217.385 382.62 218.057 378.972H228.533V392.544H230.945V402.012H226.985V396H216.077V402.012H212.117ZM224.249 392.544V382.464H221.189C220.469 386.712 219.353 390.048 217.841 392.472V392.544H224.249ZM248.732 388.656H237.824C237.872 389.976 238.328 391.032 239.192 391.824C240.08 392.592 241.232 392.976 242.648 392.976C244.136 392.976 245.564 392.592 246.932 391.824L248.228 394.776C246.524 395.832 244.52 396.36 242.216 396.36C239.312 396.36 237.128 395.52 235.664 393.84C234.224 392.136 233.504 390.024 233.504 387.504C233.504 384.888 234.188 382.74 235.556 381.06C236.924 379.38 238.796 378.54 241.172 378.54C243.548 378.54 245.396 379.356 246.716 380.988C248.06 382.596 248.732 384.816 248.732 387.648V388.656ZM237.788 385.668H244.376C244.352 384.588 244.064 383.676 243.512 382.932C242.96 382.188 242.156 381.816 241.1 381.816C240.092 381.816 239.288 382.188 238.688 382.932C238.112 383.676 237.812 384.588 237.788 385.668ZM259.931 396.36C257.243 396.36 255.131 395.544 253.595 393.912C252.083 392.256 251.327 390.156 251.327 387.612C251.327 384.996 252.179 382.836 253.883 381.132C255.611 379.404 257.759 378.54 260.327 378.54C262.175 378.54 263.699 378.924 264.899 379.692V383.328C263.675 382.44 262.295 381.996 260.759 381.996C259.199 381.996 257.963 382.512 257.051 383.544C256.163 384.576 255.719 385.896 255.719 387.504C255.719 389.232 256.151 390.564 257.015 391.5C257.879 392.436 259.055 392.904 260.543 392.904C261.767 392.904 263.087 392.52 264.503 391.752L265.763 394.704C264.155 395.808 262.211 396.36 259.931 396.36ZM268.362 396V378.972H272.646V385.02C273.51 384.972 274.17 384.948 274.626 384.948C277.362 384.948 279.33 385.464 280.53 386.496C281.754 387.504 282.366 388.8 282.366 390.384C282.366 394.128 279.774 396 274.59 396H268.362ZM272.646 392.724H274.482C275.874 392.724 276.822 392.532 277.326 392.148C277.83 391.74 278.082 391.176 278.082 390.456C278.082 389.76 277.818 389.22 277.29 388.836C276.762 388.452 275.814 388.26 274.446 388.26C274.014 388.26 273.414 388.284 272.646 388.332V392.724ZM301.275 396.36C298.587 396.36 296.475 395.544 294.939 393.912C293.427 392.256 292.671 390.156 292.671 387.612C292.671 384.996 293.523 382.836 295.227 381.132C296.955 379.404 299.103 378.54 301.671 378.54C303.519 378.54 305.043 378.924 306.243 379.692V383.328C305.019 382.44 303.639 381.996 302.103 381.996C300.543 381.996 299.307 382.512 298.395 383.544C297.507 384.576 297.063 385.896 297.063 387.504C297.063 389.232 297.495 390.564 298.359 391.5C299.223 392.436 300.399 392.904 301.887 392.904C303.111 392.904 304.431 392.52 305.847 391.752L307.107 394.704C305.499 395.808 303.555 396.36 301.275 396.36ZM309.706 396V378.972H313.99V385.668H315.97C316.594 385.668 317.086 385.368 317.446 384.768C317.806 384.168 318.142 383.364 318.454 382.356C318.79 381.324 319.126 380.556 319.462 380.052C320.206 379.044 321.25 378.54 322.594 378.54C323.29 378.54 323.878 378.624 324.358 378.792V382.428C324.094 382.332 323.77 382.284 323.386 382.284C322.882 382.284 322.486 382.464 322.198 382.824C322.03 383.064 321.718 383.796 321.262 385.02C320.806 386.22 320.302 386.988 319.75 387.324V387.396C320.542 387.684 321.202 388.38 321.73 389.484L324.826 396H320.182L318.022 390.564C317.542 389.484 317.05 388.944 316.546 388.944H313.99V396H309.706ZM341.389 393.84C339.805 395.52 337.753 396.36 335.233 396.36C332.713 396.36 330.661 395.52 329.077 393.84C327.517 392.16 326.737 390.024 326.737 387.432C326.737 384.864 327.517 382.74 329.077 381.06C330.661 379.38 332.713 378.54 335.233 378.54C337.753 378.54 339.805 379.38 341.389 381.06C342.973 382.74 343.765 384.864 343.765 387.432C343.765 390 342.973 392.136 341.389 393.84ZM332.173 391.392C332.893 392.4 333.913 392.904 335.233 392.904C336.553 392.904 337.561 392.4 338.257 391.392C338.977 390.384 339.337 389.064 339.337 387.432C339.337 385.8 338.977 384.492 338.257 383.508C337.561 382.5 336.553 381.996 335.233 381.996C333.913 381.996 332.893 382.5 332.173 383.508C331.477 384.492 331.129 385.8 331.129 387.432C331.129 389.064 331.477 390.384 332.173 391.392ZM347.075 404.532V379.62C349.163 378.9 351.311 378.54 353.519 378.54C356.519 378.54 358.823 379.332 360.431 380.916C362.039 382.5 362.843 384.672 362.843 387.432C362.843 390.072 362.027 392.22 360.395 393.876C358.763 395.532 356.627 396.36 353.987 396.36C353.099 396.36 352.223 396.228 351.359 395.964V404.532H347.075ZM351.359 392.364C352.103 392.652 352.871 392.796 353.663 392.796C355.223 392.796 356.411 392.328 357.227 391.392C358.043 390.432 358.451 389.112 358.451 387.432C358.451 385.656 357.995 384.324 357.083 383.436C356.195 382.524 354.959 382.068 353.375 382.068C352.727 382.068 352.055 382.164 351.359 382.356V392.364ZM380.096 393.84C378.512 395.52 376.46 396.36 373.94 396.36C371.42 396.36 369.368 395.52 367.784 393.84C366.224 392.16 365.444 390.024 365.444 387.432C365.444 384.864 366.224 382.74 367.784 381.06C369.368 379.38 371.42 378.54 373.94 378.54C376.46 378.54 378.512 379.38 380.096 381.06C381.68 382.74 382.472 384.864 382.472 387.432C382.472 390 381.68 392.136 380.096 393.84ZM370.88 391.392C371.6 392.4 372.62 392.904 373.94 392.904C375.26 392.904 376.268 392.4 376.964 391.392C377.684 390.384 378.044 389.064 378.044 387.432C378.044 385.8 377.684 384.492 376.964 383.508C376.268 382.5 375.26 381.996 373.94 381.996C372.62 381.996 371.6 382.5 370.88 383.508C370.184 384.492 369.836 385.8 369.836 387.432C369.836 389.064 370.184 390.384 370.88 391.392ZM173.528 434V416.972H188.504V434H184.22V420.788H177.812V434H173.528ZM206.583 431.84C204.999 433.52 202.947 434.36 200.427 434.36C197.907 434.36 195.855 433.52 194.271 431.84C192.711 430.16 191.931 428.024 191.931 425.432C191.931 422.864 192.711 420.74 194.271 419.06C195.855 417.38 197.907 416.54 200.427 416.54C202.947 416.54 204.999 417.38 206.583 419.06C208.167 420.74 208.959 422.864 208.959 425.432C208.959 428 208.167 430.136 206.583 431.84ZM197.367 429.392C198.087 430.4 199.107 430.904 200.427 430.904C201.747 430.904 202.755 430.4 203.451 429.392C204.171 428.384 204.531 427.064 204.531 425.432C204.531 423.8 204.171 422.492 203.451 421.508C202.755 420.5 201.747 419.996 200.427 419.996C199.107 419.996 198.087 420.5 197.367 421.508C196.671 422.492 196.323 423.8 196.323 425.432C196.323 427.064 196.671 428.384 197.367 429.392ZM211.152 434L213.528 428.888C214.056 427.76 214.668 427.052 215.364 426.764V426.692C213.42 425.9 212.448 424.424 212.448 422.264C212.448 420.704 212.964 419.432 213.996 418.448C215.052 417.464 216.66 416.972 218.82 416.972H225.948V434H221.664V428.024H219C218.424 428.024 217.92 428.564 217.488 429.644L215.796 434H211.152ZM216.696 422.624C216.696 423.296 216.912 423.836 217.344 424.244C217.776 424.652 218.4 424.856 219.216 424.856H221.664V420.248H219.252C218.388 420.248 217.74 420.464 217.308 420.896C216.9 421.328 216.696 421.904 216.696 422.624ZM230.2 434V416.972H237.004C239.38 416.972 241.12 417.416 242.224 418.304C243.328 419.192 243.88 420.272 243.88 421.544C243.88 423.416 242.92 424.64 241 425.216V425.288C241.96 425.48 242.752 425.912 243.376 426.584C244 427.232 244.312 428.072 244.312 429.104C244.312 430.472 243.748 431.636 242.62 432.596C241.516 433.532 239.728 434 237.256 434H230.2ZM234.34 430.94H237.436C239.188 430.94 240.064 430.256 240.064 428.888C240.064 427.496 239.224 426.8 237.544 426.8H234.34V430.94ZM234.34 423.956H237.184C238.816 423.956 239.632 423.308 239.632 422.012C239.632 420.692 238.768 420.032 237.04 420.032H234.34V423.956ZM247.708 434V416.972H251.92V424.532C251.92 425.636 251.872 426.86 251.776 428.204H251.848C252.496 427.124 253.252 425.936 254.116 424.64L259.444 416.972H263.62V434H259.408V426.44C259.408 425.336 259.456 424.112 259.552 422.768H259.48C258.664 424.16 257.908 425.348 257.212 426.332L251.884 434H247.708ZM271.741 434V420.536H266.557V416.972H282.181L281.065 420.536H276.025V434H271.741ZM292.504 434.36C289.816 434.36 287.704 433.544 286.168 431.912C284.656 430.256 283.9 428.156 283.9 425.612C283.9 422.996 284.752 420.836 286.456 419.132C288.184 417.404 290.332 416.54 292.9 416.54C294.748 416.54 296.272 416.924 297.472 417.692V421.328C296.248 420.44 294.868 419.996 293.332 419.996C291.772 419.996 290.536 420.512 289.624 421.544C288.736 422.576 288.292 423.896 288.292 425.504C288.292 427.232 288.724 428.564 289.588 429.5C290.452 430.436 291.628 430.904 293.116 430.904C294.34 430.904 295.66 430.52 297.076 429.752L298.336 432.704C296.728 433.808 294.784 434.36 292.504 434.36ZM299.711 434L302.087 428.888C302.615 427.76 303.227 427.052 303.923 426.764V426.692C301.979 425.9 301.007 424.424 301.007 422.264C301.007 420.704 301.523 419.432 302.555 418.448C303.611 417.464 305.219 416.972 307.379 416.972H314.507V434H310.223V428.024H307.559C306.983 428.024 306.479 428.564 306.047 429.644L304.355 434H299.711ZM305.255 422.624C305.255 423.296 305.471 423.836 305.903 424.244C306.335 424.652 306.959 424.856 307.775 424.856H310.223V420.248H307.811C306.947 420.248 306.299 420.464 305.867 420.896C305.459 421.328 305.255 421.904 305.255 422.624ZM334.376 442.532V434.324C331.616 434.06 329.48 433.112 327.968 431.48C326.48 429.848 325.736 427.844 325.736 425.468C325.736 423.092 326.48 421.088 327.968 419.456C329.48 417.824 331.616 416.876 334.376 416.612V409.232H338.48V416.612C341.24 416.876 343.376 417.824 344.888 419.456C346.4 421.088 347.156 423.092 347.156 425.468C347.156 427.844 346.4 429.848 344.888 431.48C343.376 433.112 341.24 434.06 338.48 434.324V442.532H334.376ZM334.412 430.796V420.104C333.02 420.296 331.928 420.896 331.136 421.904C330.344 422.888 329.948 424.076 329.948 425.468C329.948 426.86 330.344 428.06 331.136 429.068C331.928 430.052 333.02 430.628 334.412 430.796ZM338.48 430.796C339.872 430.628 340.964 430.052 341.756 429.068C342.548 428.06 342.944 426.86 342.944 425.468C342.944 424.076 342.548 422.876 341.756 421.868C340.964 420.86 339.872 420.272 338.48 420.104V430.796ZM364.434 431.84C362.85 433.52 360.798 434.36 358.278 434.36C355.758 434.36 353.706 433.52 352.122 431.84C350.562 430.16 349.782 428.024 349.782 425.432C349.782 422.864 350.562 420.74 352.122 419.06C353.706 417.38 355.758 416.54 358.278 416.54C360.798 416.54 362.85 417.38 364.434 419.06C366.018 420.74 366.81 422.864 366.81 425.432C366.81 428 366.018 430.136 364.434 431.84ZM355.218 429.392C355.938 430.4 356.958 430.904 358.278 430.904C359.598 430.904 360.606 430.4 361.302 429.392C362.022 428.384 362.382 427.064 362.382 425.432C362.382 423.8 362.022 422.492 361.302 421.508C360.606 420.5 359.598 419.996 358.278 419.996C356.958 419.996 355.938 420.5 355.218 421.508C354.522 422.492 354.174 423.8 354.174 425.432C354.174 427.064 354.522 428.384 355.218 429.392ZM374.116 434V420.536H368.932V416.972H384.556L383.44 420.536H378.4V434H374.116ZM400.927 431.84C399.343 433.52 397.291 434.36 394.771 434.36C392.251 434.36 390.199 433.52 388.615 431.84C387.055 430.16 386.275 428.024 386.275 425.432C386.275 422.864 387.055 420.74 388.615 419.06C390.199 417.38 392.251 416.54 394.771 416.54C397.291 416.54 399.343 417.38 400.927 419.06C402.511 420.74 403.303 422.864 403.303 425.432C403.303 428 402.511 430.136 400.927 431.84ZM391.711 429.392C392.431 430.4 393.451 430.904 394.771 430.904C396.091 430.904 397.099 430.4 397.795 429.392C398.515 428.384 398.875 427.064 398.875 425.432C398.875 423.8 398.515 422.492 397.795 421.508C397.099 420.5 396.091 419.996 394.771 419.996C393.451 419.996 392.431 420.5 391.711 421.508C391.015 422.492 390.667 423.8 390.667 425.432C390.667 427.064 391.015 428.384 391.711 429.392Z" fill="#B6B6B6"/>\n' +
                                 '</svg>\n');
                         } else {
                             $('.popup__image').empty();
                             $('.popup__image').html('<div class="swiper-container"><div class="swiper-wrapper"></div></div>');

                             $.each(products_image_urls, function(index, imageUrl) {
                                 $('.popup__image .swiper-wrapper').append('<div class="swiper-slide"><img src="' + imageUrl + '"></div>');
                             });
                         }

                         $.magnificPopup.open({
                             type: 'inline',
                             midClick: true,
                             items: {
                                 src: '.popup-products',
                             },
                         });

                         var swiper = new Swiper('.popup__image .swiper-container', {
                             autoplay: {
                                 delay: 2000,
                             },
                         });
                     },
                     error: function(xhr, status, error) {
                         // Handle AJAX request error
                     }
                 });
             });
         });

         //ЯКОРИ МЕНЮ
         let categories = document.querySelectorAll('.anchor__name');

         for (let category of categories) {
             category.onclick = function (e) {
                 e.preventDefault();
                 let categoryLink = category.href,
                     categoryHash = categoryLink.substring(categoryLink.indexOf('#')),
                     elementToScroll = document.querySelector(categoryHash);

                 window.scrollTo({
                     top: getCoords(elementToScroll).top - 45,
                     behavior: "smooth",
                 })
             }
         }

    } else if (isExist('.about-body')) {
        //ПОПАП ВИДЕО О НАС
        $('.open-popup__video').magnificPopup({
            type: 'inline',
            // removalDelay: 500,
            callbacks: {
                beforeOpen: function () {
                    this.st.mainClass = this.st.el.attr('data-effect');
                },
                beforeClose: function() {
                    var video = this.content.find('video');
                    if (video.length) {
                        video[0].pause();
                    }
                },
                open: function() {
                    var video = this.content.find('video');
                    if (video.length) {
                        video[0].currentTime = 0;
                        video[0].play();
                    }
                }
            },
            midClick: true,
            items: {
                src: '.popup-video',
            }
        });

         // if (!isMobile()) {
         if (window.outerWidth >= 1200) {
             const stages = document.querySelectorAll('.second-column__stage');

             var technologySwiperDesktop = new Swiper(".technology-swiper.desktop", {
                 effect: "fade",
                 pagination: {
                     el: '.swiper-pagination',
                     type: 'bullets',
                     clickable: false,
                     bulletClass: 'swiper-pagination-bullet',
                     bulletActiveClass: 'swiper-pagination-bullet-active',
                     renderBullet: function (index, className) {
                         return '<span class="' + className + '" data-index="' + index + '">' +
                             '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                             '<path d="M5.99973 11.56C9.19193 11.56 11.7797 8.97221 11.7797 5.78C11.7797 2.58779 9.19193 0 5.99973 0C2.80752 0 0.219727 2.58779 0.219727 5.78C0.219727 8.97221 2.80752 11.56 5.99973 11.56Z" fill="#47B16F"/>' +
                             '</svg>' +
                             '</span>';
                     }
                 },
                 on: {
                     slideChange: function () {
                         var activeBullet = this.pagination.bullets[this.activeIndex];
                         var activeIndex = activeBullet.getAttribute('data-index');
                         var pathAttributes;

                         // Remove 'active' class from the slide element with data-index one greater than the new active index
                         var prevIndex = parseInt(activeIndex) + 1;
                         var prevPathAttributes = document.querySelectorAll('.pathAtribute[data-index="' + prevIndex + '"]');
                         prevPathAttributes.forEach(function (pathAttribute) {
                             pathAttribute.classList.remove('active');
                         });

                         // Remove 'activeArrow' class from the arrow element with data-index one greater than the new active index
                         var prevPathAttributesArrow = document.querySelectorAll('.pathAtributeArrow[data-index="' + prevIndex + '"]');
                         prevPathAttributesArrow.forEach(function (pathAttributeArrow) {
                             pathAttributeArrow.classList.remove('activeArrow');
                         });

                         if (activeIndex !== '0') {
                             pathAttributes = document.querySelectorAll('.pathAtribute[data-index="' + activeIndex + '"]');
                         }
                         if (activeIndex === '0') {
                             document.querySelectorAll('.pathAtribute').forEach(function (pathAttribute) {
                                 pathAttribute.classList.remove('active');
                             });

                             // Remove 'activeArrow' class from the first arrow element when activeIndex is 0
                             var firstPathAttributeArrow = document.querySelector('.pathAtributeArrow[data-index="0"]');
                             if (firstPathAttributeArrow) {
                                 firstPathAttributeArrow.classList.remove('activeArrow');
                             }
                         }
                         pathAttributes.forEach(function (pathAttribute) {
                             pathAttribute.classList.add('active');
                         });

                         var pathAttributesArrow;
                         if (activeIndex !== '0') {
                             pathAttributesArrow = document.querySelectorAll('.pathAtributeArrow[data-index="' + activeIndex + '"]');
                         }
                         if (activeIndex === '0') {
                             document.querySelectorAll('.pathAtributeArrow').forEach(function (pathAttributeArrow) {
                                 pathAttributeArrow.classList.remove('activeArrow');
                             });
                         }
                         pathAttributesArrow.forEach(function (pathAttributeArrow) {
                             pathAttributeArrow.classList.add('activeArrow');
                         });
                     }
                 }
             });

             window.addEventListener('scroll', function() {
                 // Проходимся по всем элементам second-column__stage
                 stages.forEach(stage => {
                     // Получаем прямоугольник (координаты и размеры) элемента
                     const rect = stage.getBoundingClientRect();
                     // Если верхняя граница элемента находится в пределах центра technology-swiper
                     if (rect.bottom > (window.innerHeight/2 - rect.height/2) && rect.bottom < (window.innerHeight/2 + rect.height/2)) {
                         // Получаем data-index у текущего second-column__stage
                         const currentIndex = stage.getAttribute('data-index');

                         // Ищем нужный swiper-slide по data-index
                         const slideTo = technologySwiperDesktop.$el.find(`[data-index="${currentIndex}"]`).index();

                         // Если слайд еще не активен, то переключаемся на него
                         if (technologySwiperDesktop.activeIndex !== slideTo) {
                             technologySwiperDesktop.slideTo(slideTo);
                         }
                     }
                 });
             });
         }
         // if (window.innerWidth < 1200)  {
         else {
             const swiperSliderMobile = new Swiper('.technology-swiper.mobile', {
                 autoplay: {
                     delay: 5000,
                     disableOnInteraction: false
                 },
                 autoHeight:true,
                 effect: 'fade',
                 pagination: {
                     el: ".swiper-pagination",
                     bulletClass: 'swiper-pagination-bullet',
                     bulletActiveClass: 'swiper-pagination-bullet-active',
                     renderBullet: function(index, className) {
                         return '<span class="' + className + '" data-index="' + index + '">' +
                             '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                             '<path d="M5.99973 11.56C9.19193 11.56 11.7797 8.97221 11.7797 5.78C11.7797 2.58779 9.19193 0 5.99973 0C2.80752 0 0.219727 2.58779 0.219727 5.78C0.219727 8.97221 2.80752 11.56 5.99973 11.56Z" fill="#47B16F"/>' +
                             '</svg>' +
                             '</span>';},
                     clickable: true
                 },
                 on: {
                     slideChange: function () {
                         var activeBullet = this.pagination.bullets[this.activeIndex];
                         var activeIndex = activeBullet.getAttribute('data-index');
                         var pathAttributes;
                         if (activeIndex === '0') {
                             pathAttributes = document.querySelectorAll('.pathAtribute[data-index="7"]');
                         } else {
                             pathAttributes = document.querySelectorAll('.pathAtribute[data-index="' + activeIndex + '"]');
                         }
                         if (activeIndex === '1') {
                             document.querySelectorAll('.pathAtribute').forEach(function (pathAttribute) {
                                 pathAttribute.classList.remove('active');
                             });
                         }
                         pathAttributes.forEach(function (pathAttribute) {
                             pathAttribute.classList.add('active');
                         });


                         var pathAttributesArrow;
                         if (activeIndex === '0') {
                             pathAttributesArrow = document.querySelectorAll('.pathAtributeArrow[data-index="7"]');
                         } else {
                             pathAttributesArrow = document.querySelectorAll('.pathAtributeArrow[data-index="' + activeIndex + '"]');
                         }
                         if (activeIndex === '1') {
                             document.querySelectorAll('.pathAtributeArrow').forEach(function (pathAttributeArrow) {
                                 pathAttributeArrow.classList.remove('activeArrow');
                             });
                         }
                         pathAttributesArrow.forEach(function (pathAttributeArrow) {
                             pathAttributeArrow.classList.add('activeArrow');
                         });
                     }
                 }
             });

             var paginationBullets = document.querySelectorAll('.swiper-pagination-bullet');
             paginationBullets.forEach(function (bullet) {
                 bullet.addEventListener('click', function () {
                     var activeBullet = this;
                     var activeIndex = activeBullet.getAttribute('data-index');
                     var pathAttributes = document.querySelectorAll('.pathAtribute');
                     pathAttributes.forEach(function (pathAttribute) {
                         var pathIndex = pathAttribute.getAttribute('data-index');
                         if (activeIndex === '7' || pathIndex <= activeIndex) {
                             pathAttribute.classList.add('active');
                         } else {
                             pathAttribute.classList.remove('active');
                         }
                     });


                     var pathAttributesArrow = document.querySelectorAll('.pathAtributeArrow');
                     pathAttributesArrow.forEach(function (pathAttributeArrow) {
                         var pathIndex = pathAttributeArrow.getAttribute('data-index');
                         if (activeIndex === '7' || pathIndex <= activeIndex) {
                             pathAttributeArrow.classList.add('activeArrow');
                         } else {
                             pathAttributeArrow.classList.remove('activeArrow');
                         }
                     });
                 });
             });
         }

        //СЛАЙДЕР ДЛЯ ДОСТИЖЕНИЙ (СТРАНИЦА О КОМПАНИИ)
        var swiper = new Swiper(".swiperAchievements", {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: {
                nextEl: ".swiperAchievements-button-next",
                prevEl: ".swiperAchievements-button-prev",
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 3,
                },
            },
        });

    } else if (isExist('.shops-body')) {
        //ЯНДЕКС КАРТЫ
        ymaps.ready(init);
        function init() {
            var myMap = new ymaps.Map('map', {
                    center: [48.4827, 135.084],
                    zoom: 11,
                    minZoom: 10,
                    maxZoom: 12
                }),
                objectManager = new ymaps.ObjectManager({
                    clusterize: true,
                    gridSize: 32
                });
            myMap.geoObjects.add(objectManager);
            objectManager.objects.options.set('preset', 'islands#redDotIcon');
            myMap.geoObjects.add(objectManager);
            objectManager.add({
                "type": "FeatureCollection",
                "features": [
                    {
                        "type": "Feature",
                        "id": 1,
                        "geometry": {
                            "type": "Point",
                            "coordinates": [48.451841, 135.155784]
                        },
                        "properties": {
                            "balloonContent": 'Магазин возле тепличного комплекса, ул. Донская, 2А',
                        }
                    }, {
                        "type": "Feature",
                        "id": 2,
                        "geometry": {
                            "type": "Point",
                            "coordinates": [48.483783, 135.094680]
                        },
                        "properties": {
                            "balloonContent": "Экодом, ул. Ленинградская, 28, торговое место 4.7-4.8 и 11",
                        }
                    }, {
                        "type": "Feature",
                        "id": 3,
                        "geometry": {
                            "type": "Point",
                            "coordinates": [48.500979, 135.102136]
                        },
                        "properties": {
                            "balloonContent": "Рынок Али, ул. Карла-Маркса, 101, место 73",
                        }
                    }, {
                        "type": "Feature",
                        "id": 4,
                        "geometry": {
                            "type": "Point",
                            "coordinates": [48.519572, 135.052765]
                        },
                        "properties": {
                            "balloonContent": "Торговое место на Шелеста, 85а",
                        }
                    }, {
                        "type": "Feature",
                        "id": 5,
                        "geometry": {
                            "type": "Point",
                            "coordinates": [48.486416, 135.067623]
                        },
                        "properties": {
                            "balloonContent": "Центральный рынок, торговое место 11.45 и 10.27",
                        }
                    }, {
                        "type": "Feature",
                        "id": 6,
                        "geometry": {
                            "type": "Point",
                            "coordinates": [48.436470, 135.101944]
                        },
                        "properties": {
                            "balloonContent": "Магазин на Вахова, 8Б/12",
                        }
                    }, {
                        "type": "Feature",
                        "id": 7,
                        "geometry": {
                            "type": "Point",
                            "coordinates": [48.469830, 135.070363]
                        },
                        "properties": {
                            "balloonContent": "Фермерский дворик, ул.Ленина, 19",
                        }
                    }
                ]
            });
            /* 2. Обработка списка и меток */
            //Клик по метке в карте
            objectManager.objects.events.add('click', function (e) {
                var objectId = e.get('objectId');
                viewObject(objectId);
            });
            //Клик в списке
            [].forEach.call(document.querySelectorAll('[data-objectId]'), function (el) {
                el.addEventListener('click', function () {
                    var objectId = el.getAttribute("data-objectId");
                    viewObject(objectId);
                });
            });

            var queryString = window.location.search;
            var urlParams = new URLSearchParams(queryString);
            var objectId = urlParams.get('objectId');

            if (objectId === '1') {
                viewObject(1);
            }

            // Что происходит при выборе метки или варианта из списка
            function viewObject(objectId) {
                // Удаляем со всего списка класс active затем добавляем к выбранному
                for (var object of document.querySelectorAll('[data-objectId]')) {
                    object.classList.remove('active');
                }
                document.querySelector('[data-objectId="' + objectId + '"]').classList.add('active');
                // Выделяем все метки в синий, затем выбранную в красную
                objectManager.objects.each(function (item) {
                    objectManager.objects.setObjectOptions(item.id, {
                        preset: 'islands#blueIcon'
                    });
                });
                objectManager.objects.setObjectOptions(objectId, {
                    preset: 'islands#redDotIcon'
                });
                // Центрирование по метке
                myMap.setCenter(objectManager.objects.getById(objectId).geometry.coordinates, 15, {
                    checkZoomRange: true
                });
            }
        }

    } else if (isExist('.single-vacancy')) {
         //ПОПАП ОТКЛИКА НА ВАКАНСИЮ
         $('.open-popup__vacancy').magnificPopup({
             type: 'inline',
             // removalDelay: 500,
             callbacks: {
                 beforeOpen: function () {
                     this.st.mainClass = this.st.el.attr('data-effect');
                 },
                 beforeClose: function() {
                     var form = this.content.find('form');
                     if (form.length) {
                         form[0].reset();
                     }
                 },
             },
             midClick: true,
             items: {
                 src: '.popup-vacancy',
             }
         });

         var input = document.querySelector('input[name=your-secondName]');
         input.addEventListener('input', function() {
             this.value = this.value.replace(/[^a-zA-Zа-яА-Я]/g, '');
         });

         var input = document.querySelector('input[name=your-secondPhone]');
         input.addEventListener('input', function() {
             this.value = this.value.replace(/[^\d]/g, '');
         });

    } else if (isExist('.default-page')) {

         if (document.querySelector('.default-page .wp-block-gallery') !== null) {

             let galItem = document.querySelectorAll('.wp-block-gallery .wp-block-image');
             galItem.forEach(e => {
                 src = e.querySelector('img').src;
                 org_html = e.innerHTML;
                 new_html = "<a href='" + src + "'>" + org_html + "</a>";
                 e.innerHTML = new_html;
             })
         }

         //ОБОРАЧИВАЕМ БЛОК ГАЛЛЕРЕИ-1 В СТРУКТУРУ СВАЙПЕРА
         if (document.querySelector('.default-page .wp-block-gallery.columns-1') !== null) {
             let sliders = document.querySelectorAll('.wp-block-gallery.columns-1');

             sliders.forEach((e, index) => {
                 e.classList.add('swiper');
                 e.classList.add('default-slider' + index);

                 org_html = e.innerHTML;
                 new_html = "<div class='swiper-wrapper'>" + org_html + "</div>";
                 e.innerHTML = new_html;

                 let sliderContainer = document.createElement('div');
                 sliderContainer.classList.add('slider-gallery');
                 e.parentNode.insertBefore(sliderContainer, e);
                 sliderContainer.appendChild(e);

                 let prevBtn = document.createElement('div');
                 prevBtn.classList.add('slider-btn', 'slider-btn--prev', 'prev' + index);
                 prevBtn.innerHTML = "<svg width=\"28\" height=\"28\" viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
                     "<path d=\"M14 28L0 14L14 0L16.4938 2.45L6.69375 12.25L28 12.25L28 15.75L6.69375 15.75L16.4938 25.55L14 28Z\" fill=\"#1F4D30\"/>\n" +
                     "</svg>\n";
                 sliderContainer.insertBefore(prevBtn, e);

                 let nextBtn = document.createElement('div');
                 nextBtn.classList.add('slider-btn', 'slider-btn--next', 'next' + index);
                 nextBtn.innerHTML = "<svg width=\"28\" height=\"28\" viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
                     "<path d=\"M14 6.8343e-07L28 14L14 28L11.5062 25.55L21.3063 15.75L-8.3642e-07 15.75L-5.3044e-07 12.25L21.3063 12.25L11.5063 2.45L14 6.8343e-07Z\" fill=\"#1F4D30\"/>\n" +
                     "</svg>\n";
                 sliderContainer.insertBefore(nextBtn, e.nextSibling);

                 let slide = e.querySelectorAll('.wp-block-image');
                 slide.forEach((el, index) => {
                     el.classList.add('swiper-slide');
                 });

                 const swiperSlider = new Swiper('.default-slider' + index, {
                     slidesPerView: 'auto',
                     loop: true,
                     navigation: {
                         nextEl: '.next' + index,
                         prevEl: '.prev' + index,
                     },
                 });
             });
         }

         $('.default-page .wp-block-gallery .wp-block-image').each(function () {
             $(this).magnificPopup({
                 delegate: 'a',
                 type: 'image',
                 gallery: {
                     enabled: true
                 }
             });
         });

     }

    window.addEventListener('load', function () {



        //ПОПАП ПОДТВЕРЖДЕНИЯ ИЛИ ОШИБКИ
        let wpcf7 = document.querySelectorAll('.wpcf7');
        for (let form of wpcf7) {
            form.addEventListener('wpcf7mailsent', function () {
                $.magnificPopup.close();
                $.magnificPopup.open({
                    type: 'inline',
                    items: {
                        src: '.popup__sent',
                    }
                });
            });
            form.addEventListener('wpcf7mailfailed', function () {
                $.magnificPopup.close();
                $.magnificPopup.open({
                    type: 'inline',
                    items: {
                        src: '.popup__failed',
                    }
                });
            });
        }
    });
});


