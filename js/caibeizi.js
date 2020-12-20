/*
* @Author: Administrator
* @Date:   2020-12-19 12:39:23
* @Last Modified by:   Administrator
* @Last Modified time: 2020-12-19 17:54:55
*/
$(document).ready(function() {
	var random_suger=0;//有糖的杯子序号
	var a=1;//a为对话的计数器
	var t=true;//t控制选择时不会跳转
	var b=1;//b控制游戏进程
	var c=0;//c为生成杯子个数
	var d=0;//d为拿起的杯子序号
	var t=true;
	var t2=true;//t2和n3确保一个杯子只计数一次
	var n3=0;
	localStorage.setItem("1","1");
	localStorage.setItem("2","2");
	localStorage.setItem("3","3");
	localStorage.setItem("4","4");
	localStorage.setItem("5","5");

	localStorage.setItem("6","6");
	localStorage.setItem("7","7");
	localStorage.setItem("8","8");
	localStorage.setItem("9","9");
	localStorage.setItem("10","10");

	localStorage.setItem("11","11");
	localStorage.setItem("12","12");
	localStorage.setItem("13","13");
	localStorage.setItem("14","14");
	localStorage.setItem("15","15");

	$("#talk").on("click",function(){
		//点击会使对话更换
		if(t==true){
			jump();
		}
	});
	function jump(){
		switch(a){
			case 1:
				$("#talk").text("游戏内容为:由你选择一个1~15的数字，"+
					"我们会生成该数字个数的杯子。");
				a++;
				break;
			case 2:
				$("#talk").text("所有杯子中只有一个杯子下扣着一块糖，"+
					"游戏目标即用最少的拿起杯子的次数取出这块糖，我们"+
					"会记录你的最好成绩。");
				a++;
				break;
			case 3:
			console.log("进入case3");
				t=false;
				$("#talk").text("你要生成多少个杯子？");
				$("#buttons").css({display: 'block'});
				$("#buttons").animate({width:'318px',height:'280px',left:'350px',top:'200px'},1000,function(){
					$("#buttons").append("<button id='btn1' class='btns'>1个</button>");
					$("#buttons").append("<button id='btn2' class='btns'>2个</button>");
					$("#buttons").append("<button id='btn3' class='btns'>3个</button>");
					$("#buttons").append("<button id='btn4' class='btns'>4个</button>");
					$("#buttons").append("<button id='btn5' class='btns'>5个</button>");
					$("#buttons").append("<button id='btn6' class='btns'>6个</button>");
					$("#buttons").append("<button id='btn7' class='btns'>7个</button>");
					$("#buttons").append("<button id='btn8' class='btns'>8个</button>");
					$("#buttons").append("<button id='btn9' class='btns'>9个</button>");
					$("#buttons").append("<button id='btn10' class='btns'>10个</button>");
					$("#buttons").append("<button id='btn11' class='btns'>11个</button>");
					$("#buttons").append("<button id='btn12' class='btns'>12个</button>");
					$("#buttons").append("<button id='btn13' class='btns'>13个</button>");
					$("#buttons").append("<button id='btn14' class='btns'>14个</button>");
					$("#buttons").append("<button id='btn15' class='btns'>15个</button>");
				});
				break;
			case 4:
				console.log("进入了case4");
				$("#talk").text("游戏开始，加油！");
				a++;
				break;
			case 5:
				$("body").prepend("<div id='score_con'></div>");
				$("#score_con").append("<div id='score_1' class='clear'>已拿起</div>");
				$("#score_con").append("<div id='score_counter' class='clear'>0</div>");
				$("#score_con").append("<div id='score_2' class='clear'>个杯子</div>");
				$("#talk").remove();
				$("#game").css({
					left: '28px',
					top: '1px',
					display: 'block'
				});
				$("#game").animate({width:'1000px',height:'676px'},1000,function(){
					random_suger=parseInt(Math.random()*c+1);
					for(var i=0;i<c;i++){
						console.log(i+1);
						console.log(random_suger);
						$("#game").append("<div id='cup"+(i+1)+"' class='cups' class='clear'></div>");
						$("#cup"+(i+1)).fadeIn(1000,function(){
							return true;
						})
					}
				});
				a++;
				break;
			default:
				a++;
				console.log(a);
				break;
		}
	}
	$("#buttons").on("click","#btn1",function(){
		console.log("点击了按钮");
		c=1;
		btn_select();
	});
	$("#buttons").on("click","#btn2",function(){
		console.log("点击了按钮");
		c=2;
		btn_select();
	});
	$("#buttons").on("click","#btn3",function(){
		console.log("点击了按钮");
		c=3;
		btn_select();
	});
	$("#buttons").on("click","#btn4",function(){
		console.log("点击了按钮");
		c=4;
		btn_select();
	});
	$("#buttons").on("click","#btn5",function(){
		console.log("点击了按钮");
		c=5;
		btn_select();
	});
	$("#buttons").on("click","#btn6",function(){
		console.log("点击了按钮");
		c=6;
		btn_select();
	});
	$("#buttons").on("click","#btn7",function(){
		console.log("点击了按钮");
		c=7;
		btn_select();
	});
	$("#buttons").on("click","#btn8",function(){
		console.log("点击了按钮");
		c=8;
		btn_select();
	});
	$("#buttons").on("click","#btn9",function(){
		console.log("点击了按钮");
		c=9;
		btn_select();
	});
	$("#buttons").on("click","#btn10",function(){
		console.log("点击了按钮");
		c=10;
		btn_select();
	});
	$("#buttons").on("click","#btn11",function(){
		console.log("点击了按钮");
		c=11;
		btn_select();
	});
	$("#buttons").on("click","#btn12",function(){
		console.log("点击了按钮");
		c=12;
		btn_select();
	});
	$("#buttons").on("click","#btn13",function(){
		console.log("点击了按钮");
		c=13;
		btn_select();
	});
	$("#buttons").on("click","#btn14",function(){
		console.log("点击了按钮");
		c=14;
		btn_select();
	});
	$("#buttons").on("click","#btn15",function(){
		console.log("点击了按钮");
		c=15;
		btn_select();
	});
	$("#game").on("click","#cup1",function(){
		d=1;
		score_change(d);
	});
	$("#game").on("click","#cup2",function(){
		d=2;
		score_change(d);
	});
	$("#game").on("click","#cup3",function(){
		d=3;
		score_change(d);
	});
	$("#game").on("click","#cup4",function(){
		d=4;
		score_change(d);
	});
	$("#game").on("click","#cup5",function(){
		d=5;
		score_change(d);
	});
	$("#game").on("click","#cup6",function(){
		d=6;
		score_change(d);
	});
	$("#game").on("click","#cup7",function(){
		d=7;
		score_change(d);
	});
	$("#game").on("click","#cup8",function(){
		d=8;
		score_change(d);
	});
	$("#game").on("click","#cup9",function(){
		d=9;
		score_change(d);
	});
	$("#game").on("click","#cup10",function(){
		d=10;
		score_change(d);
	});
	$("#game").on("click","#cup11",function(){
		d=11;
		score_change(d);
	});
	$("#game").on("click","#cup12",function(){
		d=12;
		score_change(d);
	});
	$("#game").on("click","#cup13",function(){
		d=13;
		score_change(d);
	});
	$("#game").on("click","#cup14",function(){
		d=14;
		score_change(d);
	});
	$("#game").on("click","#cup15",function(){
		d=15;
		score_change(d);
	});
	function btn_select(){
		console.log("进入成功");
		t=true;
		a++;
		$("#buttons").animate({width:'0px',height:'0px',left:'0px',bottom:'0px'},1000,function(){
			$("#buttons").remove();
			jump();
		});
	}
	function score_change(num){
		var z_in1=0;//杯子的z-index
		var z_in2=0;//糖的z-index
		var w=$("#cup"+num).position();
		if(num!=n3){
			$("#score_counter").text(parseInt($("#score_counter").text())+1);			
		}
		n3=num;
		if(num==random_suger){
			var p=parseInt($("#score_counter").text());
			var l=parseInt(localStorage.getItem(c+''));
			if(p<l){
				localStorage.setItem(c+"",p+"");
			}
			localStorage.setItem(c+"",$("#score_counter").text());
			if(num<=5&&num>=1){
				z_in1=100006;
				z_in2=100005;
			}
			if(num<=10&&num>=6){
				z_in1=100004;
				z_in2=100003;
			}
			if(num<=15&&num>=11){
				z_in1=100002;
				z_in2=100001;
			}
			$("#cup"+num).css({
				zIndex: z_in1+'px'
			});
			$("#suger").css({
				zIndex: z_in2+'px'
			});
			$("#game").append("<div id='suger' id=></div>");
			$("#suger").css({
				left: (w.left+90)+'px',
				top: (w.top+90)+'px'
			});
			$("#cup"+num).animate({top:"-150px"},1000);
			$("body").append("<a href='' id='restart'>重新开始</a>");
			$("body").append("<div id='check_scores'>查看最好成绩</div>");
		}else{
			if(num<=5&&num>=1){
				z_in1=100006;
				z_in2=100005;
			}
			if(num<=10&&num>=6){
				z_in1=100004;
				z_in2=100003;
			}
			if(num<=15&&num>=11){
				z_in1=100002;
				z_in2=100001;
			}
			$("#cup"+num).css({
				zIndex: z_in1+'px'
			});
			$("#suger").css({
				zIndex: z_in2+'px'
			});
			$("#cup"+num).animate({top:"-150px"},1000);
		}
	}
	$("body").on("click","#check_scores",function(){
		scores_();
	});
	function scores_(){
		if(t==true){
			t=false;
			$("body").append("<div id='scores'></div>");
			$("#scores").animate({left:'600px',top:'200px',width:'600px',height:'450px'},1000,function(){
				$("#scores").append("<div id='exit'>×</div>");
				for(var i=0;i<15;i++){
					var j=localStorage.getItem((i+1)+"");
					$("#scores").append("<div>杯子为"+(i+1)+"个时，最快用了"+j+"次找到糖</div>");
				}
				
			})
		}
	}
	$("body").on("click","#exit",function(){
		console.log("进入了exit");
		$("#scores").empty();
		$("#scores").animate({width:'0px',height:'0px',left:'505px',top:'776px'},1000,function(){
			$("#scores").remove();
		})
	})
});