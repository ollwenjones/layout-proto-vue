import Vue from "vue";
import Component from "vue-class-component";

@Component({
    template: require("Input.html")
})
export class InputComponent extends Vue {
    constructor() {
        super();
    }

    mounted() { }
}