import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  cards = [
    {
      title: 'Post 1 Theseses',
      description: 'Some quick example text to build on the card title and make up the bulk of the card contentSome quick example text to build on the card title and make up the bulk of the card contentSome quick example text to build on the card title and make up the bulk of the card contentSome quick example text to build on the card title and make up the bulk of the card contentSome quick example text to build on the card title and make up the bulk of the card contentSome quick example text to build on the card title and make up the bulk of the card contentSome quick example text to build on the card title and make up the bulk of the card contentSome quick example text to build on the card title and make up the bulk of the card contentSome quick example text to build on the card title and make up the bulk of the card contentSome quick example text to build on the card title and make up the bulk of the card contentSome quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg'
    },
    {
      title: 'Card Title 2',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 3',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 4',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },

  ];
  msg: string;
  url: string | ArrayBuffer | null;

  constructor() { }

  ngOnInit(): void {
  }
onSubmit(form:NgForm){
  console.log(form);
}
fileInputChange(fileInputEvent: any) {
  console.log(fileInputEvent.target.files[0]);
  var mimeType = fileInputEvent.target.files[0].type;
		
		if (mimeType.match(/image\/*/) == null) {
			this.msg = "Only images are supported";
			return;
		}
		
		var reader = new FileReader();
		reader.readAsDataURL(fileInputEvent.target.files[0]);
		
		reader.onload = (_event) => {
			this.msg = "";
			this.url = reader.result; 
		}
}

}
