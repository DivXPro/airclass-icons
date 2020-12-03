// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FlaskLineSvg from '@airclass/icons-svg/lib/asn/FlaskLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FlaskLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FlaskLineSvg} />;

FlaskLine.displayName = 'FlaskLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FlaskLine);