<template>
	<view class="content">
		<uni-nav-bar class="search-bar" @clickLeft="toHomePage" left-icon="home" rightIcon="more" :fixed="true" background-color="#EFEFEF">
			<image class="logo" src="/static/logo.png"></image>
			<uni-easyinput class="my-search-input" :styles="searchStyle"  suffixIcon="search" trim="both" v-model="searchValue" placeholder="搜索" @iconClick="clickSearch"></uni-easyinput>
		</uni-nav-bar>

		
		<view class="images-area">
			
			<view class="common-image-view">
				
				<view class="common-content-title">今天生日</view>
				
				<uni-row class="common-image-uni-row">
					<uni-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
						<view class="demo-uni-col">
							<view class="custom-cover">
							<image class="people-image" :src="todaylist[0].imgUrl" mode="widthFix" @click="toDetailPage">
							</image>
							<view class="cover-content">
								<text class="uni-subtitle uni-white">{{todaylist[0].name}} {{todaylist[0].age}}岁</text>
							</view>
							</view>
						</view>
					</uni-col>
					<uni-col :xs="0" :sm="6" :md="6" :lg="6" :xl="6">
						<view v-if="todaylist.length>6" class="demo-uni-col">
							<view class="custom-cover">
							<image class="people-image" :src="todaylist[6].imgUrl" mode="widthFix" @click="toDetailPage">
							</image>
							<view class="cover-content">
								<text class="uni-subtitle uni-white">{{todaylist[6].name}} {{todaylist[6].age}}岁</text>
							</view>
							</view>
						</view>
					</uni-col>
					<uni-col :xs="0" :sm="6" :md="6" :lg="6" :xl="6">
						<view v-if="todaylist.length>7" class="demo-uni-col">
							<view class="custom-cover">
							<image class="people-image" :src="todaylist[7].imgUrl" mode="widthFix" @click="toDetailPage">
							</image>
							<view class="cover-content">
								<text class="uni-subtitle uni-white">{{todaylist[7].name}} {{todaylist[7].age}}岁</text>
							</view>
							</view>
						</view>
					</uni-col>
					<uni-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
						<view class="demo-uni-col">
							<view class="custom-cover">
							<image class="people-image" :src="todaylist[1].imgUrl" mode="widthFix" @click="toDetailPage">
							</image>
							<view class="cover-content">
								<text class="uni-subtitle uni-white">{{todaylist[1].name}} {{todaylist[1].age}}岁</text>
							</view>
							</view>
						</view>
					</uni-col>
				</uni-row>
				
				<uni-row class="common-image-uni-row">
					<uni-col :xs="8" :sm="4" :md="4" :lg="4" :xl="4">
						<view class="demo-uni-col">
							<view class="custom-cover">
							<image class="people-image" :src="todaylist[2].imgUrl" mode="widthFix" @click="toDetailPage">
							</image>
							<view class="cover-content">
								<text class="uni-subtitle uni-white">{{todaylist[2].name}} {{todaylist[2].age}}岁</text>
							</view>
							</view>
						</view>
					</uni-col>
					<uni-col :xs="8" :sm="4" :md="4" :lg="4" :xl="4">
						<view class="demo-uni-col">
							<view class="custom-cover">
							<image class="people-image" :src="todaylist[3].imgUrl" mode="widthFix" @click="toDetailPage">
							</image>
							<view class="cover-content">
								<text class="uni-subtitle uni-white">{{todaylist[3].name}} {{todaylist[3].age}}岁</text>
							</view>
							</view>
						</view>
					</uni-col>
					<uni-col :xs="0" :sm="4" :md="4" :lg="4" :xl="4">
						<view v-if="todaylist.length>8" class="demo-uni-col">
							<view class="custom-cover">
							<image class="people-image" :src="todaylist[8].imgUrl" mode="widthFix" @click="toDetailPage">
							</image>
							<view class="cover-content">
								<text class="uni-subtitle uni-white">{{todaylist[8].name}} {{todaylist[8].age}}岁</text>
							</view>
							</view>
						</view>
					</uni-col>
					<uni-col :xs="0" :sm="4" :md="4" :lg="4" :xl="4">
						<view v-if="todaylist.length>9" class="demo-uni-col">
							<view class="custom-cover">
							<image class="people-image" :src="todaylist[9].imgUrl" mode="widthFix" @click="toDetailPage">
							</image>
							<view class="cover-content">
								<text class="uni-subtitle uni-white">{{todaylist[9].name}} {{todaylist[9].age}}岁</text>
							</view>
							</view>
						</view>
					</uni-col>
					<uni-col :xs="0" :sm="4" :md="4" :lg="4" :xl="4">
						<view v-if="todaylist.length>10" class="demo-uni-col">
							<view class="custom-cover">
							<image class="people-image" :src="todaylist[10].imgUrl" mode="widthFix" @click="toDetailPage">
							</image>
							<view class="cover-content">
								<text class="uni-subtitle uni-white">{{todaylist[10].name}} {{todaylist[10].age}}岁</text>
							</view>
							</view>
						</view>
					</uni-col>
					<uni-col :xs="8" :sm="4" :md="4" :lg="4" :xl="4">
						<view class="demo-uni-col">
							<view class="custom-cover">
							<image class="people-image" :src="todaylist[4].imgUrl" mode="widthFix" @click="toDetailPage">
							</image>
							<view class="cover-content">
								<text class="uni-subtitle uni-white">{{todaylist[4].name}} {{todaylist[4].age}}岁</text>
							</view>
							</view>
						</view>
					</uni-col>
				</uni-row>
				
			</view>
			<view class="common-image-view">
				<view class="common-content-title">明天生日</view>
				
				<uni-row class="common-image-uni-row">
					<uni-col :xs="8" :sm="4" :md="4" :lg="4" :xl="4">
						<view class="demo-uni-col">
							<view class="custom-cover">
							<image class="people-image" :src="tmrlist[0].imgUrl" mode="widthFix" @click="toDetailPage">
							</image>
							<view class="cover-content">
								<text class="uni-subtitle uni-white">{{tmrlist[0].name}} {{tmrlist[0].age}}岁</text>
							</view>
							</view>
						</view>
					</uni-col>
					<uni-col :xs="8" :sm="4" :md="4" :lg="4" :xl="4">
						<view class="demo-uni-col">
							<view class="custom-cover">
							<image class="people-image" :src="tmrlist[1].imgUrl" mode="widthFix" @click="toDetailPage">
							</image>
							<view class="cover-content">
								<text class="uni-subtitle uni-white">{{tmrlist[1].name}} {{tmrlist[1].age}}岁</text>
							</view>
							</view>
						</view>
					</uni-col>
					<uni-col :xs="0" :sm="4" :md="4" :lg="4" :xl="4">
						<view class="demo-uni-col">
							<view class="custom-cover">
							<image class="people-image" :src="tmrlist[4].imgUrl" mode="widthFix" @click="toDetailPage">
							</image>
							<view class="cover-content">
								<text class="uni-subtitle uni-white">{{tmrlist[4].name}} {{tmrlist[4].age}}岁</text>
							</view>
							</view>
						</view>
					</uni-col>
					<uni-col :xs="0" :sm="4" :md="4" :lg="4" :xl="4">
						<view v-if="tmrlist.length>5" class="demo-uni-col">
							<view class="custom-cover">
							<image class="people-image" :src="tmrlist[5].imgUrl" mode="widthFix" @click="toDetailPage">
							</image>
							<view class="cover-content">
								<text class="uni-subtitle uni-white">{{tmrlist[5].name}} {{tmrlist[5].age}}岁</text>
							</view>
							</view>
						</view>
					</uni-col>
					<uni-col :xs="0" :sm="4" :md="4" :lg="4" :xl="4">
						<view v-if="tmrlist.length>6" class="demo-uni-col">
							<view class="custom-cover">
							<image class="people-image" :src="tmrlist[6].imgUrl" mode="widthFix" @click="toDetailPage">
							</image>
							<view class="cover-content">
								<text class="uni-subtitle uni-white">{{tmrlist[6].name}} {{tmrlist[6].age}}岁</text>
							</view>
							</view>
						</view>
					</uni-col>
					<uni-col :xs="8" :sm="4" :md="4" :lg="4" :xl="4">
						<view class="demo-uni-col">
							<view class="custom-cover">
							<image class="people-image" :src="tmrlist[2].imgUrl" mode="widthFix" @click="toDetailPage">
							</image>
							<view class="cover-content">
								<text class="uni-subtitle uni-white">{{tmrlist[2].name}} {{tmrlist[2].age}}岁</text>
							</view>
							</view>
						</view>
					</uni-col>
				</uni-row>
				
			</view>
			<view class="common-image-view">
				<view class="common-content-title">热门排行</view>
				
				<uni-row class="common-image-uni-row">
					<uni-col :xs="8" :sm="4" :md="4" :lg="4" :xl="4">
						<view class="demo-uni-col">
							<view class="custom-cover">
							<image class="people-image" :src="starlist[0].imgUrl" mode="widthFix" @click="toDetailPage">
							</image>
							<view class="cover-content">
								<text class="uni-subtitle uni-white">{{starlist[0].name}} {{starlist[0].age}}岁</text>
							</view>
							</view>
						</view>
					</uni-col>
					<uni-col :xs="8" :sm="4" :md="4" :lg="4" :xl="4">
						<view class="demo-uni-col">
							<view class="custom-cover">
							<image class="people-image" :src="starlist[1].imgUrl" mode="widthFix" @click="toDetailPage">
							</image>
							<view class="cover-content">
								<text class="uni-subtitle uni-white">{{starlist[1].name}} {{starlist[1].age}}岁</text>
							</view>
							</view>
						</view>
					</uni-col>
					<uni-col :xs="0" :sm="4" :md="4" :lg="4" :xl="4">
						<view class="demo-uni-col">
							<view class="custom-cover">
							<image class="people-image" :src="starlist[4].imgUrl" mode="widthFix" @click="toDetailPage">
							</image>
							<view class="cover-content">
								<text class="uni-subtitle uni-white">{{starlist[4].name}} {{starlist[4].age}}岁</text>
							</view>
							</view>
						</view>
					</uni-col>
					<uni-col :xs="0" :sm="4" :md="4" :lg="4" :xl="4">
						<view class="demo-uni-col">
							<view class="custom-cover">
							<image class="people-image" :src="starlist[5].imgUrl" mode="widthFix" @click="toDetailPage">
							</image>
							<view class="cover-content">
								<text class="uni-subtitle uni-white">{{starlist[5].name}} {{starlist[5].age}}岁</text>
							</view>
							</view>
						</view>
					</uni-col>
					<uni-col :xs="0" :sm="4" :md="4" :lg="4" :xl="4">
						<view class="demo-uni-col">
							<view class="custom-cover">
							<image class="people-image" :src="starlist[6].imgUrl" mode="widthFix" @click="toDetailPage">
							</image>
							<view class="cover-content">
								<text class="uni-subtitle uni-white">{{starlist[6].name}} {{starlist[6].age}}岁</text>
							</view>
							</view>
						</view>
					</uni-col>
					<uni-col :xs="8" :sm="4" :md="4" :lg="4" :xl="4">
						<view class="demo-uni-col">
							<view class="custom-cover">
							<image class="people-image" :src="starlist[2].imgUrl" mode="widthFix" @click="toDetailPage">
							</image>
							<view class="cover-content">
								<text class="uni-subtitle uni-white">{{starlist[2].name}} {{starlist[2].age}}岁</text>
							</view>
							</view>
						</view>
					</uni-col>
				</uni-row>
				
			</view>
		</view>
	</view>
</template>

<script>
	import database from "@/common/database.js"
	export default {
		data() {
			return {
				starlist:[],
				todaylist:[],
				tmrlist:[]
			}
		},
		onLoad() {
			const today = new Date();
			let today_day=today.getDate();
			let today_month=today.getMonth()+1;
			let year=today.getFullYear();
			console.log(today_month+"/"+today_day);
			const tomorrow =  new Date();
			tomorrow.setDate(today.getDate() + 1);
			let tmr_day=tomorrow.getDate();
			let tmr_month=tomorrow.getMonth()+1;
			console.log(tmr_month+"/"+tmr_day);
			

			for (let i = 0; i < database.length; i++) {
				var temp=database[i].split("|");
				this.starlist[i]={ranking:i,age:year-temp[4],index:temp[0],visit:temp[1],name:temp[2],sex:temp[3],year:temp[4],month:temp[5],day:temp[6],job:temp[7],country:temp[8],province:temp[9],city:temp[10],imgUrl:temp[11]}	
				if(this.starlist[i].month==today_month&&this.starlist[i].day==today_day){
					this.todaylist.push(this.starlist[i]);
				}
				if(this.starlist[i].month==tmr_month&&this.starlist[i].day==tmr_day){
					this.tmrlist.push(this.starlist[i]);
				}
			}
			
			for (let j = 0; j < this.todaylist.length; j++) {
				console.log(this.todaylist[j].name);
			}
			
			for (let j = 0; j < this.tmrlist.length; j++) {
				console.log(this.tmrlist[j].name);
			}
		},
		methods: {
			clickSearch(){
				uni.navigateTo({
					url: '/pages/search/search'
				})
			},
			toDetailPage(){
				uni.navigateTo({
					url: '/pages/detail/detail?starName=刘德华'
				})
			},
			toHomePage(){
				uni.navigateTo({
					url: '/pages/index/index'
				})
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
	
/* 	.search-bar{
		display: flex;
		width: 100%;
		background-color: white;
	} */

	.logo {
		height: 35px;
		width: 70px;
		padding:6rpx;
		background-color: #EFEFEF;
	}
	
	.my-search-input{
		padding: 6rpx;
	}

	.text-area {
		background-color: skyblue;
		width:100%;
		display: flex;
		justify-content: center;
	}


	.images-area{
		margin-top: 20rpx;
		width:80%;
	}
	
	.common-image-view{
		margin-top: 20rpx;
	}

	.common-content-title{
		font-size: x-large;
		text-align: center;
		margin-left: 20rpx;
		margin-right:20rpx;
		border-bottom: 5rpx solid #8f8f94;
		margin-bottom: 20rpx;
	}
	
	.custom-cover {
		flex: 1;
		flex-direction: row;
		position: relative;
	}
	
	.cover-content {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 40px;
		background-color: rgba($color: #000000, $alpha: 0.4);
		display: flex;
		flex-direction: row;
		align-items: center;
		padding-left: 15px;
		font-size: 14px;
		color: #fff;
	}
	
	.people-image{
		width: 100%;
		height:auto;
	}
	
	
	.common-image-uni-row {
		margin-bottom: 0px;
		/* QQ、字节小程序文档写有 :host，但实测不生效 */
		/* 百度小程序没有 :host，需要设置block */
		/* #ifdef MP-TOUTIAO || MP-QQ || MP-BAIDU */
		display: block;
		/* #endif */
		padding: 0rpx;
	}

</style>
