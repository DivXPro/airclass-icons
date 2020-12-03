// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PaypalLineSvg from '@airclass/icons-svg/lib/asn/PaypalLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PaypalLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PaypalLineSvg} />;

PaypalLine.displayName = 'PaypalLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PaypalLine);