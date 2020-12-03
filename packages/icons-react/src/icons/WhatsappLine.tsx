// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import WhatsappLineSvg from '@airclass/icons-svg/lib/asn/WhatsappLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WhatsappLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WhatsappLineSvg} />;

WhatsappLine.displayName = 'WhatsappLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(WhatsappLine);