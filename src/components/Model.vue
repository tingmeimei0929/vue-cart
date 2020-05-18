<template>
  <div style="display: none;">
    <div class="md-modal modal-msg md-modal-transition "
         v-bind:class="
         {'md-show':mdShow}">
      <div class="md-modal-inner">
        <div class="md-top">
          <button class="md-close"
                  @click="closeModel()">关闭</button>
        </div>
        <div class="md-content">
          <div class="confirm-tips">
            <slot name="message"></slot>
          </div>
          <div class="btn-wrap">
            <slot name="btnGroup"></slot>

          </div>
        </div>
      </div>
    </div>
    <div class="md-overlay"
         v-if="mdShow"
         @click="closeModel()"></div>
  </div>
</template>

<script>
export default {
  name: 'Model',
  data () {
    return {

    }
  },
  props: ['mdShow'],
  methods: {
    closeModel () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="css" scoped>
</style>
