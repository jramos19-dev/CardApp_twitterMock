import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  posts = [{title:'trees',imgUrl: 'assets/trees.jpg',userName:'@trees', content:"Saw this cool tree in my hike toda!"  },
  {title:'biking',imgUrl: 'assets/biking.jpg',userName:'@biking', content:"Saw this cool tree in my hike toda!"  },
  {title:'mountains',imgUrl: 'assets/mountain.jpg',userName:'@nature', content:"Saw this cool tree in my hike toda!" }
]


  
}
