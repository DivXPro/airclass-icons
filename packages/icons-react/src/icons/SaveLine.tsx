// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SaveLineSvg from '@airclass/icons-svg/lib/asn/SaveLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SaveLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SaveLineSvg} />;

SaveLine.displayName = 'SaveLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SaveLine);