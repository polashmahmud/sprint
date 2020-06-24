<template>
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Project Lists</h3>
        </div>
        <div class="card-body">
            <div class="form-group">
                <div class="row align-items-center">
                    <div class="col-sm-10">
                        <input type="text" class="form-control" placeholder="Add new project">
                    </div>
                    <div class="col-sm-2">
                        <button class="btn btn-primary btn-block"><i class="fe fe-plus" /> Add</button>
                    </div>
                </div>
            </div>
            <hr>
            <div class="table-responsive">
                <table class="table card-table table-striped table-vcenter">
                    <thead>
                    <tr>
                        <th>Project Name</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Docs (BackEnd)</td>
                        <td class="text-nowrap">May 6, 2018</td>
                        <td class="w-1"><a href="#" class="icon"><i class="fe fe-edit"></i></a></td>
                    </tr>
                    <tr>
                        <td>Docs (FrondEnd)</td>
                        <td class="text-nowrap">April 22, 2018</td>
                        <td><a href="#" class="icon"><i class="fe fe-edit"></i></a></td>
                    </tr>
                    <tr>
                        <td>Tedfo</td>
                        <td class="text-nowrap">April 15, 2018</td>
                        <td><a href="#" class="icon"><i class="fe fe-edit"></i></a></td>
                    </tr>
                    <tr>
                        <td>Vendor Panel</td>
                        <td class="text-nowrap">April 8, 2018</td>
                        <td><a href="#" class="icon"><i class="fe fe-edit"></i></a></td>
                    </tr>
                    <tr>
                        <td>Admin Panel</td>
                        <td class="text-nowrap">April 9, 2018</td>
                        <td><a href="#" class="icon"><i class="fe fe-edit"></i></a></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "project"
    }
</script>

<style scoped>

</style>
