// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import WebcamLineSvg from '@airclass/icons-svg/lib/asn/WebcamLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WebcamLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WebcamLineSvg} />;

WebcamLine.displayName = 'WebcamLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(WebcamLine);