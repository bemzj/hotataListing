//游戏初始化
LInit(1000/40,"hotata",750,1206,main);
//游戏入口主函数
function main(){
    LGlobal.stageScale = LStageScaleMode.EXACT_FIT;//设置全屏变量
    LGlobal.screen(LStage.FULL_SCREEN);//设置全面适应
    backLayer = new LSprite();//创建背景层
    addChild(backLayer);//添加背景层到游戏环境中
    musicLayer = new LSprite();//创建音乐层
    addChild(musicLayer);//添加音乐层到游戏环境中
    LLoadManage.load(loadImg,'',loadImging);
}
//预加载页面
function loadImging(result){
	LLoadManage.load(gameImg,loadProgress,startGame);
}
//加载函数
function loadProgress(pre){
}
//游戏开始
function startGame(result){
	imgList=result;
	homePage();
}
//首页
function homePage(){
	//首页层
	var home = new LSprite();
	backLayer.addChild(home);
	//添加背景
	var back = getBitmap(imgList['indexBack']);
	home.addChild(back);
	//logo
	var logo = getBitmap(imgList['logo']);
	home.addChild(logo);
	logo.x=rCenterWidth(logo);
	logo.y=103;
	logo.alpha=0;
	//主题
	var Title = getBitmap(imgList['Title']);
	home.addChild(Title);
	Title.x=rCenterWidth(Title);
	Title.y=257;
	Title.alpha=0;
	//主题1
	var Title1 = getBitmap(imgList['Title1']);
	home.addChild(Title1);
	Title1.x=rCenterWidth(Title1);
	Title1.y=625;
	Title1.alpha=0;
	//主题2
	var Title2 = getBitmap(imgList['Title2']);
	home.addChild(Title2);
	Title2.x=rCenterWidth(Title2);
	Title2.y=712;
	Title2.alpha=0;
	//主题2
	var Title2 = getBitmap(imgList['Title2']);
	home.addChild(Title2);
	Title2.x=rCenterWidth(Title2);
	Title2.y=712;
	Title2.alpha=0;
	//锣的背部
	var gongBottom = getBitmap(imgList['gongBottom']);
	home.addChild(gongBottom);
	gongBottom.x=rCenterWidth(gongBottom);
	gongBottom.y=888;
	gongBottom.alpha=0;
	//锣
	var gong = getBitmap(imgList['gong']);
	home.addChild(gong);
	gong.x=rCenterWidth(gong)+1;
	gong.y=890;
	gong.alpha=0;
	//hit
	var hit = getBitmap(imgList['hit']);
	home.addChild(hit);
	hit.x=350;
	hit.y=970;
	hit.alpha=0;
	//逐层显示
	LTweenLite.to(logo,0.5,{alpha:1.0}).to(Title,0.6,{alpha:1.0}).to(Title1,0.6,{alpha:1.0}).to(Title2,0.6,{alpha:1.0,onComplete:function(){
		LTweenLite.to(gongBottom,0.6,{alpha:1.0}).to(hit,0.6,{alpha:1.0,onComplete:function(){
			bigAndSmall(Title,2,2,1.0,0.02,0,true);
			LTweenLite.to(hit,1.0,{y:950,x:345,scaleX:1.1,sacleY:1.1,rotate:20,loop:true}).to(hit,1.0,{y:970,x:350,rotate:0,scaleX:1.0,sacleY:1.0});
			var hitLayer = new LSprite();
		home.addChild(hitLayer);
		hitLayer.graphics.drawRect(0,"#ed2456",[282,891,185,185],true,'rgba(0,0,0,0)');
		hitLayer.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
				hitLayer.removeEventListener(LMouseEvent.MOUSE_DOWN);
				hit.remove();
				var gongx = gong.x-2;
				var gongx1 = gongx+4;
				var gongs = LTweenLite.to(gong,0.05,{x:gongx,loop:true}).to(gong,0.05,{x:gongx1,loop:true});			
				document.getElementById('gong').play();
				document.getElementById('gong').onended=function(){
					gong.remove();
				}
			});
		}});
		LTweenLite.to(gong,0.6,{alpha:1.0});
	}});	
}