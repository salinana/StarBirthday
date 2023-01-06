<template>
	<view class="content">
		<uni-nav-bar class="search-bar" @clickLeft="toHomePage" left-icon="home" rightIcon="more" :fixed="true" background-color="#EFEFEF">
			<image class="logo" src="/static/logo.png"></image>
			<uni-easyinput class="my-search-input" :styles="searchStyle"  suffixIcon="search" trim="both" v-model="searchValue" placeholder="搜索" @iconClick="clickSeach"></uni-easyinput>
		</uni-nav-bar>
		
		<view class="people-summary-view">
			<view class="people-image-view">
				<image class="people-image" src="/static//demo.jpeg" mode="widthFix" @click="toDetailPage">
				</image>
			</view>
		
			<view class="people-name-view">
				<view><text>刘德华</text></view>
				<button type="warn">点赞</button>
			</view>
			
			<view class="people-features-view">
				<view class="people-feature-item">
					<uni-icons type="medal" size="30"></uni-icons>
					<text>第1234名</text>
				</view>
				
				<view class="people-feature-item">
					<uni-icons type="calendar" size="30"></uni-icons>
					<text>1989年10月1日</text>
				</view>
				<view class="people-feature-item">
					<uni-icons type="location" size="30"></uni-icons>
					<text>中国 香港</text>
				</view>
				<view class="people-feature-item">
					<uni-icons type="notification" size="30"></uni-icons>
					<text>60岁</text>
				</view>
				<view class="people-feature-item">
					<uni-icons type="star" size="30"></uni-icons>
					<text>金牛座</text>
				</view>
				<view class="people-feature-item">
					<uni-icons type="staff" size="30"></uni-icons>
					<text>男</text>
				</view>
				<view class="people-feature-item">
					<uni-icons type="shop" size="30"></uni-icons>
					<text>演员</text>
				</view>
			</view>
		</view>
		
		<view class="people-ranking-view">
			<view calss="people-ranking-box">
				<view class="people-ranking-title">综合</view>
				<view class="people-ranking-number">#1234</view>
			</view>
			<view calss="people-ranking-box">
				<view class="people-ranking-title">女明星</view>
				<view class="people-ranking-number">#1234</view>
			</view>
			<view calss="people-ranking-box">
				<view class="people-ranking-title">60岁</view>
				<view class="people-ranking-number">#1234</view>
			</view>
			<view calss="people-ranking-box">
				<view class="people-ranking-title">60岁女</view>
				<view class="people-ranking-number">#1234</view>
			</view>
			<view calss="people-ranking-box">
				<view class="people-ranking-title">演员</view>
				<view class="people-ranking-number">#1234</view>
			</view>
			<view calss="people-ranking-box">
				<view class="people-ranking-title">女演员</view>
				<view class="people-ranking-number">#1234</view>
			</view>
			<view calss="people-ranking-box">
				<view class="people-ranking-title">射手座</view>
				<view class="people-ranking-number">#1234</view>
			</view>
			<view calss="people-ranking-box">
				<view class="people-ranking-title">女射手座</view>
				<view class="people-ranking-number">#1234</view>
			</view>
		</view>
		
		<view class="people-about-view">
			<text>
				刘德华（Andy Lau），1961年9月27日出生于中国香港，籍贯广东江门 [325]  ，中国香港影视男演员、歌手、制片人、作词人。
				1981年出演电影处女作《彩云曲》。1983年主演的武侠剧《神雕侠侣》在香港取得62点的收视纪录 [1]  。1985年发行首张个人专辑《只知道此刻爱你》 [8]  。1990年凭借专辑《可不可以》在歌坛获得关注。1991年创办天幕电影公司 [2]  。1994年获得十大劲歌金曲最受欢迎男歌星奖；同年担任剧情片《天与地》的制片人。1995年在央视春晚上演唱其代表作《忘情水》 [9]  。2000年凭借警匪片《暗战》获得金像奖最佳男主角奖 [3]  ；同年被《吉尼斯世界纪录大全》评为获奖最多的香港男歌手 [10]  。
				2004年凭借剧情片《大块头有大智慧》获得金像奖最佳男主角奖 [262]  ；同年凭借警匪片《无间道3：终极无间》获得金马奖最佳男主角奖 [4]  ；同年第六次获得十大劲歌金曲最受欢迎男歌星奖。2005年获得香港UA院线颁发的全港最高累积票房香港男演员奖 [5]  。2006年获得釜山国际电影节亚洲最有贡献电影人奖 [6]  。2012年凭借剧情片《桃姐》获得金马奖、金像奖最佳男主角奖；同年担任第49届台湾电影金马奖评审团主席 [7]  。2015年第5次登上央视春晚并演唱歌曲《回家的路》。2020年发行个人首张数字专辑《演·唱》 [252]  。
				演艺事业外，刘德华关心公益慈善。1994年创立刘德华慈善基金会。2000年被评为世界十大杰出青年。2005年发起亚洲新星导计划 [11]  。2008年被委任为香港非官守太平绅士 [12]  。2010年获得第12届世界杰出华人奖 [13]  。2016年连任中国残疾人福利基金会副理事长。
			</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				starName:""
			}
		},
		methods: {
			toHomePage(){
				uni.navigateTo({
					url: '/pages/index/index'
				})
			}
		},
		onLoad(e){
			if(e.starName){
				this.starName = e.starName;
			}
		}
	}
</script>

<style>
	
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
	}
	
	.logo {
		height: 35px;
		width: 70px;
		padding:6rpx;
		background-color: #EFEFEF;
	}
	
	.my-search-input{
		padding: 6rpx;
	}
	
	.people-image{
		width: 50%;
		height:auto;
	}
	
	
	.people-summary-view{
		width:60%;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
	}
	
	.people-image-view{
		text-align: center;
	}
	
	.people-name-view{
		text-align: center;
		font-size: xx-large;
	}
	
	.people-features-view{
		margin-top: 10rpx;
		background-color: #EFEFEF;
		padding: 5rpx;
	}
	
	.people-feature-item{
		font-size: 30rpx;
	}
	
	.people-ranking-view{
		display: flex;
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
		background-color: #EFEFEF;
		width: 60%;
		margin-top:20rpx;
		padding:5rpx;
	}
	
	.people-ranking-box{

	}
	
	.people-ranking-title{
		background-color: white;
		padding: 20rpx;
		margin-right: 5rpx;
		margin-top: 5rpx;
		width:150rpx;
		height:25rpx;
	}
	
	.people-ranking-number{
		background-color: white;
		padding: 20rpx;
		margin-right: 5rpx;
		margin-top: 0rpx;
		width:150rpx;
		height:25rpx;
	}
	
	.people-about-view{
		background-color: #EFEFEF;
		width: 60%;
		margin-top:20rpx;
	}
	
</style>
