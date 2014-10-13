var menu = {
    init: function () {
        this.subMenu();

        // 点击子菜单后消失
        $(".frame li").click(function () {
            $(this).closest(".frame").hide();
        });
    },
    disabled: function (list) {
        for (var i = 0, max = list.length; i < max; i++) {
            $(".menu li." + list[i]).addClass("disabled");
        }
    },
    undisabled: function (list) {
        for (var i = 0, max = list.length; i < max; i++) {
            $(".menu li." + list[i]).removeClass("disabled");
        }
    },
    // 焦点不在菜单上时需点击展开子菜单，否则为鼠标移动展开
    subMenu: function () {
        $(".menu > ul > li > a, .menu > ul> li > span").click(function () {
            var $it = $(this);
            $it.next().show();

            $(".menu > ul > li > a, .menu > ul> li > span").unbind();

            $(".menu > ul > li > a, .menu > ul> li > span").mouseover(function () {
                $(".frame").hide();
                var $it = $(this);
                $it.next().show();
            });
        });
    }
};