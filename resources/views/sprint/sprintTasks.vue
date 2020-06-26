<template>
    <div class="container">
        <div class="page-header">
            <h1 class="page-title">
                Sprint Tasks
            </h1>
        </div>
        <div class="row">
            <div class="col-md-3">
                <div class="card">
                    <div class="card-body">
                        <div class="form-group">
                            <label class="form-label">Project Name</label>
                            <input type="text" class="form-control" placeholder="Enter Project Name">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Task Type</label>
                            <input type="text" class="form-control" placeholder="Enter Task Type">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Task Description</label>
                            <textarea class="form-control" rows="2"></textarea>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Sub Task Type</label>
                            <input type="text" class="form-control" placeholder="Enter Sub Task Type">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Sub Task Description</label>
                            <textarea class="form-control" rows="2"></textarea>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Assigned By</label>
                            <input type="text" class="form-control" placeholder="Enter Assigned By">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Est. Hour</label>
                            <input type="text" class="form-control" placeholder="Enter Est. Hour">
                        </div>
                        <button class="btn btn-primary btn-block"><i class="fe fe-plus"/> Add New Task</button>
                    </div>
                </div>
            </div>
            <div class="col-md-9">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="card p-3">
                            <div class="d-flex align-items-center">
                                <span class="stamp stamp-md bg-blue mr-3">
                                  <i class="fe fe-dollar-sign"></i>
                                </span>
                                <div>
                                    <h4 class="m-0"><a href="javascript:void(0)">132 <small>Tasks</small></a></h4>
                                    <small class="text-muted">12 waiting payments</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card p-3">
                            <div class="d-flex align-items-center">
                                        <span class="stamp stamp-md bg-blue mr-3">
                                          <i class="fe fe-dollar-sign"></i>
                                        </span>
                                <div>
                                    <h4 class="m-0"><a href="javascript:void(0)">132 <small>Working Hours</small></a></h4>
                                    <small class="text-muted">12 waiting payments</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card p-3">
                            <div class="d-flex align-items-center">
                                        <span class="stamp stamp-md bg-blue mr-3">
                                          <i class="fe fe-dollar-sign"></i>
                                        </span>
                                <div>
                                    <h4 class="m-0"><a href="javascript:void(0)">132 <small>Tasks Hours</small></a></h4>
                                    <small class="text-muted">12 waiting payments</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card">
                        <div class="card-body d-flex flex-column">
                            <div class="d-flex justify-content-between">
                                <h4>Project Name </h4>
                                <div>
                                    <span class="tag tag-gray" data-toggle="tooltip" data-original-title="Title">Gray tag</span>
                                    <span class="tag tag-gray" data-toggle="tooltip" data-original-title="Title">4 Hours</span>
                                </div>

                            </div>

                            <div class="text-muted">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, culpa cupiditate doloribus dolorum enim, esse eveniet, expedita impedit nobis quae sunt tempora vel voluptate. Ad doloribus id quam tenetur vero?
                                <hr>
                                <ul>
                                    <li>
                                        <div class="d-flex justify-content-between">
                                            <div>Sub Tasks</div>
                                            <div>
                                                <span class="tag tag-gray" data-toggle="tooltip" data-original-title="Title">Gray tag</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li style="list-style: none">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci consectetur consequatur consequuntur delectus ea, error, facere hic maxime provident quae quas quia quis rem reprehenderit soluta temporibus tenetur voluptate!
                                    </li>
                                </ul>
                            </div>
                            <div class="d-flex align-items-center pt-5 mt-auto">
                                <div class="avatar avatar-md mr-3"
                                     style="background-image: url(./demo/faces/male/4.jpg)"></div>
                                <div>
                                    <a href="./profile.html" class="text-default">Sunny Leone</a>
                                    <small class="d-block text-muted">3 days ago</small>
                                </div>
                                <div class="ml-auto text-muted">
                                    <ul class="social-links list-inline mb-0 mt-2">
                                        <li class="list-inline-item">
                                            <a href="javascript:void(0)" title="" data-toggle="tooltip" data-original-title="Jani Na ke demu"><i class="fe fe-eye"></i></a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="javascript:void(0)" title="" data-toggle="tooltip" data-original-title="Task Move"><i class="fe fe-move"></i></a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="javascript:void(0)" title="" data-toggle="tooltip" data-original-title="Task Complete"><i class="fe fe-check"></i></a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="javascript:void(0)" title="" data-toggle="tooltip" data-original-title="Edit Task"><i class="fe fe-edit"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sprintTasks"
    }
</script>

<style scoped>

</style>
