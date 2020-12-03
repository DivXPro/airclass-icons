// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AsteriskSvg from '@airclass/icons-svg/lib/asn/Asterisk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Asterisk = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AsteriskSvg} />;

Asterisk.displayName = 'Asterisk';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(Asterisk);