import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users;

  checked = false;

  constructor() {
  }

  ngOnInit() {
    let data = [{
      "userId": 9,
      "loginName": "xiaxuan@admui_demo",
      "loginCount": 39340,
      "state": "NORMAL",
      "lastLoginTime": "2017-07-24 18:37:28",
      "lastLoginIp": "49.77.233.147",
      "createTime": "2017-04-13 12:15:43",
      "tenantId": 8
    }, {
      "userId": 10,
      "loginName": "zhangzhiyuan@admui_demo",
      "loginCount": 8524,
      "state": "NORMAL",
      "lastLoginTime": "2017-07-24 18:50:12",
      "lastLoginIp": "180.173.34.254",
      "createTime": "2017-04-13 12:30:59",
      "tenantId": 8
    }, {
      "userId": 11,
      "loginName": "wangshiqi@admui_demo",
      "loginCount": 3843,
      "state": "NORMAL",
      "lastLoginTime": "2017-07-24 18:46:18",
      "lastLoginIp": "123.14.28.60",
      "createTime": "2017-04-14 15:19:09",
      "tenantId": 8
    }, {
      "userId": 12,
      "loginName": "lixin@admui_demo",
      "loginCount": 1663,
      "state": "NORMAL",
      "lastLoginTime": "2017-07-24 18:19:11",
      "lastLoginIp": "221.214.13.226",
      "createTime": "2017-04-14 15:19:43",
      "tenantId": 8
    }, {
      "userId": 13,
      "loginName": "qinshouren@admui_demo",
      "loginCount": 1648,
      "state": "NORMAL",
      "lastLoginTime": "2017-07-24 17:48:35",
      "lastLoginIp": "171.221.227.31",
      "createTime": "2017-04-14 15:20:10",
      "tenantId": 8
    }, {
      "userId": 14,
      "loginName": "liuyiming@admui_demo",
      "loginCount": 1471,
      "state": "NORMAL",
      "lastLoginTime": "2017-07-24 17:36:46",
      "lastLoginIp": "42.228.9.138",
      "createTime": "2017-04-14 15:20:39",
      "tenantId": 8
    }, {
      "userId": 15,
      "loginName": "wangjiaqi@admui_demo",
      "loginCount": 1459,
      "state": "NORMAL",
      "lastLoginTime": "2017-07-24 16:55:04",
      "lastLoginIp": "123.118.189.185",
      "createTime": "2017-04-14 15:21:01",
      "tenantId": 8
    }];

    this.users = data;
  }

  onEditTriggered(user) {
    console.log(user)
  }

  onDeleteTriggered(user) {
    let i = this.users.indexOf(user);

    this.users = [
      ...this.users.slice(0, i),
      ...this.users.slice(i + 1)
    ];
  }
}
