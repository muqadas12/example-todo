/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';

const usemyToggle = (active = false) => {
  const [isActive, setIsactive] = useState(active);
  console.log({ active });
  return [isActive, setIsactive];
};
export default usemyToggle;
