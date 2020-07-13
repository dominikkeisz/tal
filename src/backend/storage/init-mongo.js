// eslint-disable-next-line
db.createUser(
  {
    user: 'tal-user',
    pwd: 'pass',
    roles: [
      {
        role: 'readWrite',
        db: 'tal',
      },
    ],
  }
);
