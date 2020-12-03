// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AliensLineSvg from '@airclass/icons-svg/lib/asn/AliensLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AliensLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AliensLineSvg} />;

AliensLine.displayName = 'AliensLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AliensLine);