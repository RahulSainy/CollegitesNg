export class Post {
  constructor(
    public id: string,
    public postNumber: string,
    public topic: string,
    public msg: string,
    public img: string,
  ) {
    this.id = id;
    this.postNumber = postNumber;
    this.topic = topic;
    this.msg = msg;
    this.img = img;
  }
}
