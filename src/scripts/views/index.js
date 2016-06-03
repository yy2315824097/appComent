var indexTpl = require('../tpl/index.string');
var swiper = require('../lib/swiper-3.3.1.min.js');

//设置上啦
SPA.defineView('index', {
html: indexTpl,
plugins: ['delegated'],
//子视图的嵌套定义
modules:[{
	name:'content',//自定义的名
	container:'.m-index-container',//在index中所放的容器div名
	views:['home','search','my','news','ownSaid'],//需要换的界面
	defaultTag:'ownSaid'//默认的界面
}],
bindActions: {
	'switch.view':function(e){
		this.modules.content.launch(e.data.tag);
	},
    'exit': function () {
      this.hide();
    }
}

});
window.onload = function() {
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay:1000,
    // 如果需要分页器
    pagination: '.swiper-pagination',
  })       
}
