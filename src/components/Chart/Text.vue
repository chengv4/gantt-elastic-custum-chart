<!--
/**
 * @fileoverview Text component
 * @license MIT
 * @author Rafal Pospiech <neuronet.io@gmail.com>
 * @package GanttElastic
 */
-->
<template>
  <svg
    class="gantt-elastic__chart-row-text-wrapper"
    :style="{ ...root.style['chart-row-text-wrapper'] }"
    :x="textConfig.ellipsis ? task.x : task.x + task.width + root.state.options.chart.text.offset"
    :y="task.y - root.state.options.chart.grid.horizontal.gap"
    :width="getWidth"
    :height="getHeight"
  >
    <foreignObject x="0" y="0" width="100%" :height="getHeight">
      <div
        xmlns="http://www.w3.org/1999/xhtml"
        class="gantt-elastic__chart-row-text"
        :style="{ ...root.style['chart-row-text'], backgroundColor: textConfig.ellipsis ? 'transparent' : task.color }"
      >
        <div
          v-if="textConfig.render"
          class="gantt-elastic__chart-row-text-content gantt-elastic__chart-row-text-content--text"
          :style="{
            ...root.style['chart-row-text-content'],
            ...root.style['chart-row-text-content--text'],
            ...contentStyle,
            ...textConfig.style
          }"
        >
          <Render :render="() => textConfig.render(task.label, task)" />
        </div>
        <div
          class="gantt-elastic__chart-row-text-content gantt-elastic__chart-row-text-content--text"
          :style="{
            ...root.style['chart-row-text-content'],
            ...root.style['chart-row-text-content--text'],
            ...contentStyle,
            ...textConfig.style
          }"
          v-else-if="!html"
        >
          <div>{{ showLabel }}</div>
        </div>
        <div
          class="gantt-elastic__chart-row-text-content gantt-elastic__chart-row-text-content--html"
          :style="{
            ...root.style['chart-row-text-content'],
            ...root.style['chart-row-text-content--html'],
            ...contentStyle,
            ...textConfig.style
          }"
          v-else-if="html"
          v-html="showLabel"
        ></div>
      </div>
    </foreignObject>
  </svg>
</template>

<script>
import Render from '../Render/index.vue';
export default {
  name: 'ChartText',
  inject: ['root'],
  props: ['task'],
  components: {
    Render
  },
  data() {
    return {};
  },
  computed: {
    /**
     * Get width
     *
     * @returns {number}
     */
    getWidth() {
      if (this.textConfig.ellipsis) {
        return this.task.width;
      }
      const textStyle = this.root.style['chart-row-text'];
      this.root.state.ctx.font = `${textStyle['font-weight']} ${textStyle['font-size']} ${textStyle['font-family']}`;
      const textWidth = this.root.state.ctx.measureText(this.task.label).width;
      return textWidth + this.root.state.options.chart.text.xPadding * 2;
    },

    /**
     * Get height
     *
     * @returns {number}
     */
    getHeight() {
      return this.task.height + this.root.state.options.chart.grid.horizontal.gap * 2;
    },

    /**
     * Get content style
     *
     * @returns {object}
     */
    contentStyle() {
      return { height: '100%', 'line-height': this.getHeight + 'px' };
    },

    /**
     * Should we render text as html?
     *
     * @returns {boolean}
     */
    html() {
      return Boolean(this.textConfig.html);
    },
    textConfig() {
      return (
        this.root.state.options.chart.text || {
          style: {},
          html: false,
          ellipsis: false
        }
      );
    },

    showLabel() {
      if (this.textConfig.ellipsis) {
        const labelLength = this.task.label.length || 0;
        const textWidth = this.root.state.ctx.measureText(this.task.label).width;
        let showLength = Math.floor((this.task.width / textWidth) * labelLength);

        if (showLength < labelLength) {
          return this.task.label.substring(0, showLength - 2) + '...';
        }
      }
      return this.task.label;
    }
  },
  methods: {}
};
</script>
