// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CopyrightLineSvg from '@airclass/icons-svg/lib/asn/CopyrightLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CopyrightLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CopyrightLineSvg} />;

CopyrightLine.displayName = 'CopyrightLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CopyrightLine);