function startMove(obj,iTarget,name,fnEnd)
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var cur=getStyle(obj,name)
		var speed=(iTarget-cur)/6;

		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		
		if(cur==iTarget)
		{
			clearInterval(obj.timer);
			if(fnEnd) 
				fnEnd();
		}
		else if(name=="opacity")
		{
			obj.style[name]=(cur+speed)/100;
			obj.style.filter="alpha(opacity:"+cur+speed+")";
		}
		else
		{
			obj.style[name]=cur+speed+'px';
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