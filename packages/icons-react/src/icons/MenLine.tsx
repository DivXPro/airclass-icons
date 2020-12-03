// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MenLineSvg from '@airclass/icons-svg/lib/asn/MenLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MenLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MenLineSvg} />;

MenLine.displayName = 'MenLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MenLine);