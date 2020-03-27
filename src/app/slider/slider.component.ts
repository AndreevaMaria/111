import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.less']
})
export class SliderComponent implements OnInit {

  items = [
    {
      img: "../../assets/экран.png",
      title: "Удобная оплата",
      text: "Контролируйте все покупки прямо в приложении, выбирайте удобный способ расчета: можете оплатить услугу сразу или погасить общий счет за все в конце круиза"
    },
    {
      img: "../../assets/экран.png",
      title: "Удобная оплата 2",
      text: "Контролируйте все покупки прямо в приложении, выбирайте удобный способ расчета: можете оплатить услугу сразу или погасить общий счет за все в конце круиза"
    },
    {
      img: "../../assets/экран.png",
      title: "Удобная оплата 3",
      text: "Контролируйте все покупки прямо в приложении, выбирайте удобный способ расчета: можете оплатить услугу сразу или погасить общий счет за все в конце круиза"
    },
    {
      img: "../../assets/экран.png",
      title: "Удобная оплата 4",
      text: "Контролируйте все покупки прямо в приложении, выбирайте удобный способ расчета: можете оплатить услугу сразу или погасить общий счет за все в конце круиза"
    },
    {
      img: "../../assets/экран.png",
      title: "Удобная оплата 5",
      text: "Контролируйте все покупки прямо в приложении, выбирайте удобный способ расчета: можете оплатить услугу сразу или погасить общий счет за все в конце круиза"
    },
    {
      img: "../../assets/экран.png",
      title: "Удобная оплата 6",
      text: "Контролируйте все покупки прямо в приложении, выбирайте удобный способ расчета: можете оплатить услугу сразу или погасить общий счет за все в конце круиза"
    },
    {
      img: "../../assets/экран.png",
      title: "Удобная оплата 7",
      text: "Контролируйте все покупки прямо в приложении, выбирайте удобный способ расчета: можете оплатить услугу сразу или погасить общий счет за все в конце круиза"
    },
    {
      img: "../../assets/экран.png",
      title: "Удобная оплата 8",
      text: "Контролируйте все покупки прямо в приложении, выбирайте удобный способ расчета: можете оплатить услугу сразу или погасить общий счет за все в конце круиза"
    }
  ]

  index = 0

  constructor() { }

  ngOnInit() {
  }
  onClick() {
    this.index++
    if (this.index == 8) alert("Слайды закончились!")
  }
}
