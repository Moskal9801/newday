<?php
get_header();
?>

<div class="vacancy">
<!--    --><?php //if (is_mobile()) { ?>
        <div class="mobile-header__banner">
            <div class="banner__content">
<!--                <a href="/" class="content__first-logo">-->
<!--                    <svg width="76" height="76" viewBox="0 0 117 117" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                        <path d="M117 58.5C117 70.0702 113.569 81.3806 107.141 91.0008C100.713 100.621 91.5765 108.119 80.887 112.547C70.1975 116.975 58.4351 118.133 47.0872 115.876C35.7393 113.619 25.3156 108.047 17.1343 99.8657C8.9529 91.6843 3.38132 81.2607 1.12409 69.9128C-1.13315 58.5649 0.0253425 46.8025 4.45307 36.113C8.88079 25.4235 16.3789 16.2871 25.9992 9.85903C35.6194 3.43096 46.9298 0 58.5 0C66.1823 0 73.7894 1.51315 80.887 4.45305C87.9845 7.39295 94.4335 11.702 99.8657 17.1342C105.298 22.5665 109.607 29.0155 112.547 36.113C115.487 43.2106 117 50.8177 117 58.5Z" fill="#8EBF2F"/>-->
<!--                        <path d="M29.9716 56.6089V45.3911C30.0146 45.0939 29.9923 44.7911 29.906 44.5032C29.8197 44.2153 29.6715 43.949 29.4715 43.7222C29.2714 43.4955 29.0242 43.3137 28.7464 43.1891C28.4687 43.0645 28.167 43 27.8618 43C27.5565 43 27.2548 43.0645 26.977 43.1891C26.6993 43.3137 26.4521 43.4955 26.252 43.7222C26.052 43.949 25.9038 44.2153 25.8175 44.5032C25.7312 44.7911 25.7089 45.0939 25.7519 45.3911V48.9604H21.241V45.3911C21.284 45.0939 21.2617 44.7911 21.1754 44.5032C21.0891 44.2153 20.9409 43.949 20.7409 43.7222C20.5408 43.4955 20.2936 43.3137 20.0159 43.1891C19.7381 43.0645 19.4364 43 19.1311 43C18.8259 43 18.5242 43.0645 18.2465 43.1891C17.9687 43.3137 17.7215 43.4955 17.5214 43.7222C17.3214 43.949 17.1732 44.2153 17.0869 44.5032C17.0006 44.7911 16.9782 45.0939 17.0213 45.3911V56.6089C16.9782 56.9061 17.0006 57.2089 17.0869 57.4968C17.1732 57.7847 17.3214 58.051 17.5214 58.2778C17.7215 58.5045 17.9687 58.6863 18.2465 58.8109C18.5242 58.9355 18.8259 59 19.1311 59C19.4364 59 19.7381 58.9355 20.0159 58.8109C20.2936 58.6863 20.5408 58.5045 20.7409 58.2778C20.9409 58.051 21.0891 57.7847 21.1754 57.4968C21.2617 57.2089 21.284 56.9061 21.241 56.6089V52.6904H25.759V56.6089C25.716 56.9061 25.7383 57.2089 25.8246 57.4968C25.9109 57.7847 26.0591 58.051 26.2591 58.2778C26.4592 58.5045 26.7064 58.6863 26.9841 58.8109C27.2619 58.9355 27.5636 59 27.8689 59C28.1741 59 28.4758 58.9355 28.7535 58.8109C29.0313 58.6863 29.2785 58.5045 29.4786 58.2778C29.6786 58.051 29.8268 57.7847 29.9131 57.4968C29.9994 57.2089 30.0218 56.9061 29.9787 56.6089" fill="white"/>-->
<!--                        <path d="M46.6468 45.3299C45.7149 44.4026 44.5687 43.7191 43.3097 43.34C42.0507 42.9608 40.7176 42.8977 39.4283 43.1562C38.1391 43.4147 36.9334 43.9868 35.918 44.8219C34.9026 45.6571 34.1087 46.7295 33.6065 47.9444C33.1043 49.1593 32.9094 50.4792 33.0389 51.7873C33.1684 53.0954 33.6184 54.3515 34.3491 55.4444C35.0797 56.5373 36.0685 57.4334 37.228 58.0533C38.3875 58.6733 39.6819 58.998 40.9968 58.9988C42.0498 59.0173 43.0953 58.818 44.0676 58.4134C45.0398 58.0088 45.918 57.4077 46.6468 56.6477C47.3925 55.908 47.9843 55.0281 48.3882 54.0587C48.7921 53.0893 49 52.0495 49 50.9994C49 49.9493 48.7921 48.9095 48.3882 47.9401C47.9843 46.9707 47.3925 46.0908 46.6468 45.3511M43.6735 53.7177C43.325 54.0751 42.9073 54.3577 42.4459 54.5483C41.9845 54.7389 41.489 54.8334 40.9898 54.8261C40.4879 54.8299 39.9903 54.7338 39.5259 54.5436C39.0615 54.3533 38.6396 54.0726 38.2847 53.7178C37.9298 53.363 37.649 52.9413 37.4587 52.477C37.2684 52.0127 37.1723 51.5153 37.176 51.0135C37.1742 50.5113 37.2714 50.0137 37.4621 49.5491C37.6529 49.0845 37.9334 48.6621 38.2876 48.306C38.6419 47.9499 39.0629 47.6671 39.5265 47.4739C39.9902 47.2806 40.4874 47.1807 40.9898 47.1797C42.0015 47.1908 42.9683 47.599 43.6817 48.3162C44.3951 49.0334 44.798 50.0021 44.8035 51.0135C44.8097 51.5175 44.7127 52.0174 44.5184 52.4825C44.324 52.9475 44.0365 53.3679 43.6735 53.7177Z" fill="white"/>-->
<!--                        <path d="M53.1707 58.9008H58.9444C60.277 58.9376 61.5714 58.4514 62.5529 57.5454C63.0333 57.0769 63.4101 56.512 63.6588 55.8876C63.9075 55.2633 64.0225 54.5933 63.9964 53.9213C64.0175 53.2849 63.8603 52.6553 63.5426 52.1043C63.2249 51.5533 62.7594 51.1029 62.1993 50.8046C62.693 50.5032 63.0989 50.0766 63.3764 49.5676C63.6538 49.0587 63.793 48.4854 63.7799 47.9053C63.8101 47.2447 63.6966 46.5854 63.4473 45.9733C63.198 45.3612 62.819 44.811 62.3364 44.361C61.3566 43.4523 60.061 42.9657 58.7279 43.0056H53.1707C52.8809 42.9839 52.5898 43.0253 52.3173 43.127C52.0448 43.2286 51.7974 43.388 51.5919 43.5944C51.3864 43.8008 51.2276 44.0493 51.1264 44.323C51.0252 44.5966 50.984 44.8889 51.0056 45.18V56.8206C50.9852 57.1114 51.0273 57.4032 51.1289 57.6762C51.2305 57.9493 51.3893 58.1973 51.5946 58.4035C51.7998 58.6096 52.0468 58.7691 52.3187 58.8711C52.5906 58.9732 52.8811 59.0154 53.1707 58.995M55.3358 46.9268H58.3309C58.4797 46.9268 58.6271 46.9563 58.7646 47.0135C58.902 47.0706 59.0269 47.1545 59.1322 47.2601C59.2374 47.3658 59.3208 47.4913 59.3778 47.6293C59.4347 47.7674 59.464 47.9154 59.464 48.0648C59.464 48.2142 59.4347 48.3622 59.3778 48.5003C59.3208 48.6383 59.2374 48.7638 59.1322 48.8695C59.0269 48.9751 58.902 49.0589 58.7646 49.1161C58.6271 49.1733 58.4797 49.2028 58.3309 49.2028H55.3358V46.9268ZM55.3358 52.6456H58.4392C58.6114 52.6265 58.7857 52.6452 58.9501 52.7004C59.1144 52.7555 59.2649 52.8458 59.3911 52.965C59.5174 53.0842 59.6164 53.2295 59.6813 53.3908C59.7462 53.5522 59.7755 53.7257 59.7671 53.8996C59.7689 54.0703 59.7349 54.2395 59.6674 54.3962C59.5998 54.553 59.5001 54.6936 59.3749 54.8092C59.2497 54.9247 59.1017 55.0124 58.9404 55.0668C58.7792 55.1211 58.6085 55.1408 58.4392 55.1245H55.3358V52.6456Z" fill="white"/>-->
<!--                        <path d="M69.1332 58.9606H74.9242C76.2614 58.9987 77.5608 58.5334 78.5436 57.6646C79.0255 57.2166 79.4034 56.6765 79.6528 56.0795C79.9023 55.4825 80.0176 54.8419 79.9914 54.1994C80.0329 53.5696 79.924 52.939 79.6732 52.3554C79.4224 51.7719 79.0361 51.2506 78.5436 50.8312C77.5362 50.0101 76.2467 49.5755 74.9242 49.6114H71.3048V45.7858C71.2311 45.2902 70.973 44.8367 70.5781 44.5087C70.1831 44.1806 69.6778 44 69.1549 44C68.632 44 68.1267 44.1806 67.7318 44.5087C67.3368 44.8367 67.0788 45.2902 67.005 45.7858V56.9161C66.9846 57.1941 67.0268 57.4732 67.1287 57.7343C67.2306 57.9954 67.3899 58.2325 67.5958 58.4296C67.8016 58.6267 68.0493 58.7792 68.322 58.8768C68.5948 58.9744 68.8862 59.0147 69.1766 58.9952M71.3483 52.9242H74.3234C75.1776 52.9242 75.7712 53.3608 75.7712 54.1231C75.7712 54.8855 75.1921 55.2944 74.3234 55.2944H71.2831L71.3483 52.9242Z" fill="white"/>-->
<!--                        <path d="M81.9798 58.9745C82.2494 58.994 82.5199 58.9537 82.773 58.8564C83.0261 58.7591 83.256 58.607 83.4471 58.4105C83.6381 58.2139 83.786 57.9774 83.8805 57.717C83.9751 57.4566 84.0143 57.1784 83.9954 56.9011V45.7809C83.9269 45.2867 83.6874 44.8344 83.3208 44.5073C82.9543 44.1801 82.4853 44 82 44C81.5147 44 81.0457 44.1801 80.6792 44.5073C80.3126 44.8344 80.0731 45.2867 80.0046 45.7809V56.9218C79.9857 57.1991 80.0249 57.4774 80.1194 57.7378C80.214 57.9982 80.3619 58.2346 80.5529 58.4312C80.744 58.6277 80.9739 58.7798 81.227 58.8771C81.4801 58.9744 81.7506 59.0147 82.0202 58.9952" fill="white"/>-->
<!--                        <path d="M97.8889 43.0346C97.5377 43.0252 97.1897 43.1044 96.8757 43.2649C96.5618 43.4255 96.2916 43.6626 96.0891 43.9551L91.2305 50.4784V45.18C91.158 44.6617 90.9044 44.1874 90.5162 43.8443C90.1281 43.5012 89.6315 43.3123 89.1177 43.3123C88.6038 43.3123 88.1073 43.5012 87.7191 43.8443C87.331 44.1874 87.0774 44.6617 87.0049 45.18V56.8205C86.9849 57.1114 87.0263 57.4032 87.1265 57.6762C87.2266 57.9493 87.3832 58.1973 87.5855 58.4035C87.7878 58.6096 88.0312 58.7691 88.2992 58.8711C88.5672 58.9732 88.8536 59.0154 89.139 58.995C89.5133 58.9818 89.8791 58.8775 90.2058 58.6909C90.5326 58.5043 90.8107 58.2408 91.017 57.9223L95.769 51.5294V56.8423C95.8415 57.3606 96.0951 57.8349 96.4832 58.178C96.8713 58.5211 97.3679 58.71 97.8817 58.71C98.3956 58.71 98.8922 58.5211 99.2803 58.178C99.6684 57.8349 99.922 57.3606 99.9945 56.8423V45.18C100.016 44.8889 99.9751 44.5966 99.8754 44.323C99.7757 44.0493 99.6192 43.8008 99.4166 43.5944C99.214 43.388 98.9702 43.2286 98.7016 43.127C98.433 43.0253 98.1461 42.9839 97.8604 43.0056" fill="white"/>-->
<!--                        <path d="M57.1514 65.8773C57.6417 65.8773 58.1119 65.6733 58.4586 65.3102C58.8052 64.9471 59 64.4546 59 63.9411C59 63.4276 58.8052 62.9352 58.4586 62.5721C58.1119 62.209 57.6417 62.005 57.1514 62.005H50.0824C49.8046 61.9846 49.5259 62.0268 49.265 62.1289C49.0042 62.231 48.7673 62.3906 48.5704 62.5968C48.3735 62.803 48.2211 63.0511 48.1237 63.3244C48.0262 63.5976 47.9858 63.8895 48.0053 64.1804V75.819C47.9847 76.1102 48.0242 76.4027 48.1213 76.6764C48.2183 76.9502 48.3706 77.1988 48.5678 77.4053C48.765 77.6118 49.0023 77.7713 49.2637 77.873C49.5251 77.9747 49.8044 78.0161 50.0824 77.9944H57.1514C57.6417 77.9944 58.1119 77.7904 58.4586 77.4273C58.8052 77.0642 59 76.5718 59 76.0583C59 75.5448 58.8052 75.0523 58.4586 74.6892C58.1119 74.3261 57.6417 74.1221 57.1514 74.1221H52.1387V71.7727H55.8775C56.3677 71.7727 56.8379 71.5687 57.1846 71.2056C57.5313 70.8425 57.7261 70.35 57.7261 69.8366C57.7261 69.3231 57.5313 68.8306 57.1846 68.4675C56.8379 68.1044 56.3677 67.9004 55.8775 67.9004H52.1387V65.9208L57.1514 65.8773Z" fill="white"/>-->
<!--                        <path d="M72.8707 62.2953C72.5851 62.2745 72.2984 62.3143 72.03 62.4121C71.7616 62.51 71.5178 62.6635 71.3153 62.8622C71.1129 63.0609 70.9565 63.3001 70.8568 63.5635C70.7571 63.8269 70.7165 64.1084 70.7378 64.3886V67.9473H66.2445V64.3886C66.2876 64.0918 66.2652 63.7893 66.1788 63.5017C66.0925 63.214 65.9442 62.948 65.7439 62.7215C65.5437 62.495 65.2963 62.3134 65.0183 62.1889C64.7404 62.0644 64.4384 62 64.1329 62C63.8274 62 63.5254 62.0644 63.2475 62.1889C62.9695 62.3134 62.7221 62.495 62.5218 62.7215C62.3216 62.948 62.1733 63.214 62.087 63.5017C62.0006 63.7893 61.9782 64.0918 62.0213 64.3886V75.5879C61.9782 75.8847 62.0006 76.1872 62.087 76.4748C62.1733 76.7624 62.3216 77.0285 62.5218 77.255C62.7221 77.4815 62.9695 77.6631 63.2475 77.7876C63.5254 77.9121 63.8274 77.9765 64.1329 77.9765C64.4384 77.9765 64.7404 77.9121 65.0183 77.7876C65.2963 77.6631 65.5437 77.4815 65.7439 77.255C65.9442 77.0285 66.0925 76.7624 66.1788 76.4748C66.2652 76.1872 66.2876 75.8847 66.2445 75.5879V71.6734H70.7591V75.5879C70.7122 75.8862 70.7317 76.1909 70.8161 76.4812C70.9005 76.7715 71.0479 77.0404 71.2481 77.2695C71.4484 77.4986 71.6967 77.6825 71.9762 77.8086C72.2556 77.9347 72.5595 78 72.8671 78C73.1747 78 73.4786 77.9347 73.758 77.8086C74.0375 77.6825 74.2858 77.4986 74.4861 77.2695C74.6863 77.0404 74.8337 76.7715 74.9181 76.4812C75.0025 76.1909 75.022 75.8862 74.9751 75.5879V64.3677C74.9964 64.0875 74.9558 63.806 74.8561 63.5426C74.7564 63.2792 74.6 63.0399 74.3975 62.8412C74.1951 62.6425 73.9513 62.489 73.6829 62.3912C73.4145 62.2934 73.1278 62.2535 72.8422 62.2744" fill="white"/>-->
<!--                        <path d="M88.5374 69.6231C87.5237 68.7765 86.2266 68.3331 84.8993 68.3794H81.2973V64.4567C81.3447 64.1528 81.325 63.8424 81.2395 63.5468C81.1539 63.2512 81.0046 62.9773 80.8017 62.744C80.5988 62.5106 80.3472 62.3233 80.064 62.1949C79.7808 62.0665 79.4729 62 79.1612 62C78.8496 62 78.5416 62.0665 78.2585 62.1949C77.9753 62.3233 77.7237 62.5106 77.5208 62.744C77.3179 62.9773 77.1685 63.2512 77.083 63.5468C76.9975 63.8424 76.9777 64.1528 77.0252 64.4567V75.8626C77.0037 76.148 77.0448 76.4346 77.1458 76.7029C77.2468 76.9712 77.4053 77.2148 77.6105 77.4172C77.8156 77.6196 78.0626 77.7759 78.3346 77.8755C78.6066 77.9752 78.8971 78.0157 79.1864 77.9945H84.9497C86.2799 78.0306 87.5721 77.5539 88.5518 76.6656C89.0309 76.206 89.4068 75.6522 89.655 75.04C89.9032 74.4279 90.0182 73.7711 89.9926 73.1124C90.0307 72.4658 89.921 71.8192 89.6716 71.2201C89.4222 70.6211 89.0395 70.085 88.5518 69.6515M84.2725 74.2068H81.2756V71.7834H84.2725C85.1298 71.7834 85.7134 72.224 85.7134 73.0058C85.7134 73.7875 85.137 74.2068 84.2725 74.2068Z" fill="white"/>-->
<!--                        <path d="M42.957 73.9438H42.4232L40.0175 65.1387C39.7803 64.2381 39.258 63.4425 38.5316 62.875C37.8053 62.3076 36.9154 62 36 62C35.0846 62 34.1947 62.3076 33.4684 62.875C32.742 63.4425 32.2197 64.2381 31.9825 65.1387L29.5768 73.9438H29.0846C28.8065 73.9239 28.5273 73.9651 28.2661 74.0645C28.005 74.1639 27.7677 74.3193 27.5706 74.5201C27.3734 74.7209 27.2209 74.9625 27.1233 75.2286C27.0256 75.4946 26.9852 75.7789 27.0048 76.0622V78.1805C27.0754 78.6854 27.3226 79.1475 27.7008 79.4817C28.0791 79.816 28.563 80 29.0638 80C29.5646 80 30.0485 79.816 30.4268 79.4817C30.805 79.1475 31.0522 78.6854 31.1228 78.1805V77.7568H40.8772V78.1805C40.9478 78.6854 41.195 79.1475 41.5732 79.4817C41.9515 79.816 42.4354 80 42.9362 80C43.437 80 43.9209 79.816 44.2992 79.4817C44.6774 79.1475 44.9246 78.6854 44.9952 78.1805V76.0622C45.0147 75.7789 44.9744 75.4946 44.8767 75.2286C44.7791 74.9625 44.6266 74.7209 44.4294 74.5201C44.2323 74.3193 43.995 74.1639 43.7339 74.0645C43.4727 73.9651 43.1935 73.9239 42.9154 73.9438M33.8613 73.9438L35.9411 66.2543L38.0209 73.9438H33.8613Z" fill="white"/>-->
<!--                        <path d="M93.0263 42.9917C94.5128 42.9917 96.3154 42.1113 96.897 40.4269C96.9907 40.1537 97.0211 39.8605 96.9856 39.5721C96.9502 39.2836 96.8499 39.0086 96.6934 38.7704C96.5369 38.5321 96.3288 38.3376 96.0866 38.2035C95.8445 38.0694 95.5756 37.9996 95.3028 38H95.1591C94.8414 38.0005 94.5301 38.0962 94.2609 38.2763C93.9917 38.4563 93.7754 38.7134 93.6367 39.0182C93.4612 39.16 93.2464 39.2354 93.0263 39.2326C92.8682 39.2317 92.7128 39.1893 92.5738 39.1092C92.4347 39.0291 92.3164 38.9137 92.2291 38.7733C92.071 38.5364 91.8621 38.3434 91.6197 38.2102C91.3773 38.077 91.1086 38.0075 90.8359 38.0077H90.6923C90.404 38.0081 90.1205 38.087 89.8688 38.2368C89.617 38.3866 89.4053 38.6024 89.2536 38.8638C89.1019 39.1251 89.0152 39.4234 89.0018 39.7305C88.9884 40.0375 89.0487 40.3431 89.177 40.6183C89.5546 41.3511 90.1127 41.96 90.791 42.3796C91.4693 42.7992 92.2421 43.0135 93.0263 42.9993" fill="white"/>-->
<!--                    </svg>-->
<!--                </a>-->
                <div class="content__text">
                    <div class="text__top">
                        Стань частью
                    </div>
                    <div class="text__bottom">
                        нашей команды
                    </div>
                </div>
                <div class="content__second-logo">
                    <svg width="299" height="45" viewBox="0 0 299 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M84.1331 42.7083C84.1331 43.7206 83.9884 44.1545 82.7772 44.15C55.3355 44.1138 27.8938 44.1033 0.452002 44.1183C0.302862 44.1183 0.153723 44.0957 5.91081e-05 44.0867L6.10352e-05 -3.67757e-06L84.0608 -3.16025e-09C84.0788 8.03247 84.0954 16.0619 84.1105 24.0884C84.1195 30.298 84.0969 36.5031 84.1331 42.7083Z" fill="#E21F23"/>
                        <path d="M298.862 40.8326C296.151 40.8326 293.439 40.7151 290.727 40.8326C289.326 40.9049 289.028 40.2903 288.779 39.1333C287.315 32.3542 285.779 25.5751 284.039 18.796L284.039 25.1684C284.039 29.9002 283.993 34.632 284.07 39.3638C284.093 40.575 283.718 40.8597 282.583 40.7964C280.866 40.7015 279.135 40.7377 277.413 40.7964C276.622 40.819 276.288 40.6518 276.292 39.7615C276.319 28.3274 276.319 16.8934 276.292 5.4593C276.292 4.55543 276.618 4.4108 277.409 4.42436C279.723 4.46955 282.046 4.51475 284.355 4.42436C285.372 4.37465 285.62 4.8763 285.788 5.6446C286.993 11.0498 288.19 16.458 289.38 21.8692C289.869 24.2288 290.492 26.5586 291.247 28.8472L291.247 27.3829C291.247 20.2829 291.288 13.1875 291.206 6.09202C291.206 4.67293 291.658 4.36109 292.942 4.42436C294.908 4.52379 296.883 4.42436 298.858 4.42436L298.862 40.8326Z" fill="white"/>
                        <path d="M228.685 23.2433L229.471 22.6919C231.523 21.2277 232.748 19.3702 232.599 16.7173C232.49 14.7966 232.576 12.8713 232.572 10.946C232.572 7.05033 230.208 4.54658 226.29 4.48331C221.26 4.40648 216.23 4.4833 211.195 4.43811C210.404 4.43811 210.21 4.68668 210.21 5.44594C210.228 16.8408 210.228 28.2312 210.21 39.6171C210.21 40.4938 210.521 40.6927 211.326 40.6746C213.4 40.6249 215.47 40.6159 217.54 40.6746C218.444 40.7062 218.706 40.4667 218.693 39.5402C218.634 35.7937 218.693 32.0471 218.693 28.3005C218.693 25.1867 218.693 25.1867 221.856 25.2092C223.804 25.2092 224.31 25.6973 224.319 27.6407C224.319 31.6358 224.342 35.631 224.319 39.6216C224.319 40.408 224.455 40.7831 225.354 40.7605C227.474 40.7017 229.593 40.7062 231.713 40.7605C232.572 40.7605 232.811 40.4757 232.802 39.6487C232.761 36.6433 232.671 33.6289 232.802 30.6099C232.956 27.2836 231.867 24.7528 228.685 23.2433ZM224.288 12.8487C224.266 15.0602 224.266 17.2717 224.288 19.4832C224.288 20.839 223.664 21.4084 222.326 21.4762C218.521 21.657 218.525 21.6841 218.525 17.9285L218.525 14.8282C218.525 13.0204 218.525 11.1901 218.525 9.37329C218.525 8.62759 218.738 8.24344 219.529 8.33835C219.578 8.3451 219.628 8.3451 219.678 8.33835C224.753 8.22988 224.324 8.89423 224.288 12.8442L224.288 12.8487Z" fill="white"/>
                        <path d="M179.749 23.2432C180.038 23.0217 180.224 22.8681 180.418 22.737C182.678 21.2863 183.803 19.2752 183.685 16.5545C183.609 14.7467 183.685 12.9073 183.685 11.0815C183.685 7.01404 181.272 4.51481 177.223 4.46962C172.251 4.40635 167.28 4.46963 162.286 4.43347C161.577 4.43347 161.247 4.52837 161.251 5.3735C161.278 16.8226 161.278 28.2582 161.251 39.6802C161.251 40.4575 161.473 40.688 162.245 40.67C164.361 40.6202 166.485 40.6112 168.604 40.67C169.508 40.6971 169.788 40.4214 169.775 39.504C169.73 35.7122 169.775 31.9159 169.775 28.1196C169.775 25.2136 169.775 25.2136 172.721 25.2182C174.981 25.2182 175.465 25.7153 175.469 28.0111C175.469 31.8029 175.514 35.5992 175.438 39.391C175.415 40.5389 175.763 40.8146 176.848 40.7468C178.814 40.6609 180.793 40.6835 182.759 40.7468C183.622 40.7739 183.835 40.4666 183.821 39.6486C183.78 36.6432 183.663 33.6287 183.821 30.6098C184.006 27.2926 182.949 24.7662 179.749 23.2432ZM175.383 19.5282C175.383 20.8298 174.665 21.4219 173.327 21.4806C169.54 21.6343 169.54 21.6659 169.54 17.8967L169.54 9.47712C169.54 8.99806 169.409 8.37438 170.15 8.37438C171.424 8.37438 172.703 8.19813 173.973 8.51901C175.044 8.79017 175.361 9.59913 175.374 10.512C175.42 13.5174 175.41 16.5228 175.383 19.5282Z" fill="white"/>
                        <path d="M204.068 38.3112C202.441 40.2455 200.376 40.6206 198.13 40.5121C195.721 40.3991 193.294 40.7291 190.898 40.3268C187.522 39.7709 185.548 37.4299 185.543 33.9997C185.543 26.3619 185.543 18.7226 185.543 11.0818C185.543 6.91496 187.983 4.46092 192.123 4.41121C195.178 4.37505 198.233 4.41121 201.293 4.41121C203.078 4.38032 204.817 4.98229 206.201 6.11051C206.78 6.53185 207.251 7.08283 207.579 7.71931C207.906 8.35579 208.08 9.06008 208.086 9.77574C208.086 12.3382 208.063 14.9053 208.108 17.4587C208.108 18.2496 207.878 18.4665 207.11 18.4484C205.04 18.3987 202.965 18.3942 200.9 18.4484C200.041 18.4484 199.802 18.1818 199.82 17.3502C199.865 15.0875 199.865 12.8278 199.82 10.5711C199.788 8.82666 199.223 8.31145 197.488 8.31145C196.945 8.31145 196.399 8.28433 195.861 8.31145C194.424 8.39732 193.813 9.01647 193.809 10.4265C193.809 18.3626 193.809 26.2971 193.809 34.2302C193.809 35.7758 194.392 36.3814 195.933 36.404C199.521 36.4673 200.538 36.6616 200.326 32.2371C200.24 30.4655 200.276 28.6894 200.326 26.9133C200.353 26.1088 200.163 25.6885 199.282 25.8241C199.086 25.8399 198.89 25.8399 198.694 25.8241C195.816 25.8241 195.847 25.8241 195.865 22.9724C195.865 22.1589 196.055 21.8787 196.914 21.8877C200.317 21.9374 203.715 21.9329 207.119 21.8877C207.887 21.8877 208.117 22.0866 208.113 22.8684C208.081 28.3866 208.113 33.9093 208.09 39.4275C208.09 39.8794 208.239 40.5754 207.453 40.4579C206.549 40.3223 205.451 41.0364 204.769 39.9291C204.499 39.4062 204.265 38.8657 204.068 38.3112Z" fill="white"/>
                        <path d="M125.959 28.4901C127.275 20.8568 128.59 13.2688 129.887 5.67619C130.04 4.77231 130.37 4.36104 131.396 4.41075C133.462 4.50566 135.536 4.47854 137.601 4.41075C138.465 4.38816 138.569 4.63221 138.374 5.41858C135.626 16.6086 132.901 27.8031 130.199 39.0022C129.941 40.0778 129.498 40.5297 128.323 40.4529C126.515 40.3354 124.676 40.3942 122.85 40.4303C122.095 40.4303 121.738 40.245 121.544 39.4315C118.775 27.9432 115.979 16.4625 113.156 4.98923C113.124 4.84913 113.124 4.7 113.097 4.42883C115.678 4.42883 118.231 4.42883 120.78 4.42883C121.354 4.42883 121.503 4.6774 121.598 5.20617C122.859 12.5095 124.152 19.8083 125.422 27.1071C125.507 27.5907 125.489 28.115 125.959 28.4901Z" fill="white"/>
                        <path d="M92.724 22.3529C92.724 16.785 92.724 11.2171 92.724 5.63115C92.724 4.72727 92.9048 4.37023 93.9262 4.38379C99.3494 4.43803 104.773 4.43803 110.196 4.38379C111.1 4.38379 111.33 4.62333 111.326 5.52269C111.326 8.2976 111.353 8.29759 108.592 8.29759C106.373 8.29759 104.154 8.32471 101.939 8.29759C101.157 8.29759 100.931 8.53713 100.936 9.30994C100.978 12.9074 100.978 16.5033 100.936 20.0977C100.936 20.9519 101.198 21.1914 102.02 21.1779C104.483 21.1372 106.947 21.1779 109.41 21.1507C110.282 21.1507 110.716 21.2411 110.698 22.3168C110.652 25.0284 110.72 25.0284 107.986 25.0284C106.065 25.0284 104.14 25.0917 102.224 25.0284C101.148 24.9787 100.913 25.3719 100.936 26.3842C100.999 29.2902 101.013 32.2007 100.936 35.1021C100.9 36.2907 101.171 36.7336 102.45 36.6794C105.008 36.5709 107.575 36.6794 110.133 36.6206C111.235 36.5845 111.565 36.8828 111.534 38.0081C111.457 40.5028 111.534 40.5073 109.03 40.5073C104.149 40.5073 99.2681 40.444 94.3917 40.5435C92.9635 40.5751 92.7105 40.0915 92.7285 38.8035C92.7602 33.2944 92.724 27.8214 92.724 22.3529Z" fill="white"/>
                        <path d="M234.738 22.4027C234.738 16.8348 234.765 11.2624 234.711 5.68095C234.711 4.63245 235.009 4.37938 236.026 4.38841C241.35 4.43963 246.672 4.43963 251.993 4.38841C252.942 4.38841 253.349 4.5014 253.349 5.62672C253.276 8.29769 253.349 8.30221 250.66 8.30221C248.441 8.30221 246.221 8.33837 244.007 8.30221C243.175 8.27961 242.913 8.50106 242.927 9.35975C242.972 12.9572 242.972 16.5546 242.927 20.1521C242.927 21.0559 243.27 21.2051 244.039 21.196C246.502 21.1599 248.969 21.2231 251.432 21.1463C252.436 21.1147 252.675 21.4536 252.666 22.4072C252.666 25.0194 252.689 25.0194 250.009 25.0194C247.989 25.0194 245.968 25.0466 243.948 25.0194C243.225 25.0194 242.913 25.1415 242.927 25.973C242.981 29.1758 242.981 32.3785 242.927 35.5813C242.927 36.4851 243.243 36.6388 244.039 36.6252C246.75 36.58 249.462 36.6524 252.174 36.5846C253.208 36.5575 253.529 36.8557 253.502 37.8952C253.475 40.4622 253.525 40.4667 250.94 40.4667C246.009 40.4667 241.083 40.4396 236.152 40.4939C235.072 40.4939 234.72 40.2588 234.733 39.1154C234.769 33.5385 234.738 27.9706 234.738 22.4027Z" fill="white"/>
                        <path d="M140.512 22.43C140.512 16.8576 140.539 11.2852 140.489 5.70827C140.489 4.714 140.661 4.38408 141.746 4.39312C147.07 4.4564 152.394 4.4564 157.717 4.39312C158.807 4.39312 159.155 4.61909 159.118 5.74894C159.037 8.3024 159.118 8.30692 156.565 8.3024C154.346 8.3024 152.127 8.33855 149.912 8.3024C149.04 8.2798 148.701 8.4651 148.715 9.42321C148.772 12.9724 148.772 16.5217 148.715 20.0709C148.715 21.0335 149.058 21.2053 149.917 21.1872C152.285 21.1375 154.653 21.2233 157.017 21.1465C158.083 21.1103 158.323 21.4809 158.305 22.5023C158.255 25.0332 158.305 25.0332 155.724 25.0332C153.704 25.0332 151.684 25.0558 149.659 25.0332C148.968 25.0332 148.719 25.223 148.724 25.9371C148.755 29.191 148.764 32.445 148.724 35.699C148.724 36.5622 149.121 36.6345 149.813 36.6254C152.525 36.5983 155.236 36.6571 157.948 36.5893C158.924 36.5667 159.195 36.8469 159.182 37.8231C159.15 40.476 159.182 40.476 156.574 40.476C151.743 40.476 146.907 40.4172 142.08 40.5121C140.724 40.5392 140.471 40.1099 140.485 38.858C140.553 33.3715 140.512 27.8985 140.512 22.43Z" fill="white"/>
                        <path d="M255.571 22.3395C255.571 16.7716 255.593 11.1992 255.543 5.61775C255.543 4.65512 255.787 4.38848 256.755 4.393C262.128 4.44271 267.506 4.45175 272.88 4.393C273.987 4.393 274.145 4.78167 274.123 5.74882C274.073 8.32035 274.123 8.32035 271.619 8.32035C269.4 8.32035 267.181 8.35199 264.962 8.32035C264.108 8.29776 263.733 8.46949 263.746 9.43664C263.8 12.9889 263.8 16.5396 263.746 20.0888C263.746 21.0605 264.121 21.2232 264.966 21.2051C267.335 21.1599 269.703 21.2323 272.066 21.1645C273.07 21.1328 273.422 21.3814 273.422 22.457C273.377 25.0376 273.422 25.0376 270.878 25.0376C268.907 25.0376 266.932 25.0737 264.962 25.0376C264.094 25.015 263.742 25.2184 263.755 26.1765C263.814 29.2813 263.805 32.3861 263.755 35.4955C263.755 36.3993 264.031 36.675 264.935 36.6569C267.597 36.5982 270.263 36.6795 272.925 36.6117C273.937 36.5891 274.281 36.8513 274.258 37.9133C274.218 40.4984 274.258 40.4984 271.705 40.4984C266.968 40.4984 262.237 40.4397 257.5 40.5301C256.032 40.5572 255.498 40.2725 255.534 38.65C255.62 33.1906 255.571 27.7673 255.571 22.3395Z" fill="white"/>
                        <path d="M34.9436 36.4038C31.1428 35.0028 29.8955 32.0923 29.9723 28.2689C30.0672 24.0885 30.0085 19.899 29.9994 15.7141C29.9994 12.8307 30.8581 10.3993 33.4567 8.82652C37.5468 7.43906 41.7453 7.72831 45.8625 8.37458C49.2565 8.91691 51.1095 11.5698 51.1728 15.0407C51.1728 16.2248 51.1456 17.4088 51.1728 18.5884C51.2134 19.4335 51.001 19.8629 50.0429 19.8222C48.4656 19.7544 46.8793 19.768 45.3111 19.8222C44.5112 19.8448 44.2942 19.5058 44.2988 18.7692C44.3231 17.6389 44.2748 16.5082 44.1542 15.3841C43.8965 13.3775 42.5859 12.2612 40.6742 12.2793C38.6224 12.3019 37.0225 13.5493 36.9728 15.5423C36.8644 20.0617 36.8644 24.5947 36.9728 29.1412C37.018 31.1252 38.6721 32.5036 40.5883 32.5488C42.6763 32.594 44.1135 31.3647 44.4298 29.2542C44.4298 29.209 44.4298 29.1593 44.4298 29.1096C44.8818 26.0183 44.8818 25.946 41.8267 26.0454C40.4708 26.0906 40.1861 25.6522 40.2223 24.3913C40.3036 21.6074 40.2223 21.6074 43.0333 21.6074C45.3518 21.6074 47.6657 21.6435 49.9842 21.6074C50.8519 21.6074 51.2134 21.8107 51.1863 22.7553C51.1231 25.1686 51.1863 27.5865 51.1411 29.9863C51.0507 33.8278 48.3617 36.562 44.4795 36.6434C41.334 36.7021 38.1253 36.901 34.9436 36.4038Z" fill="#FEFDFC"/>
                        <path d="M53.0802 22.0184C53.0802 19.7587 53.0396 17.499 53.0802 15.2122C53.1752 11.0046 56.0992 8.12576 60.3113 8.06249C62.3314 8.03537 64.3787 8.01278 66.3763 8.06249C70.8189 8.18451 73.6344 11.0317 73.6661 15.4653C73.6661 16.8708 74.2988 18.6831 73.3723 19.5824C72.5227 20.4049 70.742 19.8084 69.3727 19.8219C66.8915 19.8491 66.9005 19.822 66.8734 17.3318C66.923 16.544 66.8636 15.7532 66.6972 14.9817C66.1367 13.0383 64.9437 12.1571 63.0229 12.3288C62.2217 12.3729 61.4681 12.7238 60.9186 13.3086C60.3691 13.8934 60.0659 14.6673 60.0717 15.4698C59.9753 20.1037 59.9753 24.7375 60.0717 29.3714C60.0893 29.8178 60.1966 30.2561 60.387 30.6602C60.5775 31.0643 60.8473 31.426 61.1805 31.7237C61.5136 32.0214 61.9032 32.249 62.3261 32.3931C62.7489 32.5371 63.1965 32.5946 63.6421 32.5621C65.495 32.5034 66.8056 31.2063 66.8915 29.2358C66.9593 27.9071 66.9412 26.5739 66.8915 25.2407C66.8915 24.5538 67.0994 24.2781 67.7954 24.2916C69.4736 24.3308 71.1503 24.3308 72.8255 24.2916C73.6028 24.2916 73.8514 24.5809 73.8514 25.3311C73.9156 27.3023 73.828 29.2756 73.5892 31.2334C73.4447 32.5425 72.8674 33.7659 71.9489 34.7098C71.0304 35.6537 69.8231 36.2641 68.5185 36.4443C65.3549 37.0015 62.1196 37.0168 58.9509 36.4895C55.1094 35.8477 53.1887 33.2265 53.0757 28.9692C53.0305 26.6508 53.0802 24.3323 53.0802 22.0184Z" fill="#FDFDFD"/>
                        <path d="M28.1094 19.6773C28.1094 22.7866 28.1094 25.8915 28.1094 28.9963C28.0732 33.6648 25.9897 36.1053 21.398 36.5346C18.7496 36.8436 16.0718 36.7995 13.4349 36.4036C11.9846 36.1616 10.662 35.4272 9.68988 34.3242C8.71772 33.2211 8.15535 31.8168 8.09748 30.3476C7.99353 27.6902 8.09747 25.0237 8.03872 22.3618C8.03872 21.598 8.27373 21.3133 9.05559 21.3359C10.6826 21.3811 12.3095 21.3902 13.9365 21.3359C14.8178 21.3043 15.0212 21.6975 15.0121 22.4793C15.0121 24.6984 14.985 26.9174 15.0393 29.1364C15.089 31.1385 16.1691 32.3452 17.8955 32.4627C19.6219 32.5802 20.7879 31.4774 21.1178 29.498C21.2172 28.8657 21.2626 28.2262 21.2534 27.5862C21.2534 21.5709 21.2941 15.5556 21.2534 9.54031C21.2534 8.28392 21.6285 7.90881 22.8397 8.00372C24.1699 8.0941 25.5047 8.0941 26.8349 8.00372C27.8698 7.94045 28.1907 8.28392 28.1681 9.3279C28.1093 12.7807 28.1681 16.2335 28.1681 19.6818L28.1094 19.6773Z" fill="#FDFCFB"/>
                    </svg>
                </div>
            </div>
        </div>
<!--    --><?php //} else { ?>
        <div class="desktop-header__banner">
            <div class="banner__text">
                <div class="text__top">
                    Стань частью
                </div>
                <div class="text__bottom">
                    нашей команды
                </div>
            </div>
        </div>
<!--    --><?php //} ?>
    <div class="vacancy-body">
        <div class="vacancy-body__top">
            <p class="top__name">
                Вакансии
            </p>
            <div class="top__info">
                <p class="info__top">
                    по вопросам трудоустройства
                </p>
                <div class="info__bottom">
                    <?php if ( have_rows( 'company-employments', 'option' ) ) : ?>
                        <?php while ( have_rows( 'company-employments', 'option' ) ) : the_row(); ?>
                            <a class="bottom__first-text" href="tel:<?php echo substr_replace( preg_replace( "/[^0-9]/" , '' , get_sub_field('company-employment') ) , '+7' , 0 , 1 )?>">
                                <?php the_sub_field( 'company-employment' ); ?>
                            </a>
                        <?php endwhile; ?>
                    <?php endif; ?>
                    <a class="bottom__second-text" href="mailto:<?php the_field('company-mail', 'option'); ?>">
                        <?php the_field( 'company-mail', 'option' ); ?>
                    </a>
                </div>
            </div>
        </div>
        <div class="vacancy-body__info" id="anchor-5s">
            <?php the_field( 'company-vacancy', 'option' ); ?>
        </div>
        <div class="vacancy-body__bottom">
            <?php  if( have_posts() ) : ?>
                <?php while( have_posts() ) : the_post(); ?>
                    <div class="bottom__vacancy">
                        <p class="vacancy__name">
                            <?php the_field( 'vacancy-name' ); ?>
                        </p>
                        <p class="vacancy__salary">
                            <?php the_field( 'vacancy-salary' ); ?> ₽
                        </p>
                        <a class="vacancy__button" href="<?php echo get_permalink(); ?>">
                            <div class="button__first-part">
                                <svg class="first-part__svg" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="16" cy="16" r="15" stroke="white" stroke-width="2"/>
                                    <path d="M11.2425 20.7282C10.7828 20.2685 10.4144 19.7587 10.1373 19.1987C9.86054 18.6391 9.67504 18.0647 9.58076 17.4755L8.41404 17.4755C8.15476 17.4755 7.92495 17.3753 7.72461 17.175C7.52426 16.9746 7.42409 16.7448 7.42409 16.4855C7.42409 16.2263 7.52426 15.9964 7.72461 15.7961C7.92495 15.5958 8.15476 15.4956 8.41404 15.4956L9.58076 15.4956C9.67504 14.9063 9.86054 14.3319 10.1373 13.7724C10.4144 13.2123 10.7828 12.7025 11.2425 12.2429C12.421 11.0644 13.838 10.4723 15.4936 10.4666C17.1496 10.4605 18.561 11.0526 19.7277 12.2429L23.9527 16.4679L19.7101 20.7105C18.5551 21.9126 17.1499 22.5108 15.4943 22.5051C13.8383 22.499 12.421 21.9067 11.2425 20.7282ZM12.6567 19.314C13.4463 20.1036 14.395 20.4984 15.5028 20.4984C16.6106 20.4984 17.5416 20.0977 18.2959 19.2963L21.1243 16.4679L18.3135 13.6571C17.5475 12.8675 16.6106 12.4727 15.5028 12.4727C14.395 12.4727 13.4463 12.8675 12.6567 13.6571C12.3856 13.9282 12.1617 14.2167 11.9849 14.5226C11.8081 14.8295 11.6785 15.1538 11.596 15.4956L15.4851 15.4956C15.7444 15.4956 15.9742 15.5958 16.1745 15.7961C16.3749 15.9964 16.4751 16.2263 16.4751 16.4855C16.4751 16.7448 16.3749 16.9746 16.1745 17.175C15.9742 17.3753 15.7444 17.4755 15.4851 17.4755L11.596 17.4755C11.6785 17.8172 11.8081 18.1416 11.9849 18.4485C12.1617 18.7544 12.3856 19.0429 12.6567 19.314Z" fill="white"/>
                                </svg>
                                <p class="first-part__text">Подробнее</p>
                            </div>
                            <svg class="button__second-part" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16" cy="16" r="15" stroke="white" stroke-width="2"/>
                                <path d="M11.2425 20.7282C10.7828 20.2685 10.4144 19.7587 10.1373 19.1987C9.86054 18.6391 9.67504 18.0647 9.58076 17.4755L8.41404 17.4755C8.15476 17.4755 7.92495 17.3753 7.72461 17.175C7.52426 16.9746 7.42409 16.7448 7.42409 16.4855C7.42409 16.2263 7.52426 15.9964 7.72461 15.7961C7.92495 15.5958 8.15476 15.4956 8.41404 15.4956L9.58076 15.4956C9.67504 14.9063 9.86054 14.3319 10.1373 13.7724C10.4144 13.2123 10.7828 12.7025 11.2425 12.2429C12.421 11.0644 13.838 10.4723 15.4936 10.4666C17.1496 10.4605 18.561 11.0526 19.7277 12.2429L23.9527 16.4679L19.7101 20.7105C18.5551 21.9126 17.1499 22.5108 15.4943 22.5051C13.8383 22.499 12.421 21.9067 11.2425 20.7282ZM12.6567 19.314C13.4463 20.1036 14.395 20.4984 15.5028 20.4984C16.6106 20.4984 17.5416 20.0977 18.2959 19.2963L21.1243 16.4679L18.3135 13.6571C17.5475 12.8675 16.6106 12.4727 15.5028 12.4727C14.395 12.4727 13.4463 12.8675 12.6567 13.6571C12.3856 13.9282 12.1617 14.2167 11.9849 14.5226C11.8081 14.8295 11.6785 15.1538 11.596 15.4956L15.4851 15.4956C15.7444 15.4956 15.9742 15.5958 16.1745 15.7961C16.3749 15.9964 16.4751 16.2263 16.4751 16.4855C16.4751 16.7448 16.3749 16.9746 16.1745 17.175C15.9742 17.3753 15.7444 17.4755 15.4851 17.4755L11.596 17.4755C11.6785 17.8172 11.8081 18.1416 11.9849 18.4485C12.1617 18.7544 12.3856 19.0429 12.6567 19.314Z" fill="white"/>
                            </svg>
                        </a>
                    </div>
                <?php endwhile; ?>
            <?php else : ?>
            <?php endif; ?>
        </div>
    </div>
</div>

<?php
get_footer();
?>
