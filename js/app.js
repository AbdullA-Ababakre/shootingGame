// 元素
var container = document.getElementById('game');
var canvas= document.getElementById('canvas');
const canvasHeight=canvas.clientHeight;
const canvasWidth=canvas.clientWidth;
const context=canvas.getContext('2d');

var DEFAULT_OPT = {
  status: 'start', // 游戏开始默认为开始中
  level: 1, // 游戏默认等级
  totalLevel: 6, // 总共6关
  numPerLine: 7, // 游戏默认每行多少个怪兽
  canvasPadding: 30, // 默认画布的间隔
  bulletSize: 10, // 默认子弹长度
  bulletSpeed: 10, // 默认子弹的移动速度
  enemySpeed: 2, // 默认敌人移动距离
  enemySize: 50, // 默认敌人的尺寸
  enemyGap: 10,  // 默认敌人之间的间距
  enemyIcon: './img/enemy.png', // 怪兽的图像
  enemyBoomIcon: './img/boom.png', // 怪兽死亡的图像
  enemyDirection: 'right', // 默认敌人一开始往右移动
  planeSpeed: 5, // 默认飞机每一步移动的距离
  planeSize: {
    width: 60,
    height: 100
  }, // 默认飞机的尺寸,
  planeIcon: './img/plane.png',
};



/**
 * 整个游戏对象
 */
var GAME = {
  /**
   * 初始化函数,这个函数只执行一次
   * @param  {object} opts 
   * @return {[type]}      [description]
   */
  init: function(opt) {
    this.status = 'start';
    const opts=Object.assign({},DEFAULT_OPT,opt);
    this.opts=opts;
    this.bindEvent();
  },
  bindEvent: function() {
    var playBtn = document.querySelector('.js-play');
    // 开始游戏按钮绑定
    playBtn.onclick = ()=>{
      this.play();
    };
  },
  /**
   * 更新游戏状态，分别有以下几种状态：
   * start  游戏前
   * playing 游戏中
   * failed 游戏失败
   * success 游戏成功
   * all-success 游戏通过
   * stop 游戏暂停（可选）
   */
  setStatus: function(status) {
    this.status = status;
    container.setAttribute("data-status", status);
  },
  play: function() {
    this.setStatus('playing');
    const {opts}=this;

    this.enemys=[];
    this.plane=new Plane({});

    this.update();
  },
  update:function(){
    this.clear();

    this.updateEnemy();
    this.updatePlane();

    if(!this.enemys.length){
      this.end('success');
    }else if(怪兽碰到了飞机的高度){
       
    }else if(false){
      this.end('fail');
    }else{
      // 根据游戏数据绘制游戏画面 
      this.draw();

      setTimeout(()=>{
        this.update();
      },1000/30);
    }
  },
  end:function(status){
      this.clear();
      if(status==='success' && this.opts.level>=this.opts.totalLevel){
        status='all-success';
      }
      this.setStatus(status);
  },
  draw:function(){
     
  },
  clear:function(){
      context.clearRect(0,0,canvasWidth,canvasHeight);
  },
  updateEnemy:function(){
      
  }, 
  updatePlane:function(){
        
  }
};


// 初始化
GAME.init();
