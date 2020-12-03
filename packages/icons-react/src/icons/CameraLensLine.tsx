// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CameraLensLineSvg from '@airclass/icons-svg/lib/asn/CameraLensLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CameraLensLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CameraLensLineSvg} />;

CameraLensLine.displayName = 'CameraLensLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CameraLensLine);