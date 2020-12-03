// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import OperaLineSvg from '@airclass/icons-svg/lib/asn/OperaLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OperaLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={OperaLineSvg} />;

OperaLine.displayName = 'OperaLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(OperaLine);