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
  backendUrl: string = 'https://shortie-ij0p.onrender.com';
  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    // console.log(this.id)

    if(this.id.length > 0){
      axios.get(`${this.backendUrl}/get?short_url=${this.id}`)
        .then(({data})=>{
          console.log(data)
          if(data.acturalUrl){
            if(data.acturalUrl[0]==="\"" && data.acturalUrl[data.acturalUrl.length-1]=="\"")
              data.acturalUrl = data.acturalUrl.slice(1, -1)
            window.location.href = data.acturalUrl
          }
        })
    }
  }


}
