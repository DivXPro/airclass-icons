// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GroupLineSvg from '@airclass/icons-svg/lib/asn/GroupLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GroupLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GroupLineSvg} />;

GroupLine.displayName = 'GroupLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GroupLine);