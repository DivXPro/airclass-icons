// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LightbulbLineSvg from '@airclass/icons-svg/lib/asn/LightbulbLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LightbulbLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LightbulbLineSvg} />;

LightbulbLine.displayName = 'LightbulbLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LightbulbLine);