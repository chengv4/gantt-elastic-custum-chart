<!--
/**
 * @fileoverview TaskListHeader component
 * @license MIT
 * @author Rafal Pospiech <neuronet.io@gmail.com>
 * @package GanttElastic
 */
-->
<template>
  <div
    class="gantt-elastic__task-list-header"
    :style="{
      ...root.style['task-list-header'],
      height: `${root.state.options.calendar.height}px`,
      'margin-bottom': `${root.state.options.calendar.gap}px`
    }"
  >
    <div
      class="gantt-elastic__task-list-header-column"
      :style="{
        ...root.style['task-list-header-column'],
        ...column.style['task-list-header-column'],
        ...getStyle(column)
      }"
      v-for="column in columns"
      :key="column._id"
    >
      <task-list-expander
        v-if="column.expander"
        :tasks="collapsible"
        :options="root.state.options.taskList.expander"
      ></task-list-expander>
      <div
        class="gantt-elastic__task-list-header-label"
        :style="{ ...root.style['task-list-header-label'], ...column.style['task-list-header-label'] }"
        :column="column"
      >
        {{ column.label }}
      </div>
    </div>
  </div>
</template>

<script>
import TaskListExpander from '../Expander.vue';
export default {
  name: 'TaskListHeader',
  components: {
    TaskListExpander
  },

  inject: ['root'],

  data() {
    return {
      resizer: {
        moving: false,
        x: 0
      }
    };
  },

  computed: {
    /**
     * Is this row collapsible?
     *
     * @returns {bool}
     */
    collapsible() {
      return this.root.state.tasks.filter(task => task.allChildren.length > 0);
    },

    /**
     * Get columns
     *
     * @returns {array}
     */
    columns() {
      return this.root.state.options.taskList.columns.filter(v => v.fixed === 'right');
    }
  },

  methods: {
    /**
     * Get style
     *
     * @returns {object}
     */
    getStyle(column) {
      return {
        width: column.finalWidth + 'px'
      };
    }
  },

  /**
   * Created
   */
  created() {},

  /**
   * Before destroy event - clear all event listeners
   */
  beforeDestroy() {}
};
</script>
