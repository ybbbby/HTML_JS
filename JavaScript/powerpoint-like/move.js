function startMove(obj,json,fnEnd)
{
	clearInterval(obj.timer);
	var bStop=true;
	obj.timer=setInterval(function(){
		for(var attr in json)
		{
			var cur=getStyle(obj,attr)
			var speed=(json[attr]-cur)/6;

			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			
			if(cur!=json[attr])
			{
				bStop=false;
			}
			if(attr=="opacity")
			{
				obj.style[attr]=(cur+speed)/100;
				obj.style.filter="alpha(opacity:"+cur+speed+")";
			}
			else
			{
				obj.style[attr]=cur+speed+'px';
			}
		}
		if(bStop==true)
		{
			clearInterval(obj.timer);
			if(fnEnd)
				fnEnd();
		}
		else
		{
			bStop=true;
		}
	},30);
}
function getStyle(obj,name)
{
	if(name!="opacity")
	{
		if(obj.currentStyle)
		{
			return parseInt(obj.currentStyle[name]);
		}
		else
		{
			return parseInt(getComputedStyle(obj,null)[name]);
		}
	}	
	else
	{
		if(obj.currentStyle)
		{
			return Math.round(parseFloat(obj.currentStyle[name])*100);
		}
		else
		{
			return Math.round(parseFloat(getComputedStyle(obj,null)[name])*100);
		}
	}
}