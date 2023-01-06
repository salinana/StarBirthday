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
							<image class="people-image" src="/static//demo.jpeg" mode="widthFix" @click="toDetailPage">
							</image>
							<view class="cover-content">
								<text class="uni-subtitle uni-white">刘德华 60岁</text>
							</view>
							</view>
						</view>
					</uni-col>
					<uni-col :xs="0" :sm="6" :md="6" :lg="6" :xl="6">
						<view class="demo-uni-col">
							<view class="custom-cover">
							<image class="people-image" src="/static//demo.jpeg" mode="widthFix" @click="toDetailPage">
							</image>
							<view class="cover-content">
								<text class="uni-subtitle uni-white">刘德华 60岁</text>
							</view>
							</view>
						</view>
					</uni-col>
					<uni-col :xs="0" :sm="6" :md="6" :lg="6" :xl="6">
						<view class="demo-uni-col">
							<view class="custom-cover">
							<image class="people-image" src="/static//demo.jpeg" mode="widthFix" @click="toDetailPage">
							</image>
							<view class="cover-content">
								<text class="uni-subtitle uni-white">刘德华 60岁</text>
							</view>
							</view>
						</view>
					</uni-col>
					<uni-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
						<view class="demo-uni-col">
							<view class="custom-cover">
							<image class="people-image" src="/static//demo.jpeg" mode="widthFix" @click="toDetailPage">
							</image>
							<view class="cover-content">
								<text class="uni-subtitle uni-white">刘德华 60岁</text>
							</view>
							</view>
						</view>
					</uni-col>
				</uni-row>
				
				<uni-row class="common-image-uni-row">
					<uni-col :xs="8" :sm="4" :md="4" :lg="4" :xl="4">
						<view class="demo-uni-col">
							<view class="custom-cover">
							<image class="people-image" src="/static//demo.jpeg" mode="widthFix" @click="toDetailPage">
							</image>
							<view class="cover-content">
								<text class="uni-subtitle uni-white">刘德华 60岁</text>
							</view>
							</view>
						</view>
					</uni-col>
					<uni-col :xs="8" :sm="4" :md="4" :lg="4" :xl="4">
						<view class="demo-uni-col">
							<view class="custom-cover">
							<image class="people-image" src="/static//demo.jpeg" mode="widthFix" @click="toDetailPage">
							</image>
							<view class="cover-content">
								<text class="uni-subtitle uni-white">刘德华 60岁</text>
							</view>
							</view>
						</view>
					</uni-col>
					<uni-col :xs="0" :sm="4" :md="4" :lg="4" :xl="4">
						<view class="demo-uni-col">
							<view class="custom-cover">
							<image class="people-image" src="/static//demo.jpeg" mode="widthFix" @click="toDetailPage">
							</image>
							<view class="cover-content">
								<text class="uni-subtitle uni-white">刘德华 60岁</text>
							</view>
							</view>
						</view>
					</uni-col>
					<uni-col :xs="0" :sm="4" :md="4" :lg="4" :xl="4">
						<view class="demo-uni-col">
							<view class="custom-cover">
							<image class="people-image" src="/static//demo.jpeg" mode="widthFix" @click="toDetailPage">
							</image>
							<view class="cover-content">
								<text class="uni-subtitle uni-white">刘德华 60岁</text>
							</view>
							</view>
						</view>
					</uni-col>
					<uni-col :xs="0" :sm="4" :md="4" :lg="4" :xl="4">
						<view class="demo-uni-col">
							<view class="custom-cover">
							<image class="people-image" src="/static//demo.jpeg" mode="widthFix" @click="toDetailPage">
							</image>
							<view class="cover-content">
								<text class="uni-subtitle uni-white">刘德华 60岁</text>
							</view>
							</view>
						</view>
					</uni-col>
					<uni-col :xs="8" :sm="4" :md="4" :lg="4" :xl="4">
						<view class="demo-uni-col">
							<view class="custom-cover">
							<image class="people-image" src="/static//demo.jpeg" mode="widthFix" @click="toDetailPage">
							</image>
							<view class="cover-content">
								<text class="uni-subtitle uni-white">刘德华 60岁</text>
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
							<image class="people-image" src="/static//demo.jpeg" mode="widthFix" @click="toDetailPage">
							</image>
							<view class="cover-content">
								<text class="uni-subtitle uni-white">刘德华 60岁</text>
							</view>
							</view>
						</view>
					</uni-col>
					<uni-col :xs="8" :sm="4" :md="4" :lg="4" :xl="4">
						<view class="demo-uni-col">
							<view class="custom-cover">
							<image class="people-image" src="/static//demo.jpeg" mode="widthFix" @click="toDetailPage">
							</image>
							<view class="cover-content">
								<text class="uni-subtitle uni-white">刘德华 60岁</text>
							</view>
							</view>
						</view>
					</uni-col>
					<uni-col :xs="0" :sm="4" :md="4" :lg="4" :xl="4">
						<view class="demo-uni-col">
							<view class="custom-cover">
							<image class="people-image" src="/static//demo.jpeg" mode="widthFix" @click="toDetailPage">
							</image>
							<view class="cover-content">
								<text class="uni-subtitle uni-white">刘德华 60岁</text>
							</view>
							</view>
						</view>
					</uni-col>
					<uni-col :xs="0" :sm="4" :md="4" :lg="4" :xl="4">
						<view class="demo-uni-col">
							<view class="custom-cover">
							<image class="people-image" src="/static//demo.jpeg" mode="widthFix" @click="toDetailPage">
							</image>
							<view class="cover-content">
								<text class="uni-subtitle uni-white">刘德华 60岁</text>
							</view>
							</view>
						</view>
					</uni-col>
					<uni-col :xs="0" :sm="4" :md="4" :lg="4" :xl="4">
						<view class="demo-uni-col">
							<view class="custom-cover">
							<image class="people-image" src="/static//demo.jpeg" mode="widthFix" @click="toDetailPage">
							</image>
							<view class="cover-content">
								<text class="uni-subtitle uni-white">刘德华 60岁</text>
							</view>
							</view>
						</view>
					</uni-col>
					<uni-col :xs="8" :sm="4" :md="4" :lg="4" :xl="4">
						<view class="demo-uni-col">
							<view class="custom-cover">
							<image class="people-image" src="/static//demo.jpeg" mode="widthFix" @click="toDetailPage">
							</image>
							<view class="cover-content">
								<text class="uni-subtitle uni-white">刘德华 60岁</text>
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
							<image class="people-image" src="/static//demo.jpeg" mode="widthFix" @click="toDetailPage">
							</image>
							<view class="cover-content">
								<text class="uni-subtitle uni-white">刘德华 60岁</text>
							</view>
							</view>
						</view>
					</uni-col>
					<uni-col :xs="8" :sm="4" :md="4" :lg="4" :xl="4">
						<view class="demo-uni-col">
							<view class="custom-cover">
							<image class="people-image" src="/static//demo.jpeg" mode="widthFix" @click="toDetailPage">
							</image>
							<view class="cover-content">
								<text class="uni-subtitle uni-white">刘德华 60岁</text>
							</view>
							</view>
						</view>
					</uni-col>
					<uni-col :xs="0" :sm="4" :md="4" :lg="4" :xl="4">
						<view class="demo-uni-col">
							<view class="custom-cover">
							<image class="people-image" src="/static//demo.jpeg" mode="widthFix" @click="toDetailPage">
							</image>
							<view class="cover-content">
								<text class="uni-subtitle uni-white">刘德华 60岁</text>
							</view>
							</view>
						</view>
					</uni-col>
					<uni-col :xs="0" :sm="4" :md="4" :lg="4" :xl="4">
						<view class="demo-uni-col">
							<view class="custom-cover">
							<image class="people-image" src="/static//demo.jpeg" mode="widthFix" @click="toDetailPage">
							</image>
							<view class="cover-content">
								<text class="uni-subtitle uni-white">刘德华 60岁</text>
							</view>
							</view>
						</view>
					</uni-col>
					<uni-col :xs="0" :sm="4" :md="4" :lg="4" :xl="4">
						<view class="demo-uni-col">
							<view class="custom-cover">
							<image class="people-image" src="/static//demo.jpeg" mode="widthFix" @click="toDetailPage">
							</image>
							<view class="cover-content">
								<text class="uni-subtitle uni-white">刘德华 60岁</text>
							</view>
							</view>
						</view>
					</uni-col>
					<uni-col :xs="8" :sm="4" :md="4" :lg="4" :xl="4">
						<view class="demo-uni-col">
							<view class="custom-cover">
							<image class="people-image" src="/static//demo.jpeg" mode="widthFix" @click="toDetailPage">
							</image>
							<view class="cover-content">
								<text class="uni-subtitle uni-white">刘德华 60岁</text>
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
	export default {
		data() {
			return {
			}
		},
		onLoad() {

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
