// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CloudLineSvg from '@airclass/icons-svg/lib/asn/CloudLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CloudLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CloudLineSvg} />;

CloudLine.displayName = 'CloudLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CloudLine);