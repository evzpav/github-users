<template>
    <div class="container">
        <div class="columns">
            <div v-if="isLoading" class="column is-four-fifths">Loading details...</div>
            <div v-else class="column is-four-fifths">
                <div>
                    Id: {{userData.id}}
                </div>
                <div>
                    Login: {{userData.login}}
                </div>
                <div>
                    Github url: {{userData.url}}
                </div>
                <div>Account created at: {{userData.created_at | formatDateTime}}
                </div>
                <div>
                    <vue-good-table
                            :columns="columns"
                            :rows="repos"
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

    </div>
</template>
<script>
    import axios from "axios"

    export default {
        mounted() {
            this.loadDetails()
            this.loadRepos()
        },
        data: () => ({
            url:  process.env.NODE_ENV === 'production' ? window.location.origin : "http://localhost:3000",
            isLoading: false,
            userData: "",
            repos: "",
            columns: [
                {
                    label: "Id",
                    field: "id",
                    filterable: true
                },
                {
                    label: "Name",
                    field: "name",
                    filterable: true
                },
                {
                    label: "Repository URL",
                    field: "url",
                    filterable: true
                },
            ]
        }),
        props: ["username"],
        methods: {
            async loadDetails() {
                this.isLoading = true;
                try {
                    const userDetails = await axios.get(`${this.url}/api/users/${this.username}/details`);
                    this.userData = userDetails.data
                } catch (e) {
                    console.log(e)
                } finally {
                    this.isLoading = false;
                }

            },
            async loadRepos() {
                this.isLoading = true;
                try {
                    const repos = await axios.get(`${this.url}/api/users/${this.username}/repos`);
                    this.repos = repos.data
                } catch (e) {
                    console.log(e)
                }finally {
                    this.isLoading = false;
                }

            },
        }
    }

</script>