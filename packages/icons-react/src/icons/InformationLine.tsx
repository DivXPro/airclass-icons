// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import InformationLineSvg from '@airclass/icons-svg/lib/asn/InformationLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InformationLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={InformationLineSvg} />;

InformationLine.displayName = 'InformationLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(InformationLine);