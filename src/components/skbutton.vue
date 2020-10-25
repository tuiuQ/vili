<template>
  <button class="sk-btn" 
          :class="{
            'sk-btn-primary': primary,
            'sk-btn-success': success,
            'sk-btn-info': info,
            'sk-btn-warning': warning,
            'sk-btn-danger': danger
          }">
    {{ type == "primary" }}
    {{ primary }}
  </button>
</template>

<script lang='ts'>
  import { ref, reactive, toRefs, computed } from 'vue'

  export default {
    name: 'sk-button', 
    props: {
      text: String,
      type: String
    },
    setup (props, context) {
      const msg: string = 'hello vue3'
      const text: string | object = props.text ? props.text : "按钮"
      const type: string | object = props.type ? props.type : "default"
      const types = reactive({
        primary: type == "primary",
        success: type == "success",
        info: type == "info",
        warning: type == "warning",
        danger: type == "danger"
      })
      return { 
        msg, 
        text, 
        type,
        ...toRefs(types)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../scss/class";
  @import "../scss/mixin";

  .sk-btn {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    @include btnstyle(white, #dcdfe6, #606266);
    &:hover {
      color: #409eff;
      border-color: #c6e2ff;
      background-color: #ecf5ff;
    }
    &:active {
      color: #3a8ee6;
      border-color: #3a8ee6;
      outline: none;
    }
  }
  .sk-btn-primary {
    @include btnstyle($primaryColor, $primaryColor, white)
  }
  .sk-btn-success {
    @include btnstyle($successColor, $successColor, white)
  }
  .sk-btn-info {
    @include btnstyle($infoColor, $infoColor, white)
  }
  .sk-btn-warning {
    @include btnstyle($warningColor, $warningColor, white)
  }
  .sk-btn-danger {
    @include btnstyle($dangerColor, $dangerColor, white)
  }
  
</style>