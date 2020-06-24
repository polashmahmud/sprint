<template>
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Task Type</h3>
        </div>
        <div class="card-body">
            <div class="form-group">
                <div class="row align-items-center">
                    <div class="col-sm-10">
                        <input type="text" class="form-control" placeholder="Add new task type">
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
                        <th>Name</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>New Feature</td>
                        <td class="text-nowrap">May 6, 2018</td>
                        <td class="w-1"><a href="#" class="icon"><i class="fe fe-edit"></i></a></td>
                    </tr>
                    <tr>
                        <td>Bug fix</td>
                        <td class="text-nowrap">April 22, 2018</td>
                        <td><a href="#" class="icon"><i class="fe fe-edit"></i></a></td>
                    </tr>
                    <tr>
                        <td>Others</td>
                        <td class="text-nowrap">April 15, 2018</td>
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
        name: "taskType"
    }
</script>

<style scoped>

</style>
