import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { User } from '../user.interface';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  users$!: Observable<User[]>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.users$ = this.dataService.getUsers();
  }

}
