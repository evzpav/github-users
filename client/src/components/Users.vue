<template>
    <div class="hello">
        <div style="width: 50%; ">
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
                <!--<template slot="table-row" slot-scope="props">-->
                <!--<span v-if="props.column.field === 'action'">-->
                <!--action-->
                <!--</span>-->
                <!--<span v-else>-->
                <!--{{props.formattedRow[props.column.field]}}-->
                <!--</span>-->
                <!--</template>-->
            </vue-good-table>
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
                // {
                //     label: "Action",
                //     field: "action",
                //     filterable: true
                // }
            ]

        }),
        methods: {
            async listUsers() {
                try {
                    const url = "http://localhost:3000";
                    let users = await axios.get(url + "/api/users?since=0");
                    this.users = users.data
                } catch (e) {
                    console.log(e)
                }

            },
            goToDetailsPage(data) {
                const username = data.row.login;
                this.$router.push({path: `/details=${username}`})
            },
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

</style>
