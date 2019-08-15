import Vue from 'vue'

export default Vue.component('flexbox-grid-style', {
    functional: true,
    props: {
        cssContent: {
            type: String,
            required: true
        }
    },
    render: function(h, context) {
        console.log('rendering styles');
        return <style domPropsInnerHTML={context.props.cssContent}></style>
    }
});
