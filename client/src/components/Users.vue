<template>
    <div class="hello">
        <div style="width: 50%; ">
            <vue-good-table
                    @on-row-click="showDetailsModal"
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

        <modal v-show="isModalVisible"
               @close="closeModal">

        </modal>
    </div>
</template>

<script>
    import Modal from './Modal';
    import axios from "axios"

    export default {
        name: 'Users',
        components: {
            Modal
        },
        mounted() {
            this.listUsers()
        },
        data: () => ({
            isModalVisible: false,
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
            showDetailsModal() {
                this.showModal();
            },
            showModal() {
                this.isModalVisible = true;
            },
            closeModal() {
                this.isModalVisible = false;
            }
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

    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 300px;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }

    .modal-body {
        margin: 20px 0;
    }

    .modal-default-button {
        float: right;
    }

    /*
     * The following styles are auto-applied to elements with
     * transition="modal" when their visibility is toggled
     * by Vue.js.
     *
     * You can easily play with the modal transition by editing
     * these styles.
     */

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>
