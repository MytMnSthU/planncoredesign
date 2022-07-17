$(function () {

    


    // *todo To hide offcanvas when user click a navlink 
    let menuOffcanvas = new bootstrap.Offcanvas($("#plannconavbar"));

    $(".nav-link").on("click", function () {
        if (window.innerWidth < 992) menuOffcanvas.hide();
    });




    // * filter
    $(".plannco-properties__filter-menu-item").on("click", function () {
        
        

        // *todo To move a block(a rectangle) from filter menu 
        let itemWidth = $(this).css("width");
        let firstItemOffsetFromLeft = $(".plannco-properties__filter-menu-item:first").offset().left;
        let fromLeft = $(this).offset().left;

        $(".block").css({
            width: itemWidth,
            left: fromLeft - firstItemOffsetFromLeft,
        });



        
        // *todo To change txt color from menu item
        let filterMenuItem = $(".plannco-properties__filter-menu-item");

        filterMenuItem.removeClass("active");
        $(this).addClass("active");




        // *todo To filter item
        let getFilter = $(this).attr("data-filter");
        let filterItem = $(".plannco-properties__filter-item");
      
        if (getFilter === "all") {

            filterItem.each(function (idx, val) {
                $(val).hide();
                $(val).show("fade", (300 * idx) / 2);
            });

        } else {
            
            filterItem.not(`.${getFilter}`).hide(1);
            filterItem.filter(`.${getFilter}`).each(function (idx, val) {
                $(val).show("fade", (1000 * idx) / 2);
            });

        }
        
        
        
    });

    // * theme switch
    $('.theme-item').on('click', function () {  

        let getTheme = $(this).text();
        $(".theme-switch-btn").text(getTheme).css("text-transform", "capitalize");
        $("html").attr("class", `${getTheme}-theme`);
    })


    // * scroll animation
    $(document).on('scroll', function () {  
        let getCurrentScroll = $(this).scrollTop();
        // console.log(getCurrentScroll);

        if (getCurrentScroll >= 400) {
            $('.plannco-properties').addClass('pop-up');
        }

        if (getCurrentScroll >= 1000) {
            $('.plannco-adv').addClass('pop-up');

            setTimeout(function () {  
                $('.plannco-adv__content').addClass('slide-from-left');
                $('.plannco-adv__img').addClass('slide-from-right');
            },500)

        }

        if (getCurrentScroll >= 1400) {
            $('.plannco-services').addClass('pop-up');
        }
        if (getCurrentScroll >= 2000) {
            $('.plannco-customer').addClass('pop-up');
        }
        if (getCurrentScroll >= 2400) {
            $('.plannco-contact__form').addClass('slide-from-left');
            $('.plannco-contact__img').addClass('slide-from-right');
        }
    })
    
    
});




// console.log("I am ready...........");

//  get nav height to space between nav and banner
// let getNavHeight = $(".plannco-header__nav").height();
// console.log(getNavHeight);

// console.log(getFilter);

// if (getFilter === 'all') {
//     filterItem.show('fade',1000);
// } else {
//     filterItem.not(`.${getFilter}`).hide('fade',1000);
//     filterItem.filter(`.${getFilter}`).show('fade',1000);

// }

// $('.nav-link').attr("data-bs-dismiss", "offcanvas");
// $('.nav-link').css("color", "red");

// $("#theme-switch").on("change", function () {
//     // console.log("Theme changed");
//     // let getTheme = $('#theme-switch :selected').attr('value');
//     let getTheme = $('#theme-switch :selected').val();
//     // console.log(getTheme);
//     $('html').attr('class', `${getTheme}-theme`);
// });