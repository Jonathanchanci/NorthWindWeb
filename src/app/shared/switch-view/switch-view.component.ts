import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-switch-view',
  templateUrl: './switch-view.component.html',
  styleUrls: ['./switch-view.component.css']
})
export class SwitchViewComponent implements OnInit {

  static readonly CARD_KEY = "cardViewTemplate";
  static readonly TABLE_KEY = "tableViewTemplate";

  @Input() template: Map<string, TemplateRef<any>>;
  @Input() defaultTemplate?: string;
  isCardViewVisible: boolean = true;
  constructor() { }

  ngOnInit() {
    this.isCardViewVisible = SwitchViewComponent.CARD_KEY === this.defaultTemplate;
  }

  getCardKey(): string{
    return SwitchViewComponent.CARD_KEY;
  }

  getTableKey(): string{
    return SwitchViewComponent.TABLE_KEY;
  }

}
