<template>
    <div class="container">
        <div class="page-header">
            <h1 class="page-title">
                Sprint
            </h1>
        </div>
        <div class="row">
            <div class="col-md-3">
                <div class="card">
                    <div class="card-body">
                        <div class="form-group">
                            <label class="form-label">Start Date</label>
                            <input type="text" class="form-control" placeholder="Start Date">
                        </div>
                        <div class="form-group">
                            <label class="form-label">End Date</label>
                            <input type="text" class="form-control" placeholder="Start Date">
                        </div>
                        <button class="btn btn-primary btn-block"><i class="fe fe-plus"/> Add New Sprint</button>
                    </div>
                </div>
            </div>
            <div class="col-md-9">
                <div class="card">
                    <div class="table-responsive">
                        <table class="table card-table table-striped table-vcenter">
                            <thead>
                            <tr>
                                <th>Sprint No</th>
                                <th>Working Hours</th>
                                <th>Task Hours</th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>SP-001</td>
                                <td>
                                    <div class="clearfix">
                                        <div class="float-left">
                                            <strong>96% <small class="text-muted">(Total: 20h, Left: 2h)</small></strong>
                                        </div>
                                        <div class="float-right">
                                            <small class="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                                        </div>
                                    </div>
                                    <div class="progress progress-xs">
                                        <div class="progress-bar bg-green" role="progressbar" style="width: 96%" aria-valuenow="96" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </td>
                                <td>3,654h</td>
                                <td class="text-nowrap w-1">
                                    <a href="#" class="text-muted">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"></path><path d="M5 12l5 5l10 -10"></path></svg>
                                        2/7
                                    </a>
                                </td>
                                <td class="w-1">
                                    <a href="#" class="icon"><i class="fe fe-edit"></i></a>
                                </td>
                                <td class="w-1">
                                    <router-link class="icon" to="/sprint-tasks"><i class="fe fe-eye"></i></router-link>
                                </td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>
