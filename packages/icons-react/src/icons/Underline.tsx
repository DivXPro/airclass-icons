// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import UnderlineSvg from '@airclass/icons-svg/lib/asn/Underline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Underline = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UnderlineSvg} />;

Underline.displayName = 'Underline';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(Underline);