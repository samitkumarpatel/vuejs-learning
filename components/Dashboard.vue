<template>
    <div class="dashboard">
        <div class="container-fluid">
            <Navbar/>
            <section id="body">
                
            </section>
            <Footer class="footer"/>
        </div>
    </div>
</template>
<script>
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'
export default {
    components: {
        Navbar,Footer
	}
}
</script>
<style scoped>
    .footer {
        margin-top : 200px; 
    }
</style>
