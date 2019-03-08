<template>
    <div class="container">
        <div class="columns">
            <div v-if="isLoading" class="column is-three-quarters">Loading users...</div>
            <div v-else class="column is-three-quarters">
                <h1>Github Users List</h1>
                <vue-good-table
                        @on-row-click="goToDetailsPage"
                        :columns="columns"
                        :rows="users"
                        :pagination-options="{
                        enabled: true,
                        mode: 'records',
                        perPage: 15,
                        position: 'bottom',
                        dropdownAllowAll: false,
                        setCurrentPage: 1,
                        nextLabel: 'next',
                        prevLabel: 'prev',
                        rowsPerPageLabel: 'Rows per page',
                        ofLabel: 'of',
                        pageLabel: 'page', // for 'pages' mode
                        allLabel: 'All',
                      }">
                </vue-good-table>
            </div>
        </div>


    </div>
</template>

<script>
    import axios from "axios"

    export default {
        name: 'Users',
        mounted() {
            this.listUsers()
        },
        data: () => ({
            url:  process.env.NODE_ENV === 'production' ? window.location.origin : "http://localhost:3000",
            isLoading: false,
            users: "",
            columns: [
                {
                    label: "Id",
                    field: "id",
                    filterable: true
                },
                {
                    label: "Login",
                    field: "login",
                    filterable: true
                },
            ]

        }),
        methods: {
            async listUsers() {
                this.isLoading = true;
                try {

                    const users = await axios.get(`${this.url}/api/users`);
                    this.users = users.data
                } catch (e) {
                    console.log(e)
                } finally {
                    this.isLoading = false;
                }

            },
            goToDetailsPage(data) {
                const username = data.row.login;
                this.$router.push({path: `/details=${username}`})
            },
        },
        components: {}
    }
</script>

