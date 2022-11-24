import { Component, Input, OnInit } from '@angular/core';
import { SummaryDetail } from './summary-detail.model';
import { SummaryService } from './summary.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  summaries: SummaryDetail[]
  
  constructor(private summaryService: SummaryService) { }

  ngOnInit(): void {
    this.summaries = this.summaryService.getSumaries()
  }

}
