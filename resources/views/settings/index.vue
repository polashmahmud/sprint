<template>
    <div class="container">
        <div class="row">
            <setting-sidebar @changeStepNo="changeStepNo" :stepNo="stepNo" />
            <div class="col-md-9">
                <setting-project
                    v-if="stepNo===1"
                />
                <setting-task-type
                    v-if="stepNo===2"
                />
                <setting-sub-task-type
                    v-if="stepNo===3"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import SettingSidebar from "../../components/settings/sidebar";
    import SettingProject from "../../components/settings/project";
    import SettingTaskType from "../../components/settings/taskType";
    import SettingSubTaskType from "../../components/settings/subTaskType";
    export default {
        name: "index",
        components: {SettingSubTaskType, SettingTaskType, SettingProject, SettingSidebar},
        data() {
            return {
                stepNo: 1,
            }
        },
        methods: {
            changeStepNo(value) {
                this.stepNo = value;
            }
        }
    }
</script>

<style scoped>

</style>
