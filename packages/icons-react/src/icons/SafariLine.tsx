// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SafariLineSvg from '@airclass/icons-svg/lib/asn/SafariLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SafariLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SafariLineSvg} />;

SafariLine.displayName = 'SafariLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SafariLine);