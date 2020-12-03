// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HeadingSvg from '@airclass/icons-svg/lib/asn/Heading';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Heading = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HeadingSvg} />;

Heading.displayName = 'Heading';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(Heading);