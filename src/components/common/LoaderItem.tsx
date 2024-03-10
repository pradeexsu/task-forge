// import {
//   CheckCircle,
//   CheckCircleOutline,
//   RadioButtonUnchecked,
// } from '@mui/icons-material';
// import { ReactNode, useEffect, useState } from 'react';

function LoaderItem() {
  // const [idx, setIdx] = useState<0 | 1 | 2 | 3>(1);
  // const stateHash: Record<0 | 1 | 2 | 3, ReactNode> = {
  //   // [0]: <RadioButtonUnchecked opacity={0.2} />,
  //   [1]: <RadioButtonUnchecked />,
  //   [2]: <CheckCircleOutline />,
  //   [3]: <CheckCircle />,
  //   // [4]: <CheckCircle opacity={0.2} />,
  // };
  // useEffect(() => {
  //   console.log('LoaderItem mounted');

  //   // setInterval(() => {
  //   //   console.log('LoaderItem interval');
  //   //   setIdx((prv) => (prv === 3 ? 1 : prv + 1));
  //   // }, 2000);

  //   return () => {
  //     console.log('LoaderItem unmounted');
  //   };
  // }, []);

  // setInterval()
  return (
    <div>
      <div className="flex flex-col items-center justify-center space-x-2">
        {/* {stateHash[idx]} */}
      </div>
    </div>
  );
}

export default LoaderItem;
