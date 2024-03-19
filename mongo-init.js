print('#################################################################');
print('##                      INIT NEW DATABASE                      ##');
print('#################################################################');
db = db.getSiblingDB('posts');
db.createUser({
    user: 'app',
    pwd: 'appfGjerju',
    roles: [
        {
            role: 'dbOwner',
            db: 'posts',
        },
    ],
});