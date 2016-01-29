(function($) {
    $.fn.rightMenu = function(opt, bool) {
        $(this).each(function(i, item) {
            var elem = $(item);
            console.log(elem);
            var rightmenu = document.createElement("ul");
            var options
            if (bool) {
                options = $.extend({
                    "返回(B)<small>Alt+向左箭头</small>": "javascript:history.back()",
                    "前进(F)<small>Alt+向右箭头</small>": "javascript:history.go(1)",
                    "重新加载(R)<small>Ctrl+R</small>": "javascript:window.location.reload()"
                }, opt);
            }else{
               options = opt; 
            }

            var _right = $(rightmenu);
            for (x in options) {
                var _li, _a;
                _li = document.createElement("li");
                _a = document.createElement("a");
                if (x == "hr") {
                    _right.append("<div class='hr'></div>")
                } else {
                    $(_a).appendTo($(_li)).html(x).attr("href", options[x]);
                    _right.append($(_li));
                }
            };
            console.log(_right);
            elem.append(_right);
            _right.attr("class", "_rightmenu");
            console.log(_right);

            _right.addClass("rightMenu");
            var _height = _right.height();
            var _width = _right.width();

            elem.on("contextmenu", function(e) {
                $("._rightmenu").hide(0);

                var _x = e.clientX,
                    _y = e.clientY,
                    dox = window.innerWidth || document.body.clientWidth,
                    doy = window.innerHeight || document.body.clientHeight;

                if (_x + _width > dox) {
                    _right.css({
                        "left": _x - _width,
                        "top": _y
                    })
                } else if (_y + _height > doy) {
                    _right.css({
                        "top": _y - _height,
                        "left": _x
                    })
                } else {
                    _right.css({
                        "top": _y,
                        "left": _x
                    })
                };
                _right.show(0);
                e.preventDefault();
                e.stopPropagation();
            }).on("click", function() {
                _right.hide(0);
            });
            $(document).on("click contextmenu", function() {
                _right.hide(0);
            })
        })
    }
})(jQuery)