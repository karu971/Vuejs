<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li 
                class="list-group-item"
                v-for="server in servers"
                @click="showServerStatus(server)">
                Server #{{ server.id }}
            </li>
        </ul>
    </div>
</template>

<script>
import { eventBus } from "../../main";


export default {
    data: () => {
        return {
            servers: [
                { id: 1 , status: 'Normal'},
                { id: 2 , status: 'Critical'},
                { id: 3 , status: 'Unknown'},
                { id: 4 , status: 'Critical'},
            ]
        }
    },
    methods: {
        showServerStatus(server) {
            eventBus.$emit('mesCouilles', server);
        }
    }
}
</script>

<style scoped>
</style>
