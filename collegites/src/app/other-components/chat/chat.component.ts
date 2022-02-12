import { Component, OnInit } from '@angular/core'
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgForm } from '@angular/forms'

import { DocumentData, QuerySnapshot } from '@firebase/firestore';
import { ChatService } from './chat.service'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  
  posts: any
  postDetails = {
    topic: '',
    msg: '',
    img: '',
  }

  postCollectiondata:
    | {
        id: string
        postNumber: string
        topic: string
        msg: string
        img?: string
      }[]
    | any = []
  // posts: Post[] = [
  //   new Post('1','post1','meme','Some quick example text to build on the card title and make up the bulk of the card content Some quick example text to build on the card title and make up the bulk of the card content Some quick example text to build on the card title and make up the bulk of the card content Some quick example text to build on the card title and make up the bulk of the card content Some quick example text to build on the card title and make up the bulk of the card contentSome quick example text to build on the card title and make up the bulk of the card content Some quick example text to build on the card title and make up the bulk of the card content','https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg'),

  // ];

  msg: string
  url: string | ArrayBuffer | null


  constructor(private chatService: ChatService,private afStorage: AngularFirestore) {}

  ngOnInit(): void {
    this.get()
    this.chatService.obsr_UpdatedSnapshot.subscribe((snapshot) => {
      this.updatepostCollection(snapshot)
    })
  }

  onSubmit(form: NgForm) {
    console.log(form)
  }

  fileInputChange(fileInputEvent: any) {
    console.log(fileInputEvent.target.files[0])
    var mimeType = fileInputEvent.target.files[0].type

    if (mimeType.match(/img\/*/) == null) {
      this.msg = 'Only images are supported'
      return
    }

    var reader = new FileReader()
    reader.readAsDataURL(fileInputEvent.target.files[0])

    reader.onload = (_event) => {
      this.msg = ''
      this.url = reader.result
    }
  }


  async add() {
    const { msg, img } = this.postDetails
    await this.chatService.addpost(msg, img)
    this.postDetails.msg = ''
    this.postDetails.img = ''
  }

  async get() {
    const snapshot = await this.chatService.getposts()
    this.updatepostCollection(snapshot)
  }

  updatepostCollection(snapshot: QuerySnapshot<DocumentData>) {
    this.postCollectiondata = []
    snapshot.docs.forEach((post) => {
      this.postCollectiondata.push({ ...post.data(), id: post.id })
    })
  }

  async delete(id: string) {
    await this.chatService.deletepost(id)
  }

  async update(id: string, msg: HTMLInputElement, img: HTMLInputElement) {
    await this.chatService.updatepost(id, msg.value, img.value)
  }
}
