//游戏初始化
LInit(1000/40,"hotata",750,1207,main);
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
	award();
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
//敲锣
function hitGong(){
	var gongLayer = new LSprite();
	backLayer.addChild(gongLayer);
	var back = getBitmap(imgList['gongBack']);
	gongLayer.addChild(back);
	//大锣
	var gongBig = getBitmap(imgList['gongBig']);
	gongLayer.addChild(gongBig);
	gongBig.x=rCenterWidth(gongBig)+6;
	gongBig.y=535;
	//hit
	var hitBig = getBitmap(imgList['hitBig']);
	gongLayer.addChild(hitBig);
	hitBig.x=350;
	hitBig.y=680;
	LTweenLite.to(hitBig,1.0,{y:660,x:345,scaleX:1.1,sacleY:1.1,rotate:20,loop:true}).to(hitBig,1.0,{y:680,x:350,rotate:0,scaleX:1.0,sacleY:1.0});
	//地图
	var map = getBitmap(imgList['map']);
	gongLayer.addChild(map);
	map.x=29;
	map.y=900;
	bling(map,1.0,0.75,1.0,true);
	//亮光
	var light = getBitmap(imgList['light']);
	gongLayer.addChild(light);
	light.x=100;
	light.y=895;
	bling(light,1.0,0.4,1.0,true);
	//线
	var line = getBitmap(imgList['line']);
	gongLayer.addChild(line);
	line.x=112;
	line.y=875;
	
	var hitLayer = new LSprite();
	gongLayer.addChild(hitLayer);
	hitLayer.graphics.drawRect(0,"#ed2456",[190,525,370,370],true,'rgba(0,0,0,0)');
	hitLayer.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
		hitLayer.removeEventListener(LMouseEvent.MOUSE_DOWN);
			hitBig.remove();
			var gongx = gongBig.x-5;
			var gongx1 = gongBig.x+10;
			LTweenLite.to(gongBig,0.05,{x:gongx,loop:true}).to(gongBig,0.05,{x:gongx1});			
			document.getElementById('gong').play();
			document.getElementById('gong').onended=function(){
				gongBig.remove();
		}
	});
}
//分享页面
function sharing(){
	var share = new LSprite();
	backLayer.addChild(share);
	var back = getBitmap(imgList['shareBack']);
	share.addChild(back);
	//金粉
	var jin = getBitmap(imgList['jinGroup']);
	share.addChild(jin);
	jin.y = -140;
	bling(jin,0.5,1.0,0.6,true);
	//logo
	var logo = getBitmap(imgList['logo']);
	share.addChild(logo);
	logo.x=rCenterWidth(logo);
	logo.y=330;
	//分享标题01
	var shareTitle01 = getBitmap(imgList['shareTitle01']);
	share.addChild(shareTitle01);
	shareTitle01.x=rCenterWidth(shareTitle01);
	shareTitle01.y=510;
	bigAndSmall(shareTitle01,2,2,1.0,0.02,0,true);
	//分享标题02
	var shareTitle02 = getBitmap(imgList['shareTitle02']);
	share.addChild(shareTitle02);
	shareTitle02.x=rCenterWidth(shareTitle02);
	shareTitle02.y=608;
	//分享
	var shares = getBitmap(imgList['share']);
	share.addChild(shares);
	shares.x=580;//610
	shares.y=40;//24
	shares.rotate = 15;
	LTweenLite.to(shares,1.0,{x:610,y:10,rotate:0,loop:true}).to(shares,1.0,{x:570,y:40,rotate:15});
	//提示
	var textTip =new setText(0,0,24,"点击关闭分享页","#f5d8a0");
	textTip.x = rCenterWidth(textTip);
	textTip.y = 870;
	share.addChild(textTip);
	bling(textTip,1.0,0.5,0.4,true);
	//关闭分享页
	var closeBack = new LSprite();
	share.addChild(closeBack);
	closeBack.graphics.drawRect(0,"#ffffff",[0,0,LGlobal.width,LGlobal.height],false,"#ffffff");
	closeBack.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
		share.remove();
	});
}
//获奖页面
function award(){
	var awardLayer = new LSprite();
	backLayer.addChild(awardLayer);
	var back = getBitmap(imgList['awardBkg']);
	awardLayer.addChild(back);
	//分享按钮
	var shareRed = getButton(imgList['shareRed']);
	awardLayer.addChild(shareRed);
	shareRed.x=rCenterWidth(shareRed);
	shareRed.y=1015;
	bigAndSmall(shareRed,2,2,1.0,0.02,0,true);
	//光
	var alight = getBitmap(imgList['alight']);
	awardLayer.addChild(alight);
	LTweenLite.to(alight,1.0,{rotate:20,loop:true}).to(alight,1.0,{rotate:-20});
	//礼物
	var gift = getBitmap(imgList['gift']);
	awardLayer.addChild(gift);
	gift.x=rCenterWidth(gift);
	gift.y=275;
}
