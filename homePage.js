// JavaScript Document
$(function(){
	$(window).scroll(function(){
		var offset=$("body,html").scrollTop();
		console.log(offset);
		if(offset>=800&&offset<=1500){
			$(".couplet").show(1000);
			
			}else{
				$(".couplet").hide(1000)
				
				}
		if(offset>=100){
			$(".article").fadeIn(1000);
			
			}else{	
				$(".article").fadeOut(1000);
				}
		if(offset>40){
				
				$(".photoShow").slideUp(500);
				clearInterval(timer);
				distance=0
				
				}
		
		if(offset>=100){
			$(".top_introduce").css("opacity","0.7")
			}
		});
	$(".top>.top_introduce>li.gameLeft").hover(function(){
		
		$(".top>.top_introduce>li>ul.game").slideDown();
		
		},function(){
			
			$(".top>.top_introduce>li>ul.game").slideUp();
			
			});
	var timer;
	var distance=0;
	function autoplay (){
		timer=setInterval(function(){
			
			distance -=5;
			if(distance<=-1100){
				distance=0;
				}
			$(".photoShow>.photoShow_hidden>ul").css("marginLeft",distance);
			/*console.log(distance)*/
			
			},50)
		}
		
		$("#photo").one("mouseenter",function(){
			
			$(".photoShow").css("display","block");
			
			$(".photoShow").slideDown(500);
			autoplay();
			
			$(".photoShow>.photoShow_hidden>ul>li").hover(function(){
				clearInterval(timer);
				$(".photoShow>.photoShow_hidden>ul>li").siblings().css("opacity",0.7);
				$(this).css("opacity",1);
				},function(){
					$(".photoShow>.photoShow_hidden>ul>li").css("opacity",1);
					
					autoplay();
					
					});
					
			
		})

				
		    $(".popup").slideDown(500).fadeOut(2000).fadeIn(1000);
			$(".popup>span").click(function(){
				$(".popup").css("display","none");
				
				
				})
		
		$("body").delegate(".control,.p1,.p2","propertychange input",function(){
			
			
			if($(this).val().length>0){
				$(".submit").prop("disabled",false)
				
				
				}else{
					$(".submit").prop("disabled",true)
					
					}
			
			})
		function fromdate(){
		 var time=new Date();
		  var y=time.getFullYear();
			 var m=time.getMonth()+1;
			 var d=time.getDay();
			 var h=time.getHours();
			 var mins=time.getMinutes();
			 var s=time.getSeconds();
		if(m<10){
			m="0"+m;
			}
		if(d<10){
			d="0"+d;
			}
		if(s<10){
			s="0"+s;
			}
			
		var arr=[y+"-",m+"-",d+" ",h+":",mins+":",s];
		return arr.join("");
		}
	/*	点击量
		function clicks(){
			var num=0;
		$(".artical").click(function(){
			  
				num+=num;
				console.log(num)
				})
			return num;
			}
	*/
		$(".submit").click(function(){
			 confirm("是否确定发表？");
			 var $text=$(".control").val();
			 var $p1=$(".p1").val();
			 var  $p2=$(".p2").val();
			//对图片路径进行处理
			var $file=$(".p3");
			var fileObj=$file[0];
			console.log(fileObj);
			var windowURL = window.URL || window.webkitURL;
	        var dataURL;
			if (fileObj && fileObj.files && fileObj.files[0]) {
	            dataURL = windowURL.createObjectURL(fileObj.files[0]);
				console.log(dataURL);
	        } else {
	            dataURL = $file.val();
	           // var imgObj = document.getElementById("preview");
	            imgObj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
	            imgObj.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = dataURL;
 
	        }
			//对图片路径进行处理结束
			
			
			 var $weibo=createEle($text,$p1,$p2,dataURL);
			 $(".massageList").prepend($weibo);
			 $(".control").val("");
			 $(".p1").val("");
			 $(".p2").val("");
			 $(".p3").val("");
			})		
	 function createEle(text,p1,p2,dataURL){
		/* console.log(p3)*/
		var $weibo=$("<div class=\"article\">\n"+
			"<h1>"+p1+"</h1>\n"+
			"<div class=\"article_picture\"><img src="+dataURL+" /></div>\n"+
			"<div class=\"article_content\">\n"+
			"<p>"+text+"</p>\n"+
			"</div>\n"+
			"<p>发布于："+fromdate()+" | 阅读：9000 | 标签："+p2+"</p>\n"+
			"</div>");

		 	 return $weibo;
	
		 }
		 
	
	
	
	
	
	})