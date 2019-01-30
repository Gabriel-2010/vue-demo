<template>
  <div class="user-bg">
    <div class="user-container">
      <div class="form-container">
        <h3>Trezor Demo</h3>
        <div class="user-form">
          <el-form :model="form" status-icon :rules="rule" ref="params">
            <el-form-item prop="params" label="FUNCTION PARAMS">
              <textarea type="params" v-model="form.params" placeholder="" autocomplete="off" class="el-input__inner"></textarea>
              <!-- <el-input type="params" v-model="form.params" placeholder></el-input> -->
            </el-form-item>
            <el-form-item prop="result" label="RESULT">
              <textarea type="result" v-model="form.result" placeholder="" autocomplete="off" class="el-input__inner"></textarea>
              <!-- <el-input v-model="form.result" placeholder type="result"></el-input> -->
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm()" class="submitBtn">getPublicKey</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      form: {
      params: "{ \"path\": \"m/49'/0'/4'\", \"coin\": \"btc\" }",
      // params: "test",
      result: "",
      },
      rule: {
        params: [
          { required: true, message: "Enter params", trigger: "blur" },
          {
            min: 3,
            max: 40,
            message: "Between 3 and 40 characters",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    async submitForm() {
      var trezorConnect = require("trezor-connect").default;
      console.log(this.form.params);
      const params = JSON.parse(this.form.params);
      const result = await trezorConnect.getPublicKey(params);
      console.log(result);
      if (result.success) {
        this.form.result = result.payload.publicKey;
      } else {
        alert(result.payload.error);
      }
    }
  }
};
</script>

<style>
.el-input {
  width: 400px;
}
.el-form-item {
  width: 550px;
  margin: 0 auto;
}
.el-form-item__label {
  width: 150px!important;
  display: block;
}
.el-form-item__label {
  width: 350px;
}
.el-form-item__content {
  margin: 0 0 20px 0;
}
.el-input__inner {
  width: 400px;
}
.el-form-item.is-required .el-form-item__label:before {
  content: "";
  margin-right: 0px;
}
.go-fgtpwd {
  width: 100%;
  font-size: 14px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
}
.go-fgtpwd:hover {
  text-decoration: underline;
}
</style>