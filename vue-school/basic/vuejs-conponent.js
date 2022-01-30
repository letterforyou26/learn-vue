let PlanComponent = {
    template: '#plan-template',
    props: {
        name: {
            type: String,
            default: 'plan x',
            required: true
        }
    }
}

let PlanPickerComponent = {
    template: '#plan-picker-template',
    components: {
        'plan-component': PlanComponent
    },
    data () {
        return {
            data: {
                plans: ['plan 1', 'plan 2', 'plan 3']
            }
        }
    }
}

new Vue({
    el: '#app',
    components: {
        'plan-picker': PlanPickerComponent
    }
})