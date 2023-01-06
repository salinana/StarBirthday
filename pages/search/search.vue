<template>
	<view class="content">
		<uni-nav-bar class="search-bar" @clickLeft="toHomePage" left-icon="home" rightIcon="more" :fixed="true" background-color="#EFEFEF">
			<image class="logo" src="/static/logo.png"></image>
			<uni-easyinput class="my-search-input" :styles="searchStyle"  suffixIcon="search" trim="both" v-model="searchValue" placeholder="搜索" @iconClick="clickSeach"></uni-easyinput>
		</uni-nav-bar>
		
		<view class="common-content-title">搜索结果</view>
		
		
		<view class="images-area">

			<uni-badge class="uni-badge-left-margin" :text="1" absolute="leftTop" :offset="[10, 10]" :customStyle="{background: '#DF1996'}">
				<view class="image-item-box">
					<view class="custom-cover">
					<image class="people-image" src="/static//demo.jpeg" mode="widthFix" @click="toDetailPage">
					</image>
					<view class="cover-content">
						<text class="uni-subtitle uni-white">刘德华 60岁</text>
					</view>
					</view>
				</view>
			</uni-badge>
			
			<uni-badge class="uni-badge-left-margin" :text="1" absolute="leftTop" :offset="[10, 10]" :customStyle="{background: '#DF1996'}">
				<view class="image-item-box">
					<view class="custom-cover">
					<image class="people-image" src="/static//demo.jpeg" mode="widthFix" @click="toDetailPage">
					</image>
					<view class="cover-content">
						<text class="uni-subtitle uni-white">刘德华 60岁</text>
					</view>
					</view>
				</view>
			</uni-badge>
			
			<uni-badge class="uni-badge-left-margin" :text="1" absolute="leftTop" :offset="[10, 10]" :customStyle="{background: '#DF1996'}">
				<view class="image-item-box">
					<view class="custom-cover">
					<image class="people-image" src="/static//demo.jpeg" mode="widthFix" @click="toDetailPage">
					</image>
					<view class="cover-content">
						<text class="uni-subtitle uni-white">刘德华 60岁</text>
					</view>
					</view>
				</view>
			</uni-badge>
			
			<uni-badge class="uni-badge-left-margin" :text="1" absolute="leftTop" :offset="[10, 10]" :customStyle="{background: '#DF1996'}">
				<view class="image-item-box">
					<view class="custom-cover">
					<image class="people-image" src="/static//demo.jpeg" mode="widthFix" @click="toDetailPage">
					</image>
					<view class="cover-content">
						<text class="uni-subtitle uni-white">刘德华 60岁</text>
					</view>
					</view>
				</view>
			</uni-badge>
			
			<uni-badge class="uni-badge-left-margin" :text="1" absolute="leftTop" :offset="[10, 10]" :customStyle="{background: '#DF1996'}">
				<view class="image-item-box">
					<view class="custom-cover">
					<image class="people-image" src="/static//demo.jpeg" mode="widthFix" @click="toDetailPage">
					</image>
					<view class="cover-content">
						<text class="uni-subtitle uni-white">刘德华 60岁</text>
					</view>
					</view>
				</view>
			</uni-badge>
			
			<uni-badge class="uni-badge-left-margin" :text="1" absolute="leftTop" :offset="[10, 10]" :customStyle="{background: '#DF1996'}">
				<view class="image-item-box">
					<view class="custom-cover">
					<image class="people-image" src="/static//demo.jpeg" mode="widthFix" @click="toDetailPage">
					</image>
					<view class="cover-content">
						<text class="uni-subtitle uni-white">刘德华 60岁</text>
					</view>
					</view>
				</view>
			</uni-badge>
			
			<uni-badge class="uni-badge-left-margin" :text="1" absolute="leftTop" :offset="[10, 10]" :customStyle="{background: '#DF1996'}">
				<view class="image-item-box">
					<view class="custom-cover">
					<image class="people-image" src="/static//demo.jpeg" mode="widthFix" @click="toDetailPage">
					</image>
					<view class="cover-content">
						<text class="uni-subtitle uni-white">刘德华 60岁</text>
					</view>
					</view>
				</view>
			</uni-badge>
			
			<uni-badge class="uni-badge-left-margin" :text="2" absolute="leftTop" :offset="[10, 10]" >
				<view class="image-item-box">
					<view class="custom-cover">
					<image class="people-image" src="/static//demo.jpeg" mode="widthFix" @click="toDetailPage">
					</image>
					<view class="cover-content">
						<text class="uni-subtitle uni-white">刘德华 60岁</text>
					</view>
					</view>
				</view>
			</uni-badge>
			
			<uni-badge class="uni-badge-left-margin" :text="3" absolute="leftTop" :offset="[10, 10]" >
				<view class="image-item-box">
					<view class="custom-cover">
					<image class="people-image" src="/static//demo.jpeg" mode="widthFix" @click="toDetailPage">
					</image>
					<view class="cover-content">
						<text class="uni-subtitle uni-white">刘德华 60岁</text>
					</view>
					</view>
				</view>
			</uni-badge>
			
			
			<uni-badge class="uni-badge-left-margin" :text="4" absolute="leftTop" :offset="[10, 10]" >
				<view class="image-item-box">
					<view class="custom-cover">
					<image class="people-image" src="/static//demo.jpeg" mode="widthFix" @click="toDetailPage">
					</image>
					<view class="cover-content">
						<text class="uni-subtitle uni-white">刘德华 60岁</text>
					</view>
					</view>
				</view>
			</uni-badge>
			
			
			<uni-badge class="uni-badge-left-margin" :text="5" absolute="leftTop" :offset="[10, 10]" >
				<view class="image-item-box">
					<view class="custom-cover">
					<image class="people-image" src="/static//demo.jpeg" mode="widthFix" @click="toDetailPage">
					</image>
					<view class="cover-content">
						<text class="uni-subtitle uni-white">刘德华 60岁</text>
					</view>
					</view>
				</view>
			</uni-badge>
			
			<uni-badge class="uni-badge-left-margin" :text="6" absolute="leftTop" :offset="[10, 10]" >
				<view class="image-item-box">
					<view class="custom-cover">
					<image class="people-image" src="/static//demo.jpeg" mode="widthFix" @click="toDetailPage">
					</image>
					<view class="cover-content">
						<text class="uni-subtitle uni-white">刘德华 60岁</text>
					</view>
					</view>
				</view>
			</uni-badge>
			
			<uni-badge class="uni-badge-left-margin" :text="7" absolute="leftTop" :offset="[10, 10]" >
				<view class="image-item-box">
					<view class="custom-cover">
					<image class="people-image" src="/static//demo.jpeg" mode="widthFix" @click="toDetailPage">
					</image>
					<view class="cover-content">
						<text class="uni-subtitle uni-white">刘德华 60岁</text>
					</view>
					</view>
				</view>
			</uni-badge>
			
			<uni-badge class="uni-badge-left-margin" :text="8" absolute="leftTop" :offset="[10, 10]" >
				<view class="image-item-box">
					<view class="custom-cover">
					<image class="people-image" src="/static//demo.jpeg" mode="widthFix" @click="toDetailPage">
					</image>
					<view class="cover-content">
						<text class="uni-subtitle uni-white">刘德华 60岁</text>
					</view>
					</view>
				</view>
			</uni-badge>
			
			
			<uni-badge class="uni-badge-left-margin" :text="9" absolute="leftTop" :offset="[10, 10]" >
				<view class="image-item-box">
					<view class="custom-cover">
					<image class="people-image" src="/static//demo.jpeg" mode="widthFix" @click="toDetailPage">
					</image>
					<view class="cover-content">
						<text class="uni-subtitle uni-white">刘德华 60岁</text>
					</view>
					</view>
				</view>
			</uni-badge>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
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
