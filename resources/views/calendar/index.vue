<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="form-group">
                    <div class="selectgroup w-100">
                        <label class="selectgroup-item">
                            <input type="radio" name="event" value="1" v-model="eventType" class="selectgroup-input" checked="" >
                            <span class="selectgroup-button">Event</span>
                        </label>
                        <label class="selectgroup-item">
                            <input type="radio" name="event" value="2" v-model="eventType" class="selectgroup-input">
                            <span class="selectgroup-button">Holiday</span>
                        </label>
                    </div>
                </div>
                <div v-if="eventType==='1'" class="card">
                    <div class="card-body">
                        <div class="form-group">
                            <label class="form-label">Event Name</label>
                            <input type="text" class="form-control" placeholder="Event Name">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Start Date</label>
                            <input type="text" class="form-control" placeholder="Start Date">
                        </div>
                        <div class="form-group">
                            <label class="form-label">End Date</label>
                            <input type="text" class="form-control" placeholder="Start Date">
                        </div>
                        <button class="btn btn-primary btn-block" ><i class="fe fe-plus" /> Add New Event</button>
                    </div>
                </div>

                <div v-if="eventType==='2'" class="card">
                    <div class="card-body">
                        <div class="form-group">
                            <label class="form-label">Holiday Date</label>
                            <input type="text" class="form-control" placeholder="Select Holiday Date">
                        </div>
                        <button class="btn btn-primary btn-block" ><i class="fe fe-plus" /> Add Holiday</button>
                    </div>
                </div>
            </div>
            <div class="col-md-9">
                <div class="card">
                    <div class="card-body">
                        <FullCalendar :options="calendarOptions" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullCalendar from '@fullcalendar/vue'
    import dayGridPlugin from '@fullcalendar/daygrid'
    export default {
        name: "index",
        components: {
            FullCalendar // make the <FullCalendar> tag available
        },
        data() {
            return {
                calendarOptions: {
                    plugins: [ dayGridPlugin ],
                    initialView: 'dayGridMonth'
                },
                eventType: "1",
            }
        }
    }
</script>

<style scoped>

</style>
