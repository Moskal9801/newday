<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе установки.
 * Необязательно использовать веб-интерфейс, можно скопировать файл в "wp-config.php"
 * и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://ru.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'newday_db' );

/** Имя пользователя MySQL */
define( 'DB_USER', 'root' );

/** Пароль к базе данных MySQL */
define( 'DB_PASSWORD', '' );

/** Имя сервера MySQL */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу. Можно сгенерировать их с помощью
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}.
 *
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными.
 * Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'fk/t=WszDy4VO9>gkqrKIIXx#7Sm4J:lq*2ZmQ _KmP@DjX9tjw4xKn[K_(H2fao' );
define( 'SECURE_AUTH_KEY',  'I~+_?dp~|Z^}0F{J)[HzOZl ?9>q^y?^+[)Mv?(G@_}]A*9aD8A%p:Su|UYcK3f.' );
define( 'LOGGED_IN_KEY',    'P9!&P.!fVQS./WQ1I)J8n7)*;BZtI1-MEtZIq(D<f-[-$:*Hkel?;k.]mU}ndmtr' );
define( 'NONCE_KEY',        'X&NIVrMaCP<vj<5U$*_9S^v<u.k9ek_p3IMz%Sw/d_>c#tB<F*`uW3C[^A/H8-z&' );
define( 'AUTH_SALT',        ',?c-H(:uT%!}%tkZqAmY*jA]4:=D6ZjLSa8c%,_ii<:N7i$sPTHY~yh(Or7B|kS5' );
define( 'SECURE_AUTH_SALT', '^[+O]li&MPbjlR$A(9La>l5[Myrf!i.ZFpr+Rx`9PpcMm~?JH^^uQdkYqxx=Zr3,' );
define( 'LOGGED_IN_SALT',   'z{7,]vAPLKl%3/GN3Yb:lQ9z:#|s,86V%jB]Tn*b93}W!R6RWuh*sWUg-|T:;[=}' );
define( 'NONCE_SALT',       'D)K`UtD&q+TixZ*}=0H{1oT&uQB#$-Chq-RZ1]3LVO1hFA?|4Fa+@#z/4Dpu[V)/' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в документации.
 *
 * @link https://ru.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Произвольные значения добавляйте между этой строкой и надписью "дальше не редактируем". */



/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once ABSPATH . 'wp-settings.php';
