// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ThermometerLineSvg from '@airclass/icons-svg/lib/asn/ThermometerLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ThermometerLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ThermometerLineSvg} />;

ThermometerLine.displayName = 'ThermometerLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ThermometerLine);