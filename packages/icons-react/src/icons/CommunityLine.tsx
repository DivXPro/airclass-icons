// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CommunityLineSvg from '@airclass/icons-svg/lib/asn/CommunityLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CommunityLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CommunityLineSvg} />;

CommunityLine.displayName = 'CommunityLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CommunityLine);