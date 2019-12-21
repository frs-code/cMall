($ => {
    var sliderArr = [{
        "url": "./img/focus-slider/2.png"
    }, {
        "url": "./img/focus-slider/3.png"
    }, {
        "url": "./img/focus-slider/4.png"
    }];
    //用计时器实现节流
    function throttle(func, wait) {
        var timer = null;
        return function () {
            var then = this;
            var argu = arguments;
            if (!timer) {
                timer = setTimeout(function () {
                    func.call(then, argu);
                    clearTimeout(timer);
                    timer = null;
                }, wait);
            }
        };
    }
    //淡入淡出幻灯片
    var sliderFade = {
        $elem: $('.fade-item'),
        nowIndex: 0,
        lastIndex: undefined,
        flag: true,
        len: sliderArr.length,
        sliderTimer: undefined,
        direction: undefined,
        init() {
            this.createElem(sliderArr);
            this.bindEvent();
            this.autoPlay();
        },
        autoPlay() {
            this.sliderTimer = setTimeout(() => {
                this.startFunc("right");
            }, 2500);
        },
        createElem(Arr) {
            var html = '',
                len = Arr.length,

            // slider ='',
            indicator = '';
            html = ` <ul class="slider-indicator-wrap"></ul>
           <div class="slider-control slider-control-left">&lt;</div>
           <div class="slider-control slider-control-right">&gt;</div>`;
            for (var i = 0; i < len; i++) {
                //       slider+=` <div class="slider-item">
                //    <a href="#" target="_blank"><img src=${Arr[i]["url"]} alt=""/></a>
                //</div>`;
                indicator += `<li class="slider-indicator text-indent">${i + 1}</li>`;
            }
            $('.slider').append(html);
            //$('.slider-container').append( slider);
            $('.slider-indicator-wrap').append(indicator);
            $('.fade-item').eq(0).addClass('item-active');
            $('.slider-indicator').eq(0).addClass('slider-indicator-active');
        },
        getIndex(direction) {
            this.lastIndex = this.nowIndex;
            this.direction = direction;
            if (direction == "left" || direction == "right") {
                if (direction == "left") {
                    if (this.nowIndex == 0) {
                        this.nowIndex = this.len - 1;
                    } else {
                        this.nowIndex--;
                    }
                } else {
                    if (this.nowIndex == this.len - 1) {
                        this.nowIndex = 0;
                    } else {
                        this.nowIndex++;
                    }
                }
            } else {
                this.nowIndex = direction;
            }
        },
        changeIndicator(index) {
            $('.slider-indicator-active').removeClass('slider-indicator-active');
            $('.slider-indicator').eq(index).addClass('slider-indicator-active');
        },
        bindEvent() {
            var then = this;
            this.$elem.on('fadeIn', function () {
                $(this).fadeIn(1000, () => {
                    then.flag = true;
                });
            });
            this.$elem.on('fadeOut', function () {
                $(this).fadeOut(1000);
            });
            function pre() {
                then.startFunc("left");
                clearTimeout(then.sliderTimer);
            }
            function next() {
                then.startFunc("right");
                clearTimeout(then.sliderTimer);
            }
            $('.slider-control-left').on('click', throttle(pre, 500));
            $('.slider-control-right').on('click', throttle(next, 500));
            $('.slider').hover(() => {
                clearTimeout(this.sliderTimer);
            }, () => {
                var timer = setTimeout(() => {
                    if (this.direction == "right" || this.direction == "left") {
                        this.startFunc(this.direction);
                    } else {
                        this.startFunc("right");
                    }
                    clearTimeout(timer);
                }, 2500);
            });
            $('.slider-indicator').on('click', function () {
                var index = $(this).index();
                then.startFunc(index);
                clearTimeout(then.sliderTimer);
            });
        },
        startFunc(direction) {
            if (this.flag) {
                this.getIndex(direction);
                if (this.nowIndex != this.lastIndex) {
                    this.flag = false;
                    this.$elem.eq(this.lastIndex).trigger('fadeOut');
                    this.$elem.eq(this.nowIndex).trigger('fadeIn');
                    this.changeIndicator(this.nowIndex);
                    clearTimeout(this.sliderTimer);
                    this.sliderTimer = null;
                    this.autoPlay();
                }
            }
        }
    };
    sliderFade.init();
})(jQuery);

//# sourceMappingURL=banner-compiled.js.map