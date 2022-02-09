import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, OnDestroy {
  contentSlug$!: Observable<string | null>;
  slug!: string | null;
  currentContent: any= {};

  contents = [
    {slug: 'fejlesztes', img: 'uszt.jpg', download: 'uszt.jpg' },
    {slug: 'fejlesztes2', img: 'woker_tajekoztatas2.png', download: 'woker_tajekoztatas2.pdf'},
    {slug: 'fejlesztes3', img: 'woker_tajekoztatas.png', download: 'woker_tajekoztatas.pdf'},
  ];

  private sub: Subscription | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.contentSlug$ = this.route.paramMap.pipe(
      map((paramMap) => paramMap.get('slug'))
    );
    this.sub = this.contentSlug$.subscribe(slug =>{ 
      this.slug = slug;
      this.currentContent = this.contents.find(content => content.slug == slug);      
    });
  }

  ngOnDestroy(){
    this.sub?.unsubscribe();    
  }

  download(currentContent: any) {
    let link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = '/assets/image/downloads/' + currentContent.download;
    link.download = currentContent.download;
    document.body.appendChild(link);
    link.click();
    link.remove();
}

}
