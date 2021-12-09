export default class ApiRepository {
  constructor(url) {
    this.url = url;
  }

  async getAllData() {
    const response = await fetch(this.url);
    const data = await response.json();
    // console.log(data);
    return data;
  }
}
