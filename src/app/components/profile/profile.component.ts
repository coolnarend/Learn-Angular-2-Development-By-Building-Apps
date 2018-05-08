import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  moduleId: module.id,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [GithubService]  
})
export class ProfileComponent implements OnInit {

  userprop: any;
  userrepos: any[];
  username: string;

  constructor(private _githubService: GithubService) {
    /* 
    this._githubService.getUser().subscribe(user => {
      console.log(user);
      this.userprop = user;
    });

    this._githubService.getRepos().subscribe(repos => {
      console.log(repos);
      this.userrepos = repos;
    });
    */
    this.userprop = false;
  }

  searchUser() {
    
    console.log(this.username);
    
    this._githubService.updateUser(this.username);

    this._githubService.getUser().subscribe(user => {
      console.log(user);
      this.userprop = user;
    });

    this._githubService.getRepos().subscribe(repos => {
      console.log(repos);
      this.userrepos = repos;
    });

  }

  ngOnInit() {
  }

}
