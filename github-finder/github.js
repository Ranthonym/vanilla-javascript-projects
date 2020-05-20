class GitHub {
  constructor() {
    this.client_id = "561a7eab5ed2bfc62833";
    this.client_secret = "30ab208d4747f43f5cca16e42fc5f80b83395932";
  }

  // get user method
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile,
    };
  }
}
