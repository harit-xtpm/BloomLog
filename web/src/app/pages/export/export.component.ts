import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-export',
  imports: [CommonModule],
  templateUrl: './export.component.html',
  styleUrl: './export.component.scss',
})
export class ExportComponent {
  steps = [
    'ปก & ข้อมูลนักเรียน',
    'เลือก 10 ไฮไลต์',
    'ตรวจสรุป AI',
    'ตัวเลือกภาษา/เลย์เอาต์',
  ];

  current = 0;

  constructor(private router: Router) {}

  onNextClick($event: Event) {
    $event.preventDefault();
    if (this.current < this.steps.length - 1) {
      this.current++;
    } else {
      alert('สร้างรายงาน (mock)');
      // TODO: Implement report generation logic
      this.router.navigate(['/years']);
    }
  }

  onBackClick($event: Event) {
    $event.preventDefault();
    if (this.current === 0) {
      this.router.navigate(['/years']);
    }
    this.current = Math.max(0, this.current - 1);
  }
}
