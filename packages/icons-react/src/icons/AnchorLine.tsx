// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AnchorLineSvg from '@airclass/icons-svg/lib/asn/AnchorLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AnchorLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AnchorLineSvg} />;

AnchorLine.displayName = 'AnchorLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AnchorLine);