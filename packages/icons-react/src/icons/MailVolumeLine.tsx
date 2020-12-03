// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MailVolumeLineSvg from '@airclass/icons-svg/lib/asn/MailVolumeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MailVolumeLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MailVolumeLineSvg} />;

MailVolumeLine.displayName = 'MailVolumeLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MailVolumeLine);