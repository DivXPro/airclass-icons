// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SettingsLineSvg from '@airclass/icons-svg/lib/asn/SettingsLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SettingsLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SettingsLineSvg} />;

SettingsLine.displayName = 'SettingsLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SettingsLine);