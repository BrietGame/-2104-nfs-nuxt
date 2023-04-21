<template>
  <div>
    <form action="" method="POST" @submit="addRoom">
      <Input
        v-model="room.name"
        label="Nom"
        :input="{
        type: 'text',
        name: 'room_name',
        placeholder: 'Salle Alpha',
        required: true
      }"/>
      <Input
        v-model="room.description"
        label="Description"
        :input="{
        type: 'text',
        name: 'room_description',
        placeholder: 'Description',
        required: true
      }"/>
      <Input
        v-model="room.tag"
        label="Tag"
        :input="{
        type: 'text',
        name: 'room_tag',
        placeholder: 'A202',
        required: true
      }"/>
      <Submit />
    </form>
  </div>
</template>

<script>
import {roomService} from "~/server/roomService";

export default {
  name: 'AddRoom',
  data() {
    return {
      room: {
        name: '',
        description: '',
        tag: ''
      }
    }
  },
  methods: {
    addRoom(event) {
      event.preventDefault();
      console.log(this.room)
      roomService.createRoom(this.room).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>
