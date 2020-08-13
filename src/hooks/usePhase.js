import { useState } from 'react';
import { inRange } from '../util';

export default function usePhase(length) {
  const [phaseLength, setPhaseLength] = useState(length);

  const handlePhaseLengthChange = (value) => {
    if (inRange(phaseLength + value, 0, 60)) {
      setPhaseLength(prevPhaseLength => prevPhaseLength + value);
    }
  }
  return [phaseLength, handlePhaseLengthChange];
}