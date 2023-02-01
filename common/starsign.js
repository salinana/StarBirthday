function getStarsign(month,day){
	month=""+month;
	day=parseInt(day);
	switch(month){
		case "1":
			if(day>19){ return "水瓶座"}
			else return "摩羯座";
			break;
		case "2":
			if(day>18){	return "双鱼座"}
			else return "水瓶座";
			break;
		case "3":
			if(day>20){ return "白羊座"}
			else return "双鱼座";
			break;
		case "4":
			if(day>19){ return "金牛座"}
			else return "白羊座";
			break;
		case "5":
			if(day>20){ return "双子座"}
			else return "金牛座";
			break;
		case "6":
			if(day>21){ return "巨蟹座"}
			else return "双子座";
			break;
		case "7":
			if(day>22){ return "狮子座"}
			else return "巨蟹座";
			break;
		case "8":
			if(day>22){ return "处女座"}
			else return "狮子座";
			break;
		case "9":
			if(day>22){ return "天秤座"}
			else return "处女座";
			break;
		case "10":
			if(day>23){ return "天蝎座"}
			else return "天秤座";
			break;
		case "11":
			if(day>20){ return "射手座"}
			else return "天蝎座";
			break;
		case "12":
			if(day>21){ return "摩羯座"}
			else return "射手座";
			break;
	}
	
	return "";
}

export default getStarsign;