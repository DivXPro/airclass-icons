// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MedalLineSvg from '@airclass/icons-svg/lib/asn/MedalLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MedalLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MedalLineSvg} />;

MedalLine.displayName = 'MedalLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MedalLine);