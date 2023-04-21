// AuthService Service
// -----------------------------------------------------------------------

export class authService {

  static async login(user) {
    console.log("createRoom() called");
    const response = await fetch("http://localhost:3001/auth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    return response.json();
  }
}
