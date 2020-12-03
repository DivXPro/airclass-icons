// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ServiceLineSvg from '@airclass/icons-svg/lib/asn/ServiceLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ServiceLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ServiceLineSvg} />;

ServiceLine.displayName = 'ServiceLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ServiceLine);