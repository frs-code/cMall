//今日推荐
($ => {
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
    var slider = {
        nowIndex: 0,
        flag: true,
        len: $('.slider-container').length,
        w: $('.today-container').width(),
        sliderTimer: undefined,
        direction: undefined,
        init() {
            this.createElem();
            this.bindEvent();
            this.autoPlay();
        },
        autoPlay() {
            this.sliderTimer = setTimeout(() => {
                this.move('next');
            }, 3000);
        },
        createElem() {
            var html = `<div class="slider-control slider-control-left">&lt;</div>
           <div class="slider-control slider-control-right">&gt;</div>`;
            $('.today-container').append(html);
        },
        bindEvent() {
            var then = this;
            function pre() {
                then.move('prev');
                clearTimeout(then.sliderTimer);
            }
            function next() {
                then.move('next');
                clearTimeout(then.sliderTimer);
            }
            $('.slider-control-left').on('click', throttle(pre, 500));
            $('.slider-control-right').on('click', throttle(next, 500));
            $('.slider').hover(() => {
                clearTimeout(this.sliderTimer);
            }, () => {
                var timer = setTimeout(() => {
                    if (this.direction == "prev" || this.direction == "next") {
                        this.move(this.direction);
                    } else {
                        this.move("next");
                    }
                    clearTimeout(timer);
                }, 2500);
            });
        },
        move(direction) {
            var then = this;
            this.direction = direction;
            if (this.flag) {
                this.flag = false;
                var start = 1;
                if (direction == 'prev' || direction == 'next') {
                    if (direction == 'prev') {
                        this.nowIndex--;
                        if (this.nowIndex < 0) {
                            $('.slider-item').css({ left: -(this.w * this.len) });
                            this.nowIndex = this.len - 1;
                        }
                    } else {
                        this.nowIndex++;
                        if (this.nowIndex > this.len - 1) {
                            start = 0;
                            $('.slider-item').animate({ left: -(this.w * this.len) }, function () {
                                $(this).css({ left: 0 });
                                clearTimeout(then.sliderTimer);
                                then.autoPlay();
                                then.flag = true;
                            });
                            this.nowIndex = 0;
                        }
                    }
                }
            }
            if (start) {
                $('.slider-item').animate({ left: -(this.w * this.nowIndex) }, function () {
                    clearTimeout(then.sliderTimer);
                    then.autoPlay();
                    then.flag = true;
                });
            }
        }
    };
    slider.init();
})(jQuery);

//# sourceMappingURL=today-compiled.js.map