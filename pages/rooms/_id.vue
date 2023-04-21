<template>
  <div class="px-6 py-6">
    <h2>Détails</h2>
    <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{room.name}} <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{{ room.tag }}</span></h5>
      <p class="font-normal text-gray-700 dark:text-gray-400">{{room.description}}</p>
    </a>
  </div>
</template>

<script>
import { roomService } from "~/server/roomService";
export default {
  name: "RoomDetails",
  data() {
    return {
      room: {},
    };
  },
  methods: {
    fetch() {
      console.log("fetch");
      console.log(this.$route.params.id);
      roomService.getRoomById(this.$route.params.id).then((room) => {
        this.room = room.data[0];
      });
    },
  },
  mounted() {
    this.fetch();
  },
}
</script>
