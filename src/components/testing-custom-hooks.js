
import React, {useState} from 'react';
import { useStatusHook } from '../hooks/user-status-hook';


const TestingCustomHooks = () => {
  const usrOneIsOnline = useStatusHook('1');
  const usrTwoIsOnline = useStatusHook('2');
  const [isShowingStatus, toggleUserStatus] = useState(true);

  const handleRemove = () => toggleUserStatus(!isShowingStatus);
  
  return(
    <div>
      <h1>Hello world!</h1>
      { isShowingStatus ? 
        <>
          <p>User one is online {String(usrOneIsOnline)}</p>
          <p>User two is online {String(usrTwoIsOnline)}</p>
        </> : 
        null
      }
      <button onClick={handleRemove}>Toggle Status</button>
      {/* <Component /> */}
    </div>
  )
}

export default TestingCustomHooks;