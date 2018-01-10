<template>
  <transition name="bounce">
    <div class="dialogPage" v-if="isShow">
        <div class="loginDia" v-if="isShow">
          <div class="dia_header">
            <span>账户</span>登录
          </div>

          <div class="dia_cont">
            <div class="qq_login login">
              <img src="../../assets/user/image/login/登录_06.png">
              <p>QQ登录</p>
            </div>
            <div class="wx_login login">
              <img src="../../assets/user/image/login/登录_08.png">
              <p>微信登录</p>
            </div>
            <div class="sina_login login">
              <img src="../../assets/user/image/login/登录_03.png">
              <p>新浪登录</p>
            </div>
          </div>

          <div class="dia_footer">
            <span @click="closeMyself">取消</span>
          </div>
        </div>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeMyself () {
      this.$emit('on-close')
    }
  }
}
</script>
<style scoped>
.dialogPage{
  width: 100%;
  height: 100%;
  z-index: 9999;
  position: fixed;
  background: rgba(136, 133, 133, 0.4);
  top:0;
  left: 0;
  text-align: left;
}
.loginDia{
  width:80%;
  background: #ffffff;;
  margin: 42% auto;
  border-radius: 6px;
}
.dia_header{
  padding:15px 20px;
  font-size: 15px;
  color:#000000;
  font-weight: bold;
}
.dia_header span{
  display: inline-block;
  padding:8px 0;
  border-bottom: 5px solid #f6c501;
}

.dia_cont{
  display: flex;
  align-items: center;
}
.login{
  width: 24%;
  margin: 4.6%;
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
}
.login p{
  width: 100%;
  text-align: center;
  margin-top: 20px;
  font-size: 12px;
  white-space: nowrap;
}
.login img{
  height: 33px;
  max-height: 33px;
}

.dia_footer{
  padding:15px 20px;
  font-size: 9px;
  color:#808080;
}
.dia_footer span{
  display: inline-block;
  padding:8px 0;
}


.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
