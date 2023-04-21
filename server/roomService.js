// RoomService Service
// -----------------------------------------------------------------------

import {headers} from "~/server/index";

export class roomService {

  // Récupérer toutes les rooms
  static async getAllRooms() {
    console.log("getAllRooms() called");
    const response = await fetch("http://localhost:3001/rooms/all", {
      headers: headers
    })
    const data = await response.json();
    console.log(data);
    return data;
  }

  static async getRoomById(id) {
    console.log("getRoomById() called");
    const response = await fetch("http://localhost:3001/rooms/find/" + id, {
      headers: headers
    })
    const data = await response.json();
    console.log(data);
    return data;
  }

  static async createRoom(room) {
    console.log("createRoom() called");
    console.log(room.name);
    const response = await fetch("http://localhost:3001/rooms/create", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': headers.Authorization
      },
      body: JSON.stringify(room),
    });
    return response.json();
  }
}
