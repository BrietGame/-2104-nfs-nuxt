// RoomService Model
// -----------------------------------------------------------------------

// Path: models\roomService.js

export class Room {

  constructor(room) {
    this.id = room.id;
    this.name = room.name;
    this.description = room.description;
    this.tag = room.tag;
  }

  // Get room name
  get name() {
    return this.name;
  }

  // Get room description
  get description() {
    return this.description;
  }

  // Get room tag
  get tag() {
    return this.tag;
  }

  // Get room id
  get id() {
    return this.id;
  }

  // Set room name
  set name(name) {
    this.name = name;
  }

  // Set room description
  set description(description) {
    this.description = description;
  }

  // Set room tag
  set tag(tag) {
    this.tag = tag;
  }

  // Set room id
  set id(id) {
    this.id = id;
  }
}
