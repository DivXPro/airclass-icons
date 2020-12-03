// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BankLineSvg from '@airclass/icons-svg/lib/asn/BankLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BankLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BankLineSvg} />;

BankLine.displayName = 'BankLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BankLine);