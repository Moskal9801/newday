<?php
//	add_action( 'wp_enqueue_scripts', function () {
//		wp_enqueue_style( 'main-style', get_stylesheet_uri() );
//		wp_enqueue_script( 'main-script', get_template_directory_uri() . '/main.js' );
//	} );
    add_action( 'wp_enqueue_scripts', function () {
        wp_enqueue_style( 'main-style', get_stylesheet_uri(), array(), filemtime( get_stylesheet_directory() . '/style.css' ) );
        wp_enqueue_script( 'main-script', get_template_directory_uri() . '/main.js', array(), filemtime( get_stylesheet_directory() . '/main.js' ) );
    } );
	add_action( 'wp_head', function () {
		echo '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
	} );
	add_filter( 'excerpt_length', function () {
		return 20;
	} );
	add_filter( 'excerpt_more', function ( $more ) {
		return '...';
	} );
	add_theme_support( 'post-thumbnails' );

    register_nav_menus(array(
        'top'    => 'Верхнее меню',
        'bottom' => 'Нижнее меню',
    ));

	add_action( 'admin_head', function () {
		wp_enqueue_script( 'cat-script', get_template_directory_uri() . '/cat.js' );
	} );

	add_filter( 'login_headerurl', function () {
		return 'https://01cat.ru';
	} );

	add_action( 'login_header', function () { ?>
        <style>
			#login h1 a {
				background: url("logo.png") center top no-repeat !important;
				width:      111px !important;
				height:     180px !important;
			}
        </style>
	<?php } );
	add_filter( 'admin_footer_text', function () {
		return '<b>Сделано:</b>
			<a href="https://01cat.ru/" target="_blank">Двоичный кот</a>
			<br>
			<b>Техническая поддержка:</b> тел. <a href="tel:+79145416354">+7 (914) 541-63-54</a>, email: <a href="mailto:hello@01cat.ru">hello@01cat.ru</a>';
	} );

	if ( function_exists( 'acf_add_options_page' ) ) {
		acf_add_options_page( array( 'page_title' => 'Контактные данные', 'menu_title' => 'Настройки сайта', 'menu_slug' => 'theme-general-settings', 'capability' => 'edit_posts', 'redirect' => false ) );
	}

add_filter( 'wpcf7_validate', 'my_form_validate', 10, 2 );

function clearPhone( $phone ) {
    $to_replace = [ ' ', '-', '(', ')', ];

    return str_replace( $to_replace, '', $phone );
}
function my_form_validate( $result, $tags ) {
    // Получим данные об отправляемой форме
    $form = WPCF7_Submission::get_instance();

    // Получаем данные полей
    $name = $form->get_posted_data( 'your-name' );
    $secondName = $form->get_posted_data( 'your-secondName' );
    $email = $form->get_posted_data( 'your-email' );
    $secondEmail = $form->get_posted_data( 'your-secondEmail' );
    $phone = $form->get_posted_data( 'your-phone' );
    $secondPhone = $form->get_posted_data( 'your-secondPhone' );
    $message = $form->get_posted_data( 'your-message' );

    // Текст ошибки
    $error_msg = 'Поле не заполнено';

    // Если оба поля не заполонены - выдать ошибку
    if ( empty( $name ) ) {
        $result->invalidate( 'your-name', $error_msg );
    }

    if ( empty( $secondName ) ) {
        $result->invalidate( 'your-secondName', $error_msg );
    }

    if ( empty( $email ) ) {
        $result->invalidate( 'your-email', $error_msg );
    }

    if (! filter_var( $email, FILTER_VALIDATE_EMAIL ) ) {
        $result->invalidate( 'your-email', 'Введите действительный адрес электронной почты' );
    }

    if ( empty( $secondEmail ) ) {
        $result->invalidate( 'your-secondEmail', $error_msg );
    }

    if (! filter_var( $secondEmail, FILTER_VALIDATE_EMAIL ) ) {
        $result->invalidate( 'your-secondEmail', 'Введите действительный адрес электронной почты' );
    }

    if ( empty( $phone ) ) {
        $result->invalidate( 'your-phone', $error_msg );
    }

    if ( empty( $secondPhone ) ) {
        $result->invalidate( 'your-secondPhone', $error_msg );
    }

    if ( empty( $message ) ) {
        $result->invalidate( 'your-message', $error_msg );
    }

    return $result;
}

// Обработчик AJAX запроса
add_action('wp_ajax_get_acf_fields', 'get_acf_fields_callback');
add_action('wp_ajax_nopriv_get_acf_fields', 'get_acf_fields_callback');

function get_acf_fields_callback() {
    $postID = $_POST['post_id'];

    $name = get_field('products-name', $postID);
    $products_image_urls = get_field('products-image', $postID);
    $sort = get_field('products-sort', $postID);
    $description = get_field('products-description', $postID);
    $features = get_field('products-features', $postID);

    if (have_rows('products-value', $postID)) {
        while (have_rows('products-value', $postID)) {
            the_row();
            $caloric = get_sub_field('products-caloric', $postID);
            $fats = get_sub_field('products-fats', $postID);
            $squirrels = get_sub_field('products-squirrels', $postID);
            $carbohydrates = get_sub_field('products-carbohydrates', $postID);
            $weight = get_sub_field('products-weight', $postID);
        }
    }

    $response = array(
        'name' => $name,
        'image' => $products_image_urls,
        'sort' => $sort,
        'description' => $description,
        'features' => $features,
        'caloric' => $caloric,
        'fats' => $fats,
        'squirrels' => $squirrels,
        'carbohydrates' => $carbohydrates,
        'weight' => $weight
    );

    wp_send_json_success($response);
}

class Custom_Menu_Walker extends Walker_Nav_Menu {
    function start_el(&$output, $item, $depth = 0, $args = array(), $id = 0) {
        $classes = empty($item->classes) ? array() : (array) $item->classes;
        $class_names = join(' ', apply_filters('nav_menu_css_class', array_filter($classes), $item));

        // проверяем текущую страницу
        if (is_page($item->object_id)) {
            $class_names .= ' active';
        }

        $output .= "<li id='menu-item-$item->ID' class='$class_names'>";
        $attributes  = !empty($item->attr_title) ? ' title="'  . esc_attr($item->attr_title) .'"' : '';
        $attributes .= !empty($item->target)     ? ' target="' . esc_attr($item->target    ) .'"' : '';
        $attributes .= !empty($item->xfn)        ? ' rel="'    . esc_attr($item->xfn       ) .'"' : '';
        $attributes .= !empty($item->url)        ? ' href="'   . esc_attr($item->url       ) .'"' : '';
        $item_output = $args->before;
        $item_output .= '<a'. $attributes .'>';
        $item_output .= $args->link_before .apply_filters('the_title', $item->title, $item->ID) .$args->link_after;
        $item_output .= '</a>';
        $item_output .= $args->after;
        $output .= apply_filters('walker_nav_menu_start_el', $item_output, $item, $depth, $args);
    }
}


/**
 * Сollapse ADMIN-BAR (Toolbar) into left-top corner.
 *
 * @version 1.0
 */
final class Kama_Collapse_Toolbar {

    public static function init(){
        add_action( 'admin_bar_init', [ __CLASS__, 'hooks' ] );
    }

    public static function hooks(){

        // remove html margin bumps
        remove_action( 'wp_head', '_admin_bar_bump_cb' );

        add_action( 'wp_head', [ __CLASS__, 'collapse_styles' ] );
    }

    public static function collapse_styles(){

        // do nothing for admin-panel.
        // Remove this if you want to collapse admin-bar in admin-panel too.
        if( is_admin() ){
            return;
        }

        ob_start();
        ?>
        <style id="kama_collapse_admin_bar">
            #wpadminbar{ background:none; float:left; width:auto; height:auto; bottom:0; min-width:0 !important; }
            #wpadminbar > *{ float:left !important; clear:both !important; }
            #wpadminbar .ab-top-menu li{ float:none !important; }
            #wpadminbar .ab-top-secondary{ float: none !important; }
            #wpadminbar .ab-top-menu>.menupop>.ab-sub-wrapper{ top:0; left:100%; white-space:nowrap; }
            #wpadminbar .quicklinks>ul>li>a{ padding-right:17px; }
            #wpadminbar .ab-top-secondary .menupop .ab-sub-wrapper{ left:100%; right:auto; }
            html{ margin-top:0!important; }

            #wpadminbar{ overflow:hidden; width:33px; height:30px; }
            #wpadminbar:hover{ overflow:visible; width:auto; height:auto; background:rgba(102,102,102,.7); }

            * the color of the main icon *
            #wp-admin-bar-<?= is_multisite() ? 'my-sites' : 'site-name' ?> .ab-item:before{ color:#797c7d; }

            * hide wp-logo *
            #wp-admin-bar-wp-logo{ display:none; }
            * #wp-admin-bar-search{ display:none; } *

            * edit for twentysixteen *
            body.admin-bar:before{ display:none; }

            * for almin panel --- *
            @media screen and ( min-width: 782px ) {
                html.wp-toolbar{ padding-top:0 !important; }
                #wpadminbar:hover{ background:rgba(102,102,102,1); }
                #adminmenu{ margin-top:48px !important; }
            }

            * Gutenberg *
            #wpwrap .edit-post-header{ top:0; }
            #wpwrap .edit-post-sidebar{ top:56px; }
        </style>
        <?php
        $styles = ob_get_clean();

        echo preg_replace( '/[\n\t]/', '', $styles ) ."\n";
    }
}
Kama_Collapse_Toolbar::init();



