import { Component } from '@angular/core';
import { Items } from '../items.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  items: Items[] = [
    {
      title: 'Prince',
      description:
        'A comedy of errors ensues when Anbu falls for his British colleague Jessica. Cultural differences aside, there is a lot more to settle for this couple to unite.',
      image:
        'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3117/1423117-h-2667411eaaab',
    },
    {
      title: 'Ghum Hai Kisikey Pyaar Meiin',
      description:
        'Virat grows agitated as Pakhi talks about her hatred towards Savi. Later, Sai puts forth a request to Virat as he tries to apologise to',
      image:
        'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4252/1364252-h-e470328888ed',
    },
    {
      title: 'Yeh Rishta Kya Kehlata Hai',
      description:
        'The Birlas and the Goenkas shower their blessings on a pregnant Aarohi. In the meantime, Akshara feels insecure since she cannot become a mother.',
      image:
        'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4266/1364266-h-470552ba960d',
    },
  ];
  index = 0;

  previousMovie() {
    if (this.index == 0) {
      this.index = this.items.length - 1;
    } else this.index--;
  }

  nextMovie() {
    if (this.index == this.items.length - 1) {
      this.index = 0;
    } else {
      this.index++;
    }
  }
}
