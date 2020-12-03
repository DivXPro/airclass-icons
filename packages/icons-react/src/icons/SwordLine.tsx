// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SwordLineSvg from '@airclass/icons-svg/lib/asn/SwordLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SwordLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SwordLineSvg} />;

SwordLine.displayName = 'SwordLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SwordLine);