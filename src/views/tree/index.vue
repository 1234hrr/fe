<template>
  <div class="grade-wrap">

    <div class="container">
      <div class="query-form">
        <el-row :gutter="20">
          <el-col :offset="12" :span="3">
            <el-input
              @keyup.enter.native="query"
              placeholder="学号"
              v-model="queryForm.courseName"
            />
          </el-col>
          <el-col :span="3">
            <el-input
              @keyup.enter.native="query"
              placeholder="学生名"
              v-model="queryForm.studentName"
            />
          </el-col>
          <el-col :span="3">
            <el-input
              @keyup.enter.native="query"
              placeholder="奖项名"
              v-model="queryForm.studentName"
            />
          </el-col>
          <el-col :span="3">
            <el-button @click="query" icon="el-icon-search" type="primary"
              >搜索
            </el-button>
          </el-col>
        </el-row>
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

      <div class="table">
        <el-table :data="tableData" stripe>
          <el-table-column label="年级" prop="studentCourseId" />
          <el-table-column label="班级" prop="courseName" />
          <el-table-column label="学生姓名" prop="studentName" />
          <el-table-column label="所获奖项" prop="dailyScore" />
          <el-table-column label="获奖时间" prop="examScore" />
          <el-table-column label="成绩" prop="score" />
          <el-table-column align="center" label="操作" width="200px">
            <template slot-scope="scope">
              <el-button
                @click="edit(scope.row.studentCourseId)"
                size="mini"
                type="success"
                >打分
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <el-dialog :visible.sync="editing" title="编辑" width="30%">
        <el-form :model="entityForm" label-width="70px" ref="form">
          <el-form-item label="选课Id">
            <el-input
              disabled
              type="number"
              v-model="entityForm.studentCourseId"
            ></el-input>
          </el-form-item>
          <el-form-item label="日常成绩">
            <el-input type="number" v-model="entityForm.dailyScore"></el-input>
          </el-form-item>
          <el-form-item label="笔试成绩">
            <el-input type="number" v-model="entityForm.examScore"></el-input>
          </el-form-item>
          <el-form-item label="总成绩">
            <el-input type="number" v-model="entityForm.score"></el-input>
          </el-form-item>
        </el-form>
        <span class="dialog-footer" slot="footer">
          <el-button @click="save" type="primary">确 定</el-button>
          <el-button @click="editing = false">取 消</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
// import * as api from "../../api/teacher/grade";

export default {
  name: "TeacherGrade",
  data() {
    return {
      queryForm: {
        courseName: "",
        studentName: ""
      },
      entityForm: {},
      tableData: [],
      pageSize: 5,//api.pageSize,
      pageCount: 3,
      pageIndex: 1,
      editing: false
    };
  },
  methods: {
    query() {
      // api
      //   .getPageCount(this.queryForm.courseName, this.queryForm.studentName)
      //   .then(res => {
      //     this.pageCount = res;
      //     this.pageIndex = 1;
      //     this.getPage(1);
      //   });
    },
    getPage(pageIndex) {
      // api
      //   .getPage(
      //     pageIndex,
      //     this.queryForm.courseName,
      //     this.queryForm.studentName
      //   )
      //   .then(res => {
      //     this.tableData = res;
      //   });
    },
    edit(id) {
      // api.get(id).then(res => {
      //   this.entityForm = res;
      //   this.editing = true;
      // });
    },
    save() {
      // api.update(this.entityForm).then(() => {
      //   this.$message.success("成功");
      //   this.getPage(this.pageIndex);
      //   this.editing = false;
      // });
    }
  },
  created() {
    // this.query();
  }
};
</script>

<style scoped></style>
