// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import UserStarLineSvg from '@airclass/icons-svg/lib/asn/UserStarLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserStarLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UserStarLineSvg} />;

UserStarLine.displayName = 'UserStarLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UserStarLine);