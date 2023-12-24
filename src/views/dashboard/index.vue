<!-- <template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
  </div>
</template> -->



<template>
  <div class="contaner">
  <div id="app">
      <!-- 通知栏 -->
      <div class="notification-bar">
        <div class="marquee">
          <p>这是通知栏</p>
        </div>
      </div>
  
  
      <div class="main-content">
        <!-- 待办事务模块 -->
        <div class="todo-list">
          <h2 class="title">待办事务</h2>
          <div class="module">
          <div>
          <table  class="table-with-lines">
            <tr v-for="(item, index) in todoItems" :key="index">
              <td>
                <input type="checkbox" v-model="item.checked">
                {{ item.text }}
              </td>
            </tr>
          </table>
        </div>
        </div>
          <div class="buttons">
            <el-button @click="completeCourse" type="primary"  >完成</el-button>
            <el-button @click="deleteCourse" type="primary" >删除</el-button>
            <el-button @click="addCourse" type="primary" >增加</el-button>
          </div>
        </div>
  
        <!-- 课程安排模块 -->
        <div class="course-schedule">
          <h2 class="title">课程安排</h2>
          <div class="module">
        
          <table  class="table-with-lines">
            <tr v-for="(item, index) in courseItems" :key="index">
              <td>
                <input type="checkbox" v-model="item.checked">
                {{ item.text }}
              </td>
            </tr>
          </table>
        </div>
          <div class="buttons">
            <el-button @click="completeCourse" type="primary"  >完成</el-button>
            <el-button @click="deleteCourse" type="primary" >删除</el-button>
            <el-button @click="addCourse" type="primary" >增加</el-button>
          </div>
        </div>
      </div>
    </div>
  
  </div> 
  
  </template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  
  data() {
    return {
      todoItems: [
        { text: '待办事项1', checked: false },
        { text: '待办事项2', checked: false },
        { text: '待办事项1', checked: false },
        { text: '待办事项2', checked: false },
        { text: '待办事项1', checked: false },
        { text: '待办事项2', checked: false },
        { text: '待办事项1', checked: false },
        { text: '待办事项2', checked: false },
        { text: '待办事项1', checked: false },
        { text: '待办事项2', checked: false },
        { text: '待办事项1', checked: false },
        { text: '待办事项2', checked: false },
        { text: '待办事项1', checked: false },
        { text: '待办事项2', checked: false },
        { text: '待办事项1', checked: false },
        { text: '待办事项2', checked: false },
        { text: '待办事项1', checked: false },
        { text: '待办事项2', checked: false },
        { text: '待办事项1', checked: false },
        { text: '待办事项2', checked: false },
        { text: '待办事项2', checked: false },
        { text: '待办事项1', checked: false },
        { text: '待办事项2', checked: false },
        { text: '待办事项1', checked: false },
        { text: '待办事项2', checked: false },
        // 在这里添加更多的待办事项
      ],
      courseItems: [
        { text: '周一下午两点英语课', checked: false },
        { text: '周二上午八点英语课', checked: false },
        { text: '周一下午两点英语课', checked: false },
        { text: '周二上午八点英语课', checked: false },
        { text: '周一下午两点英语课', checked: false },
        { text: '周二上午八点英语课', checked: false },
        { text: '周一下午两点英语课', checked: false },
        { text: '周二上午八点英语课', checked: false },
        { text: '周一下午两点英语课', checked: false },
        { text: '周二上午八点英语课', checked: false },
        // 在这里添加更多的课程
      ]
    };
  },
  methods: {
    completeTodo() {
      // 在这里添加完成待办事项的逻辑
    },
    deleteTodo() {
      // 在这里添加删除待办事项的逻辑
    },
    addTodo() {
      // 在这里添加增加待办事项的逻辑
    },
    completeCourse() {
      // 在这里添加完成课程的逻辑
    },
    deleteCourse() {
      // 在这里添加删除课程的逻辑
    },
    addCourse() {
      // 在这里添加增加课程的逻辑
    }
  }
}

</script>
<style lang="scss" scoped>

.contaner {
  height: 800px;
  width: 1200px;
  overflow: hidden;
  background-image: url('../../assets/bg3.jpg');
  background-size:auto 100%;
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
 
}

.notification-bar {
  width: 100%;
  background-color: #f8f9fa;
  overflow: hidden; /* 隐藏超出通知栏的内容 */
}

.marquee {
  display: inline-block;
  white-space: nowrap;
  padding-left: 100%; /* 开始时将内容移出视图 */
  animation: marquee 15s linear infinite; /* 创建一个名为marquee的动画，持续时间为15秒，速度为匀速，无限循环 */
}

@keyframes marquee {
  0% { transform: translateX(-100%); } /* 开始时，内容在右边 */
  100% { transform: translateX(0); } /* 结束时，内容移动到左边 */
}

.main-content {
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 20px;
}

.todo-list, .course-schedule {
  width: 45%;
  border: 1px solid #0f5ca9;
  border-radius: 5px;
  padding: 20px;
}
.title {
  text-align: center;
}

.buttons {
  display: flex;
  justify-content: space-around;
  

}
.module {
  height: 500px; /* 增加模块的高度 */
  overflow: auto; /* 如果内容过多，显示滚动条 */
}


.table-container {
  flex-grow: 1; /* 表格容器占据剩余的空间 */
  overflow-y: auto; /* 如果表格内容过多，显示垂直滚动条 */
  border-bottom: 1px solid #ccc;
}
.table-container table tr {
  padding: 30px 0; /* 增大每条数据之间的间距 */
  border-bottom: 1px solid #ccc;
}

.table-with-lines tr {
  border-bottom: 1px solid #ccc;
}
}

</style>
