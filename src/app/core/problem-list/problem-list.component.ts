import { Component } from '@angular/core';
import { ProblemList } from '../../models/problem-list';
import { CommonModule } from '@angular/common';

const ELEMENT_DATA: ProblemList[] = [
  {status: false, title: 'Design Dynamic Array (Resizable Array', difficulty: 'Hard', acceptance: 90 },
  {status: true, title: 'Design Double-ended Queue', difficulty: 'Easy', acceptance: 95 },
  {status: false, title: 'Design Heap', difficulty: 'Easy', acceptance: 79 },
  {status: true, title: 'Strategy Pattern', difficulty: 'Easy', acceptance: 91 },
  {status: false, title: 'Foreign Dictionary', difficulty: 'Hard', acceptance: 85 },
  {status: false, title: 'String Encode and Decode', difficulty: 'Easy', acceptance: 56 },
  {status: true, title: 'Validate Parentheses', difficulty: 'Medium', acceptance: 65 },
  {status: false, title: 'Find Median in a Data Stream', difficulty: 'Medium', acceptance: 78 },
  {status: true, title: 'Climbing Stairs', difficulty: 'Easy', acceptance: 89 },
  {status: false, title: 'Longest Repeating Substring With Replacement', difficulty: 'Hard', acceptance: 93 },
  {status: true, title: 'Merge Two Sorted Linked Lists', difficulty: 'Medium', acceptance: 80 },
];


@Component({
  selector: 'app-problem-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './problem-list.component.html',
  styleUrl: './problem-list.component.css'
})
export class ProblemListComponent {

    problemList = ELEMENT_DATA;
}
