// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import UserLocationLineSvg from '@airclass/icons-svg/lib/asn/UserLocationLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserLocationLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UserLocationLineSvg} />;

UserLocationLine.displayName = 'UserLocationLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UserLocationLine);