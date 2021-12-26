//Slider header

$(document).ready(function () {
    $('.header_slider').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 1000,
        arrows: false,
        dots: true,
        vertical: true,
        verticalSwiping: true,
    });
});

//Scroll

$(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $("#main_menu").addClass("scrolled");
        } else {
            $("#main_menu").removeClass("scrolled");
        }
    });
    $('input, select').styler();
});

//hamburger

$(function () {
    $(".hamburger, #page_overlay").on('click', function () {
        $("#mobile_menu_wrap .hamburger").toggleClass("is-active");
        $("body").toggleClass("open");
    });
});
$(".sidemenu a").on('click', () => {
    $("#mobile_menu_wrap .hamburger").removeClass("is-active");
    $("body").removeClass("open");
});

//Gallery

lightGallery(document.getElementById('animated-thumbnails-gallery'), {
    thumbnail: true,
    plugins: [lgThumbnail],
    speed: 500
});

//News slider

function latestNews(){
    $.ajax({
        url:'assets/common/news.json',
        type:'get',
        dataType:'json',
        success:function(json){
            let html = '';
            for(let i=0;i<json.length;i++){
                html += `
                 <li class="slider_news_item">
                    <div class="slider_box">
                        <img src=${json[i].img} alt="skyline5" title="architecture">
                        <div class="text_card_news">
                            <h5>${json[i].title}</h5>
                            <p>${json[i].description}</p>
                        </div>    
                        <div class="card_element">
                            <div class="card_element_logo">
                                <img src=${json[i].avatar} alt="skyline5" title="architecture">
                            </div>
                            <div class="card_element_text">
                                <p class="name_author_news">${json[i].name}</p>
                                <p class="data_card_news">${json[i].date}</p>
                            </div>
                        </div>
                    </div>
                </li>
            `;        
            }
            $("#slider_ns").slick('slickAdd',html);           
        },
    });
}

$(function(){
    latestNews()
    $('.slider_news_card').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        dots: true,
        lazyLoad: 'ondemand',
        arrows: true,
        responsive:[              
            {
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
                arrows: true,
                }
            },
            {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                arrows: false,
                }
            },
            {
            breakpoint: 650,
            settings: {
                slidesToShow: 1,
                arrows: false,                       
                }
            },
        ]
        
    });
});

//Map

$(function(){
    $("#init_map").on('click', function(){
        $(this).remove();
        var map = L.map('my_map').setView([48.93859768728371, 38.512547728855246], 15);

    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright"></a>'
    }).addTo(map);
    var myIcon = L.icon({
        iconUrl: 'assets/plugins/leaflet/images/Pin.png',
        iconSize: [106, 106],
        iconAnchor: [22, 94],
        popupAnchor: [31, -76],
    });

    L.marker([48.93859768728371, 38.512547728855246], {icon:myIcon}).addTo(map)
        .bindPopup(`
            <div class="map_popup">
                <img src="assets/images/Building_3-min.png" alt="">
                <div class="map_info">
                    <b>Hello!</b>
                    <span>I'm here!</span>
                </div>
            </div>
        `);
        marker.on('click', function(){
            document.getElementById('google_map').click();
        });
    });
});

//Sendform

$(function(){
    $("#contact_form").on('submit', function(e){
        e.preventDefault();
        console.log("SEND FORM!");

        const BOT_TOKEN = '5077142769:AAHpcWc9h4YdyoLRVu_Up_UuQ4kftDj0XDk';
        const CHAT_ID = '5061620981';
        let text = encodeURI("<b>Name:</b> "+$("#inputName").val()+"<b>Email:</b>" +$("#inputEmail").val());

        $.get(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=`+text+`&parse_mode=html`, (json)=>{
            console.log(json);
            if (json.ok){
                $("#contact_form").trigger('reset');
                alert('Message successfully send!', true);
            } else {
                alert(json.description, true);
            }
        });
    });
});