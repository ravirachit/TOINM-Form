import { Component, ElementRef, AfterViewInit, Input } from '@angular/core';

@Component({
    selector: 'fb-like',
    template: `<div class="fb-like" [attr.data-href]="url" data-layout="button_count" data-action="like" data-show-faces="true" data-share="true"></div>`
})

export class FbLikeComponent implements AfterViewInit {
    @Input() url = location.href;

    constructor() { 
        if (!window['fbAsyncInit']) {
          window['fbAsyncInit'] = function () {
              window['FB'].init({
                  appId: '2872650979501036',
                  autoLogAppEvents: true,
                  xfbml: true,
                  version: 'v8.0'
              });
          };
      }
      const url = 'https://connect.facebook.net/en_US/sdk.js';
      if (!document.querySelector(`script[src='${url}']`)) {
          let script = document.createElement('script');
          script.src = url;
          document.body.appendChild(script);
      }
      }
      ngAfterViewInit(): void {
        window['FB'] && window['FB'].XFBML.parse();
    }
    
    ngOnInit() {
      }
}