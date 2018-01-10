<template>
	<div>
	    <div class="nav">
	    	<ul>
	    		<router-link :to="{path:'../homepage/'+item.path}" v-for="item in titles" tag="li">{{item.name}}</router-link>
	    		<li id="last"><img src="../assets/统一使用图标/集锦_03.png"/></li>
	    	</ul>
	    	 <hr />
	    </div>	
	</div>
</template>

<script>

export default{
	data(){
		return {
			titles:[
				{
					name:"热门",
					path:'hot',
				},
				{
					name:"视频",
					path:'video',
				},
				{
					name:"集锦",
					path:'collection',
				},
				{
					name:"专题",
					path:'special',
				},
				{
					name:"竞猜",
					path:'guessing',
				}
			]
		}
	}
}
</script>

<style scoped>
.nav{
	margin: 0;
	padding: 0;
}
.nav ul{
	padding:0;
	margin: 0;
}
.nav ul li{
	list-style: none;
	color:#898c8b;
	font-size:18px;
	margin:0 2%;
	display:inline-block;
	padding:10px 1.5%;
}
#last{
	margin-right:0;
}
#last img{
	width: 18px;
	height: 18px;
}
.router-link-active{
	color:#1e1e1e !important;
	border-bottom:2px solid #1e1e1e;
}
hr{
	width: 100%;
	color:#bfbfbf;
	position: relative;
	top:-8px;
}
</style>
