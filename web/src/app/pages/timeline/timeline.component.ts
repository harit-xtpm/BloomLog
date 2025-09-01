import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline',
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent {
  activities = [
    {
      id: 1,
      date: '2025-01-01',
      title: 'กิจกรรมที่ 1',
      subjects: ['วิชา 1', 'วิชา 2'],
      description: 'รายละเอียดกิจกรรมที่ 1',
    },
    {
      id: 2,
      date: '2025-01-02',
      title: 'กิจกรรมที่ 2',
      subjects: ['วิชา 3'],
      description: 'รายละเอียดกิจกรรมที่ 2',
    },
    {
      id: 3,
      date: '2025-08-10',
      title: 'ทดลองปลูกถั่วงอก',
      subjects: ['Science'],
      description: 'วงจรชีวิตพืช',
    },
    {
      id: 4,
      date: '2025-08-12',
      title: 'คูณเลขจากของจริง',
      subjects: ['Math'],
      description: 'นับฝาขวด ×3',
    },
  ];

  constructor() {}

  onAddClick($event: any) {
    // Handle the add click event
    console.log('Add button clicked');
  }
}
