import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  // Return an array with 3 ClassRoom objects
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
}
