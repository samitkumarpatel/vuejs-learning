# vuejs-learning
This repo has a way to define minal vue config to achieve . There is other way as well (where you can write your template, script , router in one file)

Follow the below example


```
<!doctype html>
<html lang="en" xmlns:th="http://www.thymeleaf.org">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <title>::0::</title>
        <style>
            body {
                padding: 0px 0px 0px 0px;
            }
        </style>
    </head>
    <body>

        <div class="container" id="app">
            <h2>Employee Management!</h2>
            <hr/>
            <div class="row">
                <section class="col-2" id="menu">
                    <router-link to="/">Dashboard</router-link> <hr/>
                    <router-link to="/department">Department</router-link> <hr>
                    <router-link to="/employee">Employee</router-link> <hr>
                </section>
                <section class="col-10" id="menu-result">
                    <router-view></router-view>
                </section>
            </div>
        </div>

        <template id="template__dashboard">
            <div id="dashboard">
                <strong>Dashboard</strong>
                <section>
                    <a href="#" @click="updateMessage">update message</a> <br>
                    {{message}}
                </section>
            </div>
        </template>

        <template id="template__dapartment">
            <div id="department">Department</div>
        </template>

        <template id="template__employee">
            <div id="employee">Employee</div>
        </template>
        
        
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
        <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
        <script>
            const Dashboard = { 
                name: 'Dashboard',
                template: '#template__dashboard',
                data: function () {
                    return {
                        message: 'not updated'
                    }
                },
                methods: {
                    updateMessage: function () {
                        this.message = 'updated'
                        console.log(this.$el.textContent) // => 'not updated'
                        this.$nextTick(function () {
                            console.log(this.$el.textContent) // => 'updated'
                        })
                    }
                }
            }

            const Department = {
                name: 'Department',
                template: '#template__dapartment'
            }

            const Employee = {
                name: 'Employee',
                template: '#template__employee' 
            }

            const routes = [
                { path: '/', component: Dashboard },
                { path: '/department', component: Department },
                { path: '/employee', component: Employee }
            ]

            const router = new VueRouter({
                routes // short for `routes: routes`
            })

            const app = new Vue({
                router
            }).$mount('#app')

        </script>
    </body>
</html>
```
