(function($) {
    $.fn.rightMenu = function(opt) {
        var elem = this;
        var rightmenu = document.createElement("ul");
        var options = $.extend({
            "返回(B)<small>Alt+向左箭头</small>": "javascript:history.back()",
            "前进(F)<small>Alt+向右箭头</small>": "javascript:history.go(1)",
            "重新加载(R)<small>Ctrl+R</small>": "javascript:window.location.reload()"
        }, opt);
        for (x in options) {
            var _li, _a;
            _li = document.createElement("li");
            _a = document.createElement("a");
            $(_a).appendTo($(_li)).html(x).attr("href", options[x]);
            $(rightmenu).append($(_li));
        };
        elem.append($(rightmenu));
        $(rightmenu).addClass("rightMenu");
        var _height = $(rightmenu).height();
        var _width = $(rightmenu).width();
        console.log(elem);
        $(this).on("contextmenu", function(e) {
            $(rightmenu).hide(0);
            $(rightmenu).show(5);
            var _x = e.clientX,
                _y = e.clientY,
                dox = window.innerWidth || document.body.clientWidth,
                doy = window.innerHeight || document.body.clientHeight;
            console.log(_x, _width, dox);
            console.log(_y, _height, doy);
            if (_x + _width > dox) {
                $(rightmenu).css({
                    "left": _x - _width,
                    "top": _y
                })
            } else if (_y + _height > doy) {
                $(rightmenu).css({
                    "top": _y - _height,
                    "left": _x
                })
            } else {
                $(rightmenu).css({
                    "top": _y,
                    "left": _x
                })
            };
            e.preventDefault();
        }).on("click",function(){
            $(rightmenu).hide(0);
        });
        $(document).on("click",function(){
            $(rightmenu).hide(0);
        })
    }
})(jQuery)