import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ProblemList } from '../../models/problem-list';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatSort } from '@angular/material/sort';

const ELEMENT_DATA: ProblemList[] = [
  {status: true, title: 'Design Dynamic Array (Resizable Array', difficulty: 'Hard', acceptance: 1.0079 },
  {status: true, title: 'Design Double-ended Queue', difficulty: 'Easy', acceptance: 1.0079 },
  {status: true, title: 'Design Heap', difficulty: 'Easy', acceptance: 1.0079 },
  {status: true, title: 'Strategy Pattern', difficulty: 'Easy', acceptance: 1.0079 },
  {status: true, title: 'Foreign Dictionary', difficulty: 'Hard', acceptance: 1.0079 },
  {status: true, title: 'String Encode and Decode', difficulty: 'Easy', acceptance: 1.0079 },
  {status: true, title: 'Validate Parentheses', difficulty: 'Medium', acceptance: 1.0079 },
  {status: true, title: 'Find Median in a Data Stream', difficulty: 'Medium', acceptance: 1.0079 },
  {status: true, title: 'Climbing Stairs', difficulty: 'Easy', acceptance: 1.0079 },
  {status: true, title: 'Longest Repeating Substring With Replacement', difficulty: 'Hard', acceptance: 1.0079 },
  {status: true, title: 'Merge Two Sorted Linked Lists', difficulty: 'Medium', acceptance: 1.0079 },
];


@Component({
  selector: 'app-problem-list',
  standalone: true,
  imports: [MatTableModule, MatFormField, MatLabel, MatSort],
  templateUrl: './problem-list.component.html',
  styleUrl: './problem-list.component.css'
})
export class ProblemListComponent {

  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['status', 'title', 'difficulty', 'acceptance'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
    ngOnInit() {
      this.dataSource.sort = this.sort;
    } 
}
