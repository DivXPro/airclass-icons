// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DatabaseLineSvg from '@airclass/icons-svg/lib/asn/DatabaseLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DatabaseLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DatabaseLineSvg} />;

DatabaseLine.displayName = 'DatabaseLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DatabaseLine);