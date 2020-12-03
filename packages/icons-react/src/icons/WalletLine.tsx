// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import WalletLineSvg from '@airclass/icons-svg/lib/asn/WalletLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WalletLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WalletLineSvg} />;

WalletLine.displayName = 'WalletLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(WalletLine);