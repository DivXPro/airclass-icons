// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import UserSearchLineSvg from '@airclass/icons-svg/lib/asn/UserSearchLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserSearchLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UserSearchLineSvg} />;

UserSearchLine.displayName = 'UserSearchLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UserSearchLine);