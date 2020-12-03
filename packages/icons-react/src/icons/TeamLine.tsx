// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TeamLineSvg from '@airclass/icons-svg/lib/asn/TeamLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TeamLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TeamLineSvg} />;

TeamLine.displayName = 'TeamLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TeamLine);