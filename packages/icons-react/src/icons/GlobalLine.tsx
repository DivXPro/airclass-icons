// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GlobalLineSvg from '@airclass/icons-svg/lib/asn/GlobalLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GlobalLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GlobalLineSvg} />;

GlobalLine.displayName = 'GlobalLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GlobalLine);