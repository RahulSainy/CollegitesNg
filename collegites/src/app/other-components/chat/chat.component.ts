import { Component, OnInit } from '@angular/core'
import { ImageService } from 'src/app/Shared/image.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  
  posts: any;
  postList: any[];
  postArray: any[];
  constructor(private imageService: ImageService,) {}

  ngOnInit(): void {
    
this.imageService.getImageDetailList();

this.imageService.imageDetailList.snapshotChanges().subscribe(
  list => {
    this.postList = list.map(item => { return item.payload.val(); });
    this.postArray =  Array.from(Array(Math.ceil((this.postList.length))).keys());
  }
);
  }
  

  

  
}
