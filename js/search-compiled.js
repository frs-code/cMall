//搜索框
($ => {
    //数据缓存
    /*  var cache = {
          data:{},
          count:0,
          addData:function(key,data){
              if(!this.data[key]){
                  this.data[key] = data;
                  this.count++;
              }
          },
          readData:function(key){
              return this.data[key];
          },
          removeDataByKey:function(key){
              delete  this.data[key];
              this.count--;
          },
          removeDataByOrder:function(num){
              var count = 0;
              for(var key in this.data){
                  if(count >= num){
                      break;
                  }
                  count++;
                  this.removeDataByKey(key);
              }
          }
      };*/

    var $search = $('.header-search'),
        $form = $search.find('.search-form'),
        $input = $search.find('.search-input'),
        $btn = $search.find(".search-btn"),
        $content = $search.find('.search-content');
    //var flag = true;
    //搜索框验证
    $form.on('submit', () => {
        if ($input.val().trim() === '') {
            return false;
        }
    });
    //自动完成
    $input.on('input', () => {
        var key = $input.val().trim();
        var url = 'https://suggest.taobao.com/sug?code=utf-8&q=' + key + '&_ksTS=1576734400260_663' + '&callback=jsonp664&k=1&area=c2c&bucketid=11';
        $.ajax({
            url: url,
            dataType: 'jsonp',
            success: data => {
                var Arr = data;
                var len = Arr['result'].length;
                var html = '';
                if (len < 1) {
                    $content.hide().html('');
                    return;
                }
                for (var i = 0; i < len; i++) {
                    if (i > 6) break;
                    html += `<li class="search-content-item text-ellipsis">${Arr['result'][i][0]}</li>`;
                }
                $content.html(html).show();
            },
            err: err => {
                $content.hide().html('');
            }
        });
        //点击下拉列表选项完成跳转,事件代理实现
        $content.on('click', e => {
            $input.val(e.target.innerHTML);
            $form.submit();
        });
    });
    //加锁策略解决blur先隐藏下拉菜单导致下拉菜单点击事件实训
    /*$content.hover(()=>{
        flag = false;
        console.log(flag)
    },()=>{
        flag = true;
    });*/
    //显示隐藏下拉菜单
    /* $input.on('focus',()=>{
         $content.show();
     }).on('blur',()=>{
         if(flag){
             $content.hide();
         }
     })*/
    $input.on('focus', () => {
        $content.show();
    }).on('click', () => {
        return false;
    });
    $(document).on('click', () => {
        $content.hide();
    });
})(jQuery);

//# sourceMappingURL=search-compiled.js.map