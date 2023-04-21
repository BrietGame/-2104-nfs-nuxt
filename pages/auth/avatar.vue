<template>
  <form method="post" enctype="multipart/form-data" @submit="upload">
    <label for="image">Sélectionnez une image :</label>
    <input type="file" id="image" name="image" accept="image/png, image/jpeg" @change="onFileChange">
    <br><br>
    <input type="submit" value="Upload">
  </form>
</template>

<script>
import {utilsService} from "~/server/utilsService";
export default {
  name: "Avatar",
  data() {
    return {
      avatar: null
    }
  },
  methods: {
    onFileChange(e) {
      this.avatar = e.target.files[0]
    },
    upload(event) {
      event.preventDefault();
      const formData = new FormData();
      formData.append('avatar', this.avatar);
      utilsService.uploadFile(formData).then((response) => {
        console.log(response)
      })
    }
  }
}
</script>
