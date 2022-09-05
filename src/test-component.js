import React from 'react';
const Component = () => {
  const [value, setValue] = React.useState(0)
 
  React.useEffect(() => {
    setValue(val => val + 1)
  }, [value])

  return value
}

export default Component;