// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BellLineSvg from '@airclass/icons-svg/lib/asn/BellLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BellLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BellLineSvg} />;

BellLine.displayName = 'BellLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BellLine);