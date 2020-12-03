// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import OilLineSvg from '@airclass/icons-svg/lib/asn/OilLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OilLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={OilLineSvg} />;

OilLine.displayName = 'OilLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(OilLine);