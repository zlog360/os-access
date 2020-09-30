//DEBUG=docker-compose:commander ts-mocha -p tsconfig.json tests/user.spec.ts
import expect from 'expect';
import { User } from '../src/my-lib';


describe('User api unit tests', () => {
  // const initlist = Services_List;
//   {
//     host: '192.168.0.96',
//     port: 22,
//     username: 'zee',
//     password: 'zee'
// }
  const usr = new User();
  it('#1 Constructor', () => {
    expect(usr.constructor.name).toBe("User");
  });
  it('#2 Exists test', async () => {
     const res = await usr.exists({username: "test"} );
     expect(res).toBe(false)
  });
  it('#3 Create User Simple && User Delete', async () => {
    const user = {username: "testuser"};
    const res = await usr.create({user, password: { passphrase: "123456789"}});
    // expect(await usr.exists(user)).toBe(true);
    const res1 = await usr.remove({...user, f: true});
    // expect(await usr.exists(user)).toBe(false);
  });
});
