import React, {useState, useEffect } from 'react';

export default function Profile({ userId }){
  const [user, setUser] = useState(null);
  useEffect(() => {
    getUserApi(userId).then(data=> setUser(data));
  }, [usedId]);
  return (
    <div>
      {!user && <p>사용자 정보를 가져오는 중...</p>}
      {user && (
        <>
        <p>{`name is ${user.name}`}</p>
        <p>{`age is ${user.age}`}</p>
        </>
      )}
    </div>
  )
}

const USER1 = {name: 'mike', age: 23};
const USER2 = {name: 'jane', age: 25};
function getUserApi() {
  return new Promise(res => {
    setTimeout(() => {
      res(userId % 2 ? USER1: USER2);
    })
  })
})