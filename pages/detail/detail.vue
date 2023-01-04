<template>
	<view class="content">
		<uni-nav-bar class="search-bar" left-icon="home" rightIcon="more" :fixed="true" background-color="#EFEFEF">
			<image class="logo" src="/static/logo.png"></image>
			<uni-easyinput class="my-search-input" :styles="searchStyle"  suffixIcon="search" trim="both" v-model="searchValue" placeholder="搜索" @iconClick="clickSeach"></uni-easyinput>
		</uni-nav-bar>
		
		<view class="people-summary-view">
			<image class="people-image" src="/static//demo.jpeg" mode="widthFix" @click="toDetailPage">
			</image>
			
			<view class="people-name-view">
				<text>刘德华</text>
				<button>综合排名#123</button>
				<uni-fav>点赞</uni-fav>
			</view>
			
			<view class="people-features-view">
				<uni-section title="边框颜色（4列 无文字）" type="line" padding>
					<uni-grid :column="4" border-color="#03a9f4" @change="change">
						<uni-grid-item :index="0">
							<view class="grid-item-box">
								<image class="image" src="/static/c1.png" mode="aspectFill" />
							</view>
						</uni-grid-item>
						<uni-grid-item :index="1">
							<view class="grid-item-box">
								<image class="image" src="/static/c2.png" mode="aspectFill" />
							</view>
						</uni-grid-item>
						<uni-grid-item :index="2">
							<view class="grid-item-box">
								<image class="image" src="/static/c3.png" mode="aspectFill" />
							</view>
						</uni-grid-item>
						<uni-grid-item :index="3">
							<view class="grid-item-box">
								<image class="image" src="/static/c4.png" mode="aspectFill" />
							</view>
						</uni-grid-item>
					</uni-grid>
				</uni-section>
			</view>
			
		</view>
		
		<view class="people-about-view">
			
		</view>
		
		<view class="people-ranking-view">
			
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
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	}
	
	.grid-item-box {
		/* flex: 1; */
		/* position: relative; */
		/* #ifndef APP-NVUE */
		/* display: flex; */
		/* #endif */
/* 		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 15px 0; */
	}
</style>
