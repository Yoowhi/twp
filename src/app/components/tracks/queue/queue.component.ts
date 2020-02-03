import { Component, OnInit } from '@angular/core';
import {QueueService} from '../../../services/queue.service';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
export class QueueComponent implements OnInit {

  constructor(private queueService: QueueService) { }

  ngOnInit() {
  }

}
