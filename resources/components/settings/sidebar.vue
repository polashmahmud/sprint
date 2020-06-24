<template>
    <div class="col-md-3">
        <h3 class="page-title mb-5">General Settings</h3>
        <div>
            <div class="list-group list-group-transparent mb-0">
                <div
                    @click="$emit('changeStepNo', 1)"
                    :class="stepNo===1 ? 'active': ''"
                    class="list-group-item list-group-item-action d-flex align-items-center"
                    style="cursor: pointer"
                >
                    <span class="icon mr-3"><i class="fe fe-inbox"/></span>Project
                    <span class="ml-auto badge" :class="stepNo===1 ? 'badge-primary': 'badge-secondary'">14</span>
                </div>
                <div
                    @click="$emit('changeStepNo', 2)"
                    :class="stepNo===2 ? 'active': ''"
                    class="list-group-item list-group-item-action d-flex align-items-center"
                    style="cursor: pointer"
                >
                    <span class="icon mr-3"><i class="fe fe-send"></i></span>Task Type
                    <span class="ml-auto badge" :class="stepNo===2 ? 'badge-primary': 'badge-secondary'">14</span>
                </div>
                <div
                    @click="$emit('changeStepNo', 3)"
                    :class="stepNo===3 ? 'active': ''"
                    class="list-group-item list-group-item-action d-flex align-items-center"
                    style="cursor: pointer"
                >
                    <span class="icon mr-3"><i class="fe fe-alert-circle"></i></span>Task Sub Type
                    <span class="ml-auto badge" :class="stepNo===3 ? 'badge-primary': 'badge-secondary'">14</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sidebar",
        props: {
            stepNo: {
                type: Number,
                default: 1
            }
        }
    }
</script>

<style scoped>

</style>
