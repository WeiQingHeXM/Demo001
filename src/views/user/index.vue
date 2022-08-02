<template>
  <div class="manage">
    <el-dialog
      :title="operateType === 'add' ? '新增用户' : '更新用户'"
      :visible.sync="isShow"
    >
      <Form01
        :formLabel="operateFormLabel"
        :form="operateForm"
        :inline="true"
        ref="form"
      ></Form01>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取消</el-button>
        <el-button type="primary" @click="confirm">确定</el-button>
      </div>
    </el-dialog>

    <el-row :gutter="20">
      <el-col :span="16">
        <div class="manage-header">
          <el-button type="primary" @click="addUser">新增</el-button>
        </div>
      </el-col>

      <el-col :span="6">
        <div class="r-header">
          <Form01
            class="Form01"
            :formLabel="formLabel"
            :form="searchForm"
            :inline="true"
            ref="form"
          >
          </Form01>

          <el-col :span="2" class="button">
            <div>
              <el-button type="primary" @click="getList(searchForm.keyword)">搜索</el-button>
            </div>
          </el-col>
       
        </div>
      </el-col>
       <div class="resetButton">
        <el-button type="success" @click="resetUser()" >重置</el-button>
        </div>
    </el-row>
   
  <!-- 表格内容 -->
   <div class="formarea">
     <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="姓名" width="150"></el-table-column>
      <el-table-column prop="age" label="年龄" width="150"></el-table-column>
      <el-table-column prop="sex" label="性别" width="130"></el-table-column>
      <el-table-column prop="brith" label="出生日期" width="300"></el-table-column>
      <el-table-column prop="address" label="地址" width="500"></el-table-column>
      <el-table-column  fixed="right" label="操作" width="200">
      <template slot-scope="scope">
        <el-button @click="editUser(scope.row)" type="text" size="small" > 编辑</el-button>
        <el-button  @click="deleteUser(scope.row)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
 
   </div>
  </div>


</template>
<script>
import Form01 from "@/components/commonform.vue";

export default {
  name: "user",
  components: {
    Form01,
  },
  data() {
    return {
      operateType: "add",
      isShow: false,
      dialogVisible:false,
      operateFormLabel: [
        {
          model: "name",
          label: "姓名",
          type: "input",
        },
        {
          model: "age",
          label: "年龄",
          type: "input",
        },
        {
          model: "sex",
          label: "性别",
          type: "select",
          opts: [
            { label: "男", value: 1 },
            { label: "女", value: 0 },
          ],
        },
        {
          model: "birth",
          label: "出生日期",
          type: "date",
        },
        {
          model: "addr",
          label: "地址",
          type: "input",
        },
      ],
      showList:[],
      newList:[],
      operateForm: {
        name: "",
        addr: "",
        age: "",  
        birth: "",
        sex: "",
      },
      // data,
      // datalt: data,
      formLabel: [
        {
          model: "keyword",
          label: "",
          type: "input",
        },
      ],
      searchForm: {
        keyword: "",
      },
      tableData: [
        {
          name: '王小楠',
          age:'21',
          sex:"女",
          brith:'2000-10-10',
          address: '鼓楼区江东北路定淮门18 弄',
        },
         {
          name: '吴涛',
          age:'31',
          sex:"男",
          brith:'1990-6-15',
          address: '上海市普陀区金沙江路18 弄',
        },
         {
          name: '李晓明',
          age:'34',
          sex:"男",
          brith:'1967-8-09',
          address: '海南省三亚市戈江路 22 弄',
        }, 
        {
          name: '陆小慧',
          age:'51',
          sex:"女",
          brith:'1967-8-09',
          address: '安徽省芜湖市戈江路 282 弄',
        }]
    };
  },
  mounted(){
    this.showList = this.tableData
  },
  methods: {
    // confirm() {},

    //打开新增用户弹窗
    addUser() {
      this.isShow = true;
      this.operateType = "add";
      this.operateForm = { name: "", addr: "", age: "", birth: "", sex: "" };
    },
    //提交新增表单

   confirm(){
      if(this.operateType === 'edit'){
           this.$http.post('/user/edit',this.operateForm).then(res =>{
            this.tableData.push(res)
            this.tableData()
            //  console.log(res);
            //  this.isShow =false
           })
      }else{
        this.$http.post('/user/add',this.operateForm).then(res =>{
          //  console.log(res);
           this.isShow =false
        })
      }
   },
    //编辑用户
    editUser(row){
      this.isShow = true;
      this.operateType = "edit";
      this.operateForm =  row
      // console.log(row);
    },
    editUserSubmit(){
      this.isShow = false;
      this.tableData = this.operateForm
    },
     //删除用户
    deleteUser(index){
      this.tableData.splice(index,1)
    },
    //搜索用户
    getList(keyword) {
      if( keyword && keyword !==''){
       this.newList = this.tableData.filter( item =>
        item.name.indexOf(keyword) !== -1 ||
        item.age.indexOf(keyword) !== -1 ||
        item.sex.indexOf(keyword) !== -1 ||
        item.brith.indexOf(keyword) !== -1 ||
        item.address.indexOf(keyword) !== -1 
        )
       if(this.newList ){
        this.tableData = this.newList
      }
      }
    },
    //重置用户列表
    resetUser(){
      this.searchForm.keyword = "";
      this.tableData = this.showList
    }
  },
};
</script>
<style scoped>
.manage-header {
  margin-top: 15px;
  margin-left: 20px;
}
.Form01 {
  margin-top: 20px;
  /* width: 200px; */
}
.button {
  margin-left: 250px;
  margin-top: -103px;
}
.resetButton{
 margin-left: 500px ;
 margin-top: 20px !important;
}
</style>