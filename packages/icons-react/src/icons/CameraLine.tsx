// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CameraLineSvg from '@airclass/icons-svg/lib/asn/CameraLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CameraLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CameraLineSvg} />;

CameraLine.displayName = 'CameraLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CameraLine);