import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { finalize } from 'rxjs/operators'

import { AngularFireStorage } from '@angular/fire/compat/storage'
import { SellService } from './sell.service'
@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css'],
})
export class SellComponent implements OnInit {
  imgSrc: string
  selectedImage: any = null
  isSubmitted: boolean

  formTemplate = new FormGroup({
    poductname: new FormControl('', Validators.required),

    price: new FormControl('', Validators.required),
    sellerName: new FormControl('', Validators.required),
    Contact: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    socialMediaUrl: new FormControl('', Validators.required),

    dsc: new FormControl('', Validators.required),
    category: new FormControl(''),
    imageUrl: new FormControl('', Validators.required),
  })

  constructor(
    private storage: AngularFireStorage,
    private service: SellService,
  ) {}

  ngOnInit() {
    this.resetForm()
    this.service.getImageDetailList();
  }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader()
      reader.onload = (e: any) => (this.imgSrc = e.target.result)
      reader.readAsDataURL(event.target.files[0])
      this.selectedImage = event.target.files[0]
    } else {
      this.imgSrc = '/assets/img/image_placeholder.jpg'
      this.selectedImage = null
    }
  }

  onSubmit(formValue: any) {
    this.isSubmitted = true
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name
        .split('.')
        .slice(0, -1)
        .join('.')}_${new Date().getTime()}`
      const fileRef = this.storage.ref(filePath)
      this.storage
        .upload(filePath, this.selectedImage)
        .snapshotChanges()
        .pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              formValue['imageUrl'] = url
              this.service.insertImageDetails(formValue)
              this.resetForm()
            })
          }),
        )
        .subscribe()
    }
  }

  get formControls() {
    return this.formTemplate['controls']
  }

  resetForm() {
    this.formTemplate.reset()
    console.log('works')
    this.formTemplate.setValue({
      poductname: '',
      dsc: '',
      imageUrl: '',
      category: 'Other',
      price: '',
      sellerName: '',
      Contact: '',
      email: '',
      socialMediaUrl: '',
    })
    this.imgSrc = '/assets/img/image_placeholder.jpg'
    this.selectedImage = null
    this.isSubmitted = false
  }
}
