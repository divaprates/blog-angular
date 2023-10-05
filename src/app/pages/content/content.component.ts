import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  photoCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';
  
  private id: string | null = '0';

  constructor(
    private router: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.router.paramMap.subscribe(value => {
      console.log('Valor::', value.get("id"))
    })
  }

  setValuesToComponent(id: string) {
    
  }

}
