// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SpaceSvg from '@airclass/icons-svg/lib/asn/Space';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Space = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SpaceSvg} />;

Space.displayName = 'Space';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(Space);