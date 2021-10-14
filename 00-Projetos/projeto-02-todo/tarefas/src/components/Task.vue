<template>
  <div @click="$emit('taskStateChange', task)" class="task" :class="stateClass">
    <p>{{ task.name }}</p>
    <span @click.stop="$emit('deletedTask', task)" class="close">x</span>
  </div>
</template>

<script>
export default {
  props: {
    task: { type: Object, required: true },
  },
  computed: {
    stateClass() {
      return {
        done: !this.task.pending,
        pending: this.task.pending,
      };
    },
  },
};
</script>

<style>
.task {
  position: relative;
  box-sizing: border-box;
  width: 350px;
  height: 150px;
  padding: 10px;
  font-size: 2rem;
  font-weight: 300;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pending {
  border-left: 12px solid #b73229;
  background-color: #f44336;
}
.done {
  color: #ddd;
  border-left: 12px solid #0a8f08;
  background-color: #4caf50;
  text-decoration: line-through;
}
.pending .close {
  background-color: #b73229;
}
.done .close {
  background-color: #0a8f08;
}
.close {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  height: 20px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
}
</style>