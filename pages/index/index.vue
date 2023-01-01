<template>
	<view class="content">
		<view class="search-bar">
			<image class="logo" src="/static/logo.png"></image>
			<uni-easyinput class="my-search-input" :styles="searchStyle"  suffixIcon="search" trim="both" v-model="searchValue" placeholder="输入姓名或者生日等" @iconClick="clickSeach"></uni-easyinput>
		</view>
		<view class="images-area">
			<view class="today-birth-people">
				<view class="common-content-title">今天生日</view>
				
				<uni-row class="first-uni-row">
					<uni-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
						<view class="demo-uni-col dark">
							<image class="people-image" src="/static//demo.jpeg" mode="widthFix"></image>
						</view>
					</uni-col>
					<uni-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
						<view class="demo-uni-col light">
							<image class="people-image" src="/static//demo.jpeg" mode="widthFix"></image>
						</view>
					</uni-col>
					<uni-col :xs="0" :sm="6" :md="6" :lg="6" :xl="6">
						<view class="demo-uni-col dark">
							<image class="people-image" src="/static//demo.jpeg" mode="widthFix"></image>
						</view>
					</uni-col>
					<uni-col :xs="0" :sm="6" :md="6" :lg="6" :xl="6">
						<view class="demo-uni-col light">
							<image class="people-image" src="/static//demo.jpeg" mode="widthFix"></image>
						</view>
					</uni-col>
				</uni-row>
				
			</view>
			<view class="tomorrow-birth-people">
				<view class="common-content-title">明天生日</view>
			</view>
			<view class="hot-ranking-people">
				<view class="common-content-title">热门排行</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '明星生日汇',
				searchStyle: {
						borderColor: '#df1996',
						color:'#df1996'
				}
			}
		},
		onLoad() {

		},
		methods: {
			clickSeach(){
				this.title=this.searchValue;
			}

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 1500rpx;
	}
	
	.search-bar{
		display: flex;
		width: 100%;
		background-color: white;
	}

	.logo {
		height: 35px;
		width: 70px;
		padding:6rpx;
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
		background-color: #8f8f94;
		width:80%;
	}

	.common-content-title{
		text-align: center;
		padding: 0 40rpx;
		border-bottom: 2rpx solid #df1996;
		margin-bottom: 5rpx;
	}
	
	
	.people-image{
		width: 100%;
		height:auto;
	}
	
	.first-uni-row {
		margin-bottom: 0px;
		/* QQ、字节小程序文档写有 :host，但实测不生效 */
		/* 百度小程序没有 :host，需要设置block */
		/* #ifdef MP-TOUTIAO || MP-QQ || MP-BAIDU */
		display: block;
		/* #endif */
		padding: 0rpx;
	}

</style>
