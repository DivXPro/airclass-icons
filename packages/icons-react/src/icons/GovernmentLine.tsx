// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GovernmentLineSvg from '@airclass/icons-svg/lib/asn/GovernmentLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GovernmentLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GovernmentLineSvg} />;

GovernmentLine.displayName = 'GovernmentLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GovernmentLine);