export default [
    {
      path: '/ftd',
      name: 'Fit-to-Drive',
      routes: [
        {
          path: '/ftd/submit',
          name: 'Submit',
         
        },
        {
          path: '/ftd/approval',
          name: 'Approval',
         
        },
        {
          path: '/ftd/manage',
          name: 'Manage',
         
        },
      ],
    },
    {
      path: '/',
      name: 'Incident/Accident',
      routes: [
        {
          path: '/welcome',
          name: 'one',
          routes: [
            {
              path: '/welcome/welcome',
              name: 'two',
              exact: true,
            },
          ],
        },
      ],
    },
    {
      path: '/',
      name: 'Ferry Log',
      routes: [
        {
          path: '/welcome',
          name: 'ferry log',
          routes: [
            {
              path: '/welcome/welcome',
              name: 'two',
              exact: true,
            },
          ],
        },
      ],
    },
    {
      path: '/',
      name: 'Fuel Consumption',
      routes: [
        {
          path: '/welcome',
          name: 'one',
          routes: [
            {
              path: '/welcome/welcome',
              name: 'two',
              exact: true,
            },
          ],
        },
      ],
    },
    {
      path: '/demo',
      name: 'Setting',
    },
  ];


