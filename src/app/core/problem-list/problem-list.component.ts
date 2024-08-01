import { Component } from '@angular/core';
import { ProblemList } from '../../models/problem-list';

const ELEMENT_DATA: ProblemList[] = [
  {status: false, title: 'Design Dynamic Array (Resizable Array', difficulty: 'Hard', acceptance: 1.0079 },
  {status: true, title: 'Design Double-ended Queue', difficulty: 'Easy', acceptance: 1.0079 },
  {status: false, title: 'Design Heap', difficulty: 'Easy', acceptance: 1.0079 },
  {status: true, title: 'Strategy Pattern', difficulty: 'Easy', acceptance: 1.0079 },
  {status: false, title: 'Foreign Dictionary', difficulty: 'Hard', acceptance: 1.0079 },
  {status: false, title: 'String Encode and Decode', difficulty: 'Easy', acceptance: 1.0079 },
  {status: true, title: 'Validate Parentheses', difficulty: 'Medium', acceptance: 1.0079 },
  {status: false, title: 'Find Median in a Data Stream', difficulty: 'Medium', acceptance: 1.0079 },
  {status: true, title: 'Climbing Stairs', difficulty: 'Easy', acceptance: 1.0079 },
  {status: false, title: 'Longest Repeating Substring With Replacement', difficulty: 'Hard', acceptance: 1.0079 },
  {status: true, title: 'Merge Two Sorted Linked Lists', difficulty: 'Medium', acceptance: 1.0079 },
];


@Component({
  selector: 'app-problem-list',
  standalone: true,
  imports: [],
  templateUrl: './problem-list.component.html',
  styleUrl: './problem-list.component.css'
})
export class ProblemListComponent {

}
