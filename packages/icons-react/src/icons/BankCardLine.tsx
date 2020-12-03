// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BankCardLineSvg from '@airclass/icons-svg/lib/asn/BankCardLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BankCardLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BankCardLineSvg} />;

BankCardLine.displayName = 'BankCardLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BankCardLine);