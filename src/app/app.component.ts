import { Component } from '@angular/core';
import { OrgData } from 'angular-org-chart/src/app/modules/org-chart/orgData';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  orgData: OrgData= {
    name: "hr department",
    type: 'god',
    children: [
        {
            name: "Team 1",
            type: 'department 1',
            children: [
                {
                    name: "Team lead 1",
                    type: 'manager',
                    children: [
                      {
                        name: "employee 1",
                        type: 'senior',
                        children: [
                          {
                            name: "Coder 1",
                            type: 'middle',
                            children: [
                              {
                                name: "Coder 1",
                                type: 'junior',
                                children: []
                              }
                            ]
                          },
                          {
                            name: "Coder 2",
                            type: 'middle',
                            children: [
                              {
                                name: "Coder 1",
                                type: 'junior',
                                children: []
                              },
                              {
                                name: "Coder 2",
                                type: 'junior',
                                children: []
                              }
                            ]
                          }
                        ]
                      }
                    ]
                },
                {
                    name: "Team lead 2",
                    type: 'Manager',
                    children: [
                      {
                        name: "employee 2",
                        type: 'senior',
                        children: [
                          {
                            name: "Coder 1",
                            type: 'middle',
                            children: [
                              {
                                name: "Coder 1",
                                type: 'junior',
                                children: []
                              }
                            ]
                          },
                          {
                            name: "Coder 2",
                            type: 'middle',
                            children: [{
                              name: "Coder 1",
                              type: 'junior',
                              children: []
                            },
                            {
                              name: "Coder 2",
                              type: 'junior',
                              children: []
                            }]
                          },
                          {
                            name: "Coder 3",
                            type: 'middle',
                            children: [
                              {
                              name: "Coder 1",
                              type: 'junior',
                              children: []
                              }
                          ]
                          }
                        ]
                      },
                      {
                        name: "employee 3",
                        type: 'senior',
                        children: [
                          {
                            name: "Coder 1",
                            type: 'middle',
                            children: [
                              {
                                name: "Coder 1",
                                type: 'junior',
                                children: []
                                },
                                {
                                  name: "Coder 2",
                                  type: 'junior',
                                  children: []
                                  }
                            ]
                          }
                        ]
                      }
                    ]
                }
            ]
        },
        {
            name: "Team 2",
            type: 'department 2',
            children: [
                {
                    name: "Team lead 1",
                    type: 'manager',
                    children: [
                        {
                            name: "employee 1",
                            type: 'senior',
                            children: [
                              {
                                name: "Coder 2",
                                type: 'middle',
                                children: [
                                  {
                                    name: "Coder 1",
                                    type: 'junior',
                                    children: []
                                  },
                                  {
                                    name: "Coder 2",
                                    type: 'junior',
                                    children: []
                                  },
                                  {
                                    name: "Coder 3",
                                    type: 'junior',
                                    children: []
                                  }
                                ]
                              },
                              {
                                name: "Coder 2",
                                type: 'middle',
                                children: [
                                  {
                                    name: "Coder 1",
                                    type: 'junior',
                                    children: []
                                  }
                                ]
                              }
                            ]
                        },
                        {
                          name: "employee 2",
                          type: 'senior',
                          children: [
                              {
                                name: "Coder 1",
                                type: 'middle',
                                children: [
                                  {
                                    name: "Coder 1",
                                    type: 'junior',
                                    children: []
                                  },
                                  {
                                    name: "Coder 2",
                                    type: 'junior',
                                    children: []
                                  }
                                ]
                              }
                          ]
                        }
                    ]
                },
                {
                    name: "Team lead 2",
                    type: 'Manager',
                    children: [
                        {
                            name: "employee 2",
                            type: 'senior',
                            children: [
                              {
                                name: "Coder 1",
                                type: 'middle',
                                children: [
                                  {
                                    name: "Coder 1",
                                    type: 'junior',
                                    children: []
                                  }
                                ]
                              },
                              {
                                name: "Coder 2",
                                type: 'middle',
                                children: [
                                  {
                                    name: "Coder 1",
                                    type: 'junior',
                                    children: []
                                  }
                                ]
                              },
                              {
                                name: "Coder 3",
                                type: 'middle',
                                children: [
                                  {
                                    name: "Coder 1",
                                    type: 'junior',
                                    children: []
                                  },
                                  {
                                    name: "Coder 2",
                                    type: 'junior',
                                    children: []
                                  },
                                  {
                                    name: "Coder 3",
                                    type: 'junior',
                                    children: []
                                  }
                                ]
                              }
                            ]
                        }
                    ]
                }
            ]
        },
        {
          name: "Team 3",
          type: 'department 3',
          children: [
              {
                  name: "Team lead 1",
                  type: 'manager',
                  children: [
                      {
                          name: "employee 1",
                          type: 'senior',
                          children: [
                            {
                              name: "Coder 1",
                              type: 'middle',
                              children: [
                                {
                                  name: "Coder 1",
                                  type: 'junior',
                                  children: []
                                }
                              ]
                            }
                          ]
                      }
                  ]
              },
              {
                  name: "Team lead 2",
                  type: 'Manager',
                  children: [
                      {
                          name: "employee 2",
                          type: 'senior',
                          children: [
                            {
                              name: "Coder 1",
                              type: 'middle',
                              children: [
                                {
                                  name: "Coder 1",
                                  type: 'junior',
                                  children: []
                                },
                                {
                                  name: "Coder 2",
                                  type: 'junior',
                                  children: []
                                }
                              ]
                            },
                            {
                              name: "Coder 2",
                              type: 'middle',
                              children: [
                                {
                                  name: "Coder 1",
                                  type: 'junior',
                                  children: []
                                }
                              ]
                            }
                          ]
                      }
                  ]
              }
          ]
      }
    ]
  };
}