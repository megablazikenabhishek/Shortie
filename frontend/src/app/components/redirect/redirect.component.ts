import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-redirect',
  standalone: true,
  imports: [],
  templateUrl: './redirect.component.html',
  styleUrl: './redirect.component.css'
})
export class RedirectComponent {
  public id:any;
  backendUrl: string = 'http://localhost:8080';
  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    // console.log(this.id)

    if(this.id.length > 0){
      axios.get(`${this.backendUrl}/get?short_url=${this.id}`)
        .then(({data})=>{
          console.log(data)
          if(data.acturalUrl){
            window.location.href = data.acturalUrl
          }
        })
    }
  }


}
