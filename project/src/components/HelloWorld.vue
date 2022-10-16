<template>
  <!-- 搜索框 -->
  <div class="search">
    <div class="search-top">
      <van-icon name="search" size="1.4rem" class="icon"/>
      <p>搜索对话</p>
    </div>
  </div>


  <!-- 时间，地点，岗位 -->
  <div class="selected">
    <div class="sel">
      <van-icon name="calendar-o" size="4rem" class="icon-font" color="rgb(194,194,194)"/>
      <p>时间</p>
    </div>
    <div class="sel">
      <van-icon name="location-o" size="4rem" class="icon-font" color="rgb(135,135,135)"/>
      <p>地点</p>
    </div>
    <div class="sel">
      <van-icon name="send-gift-o" size="4rem" class="icon-font" color="rgb(135,135,135)"/>
      <p>岗位</p>
    </div>
  </div>


  <!-- 详情--message -->
  <div class="message">
    <div class="one">
      <p>岗位</p>
    </div>
    <div class="two">
      <p>图书管理员</p><br>
      <p class="br">工作时长 4小时/天</p><br>
      <p class="br">联系人 第一图书馆</p>
      <van-button type="primary" class="button">点击了解</van-button>
    </div>
    <div class="three">
      <p>图书管理员</p><br>
      <p class="br">工作时长 4小时/天</p><br>
      <p class="br">工作地点 第一图书馆</p><br>
      <p class="br">联系人 第一图书馆</p><br>
      <van-button type="primary" class="button">点击了解</van-button>
    </div>
  </div>


  <!-- 底部导航栏--footer -->
  <div class="footer">
    <div class="foot">
      <van-icon name="idcard" size="1.8rem" class="icon-foot" color="rgb(53,60,102)"/>
      <p>工作</p>
    </div>
    <div class="foot">
      <van-icon name="chat-o" size="1.8rem" class="icon-foot" color="rgb(110,110,110)"/>
      <p>消息</p>
    </div>
    <div class="foot">
      <van-icon name="contact" badge="0" size="1.8rem" class="icon-foot" color="rgb(110,110,110)"/>
      <p>我的</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
     msg:'首页' 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin: 0;
  padding: 0;
}
/* 搜索框 */
.search{
  width:100%;
  height:55px;
  background-color: blue;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.search .search-top{
  position: absolute;
  width: 93%;
  height: 35px;
  background-color: white;
  border-radius:20px
}
.icon{
  position:absolute;
  top:6px;
  left:10px
  }
.search .search-top p{
  position:absolute;
  left:40px;
  top:5px;
  font-size:15px;
  font-weight:bold;
}



/* 时间，地点，岗位 */
.selected{
  position: relative;
  width: 100%;
  height: 120px;
  background-color: rgb(246, 246, 246);
}
.selected .sel{
  text-align: center;
  position: relative;
  float: left;
  width: 33.3%;
  height: 130px;

}
.selected .icon-font{
  top: 13px;
}
.selected .sel p{
  margin-top: 20px;
  font-weight: 600;
}

/* 详情--message */
.message{
  width: 100%;
  height: 435px;
  box-shadow: 0px 0px 5px #888888;
  background-color: rgb(246,246,246);
}
.message .one{
  width: 100%;
  height: 55px;
  border-bottom: 1px solid rgb(225,225,225);
  background-color: white;
}
.message .one p{
  float: left;
  font-size: 25px;
  margin-left: 25px;
  margin-top:0px;
  color: rgb(77,58,39);
}
.message .two{
  width: 100%;
  height: 120px;
  border-bottom: 2px solid rgb(225,225,225);
  background-color: white;
}
.message .two p:first-child{
  float: left;
  font-size: 25px;
  margin-left: 25px;
  margin-top:10px;
  color: rgb(77,58,39);
}
.message .two .br{
  float: left;
  /* font-size: 25px; */
  clear: both;
  margin-left: 25px;
  margin-top:10px;
  color: rgb(77,58,39);
}
.message .three{
  width: 100%;
  height: 155px;
  border-bottom: 2px solid rgb(225,225,225);
  background-color: white;
}
.message .three p:first-child{
  float: left;
  font-size: 25px;
  margin-left: 25px;
  margin-top:10px;
  color: rgb(77,58,39);
}
.message .three .br{
  float: left;
  clear: both;
  margin-left: 25px;
  margin-top:10px;
  color: rgb(77,58,39);
}
.message .button{
  width: 90px;
  height: 20px;
  float: right;
  right: 20px;
  top: 10px;
}

/* 底部导航栏--footer */
.footer{
  width: 100%;
  height: 70px;
  /* background-color: greenyellow; */
}
.footer .foot{
  text-align: center;
  position: relative;
  float: left;
  width: 33.3%;
  height: 60px;

}
.footer .foot p{
  margin-top: 10px;
  font-size: small;
}
.footer .icon-foot{
  top:12px;
}
.footer .foot:first-child p{
  color: rgb(23, 148, 216);
}
</style>
