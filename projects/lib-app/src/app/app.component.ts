import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'libApp';

  inputData = [
    {
      label: 'Carole Cline',
      selected: true,
      value: { company: 'Zoxy', dob: '1994-05-07', roles: 'admin' },
    },
    {
      label: 'Manning Ferrell',
      selected: true,
      value: { company: 'Kengen', dob: '1988-05-12', roles: 'member' },
    },
    {
      label: 'Carver Mcmillan',
      selected: false,
      value: { company: 'Nutralab', dob: '1990-08-31', roles: 'owner' },
    },
    {
      label: 'Molina Cooley',
      selected: true,
      value: { company: 'Zytrax', dob: '1992-04-22', roles: 'owner' },
    },
    {
      label: 'Kerry Bond',
      selected: true,
      value: { company: 'Silodyne', dob: '1994-05-21', roles: 'member' },
    },
    {
      label: 'Bridgett Best',
      selected: true,
      value: { company: 'Comtour', dob: '1992-04-02', roles: 'admin' },
    },
    {
      label: 'Cote Donovan',
      selected: true,
      value: { company: 'Coash', dob: '1989-12-14', roles: 'admin' },
    },
    {
      label: 'Madeleine Joyce',
      selected: false,
      value: { company: 'Amtas', dob: '1989-09-11', roles: 'guest' },
    },
    {
      label: 'Knowles Acosta',
      selected: true,
      value: { company: 'Handshake', dob: '1993-07-16', roles: 'member' },
    },
    {
      label: 'Mccray Winters',
      selected: true,
      value: { company: 'Cipromox', dob: '1992-01-22', roles: 'admin' },
    },
    {
      label: 'Sullivan Mann',
      selected: true,
      value: { company: 'Biflex', dob: '1989-10-31', roles: 'member' },
    },
    {
      label: 'Fern Solis',
      selected: false,
      value: { company: 'Surelogic', dob: '1990-04-15', roles: 'admin' },
    },
    {
      label: 'Eddie Mcneil',
      selected: true,
      value: { company: 'Cablam', dob: '1993-10-14', roles: 'member' },
    },
    {
      label: 'Cervantes Bryan',
      selected: true,
      value: { company: 'Aclima', dob: '1991-07-15', roles: 'guest' },
    },
    {
      label: 'Phelps Avery',
      selected: false,
      value: { company: 'Comveyer', dob: '1988-08-28', roles: 'member' },
    },
    {
      label: 'Jenkins Forbes',
      selected: true,
      value: { company: 'Exoswitch', dob: '1988-08-27', roles: 'member' },
    },
    {
      label: 'Tracie Olsen',
      selected: true,
      value: { company: 'Recognia', dob: '1989-06-17', roles: 'owner' },
    },
    {
      label: 'Judith Buchanan',
      selected: false,
      value: { company: 'Eyeris', dob: '1994-04-03', roles: 'admin' },
    },
    {
      label: 'Schultz Copeland',
      selected: false,
      value: { company: 'Earwax', dob: '1988-07-03', roles: 'owner' },
    },
    {
      label: 'Christi Stone',
      selected: false,
      value: { company: 'Optyk', dob: '1993-02-09', roles: 'admin' },
    },
    {
      label: 'Lynda James',
      selected: false,
      value: { company: 'Mobildata', dob: '1992-03-03', roles: 'admin' },
    },
    {
      label: 'Abby Jennings',
      selected: true,
      value: { company: 'Equitox', dob: '1991-07-24', roles: 'admin' },
    },
    {
      label: 'Edwards Decker',
      selected: true,
      value: { company: 'Xoggle', dob: '1988-08-04', roles: 'admin' },
    },
    {
      label: 'Wanda Guthrie',
      selected: false,
      value: { company: 'Isopop', dob: '1990-04-26', roles: 'guest' },
    },
    {
      label: 'Leanne Phillips',
      selected: false,
      value: { company: 'Radiantix', dob: '1994-07-20', roles: 'guest' },
    },
    {
      label: 'Keller Aguilar',
      selected: true,
      value: { company: 'Ceprene', dob: '1989-09-13', roles: 'owner' },
    },
    {
      label: 'Gordon Yang',
      selected: true,
      value: { company: 'Utara', dob: '1992-12-08', roles: 'owner' },
    },
    {
      label: 'Deanne Gates',
      selected: false,
      value: { company: 'Ezentia', dob: '1993-07-07', roles: 'member' },
    },
    {
      label: 'Rosetta Rivers',
      selected: true,
      value: { company: 'Aquafire', dob: '1994-10-09', roles: 'guest' },
    },
    {
      label: 'Weeks Wilkerson',
      selected: false,
      value: { company: 'Cowtown', dob: '1989-12-15', roles: 'owner' },
    },
    {
      label: 'Mcpherson Anderson',
      selected: false,
      value: { company: 'Vinch', dob: '1988-09-10', roles: 'admin' },
    },
    {
      label: 'Jana Mcintyre',
      selected: true,
      value: { company: 'Roboid', dob: '1993-10-19', roles: 'owner' },
    },
    {
      label: 'Vang Foreman',
      selected: true,
      value: { company: 'Zensor', dob: '1992-02-11', roles: 'owner' },
    },
    {
      label: 'Sandy Henson',
      selected: false,
      value: { company: 'Arctiq', dob: '1989-03-25', roles: 'member' },
    },
  ];
}
