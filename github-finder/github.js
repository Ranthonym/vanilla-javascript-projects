class GitHub {
  constructor() {
    this.client_id = "561a7eab5ed2bfc62833";
    this.client_secret = "30ab208d4747f43f5cca16e42fc5f80b83395932";
    this.repos_count = 5;
    this.repost_sort = "created: asc";
  }

  // get user method
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repost_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
