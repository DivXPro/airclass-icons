// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import VolumeMuteLineSvg from '@airclass/icons-svg/lib/asn/VolumeMuteLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VolumeMuteLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={VolumeMuteLineSvg} />;

VolumeMuteLine.displayName = 'VolumeMuteLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(VolumeMuteLine);