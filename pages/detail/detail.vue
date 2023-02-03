<template>
	<view class="content">
		<uni-nav-bar class="search-bar" @clickLeft="back" left-icon="left" left-text="返回" rightIcon="more" :fixed="true" background-color="#EFEFEF">
			<image class="logo" src="/static/logo.png" @click="toHomePage()"></image>
			<uni-easyinput class="my-search-input" :styles="searchStyle"  suffixIcon="search" trim="both" v-model="searchValue" placeholder="搜索" @iconClick="clickSearch"></uni-easyinput>
		</uni-nav-bar>
		
		<view class="people-summary-view">
			<view class="people-image-view">
				<image class="people-image" :src="this.star.imgUrl" mode="widthFix">
				</image>
			</view>
		
			<view class="people-name-view">
				<view><text>{{this.star.name}}</text></view>
				<button type="warn">点赞</button>
			</view>
			
			<view class="people-features-view">
				<view class="people-feature-item">
					<uni-icons type="medal" size="30"></uni-icons>
					<text>第{{this.star.ranking}}名</text>
				</view>
				
				<view class="people-feature-item">
					<uni-icons type="calendar" size="30"></uni-icons>
					<text>{{this.star.year}}年{{this.star.month}}月{{this.star.day}}日</text>
				</view>
				<view class="people-feature-item">
					<uni-icons type="location" size="30"></uni-icons>
					<text>{{this.star.country}} {{this.star.province}}{{this.star.city}}</text>
				</view>
				<view class="people-feature-item">
					<uni-icons type="notification" size="30"></uni-icons>
					<text>{{this.star.age}}岁</text>
				</view>
				<view v-if="this.star.starsign!==''" class="people-feature-item">
					<uni-icons type="star" size="30"></uni-icons>
					<text>{{this.star.starsign}}</text>
				</view>
				<view class="people-feature-item">
					<uni-icons type="staff" size="30"></uni-icons>
					<text>{{this.star.sex}}</text>
				</view>
				<view class="people-feature-item">
					<uni-icons type="shop" size="30"></uni-icons>
					<text>{{this.star.job}}</text>
				</view>
			</view>
		</view>
		
		<view class="people-ranking-view">
			<view calss="people-ranking-box">
				<view class="people-ranking-title">综合</view>
				<view class="people-ranking-number">#{{this.star.ranking}}</view>
			</view>
			<view calss="people-ranking-box">
				<view class="people-ranking-title">{{this.star.sex}}明星</view>
				<view class="people-ranking-number">#{{this.sexRanking}}</view>
			</view>
			<view calss="people-ranking-box">
				<view class="people-ranking-title">{{this.star.age}}岁</view>
				<view class="people-ranking-number">#{{this.ageRanking}}</view>
			</view>
			<view calss="people-ranking-box">
				<view class="people-ranking-title">{{this.star.age}}岁{{this.star.sex}}</view>
				<view class="people-ranking-number">#{{this.sexageRanking}}</view>
			</view>
			<view calss="people-ranking-box">
				<view class="people-ranking-title">{{this.star.job}}</view>
				<view class="people-ranking-number">#{{this.jobRanking}}</view>
			</view>
			<view calss="people-ranking-box">
				<view class="people-ranking-title">{{this.star.sex}}{{this.star.job}}</view>
				<view class="people-ranking-number">#{{this.sexjobRanking}}</view>
			</view>
			<view v-if="this.star.starsign!==''" calss="people-ranking-box">
				<view class="people-ranking-title">{{this.star.starsign}}</view>
				<view class="people-ranking-number">#{{this.starsignRanking}}</view>
			</view>
			<view v-if="this.star.starsign!==''" calss="people-ranking-box">
				<view class="people-ranking-title">{{this.star.sex}}{{this.star.starsign}}</view>
				<view class="people-ranking-number">#{{this.sexstarsignRanking}}</view>
			</view>
		</view>
		
		<view class="people-about-view">
			<text>			</text>
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
				ranking:0,
				star:"",
				sexRanking:0,
				ageRanking:0,
				sexageRanking:0,
				jobRanking:0,
				sexjobRanking:0,
				starsignRanking:0,
				sexstarsignRanking:0
			}
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			clickSearch(){
				console.log(this.searchValue)
				uni.navigateTo({
					url: '/pages/search/search?searchValue='+this.searchValue
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
		},
		onLoad(e){
			const today = new Date();
			let today_day=today.getDate();
			let today_month=today.getMonth()+1;
			let year=today.getFullYear();
			
			console.log(e.ranking)
			if(e.ranking){
				this.ranking = parseInt(e.ranking);
			}
			var temp=database[this.ranking].split("|");
			var tempAge="*";
			if(temp[4]&&temp[4]!==""){
				tempAge=year-temp[4];
			}
			if(temp[4]===""){
				temp[4]="****";
			}
			if(temp[5]===""){
				temp[5]="**";
			}
			if(temp[6]===""){
				temp[6]="**";
			}
			if(temp[3]==="M"){
				temp[3]="男"
			}
			if(temp[3]==="F"){
				temp[3]="女"
			}
			var starsign=getStarsign(temp[5],temp[6]);
			console.log(starsign);
			this.star={ranking:this.ranking+1,age:tempAge,index:temp[0],visit:temp[1],name:temp[2],sex:temp[3],year:temp[4],month:temp[5],day:temp[6],job:temp[7],country:temp[8],province:temp[9],city:temp[10],imgUrl:temp[11],starsign:starsign};
			
			for (let i = 0; i < this.star.ranking; i++) {
				var temp=database[i].split("|");
				if(temp[3]==="M"){
					temp[3]="男"
				}
				if(temp[3]==="F"){
					temp[3]="女"
				}
				if(temp[3]===this.star.sex){
					this.sexRanking=this.sexRanking+1;
				}
			}
			
			for (let i = 0; i < this.star.ranking; i++) {
				var temp=database[i].split("|");
				if(temp[4]===this.star.year){
					this.ageRanking=this.ageRanking+1;
				}
			}
			
			for (let i = 0; i < this.star.ranking; i++) {
				var temp=database[i].split("|");
				if(temp[3]==="M"){
					temp[3]="男"
				}
				if(temp[3]==="F"){
					temp[3]="女"
				}
				if(temp[3]===this.star.sex&&temp[4]===this.star.year){
					this.sexageRanking=this.sexageRanking+1;
				}
			}
			
			for (let i = 0; i < this.star.ranking; i++) {
				var temp=database[i].split("|");
				if(temp[7]===this.star.job){
					this.jobRanking=this.jobRanking+1;
				}
			}
			
			for (let i = 0; i < this.star.ranking; i++) {
				var temp=database[i].split("|");
				if(temp[3]==="M"){
					temp[3]="男"
				}
				if(temp[3]==="F"){
					temp[3]="女"
				}
				if(temp[3]===this.star.sex&&temp[7]===this.star.job){
					this.sexjobRanking=this.sexjobRanking+1;
				}
			}
			
			for (let i = 0; i < this.star.ranking; i++) {
				if(this.star.starsign===""){
					break;
				}
				var temp=database[i].split("|");
				var starsign=getStarsign(temp[5],temp[6]);
				if(starsign===this.star.starsign){
					this.starsignRanking=this.starsignRanking+1;
				}
			}
			
			for (let i = 0; i < this.star.ranking; i++) {
				if(this.star.starsign===""){
					break;
				}
				var temp=database[i].split("|");
				if(temp[3]==="M"){
					temp[3]="男"
				}
				if(temp[3]==="F"){
					temp[3]="女"
				}
				var starsign=getStarsign(temp[5],temp[6]);
				if(temp[3]===this.star.sex&&starsign===this.star.starsign){
					this.sexstarsignRanking=this.sexstarsignRanking+1;
				}
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
		width: 90%;
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
