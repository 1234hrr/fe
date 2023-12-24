<template>
   <div class="contaner">
  <div  >
     <!-- 通知栏  -->
    <div class="notification">
      <h1 style=" color: rgb(62, 75, 75);">校园大事记</h1>
      <div v-for="notification in notifications" :key="notification.id" class="item">
        <router-link to="/content"> <h3 style=" color: rgb(87, 106, 128);">{{ notification.title }}</h3>
        <p style=" color: rgb(77, 78, 79);">{{ notification.content }} <small>发布者：{{ notification.createdUser }}</small> <small>发布时间：{{ notification.createdTime }}</small></p>
        </router-link>
  
      </div>
    </div>
    <el-row justify="center" type="flex">
        <el-pagination
          :current-page.sync="pageIndex"
          :page-size="pageSize"
          :total="pageSize * pageCount"
          @current-change="getPage"
          background
          layout="prev, pager, next"
        >
        </el-pagination>
      </el-row>
    <!-- 公告栏 -->
    <div class="announcement">
      <!-- 校园新闻 -->
      <div class="news">
        <h1 style=" color: rgb(62, 75, 75);">校园新闻</h1> 
        <!-- 轮播图展示 -->
        <swiper :options="swiperOption" ref="mySwiper" style="width: 100% ">
    <swiper-slide v-for="(item, index) in newsImages" :key="index"  style="background: pink;width: 100%;height: 100%">
        <img :src="item.image"  style="width:100%;"  alt=""/>
    </swiper-slide>
    <div class="swiper-button-prev" slot="button-prev" ></div>
  <div class="swiper-button-next" slot="button-next" ></div>
  <div class="swiper-pagination"></div>
  </swiper>
        <!-- 公告列表 -->
         <div v-for="news in newsList" :key="news.id" class="item">
          <!-- <h5>{{ news.title }}</h5>
          <p>{{ news.content }}</p>
          <p><small>发布者：{{ news.createdUser }}</small></p>
          <p><small>发布时间：{{ news.createdTime }}</small></p> -->
          <router-link to="{ name:'Content' }">
            <p > {{ news.title }} <small >发布者：{{ news.createdUser }}</small> <small  >发布时间：{{ news.createdTime }}</small></p>
          </router-link>
          <p style="color: darkgrey;">--------------------------------------------------------------------------------------------------</p> 
        
        </div>
        <el-row justify="center" type="flex">
        <el-pagination
          :current-page.sync="pageIndex"
          :page-size="pageSize"
          :total="pageSize * pageCount"
          @current-change="getPage"
          background
          layout="prev, pager, next"
        >
        </el-pagination>
      </el-row>
      </div>

       <!-- 学生风采展示  -->
       <div class="student">
        <h1 style=" color: rgb(62, 75, 75);">学生风采展示</h1> 
          <!-- 轮播图展示 -->
        <swiper :options="swiperOption" ref="mySwiper" style="width: 100% ">
    <swiper-slide v-for="(item, index) in studentImages" :key="index"  style="background: pink;width: 100%;height: 100%">
        <img :src="item.image"  style="width:100%;height: 390px;"   alt=""/>
    </swiper-slide>
    <div class="swiper-button-prev" slot="button-prev" ></div>
  <div class="swiper-button-next" slot="button-next" ></div>
  <div class="swiper-pagination"></div>
  </swiper>
      
     
        <!-- 公告列表 -->
         <div v-for="student in studentList" :key="student.id" class="item">
          <!-- <h2>{{ student.title }}</h2>
          <p>{{ student.content }}</p>
          <p><small>发布者：{{ student.createdUser }}</small></p>
          <p><small>发布时间：{{ student.createdTime }}</small></p> -->
           <router-link to="{ name: 'Content' }">
         <p>   {{  student.title }} <small>发布者：{{ student.createdUser }}</small> <small>发布时间：{{ student.createdTime }}</small>  </p>
           </router-link>
          <p style="color: darkgrey;">--------------------------------------------------------------------------------------------------</p> 
        
        </div>
        <el-row justify="center" type="flex">
        <el-pagination
          :current-page.sync="pageIndex"
          :page-size="pageSize"
          :total="pageSize * pageCount"
          @current-change="getPage"
          background
          layout="prev, pager, next"
        >
        </el-pagination>
      </el-row>
      </div>
    </div>
  </div>
  </div> 
</template>
<script>
// 在你的 Vue 组件中
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import router from "@/router";






export default {
  
  components: {
    swiper,
    swiperSlide,
    router
},
  computed: {
    mySwiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  data() {
    return {
      pageSize: 2,//api.pageSize,
      pageCount: 5,
      pageIndex: 1,
      announcements: [
        { id: 1, title: '公告1', content: '公告内容1', createdUser: '用户1', createdTime: '2023-01-01' },
        { id: 2, title: '公告2', content: '公告内容2', createdUser: '用户2', createdTime: '2023-02-01' },
      ],
      notifications: [
      { id: 3, title: '考试通知', content: '这周将进行起期末考试，请各年级同学抓紧时间复习，请各班级老师进行督促', createdUser: '管理员', createdTime: '2023-02-01' },
        { id: 1, title: '停课通知', content: '因风雪天气,本周五暂停上课！！', createdUser: '管理员', createdTime: '2023-01-01' },
        { id: 2, title: '补课通知', content: '因调休因素,本月30号与31号补上周的课程,请大家注意上课时间', createdUser: '管理员', createdTime: '2023-02-01' },
    
      
      ],
      newsImages: [
        // 你可以在这里添加一些图片的URL
        {
          image: 'https://i01piccdn.sogoucdn.com/f264ae5d26d10590',
        },
        {
           image: 'https://i01piccdn.sogoucdn.com/48f02a49e71f4813',
        },
        {
            image: 'https://i02piccdn.sogoucdn.com/e614a8f9f00da1f0',
        }
         
      ],
      newsList: [
        { id: 1, title: '携手同行，共筑友谊——中外学生交流会', content: '新闻内容1', createdUser: '用户1', createdTime: '2023-01-01' },
        { id: 2, title: '查尔斯•达尔文大学孔子学院首次开设“汉语语言文化”课程并顺利结课', content: '新闻内容2', createdUser: '用户2', createdTime: '2023-02-01' },
        {title:'台湾中国文化大学代表团访问我校'},
        {title:'国际教育学院举办第二期青年教师论坛'},
        {
       title:'中文核心期刊要目总览2020年版—最新收录及变更情况'
        }
      ],
      studentImages: [
        // 你可以在这里添加一些图片的URL
        // { image:src=require('../../assets/bg3.jpg')},
        // { image:src=require('../../assets/bg2.jpg')},
        {title:111,image:'https://p1.itc.cn/q_70/images03/20210915/e9888b9142a544aea195727265199f04.png'},
        {title:222,image:'https://i02piccdn.sogoucdn.com/1fc263a8607caeb7'},
        {title:333,  image: 'https://i04piccdn.sogoucdn.com/ebe299139a116b8a'}
    

      ],

      swiperOption:{
            direction: 'horizontal',   //滑动方向默认是水平
             initialSlide: 0,  //设置初始化显示第几个slide默认显示第一个
            loop:true, // 是否循环滚动
            effect: 'fade',     //轮播图切换效果
            speed:300,  //切换速度
        
          //指示器小圆点
            pagination:{
              el:'.swiper-pagination',
              clickable:true,
            },
           //自动播放
            autoplay: {
              delay: 2000,
              stopOnLastSlide: false,
              disableOnInteraction: false
            },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          slidesPerView: 1,
        },
      
  
          },
      studentList: [
        { id: 1, title: '我校留学生参与国际文化交流节', content: '学生内容1', createdUser: '用户1', createdTime: '2023-01-01' },
        { id: 2, title: '国际教育学院举行2023届留学生毕业典礼', content: '学生内容2', createdUser: '用户2', createdTime: '2023-02-01' },
        { id: 1, title: '学院留学生积极参加学校52届田径运动会', content: '学生内容1', createdUser: '用户1', createdTime: '2023-01-01' },
        {title:'校领导走访慰问留学生'},
        {
       title:'历史学院领导老师看望慰问在我院实习学生'
        }
    
    
      ]
    }
  }
}
</script>

<style scoped>
.contaner {
  height: 1300px;
  width: 1200px;
  background-image: url('../../assets/bg3.jpg');
  background-size:auto 100%;
 .dashboard {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.notification, .announcement {
  width: 100%;
}
p:hover {
  color: rgb(71, 126, 234);
}
.announcement {
  display: flex;
  justify-content: space-between;
}

.news, .student {
  width: 48%;
}}
</style>


