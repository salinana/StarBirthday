<template>
	
	<!-- #ifdef APP-PLUS -->
	<view class="status_bar">  
	    <view class="top_view"></view>  
	</view>  
	<!-- #endif -->
	
	<view class="content">
		<uni-nav-bar class="search-bar" @clickLeft="toHomePage" left-icon="home" rightIcon="more" :fixed="true" background-color="#EFEFEF">
			<image class="logo" src="/static/logo.png" @click="toHomePage()"></image>
			<uni-easyinput class="my-search-input" :styles="searchStyle"  suffixIcon="search" trim="both" v-model="searchValue" placeholder="搜索" @iconClick="clickSearch"></uni-easyinput>
		</uni-nav-bar>
		
		<view class="common-content-title">搜索结果</view>
		
		
		<view class="images-area">

			<uni-badge v-for="(item, index) in this.starlist" class="uni-badge-left-margin" :text="index+1" absolute="leftTop" :offset="[10, 10]" :customStyle="{background: '#DF1996'}">
				<view class="image-item-box">
					<view class="custom-cover">
					<image class="people-image" :src="item.imgUrl" mode="widthFix" @click="toDetailPage(item)">
					</image>
					<view class="cover-content">
						<text class="uni-subtitle uni-white">{{item.name}} {{item.nage}}</text>
					</view>
					</view>
				</view>
			</uni-badge>
			
		</view>
	</view>
</template>

<script>
	import database from "@/common/database.js"
	import getStarsign from "@/common/starsign.js"
	
	export default {
		data() {
			return {
				searchValue:"",
				starlist:[]
			}
		},
		methods: {
			clickSearch(){
				console.log(this.searchValue)
				uni.navigateTo({
					url: '/pages/search/search?searchValue='+this.searchValue
				})
			},
			toDetailPage(e){
				console.log(e.ranking)
				uni.navigateTo({
					url: '/pages/detail/detail?ranking='+e.ranking
				})
			},
			toHomePage(){
				uni.navigateTo({
					url: '/pages/index/index'
				})
			}
		},
		onLoad(e){
			console.log(e.searchValue);
			const today = new Date();
			let today_day=today.getDate();
			let today_month=today.getMonth()+1;
			let year=today.getFullYear();
			console.log(today_month+"/"+today_day);
			this.searchValue=e.searchValue;
			for (let i = 0; i < database.length; i++) {
				var temp=database[i].split("|");
				var starsign=getStarsign(temp[5],temp[6]);
				if(temp[3]==="M"){
					temp[3]="男"
				}
				if(temp[3]==="F"){
					temp[3]="女"
				}
				temp=temp[2].concat(temp[3]).concat(temp[7]).concat(temp[8]).concat(temp[9]).concat(temp[10]).concat(temp[4]).concat(temp[5]).concat(temp[6]).concat(starsign);
				if(temp.includes(this.searchValue)){
					temp=database[i].split("|");
					var tempAge="*";
					if(temp[4]&&temp[4]!==""){
						tempAge=year-temp[4];
					}
					var item={ranking:i,age:tempAge,index:temp[0],visit:temp[1],name:temp[2],sex:temp[3],year:temp[4],month:temp[5],day:temp[6],job:temp[7],country:temp[8],province:temp[9],city:temp[10],imgUrl:temp[11]};
					this.starlist.push(item);
				}
				if(this.starlist.length>=100){
					break;
				}
			}
			console.log(this.starlist.length)
		}
	}
</script>

<style>
	
	.status_bar {
	    height: var(--status-bar-height);  
	    width: 100%;  
	    background-color: #F8F8F8;  
	}
	
	.top_view {  
	    height: var(--status-bar-height);  
	    width: 100%;  
	    position: fixed;  
	    background-color: #F8F8F8;  
	    top: 0;  
	    z-index: 999;  
	}
	
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
	
	.images-area{
		width:100%;
		margin-top: 20rpx;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	}
	
	.common-content-title{
		width:80%;
		font-size: x-large;
		text-align: center;
		margin-left: 20rpx;
		margin-right:20rpx;
		border-bottom: 5rpx solid #8f8f94;
		margin-bottom: 20rpx;
		margin-top:20rpx;
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
		width:300rpx;
		height:300rpx;
	}
</style>
