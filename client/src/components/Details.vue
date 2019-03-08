<template>
    <div class="container">
        <div v-if="isLoading">Loading details...</div>
        <div v-else class="columns">
            <div class="column">
                <br>
                <br>
                <div class="card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                    <img :src="userData.avatar_url" alt="avatar" :title="userData.login">
                                </figure>
                            </div>
                            <div class="media-content">
                                <p class="title is-4">{{userData.login}}</p>
                                <p class="subtitle is-6">ID: {{userData.id}}</p>
                            </div>
                        </div>

                        <div class="content">
                            <a :href="userData.url">{{userData.url}}</a>
                            <br>
                            <time>Account created at: {{userData.created_at | formatDateTime}}</time>
                        </div>
                    </div>
                </div>
            </div>

            <div class="column is-three-fifths">

                <section class="hero">
                    <div class="hero-body">
                        <div class="container">
                            <h1 class="title">
                                User Details
                            </h1>
                        </div>
                    </div>
                </section>
                <div>
                    <vue-good-table
                            :columns="columns"
                            :rows="repos"
                            :pagination-options="{
                        enabled: true,
                        mode: 'records',
                        perPage: 10,
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

            <div class="column"></div>
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
            url: process.env.NODE_ENV === 'production' ? window.location.origin : "http://localhost:3000",
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
                } finally {
                    this.isLoading = false;
                }

            },
        }
    }

</script>