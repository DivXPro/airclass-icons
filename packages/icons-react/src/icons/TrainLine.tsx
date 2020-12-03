// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TrainLineSvg from '@airclass/icons-svg/lib/asn/TrainLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TrainLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TrainLineSvg} />;

TrainLine.displayName = 'TrainLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TrainLine);