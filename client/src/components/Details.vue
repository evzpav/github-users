<template>
    <div>
        {{username}}
    </div>
</template>
<script>
    import axios from "axios"

    export default {
        mounted() {
            this.loadDetails()
        },
        props: ["username"],
        methods: {
            loadDetails() {
                try {
                    
                } catch (e) {

                }
                this.username = "trestews"
            }
        }
    }

</script>