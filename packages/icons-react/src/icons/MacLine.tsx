// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MacLineSvg from '@airclass/icons-svg/lib/asn/MacLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MacLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MacLineSvg} />;

MacLine.displayName = 'MacLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MacLine);