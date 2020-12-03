// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import InvisionLineSvg from '@airclass/icons-svg/lib/asn/InvisionLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InvisionLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={InvisionLineSvg} />;

InvisionLine.displayName = 'InvisionLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(InvisionLine);