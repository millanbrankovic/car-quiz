(function() {
    var $document = $(document);
    var selector = '[data-rangeslider]';
    var $element = $(selector);
    var textContent = ('textContent' in document) ? 'textContent' : 'innerText';

    function valueOutput(element) {
        var value = element.value;
        var output = element.parentNode.getElementsByTagName('output')[0] || element.parentNode.parentNode.getElementsByTagName('output')[0];
        output[textContent] = value;
    }

    $document.on('input', 'input[type="range"], ' + selector, function(e) {
        valueOutput(e.target);
    });

    $element.rangeslider({
        polyfill: false,
        onInit: function() {
            valueOutput(this.$element[0]);
        },
        onSlide: function(position, value) {
            console.log('onSlide');
            console.log('position: ' + position, 'value: ' + value);
        },
        onSlideEnd: function(position, value) {
            console.log('onSlideEnd');
            console.log('position: ' + position, 'value: ' + value);
        }
    });


    $("#result").addClass('u-hidden');
    $("form").on('submit', function(e) {
        e.preventDefault();

        $(window).scrollTop(0);

        $(".h1--hero").text("Your found it!!!").addClass('is-animated');

        var total = 0;
        var amount = '[data-amount]';

        $(amount).each(function(index){
            total += parseInt($(this).val());
        });

        $("#result .result-number").html(total);

        $('.result-number').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            },
            {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });

        $("#result").removeClass('u-hidden');

        $("form").hide();

        return false;
    })
})();
