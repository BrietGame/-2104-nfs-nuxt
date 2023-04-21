
export class utilsService {

  static async uploadFile(file) {
    console.log("uploadFile() called");
    const response = await fetch("http://localhost:3001/upload", {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: file,
    });
    return response.json();
  }
}
