// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FireLineSvg from '@airclass/icons-svg/lib/asn/FireLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FireLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FireLineSvg} />;

FireLine.displayName = 'FireLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FireLine);