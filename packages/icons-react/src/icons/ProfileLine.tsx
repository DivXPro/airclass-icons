// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ProfileLineSvg from '@airclass/icons-svg/lib/asn/ProfileLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ProfileLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ProfileLineSvg} />;

ProfileLine.displayName = 'ProfileLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ProfileLine);