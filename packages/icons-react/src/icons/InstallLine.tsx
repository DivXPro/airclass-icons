// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import InstallLineSvg from '@airclass/icons-svg/lib/asn/InstallLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InstallLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={InstallLineSvg} />;

InstallLine.displayName = 'InstallLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(InstallLine);