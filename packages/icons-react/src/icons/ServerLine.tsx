// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ServerLineSvg from '@airclass/icons-svg/lib/asn/ServerLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ServerLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ServerLineSvg} />;

ServerLine.displayName = 'ServerLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ServerLine);