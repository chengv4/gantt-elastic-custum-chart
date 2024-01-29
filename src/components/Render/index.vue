<script>
export default {
  name: 'Render',
  functional: true,
  props: {
    render: Function
  },
  render(createElement, context) {
    return context.props.render(createElement);
  }
};
</script>
