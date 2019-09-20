import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {
  user: User;

  constructor(private userService: UserService, private alertify: AlertifyService, private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });
  }

}
