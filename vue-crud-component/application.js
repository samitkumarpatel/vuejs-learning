
Vue.component('crud', {
    template: '#template__crud',
    data: function () {
        return {
            entity: {
                title: "entity",
                endpoint: "",
                spinner: false,
                httpmethod: "post",
                error: null,
                success: null,
                formInputsCaption: "Fill the below for carefully!",
                formInputsModel: {},
                formInputs: [
                    {
                        label: "id",
                        type: "input",
                        defaultValue: null
                    },
                    {
                        label: "name",
                        type: "input",
                        defaultValue: null
                    },
                    {
                        label: "department",
                        type: "select",
                        defaultValue: [1,2,3]
                    }
                ],
                data: [{
                    id : "001",
                    name: "Samit Kumar Patel",
                    department: 3
                }]
            }
        }
    },
    methods: {
        create() { 
            console.log("CREATE")
            this.entity.data.push(this.entity.formInputsModel)
            this.entity.formInputsModel={}
        },
        read() {
            console.log("READ")
        },
        update() {
            console.log("UPDATE")
            //this.entity.data.push(this.entity.formInputsModel)
            //this.entity.formInputsModel={}
        },
        edit(data) {
            console.log("EDIT")
            this.entity.formInputsModel = data
            this.entity.httpmethod='put'
        },
        del(data) {
            console.log("DELETE")
        }
    },
})

new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})