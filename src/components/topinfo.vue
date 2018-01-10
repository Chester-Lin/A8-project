<template>
	<div class="top">
		<ul class="game-flex">
	    	<!--<li v-for='(item,index) in selections' :class="{'active':index===nowIndex}"  tag='li' :keys='item.label' @click="changeGame(index)">{{item.label}}</li>-->
	    	<router-link :to="{path:item.path}" active-class='active' v-for="(item,index) in selections"  tag='li' :key='item.path'>{{item.label}}</router-link>
		</ul>
	</div>
</template>

<script>
	export default {
		props:{
			selections:{
				type:Array,
				default:[{
					label:"test",
					path:'/test'
				}]
			}
		},
		data(){
			return {}
		},
		methods:{
			
		}
	}
</script>

<style scoped>
.top{
	height: 47px;
	width: 100%;
	background: #FFFFFF;
}
.game-flex {
  list-style: none; 
  display: flex;
  height: 47px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content:center
}
 
.game-flex li {
  width: 38px;  
  padding: 14px 0px 15px 0px;
  font-size: 18px; 
  margin: 0 18px;
  font-weight: bold;
  color: #898989;
  box-sizing: border-box;
 
}
.game-flex .active{
  border-bottom: 2px solid #181d1b;	
  color:  #181d1b;
}
</style>