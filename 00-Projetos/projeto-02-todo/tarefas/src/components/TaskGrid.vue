<template>
  <div class="task-grid">
    <template v-if="tasks.length">
      <Task
        v-for="task in tasks"
        :key="task.name"
        :task="task"
        @deletedTask="$emit('deletedTask', task)"
        @taskStateChange="$emit('taskStateChange', task)"
      >
      </Task>
    </template>
    <p v-else class="no-task">Sua vida está em dia :)</p>
  </div>
</template>

<script>
import Task from "./Task.vue";
export default {
  components: { Task },
  props: {
    tasks: { type: Array, required: true },
  },
};
</script>

<style>
.task-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.task-grid .task {
  margin: 10px;
}
.no-task {
  font-size: 1.7rem;
  color: #aaa;
}
</style>