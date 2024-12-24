// import $ from "jquery";
import '../scss/desktop'
// import { Popover } from '@popperjs/core'
// import { Popover } from 'bootstrap'
import 'bootstrap'
import '@fancyapps/ui/dist/fancybox.css'
// import { Popover, tooltip } from 'bootstrap';
var imagesLoaded = require('imagesloaded')
import 'lazysizes'
import 'lazysizes/plugins/blur-up/ls.blur-up'
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks'
import '@babel/polyfill'
import Masonry from 'masonry-layout'
import { Fancybox } from '@fancyapps/ui'

// import "./bootstrap-multiselect.min";
// document.getElementById("toggle").onclick = function () {
//     toggle();
// }

// function toggle() {
//     var element = document.getElementById("country");
//     b = "nav-open",
//     c = "nav-close";
// b == a.classList ? (a.classList.remove(b), a.classList.add(c)) : (c == a.classList && a.classList.remove(c), a.classList.add(b))
// element.classList.toggle("d-none")
// };

// humberger

// dropdown change text
// const ulCountry = document.querySelectorAll('.ul-search-country li a')

// ulCountry.forEach(function (dropCountry) {

//     dropCountry.addEventListener('click', function () {
//         const searchCountry = document.querySelectorAll('.search-country')[0]
//         searchCountry = searchCountry.childNodes[0],
//             searchCountry = searchCountry.nodeValue;
//     })
// })

// jquery
// $(function () {
//     $('.ul-search-country').on('click', 'li a', function () {
//         $('.search-country:first-child').text($(this).text())
//         $('.search-country:first-child').val($(this).text())
//     })
// })
// $(function () {
//     $('.ul-search-style').on('click', 'li a', function () {
//         $('.search-style:first-child').text($(this).text())
//         $('.search-style:first-child').val($(this).text())
//     })
// })
// import Swiper JS
import Swiper from 'swiper'
// import Swiper styles
import 'swiper/swiper-bundle.css'
// core version + navigation, pagination modules:
import SwiperCore, {
    Navigation,
    Pagination,
    Thumbs,
    Autoplay,
    Scrollbar,
    Mousewheel,
    Lazy,
} from 'swiper/core'

// configure Swiper to use modules
SwiperCore.use([
    Navigation,
    Pagination,
    Thumbs,
    Autoplay,
    Scrollbar,
    Mousewheel,
    Lazy,
])
if ('.swiper-hangmuc') {
    const swiper = new Swiper('.swiper-hangmuc', {
        // Optional parameters
        // direction: 'vertical',
        // loop: true,
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1.2,
                spaceBetween: 10,
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 3,
                spaceBetween: 20,
                scrollbar: {
                    el: '.swiper-scrollbar',
                    hide: true,
                },
                freeMode: true,
            },
            1170: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
        },

        // If we need pagination

        // Navigation arrows
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },

        // And if we need scrollbar

        pagination: {
            el: '.swiper-scrollbar',
            type: 'progressbar',
        },
        navigation: {
            nextEl: '.hangmuc-slide .swiper-button-next',
            prevEl: '.hangmuc-slide .swiper-button-prev',
        },
    })
}

if ('.swiper-danhmuc') {
    const swiper = new Swiper('.swiper-danhmuc', {
        // Optional parameters
        // direction: 'vertical',
        // loop: true,

        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1.2,
                slidesPerGroup: 1,
                spaceBetween: 10,
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2.2,
                slidesPerGroup: 1,
                spaceBetween: 20,
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 3.2,
                slidesPerGroup: 1,
                spaceBetween: 20,
                scrollbar: {
                    el: '.swiper-scrollbar',
                    hide: true,
                },
            },
            1170: {
                slidesPerView: 5.2,
                slidesPerGroup: 1,
                spaceBetween: 20,
                freeMode: false,
            },
        },
        pagination: {
            el: '.swiper-scrollbar',
            type: 'progressbar',
        },
        // Navigation arrows
        navigation: {
            nextEl: '.danhmuc-slide .swiper-button-next',
            prevEl: '.danhmuc-slide .swiper-button-prev',
        },

        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        //   hide: true,
        // },
        lazy: true,
    })
}

if ('.swiper-khampha') {
    const swiper = new Swiper('.swiper-khampha', {
        // Optional parameters
        // direction: 'vertical',
        // loop: true,

        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1.2,
                spaceBetween: 10,
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2.2,
                spaceBetween: 20,
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 3.2,
                spaceBetween: 20,
                scrollbar: {
                    el: '.swiper-scrollbar',
                    hide: true,
                },
            },
            1170: {
                slidesPerView: 4.2,
                spaceBetween: 16,
                freeMode: true,
            },
        },
        // Navigation arrows
        navigation: {
            nextEl: '.khampha-slide .swiper-button-next',
            prevEl: '.khampha-slide .swiper-button-prev',
        },

        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        //   hide: true,
        // },
        pagination: {
            el: '.swiper-scrollbar',
            type: 'progressbar',
        },
    })
}
// video

if ('.swiper-video') {
    const swiper = new Swiper('.swiper-video', {
        // Optional parameters
        // direction: 'vertical',
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        lazy: true,
        slidesPerView: 1.5,
        spaceBetween: 10,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
                scrollbar: {
                    el: '.swiper-scrollbar',
                    hide: true,
                },
            },
            1170: {
                slidesPerView: 1,
                spaceBetween: 20,
                freeMode: true,
            },
        },
        // Navigation arrows
        navigation: {
            nextEl: '.video-slide .swiper-button-next',
            prevEl: '.video-slide  .swiper-button-prev',
        },
    })
}

// News

if ('.swiper-new') {
    const swiper = new Swiper('.swiper-new', {
        // Optional parameters
        // direction: 'vertical',
        // loop: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            // disableOnInteraction: true,
        },
        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: '.control .swiper-button-next',
            prevEl: '.control .swiper-button-prev',
        },
        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        //   hide: true,
        // },
    })
}
// product
if ('.swiper-sanpham-lienquan') {
    const swiper = new Swiper('.swiper-sanpham-lienquan', {
        // Optional parameters
        // direction: 'vertical',
        // loop: true,

        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1.2,
                spaceBetween: 10,
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
                scrollbar: {
                    el: '.swiper-scrollbar',
                    type: 'progressbar',
                },
            },
            1170: {
                slidesPerView: 4,
                spaceBetween: 20,
                freeMode: true,
            },
        },
        // Navigation arrows
        navigation: {
            nextEl: '.control-sanpham .swiper-button-next',
            prevEl: '.control-sanpham .swiper-button-prev',
        },

        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        //   hide: true,
        // },
        // pagination: {
        //   el: '.swiper-scrollbar',
        //   type: 'progressbar',
        // },
    })
}
// swiperjs sản phẩm đã xem
// video

if ('.swiper-history') {
    const swiper = new Swiper('.swiper-history', {
        // Optional parameters
        // direction: 'vertical',
        // loop: true,
        slidesPerView: 10,
        spaceBetween: 16,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 5,
                spaceBetween: 10,
                scrollbar: {
                    el: '.swiper-scrollbar',
                    hide: true,
                },
            },
            1170: {
                slidesPerView: 9,
                spaceBetween: 16,
                freeMode: true,
            },
        },
        // Navigation arrows
        pagination: {
            el: '.swiper-scrollbar',
            type: 'progressbar',
        },

        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        //   hide: true,
        // },
    })
}

// mansonry

var grid = document.querySelector('#gallery')
if (typeof grid != 'undefined' && grid != null) {
    var msnry = new Masonry(grid, {
        itemSelector: '.item-home',
        columnWidth: '.item-home',
        percentPosition: true,
    })
    imagesLoaded(grid).on('progress', function () {
        // layout Masonry after each image loads
        msnry.layout()
    })
}

// mansonry
var gridProduct = document.querySelector('#gallery-product')
if (typeof gridProduct != 'undefined' && gridProduct != null) {
    var msnryProduct = new Masonry(gridProduct, {
        itemSelector: '.item-product',
        columnWidth: '.item-product',
        percentPosition: true,
    })
    imagesLoaded(gridProduct).on('progress', function () {
        // layout Masonry after each image loads
        msnryProduct.layout()
    })
}

// scroll change class header
// let scrollpos = window.scrollY
// const body = document.querySelector('body')
// const header = document.querySelector('.header')
// if ((header, body)) {
//     const header_height = header.offsetHeight
//     const add_class_on_scroll = () => body.classList.add('add-padding')
//     const remove_class_on_scroll = () => body.classList.remove('add-padding')
//     const add_header_class = () => header.classList.add('fixed-top')
//     const remove_header_class = () => header.classList.remove('fixed-top')

//     window.addEventListener('scroll', function () {
//         scrollpos = window.scrollY

//         if (scrollpos >= header_height) {
//             add_class_on_scroll()
//         } else {
//             remove_class_on_scroll()
//         }
//     })
//     window.addEventListener('scroll', function () {
//         scrollpos = window.scrollY

//         if (scrollpos >= header_height) {
//             add_header_class()
//         } else {
//             remove_header_class()
//         }
//     })
// }
// one product
if ('.thumbs-for-one-product') {
    var thumbsOneproduct = new Swiper('.thumbs-for-one-product', {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        pagination: {
            el: '.swiper-scrollbar',
            type: 'progressbar',
        },
    })
}

if ('.one-product') {
    var oneProduct = new Swiper('.one-product', {
        spaceBetween: 10,

        thumbs: {
            swiper: thumbsOneproduct,
        },
    })
}
// sanhamphuhop
if ('.swiper-phuhop') {
    const swiper = new Swiper('.swiper-phuhop', {
        // Optional parameters
        // direction: 'vertical',
        // loop: true,

        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1.2,
                spaceBetween: 10,
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
                pagination: {
                    el: '.swiper-scrollbar',
                    type: 'progressbar',
                },
            },
            1170: {
                slidesPerView: 5,
                spaceBetween: 20,
                freeMode: true,
            },
        },
        // Navigation arrows
        navigation: {
            nextEl: '.phuhop-control .swiper-button-next',
            prevEl: '.phuhop-control .swiper-button-prev',
        },

        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        //   hide: true,
        // },
        // pagination: {
        //   el: '.swiper-scrollbar',
        //   type: 'progressbar',
        // },
    })
}
// swiper dang ky
if ('.swiper-dangky') {
    var swiper = new Swiper('.swiper-dangky', {
        slidesPerView: 1,
        spaceBetween: 10,
        // Navigation arrows
        navigation: {
            nextEl: '.control-dangky .swiper-button-next',
            prevEl: '.control-dangky .swiper-button-prev',
        },

        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        //   hide: true,
        // },
        // pagination: {
        //   el: '.swiper-scrollbar',
        //   type: 'progressbar',
        // },
    })
}
// btn-yeu thcich
const btnYeuthich = document.querySelector('.btn-yeuthich') // Using a class instead, see note below.
if (btnYeuthich) {
    btnYeuthich.addEventListener('click', () => {
        btnYeuthich.classList.toggle('active')
    })
}
// btn-arrow
const btnarrow = document.querySelector('.btn-arrow') // Using a class instead, see note below.
if (btnarrow) {
    btnarrow.addEventListener('click', () => {
        btnarrow.classList.toggle('change-arrow')
    })
}

// old
// if ('.gallery-thumbs') {
//     var galleryThumbs = new Swiper('.gallery-thumbs', {
//         spaceBetween: 10,
//         slidesPerView: 4,
//         freeMode: true,
//         watchSlidesVisibility: true,
//         watchSlidesProgress: true,
//     })
// }

// if ('.gallery-top') {
//     var galleryTop = new Swiper('.gallery-top', {
//         spaceBetween: 10,
//         pagination: {
//             el: '.swiper-scrollbar',
//             type: 'progressbar',
//         },
//         thumbs: {
//             swiper: galleryThumbs,
//         },
//     })
// }
const myCustomSlider = document.querySelectorAll('.gallery-top')
const myCustomGalleryThumbs = document.querySelectorAll('.gallery-thumbs')
// myCustomSlider.forEach(function (sandwich, index) {

for (let i = 0; i < myCustomSlider.length; i++) {
    myCustomSlider[i].classList.add('gallery-top-' + i)
    myCustomGalleryThumbs[i].classList.add('thumbs-class-' + i)

    var galleryThumbs = new Swiper('.thumbs-class-' + i, {
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 4,
                spaceBetween: 6,
            },
            1170: {
                slidesPerView: 5,
                spaceBetween: 6,
            },
        },
    })

    var galleryTop = new Swiper('.gallery-top-' + i, {
        spaceBetween: 10,
        thumbs: {
            // el: '.thumbs-class',
            // slidesPerView: 5,
            swiper: galleryThumbs,
        },
    })
}
