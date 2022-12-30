<template>
	<view class="content">
		<view class="search-bar">
			<image class="logo" src="/static/logo.png"></image>
			<uni-easyinput class="my-search-input" :styles="searchStyle"  suffixIcon="search" trim="both" v-model="searchValue" placeholder="输入姓名或者生日等" @iconClick="clickSeach"></uni-easyinput>
		</view>
		<view class="text-area">
			<text class="title">{{title}}</text>
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

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
