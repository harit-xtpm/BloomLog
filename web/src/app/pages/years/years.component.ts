import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-years',
  imports: [CommonModule],
  templateUrl: './years.component.html',
  styleUrl: './years.component.scss',
})
export class YearsComponent {
  years = [
    { id: 1, year: 2025, label: 'ปีการศึกษา 2025', status: 'Active' },
    { id: 2, year: 2024, label: 'ปีการศึกษา 2024', status: 'Archived' },
    { id: 3, year: 2023, label: 'ปีการศึกษา 2023', status: 'Archived' },
  ];

  constructor(private router: Router) {}

  onOpenTimeline(yearId: number) {
    console.log('Open timeline for year:', yearId);
    this.router.navigate(['/timeline'], { queryParams: { year: yearId } });
  }

  onExportYear(yearId: number) {
    console.log('Export year:', yearId);
    // Implement export functionality here
    this.router.navigate(['/export'], { queryParams: { year: yearId } });
  }
}
