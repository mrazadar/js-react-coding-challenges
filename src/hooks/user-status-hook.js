import { useState, useEffect } from 'react';

const users = {
  1: {name: 'ali', is_online: false},
  2: {name: 'saleem', is_online: false},
  3: {name: 'junaid', is_online: false},
};

const StatusService = () => {
  const timers = {};
  return {
    subscribe: (userId, handleStatusEvent) => {
      timers[userId] = setInterval(()=> {
        const status = !users[userId].is_online;
        users[userId].is_online = status;        
        handleStatusEvent(status)
      }, 3000)
    },
    unSubscribe: (userId) => clearInterval(timers[userId])
  }
}
const statusService = StatusService()

export const useStatusHook = (userId) => {
  const [isOnline, setIsOnline] = useState(null);
  
  useEffect(() => {
    function handleStatusEvent (status) {
      console.log("updating status")
      setIsOnline(status)
    }
  
    statusService.subscribe(userId, handleStatusEvent)
    return () => {
      statusService.unSubscribe(userId);
    }
  });

  return isOnline;
}