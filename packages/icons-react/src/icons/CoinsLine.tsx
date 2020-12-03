// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CoinsLineSvg from '@airclass/icons-svg/lib/asn/CoinsLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CoinsLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CoinsLineSvg} />;

CoinsLine.displayName = 'CoinsLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CoinsLine);