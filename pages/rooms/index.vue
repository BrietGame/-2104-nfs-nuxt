<template>
  <div>
    <h1>Rooms</h1>
    <NuxtLink :to="`/rooms/add`" class="text-indigo-600 hover:text-indigo-900">Ajouter</NuxtLink>
    <div class="relative overflow-x-auto px-6 py-3">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">
            Id
          </th>
          <th scope="col" class="px-6 py-3">
            Name
          </th>
          <th scope="col" class="px-6 py-3">
            Description
          </th>
          <th scope="col" class="px-6 py-3">
            Tag
          </th>
          <th scope="col" class="px-6 py-3">
            Actions
          </th>
        </tr>
        </thead>
        <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="room in rooms" :key="room.id">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{room.id}}
          </th>
          <td class="px-6 py-4">
            {{room.name}}
          </td>
          <td class="px-6 py-4">
            {{room.description}}
          </td>
          <td class="px-6 py-4">
            {{room.tag}}
          </td>
          <td class="px-6 py-4">
            <NuxtLink :to="`/rooms/${room.id}`" class="text-indigo-600 hover:text-indigo-900">Détails</NuxtLink>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import {roomService} from "~/server/roomService";
export default {
  name: 'RoomsList',
  data() {
    return {
      rooms: []
    }
  },
  methods: {
    fetch() {
     roomService.getAllRooms().then((rooms) => {
       this.rooms = rooms.data
     });
    }
  },
  created() {
    this.fetch()
  }
}
</script>
