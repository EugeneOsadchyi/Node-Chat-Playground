const { expect } = require('chai');

const { Users } = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Eugene',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Vasyl',
      room: 'Perl Course'
    }, {
      id: '3',
      name: 'Yura',
      room: 'React Course'
    }, {
      id: '4',
      name: 'Vlad',
      room: 'Node Course'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Eugene',
      room: 'Main room'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).to.eql([user]);
  });
  
  it('should remove a user', () => {
    var userId = '4';
    var user = users.removeUser(userId);

    expect(user.id).to.eql(userId);
    expect(users.users).to.have.lengthOf(3);
  });

  it('should not remove user', () => {
    var userId = '12345';
    var user = users.removeUser(userId);

    expect(user).to.be.undefined;
    expect(users.users).to.have.lengthOf(4);
  });

  it('should find user', () => {
    var userId = '2';
    var user = users.getUser(userId);

    expect(user.id).to.eql(userId);
  });
  
  it('should not find user', () => {
    var userId = '12345';
    var user = users.getUser(userId);

    expect(user).to.be.undefined;
  });

  it('should return names for node course', () => {
    var userList = users.getUserList('Node Course');

    expect(userList).to.eql(['Eugene', 'Vlad']);
  });
  
  it('should return names for react course', () => {
    var userList = users.getUserList('React Course');

    expect(userList).to.eql(['Yura']);
  });
});