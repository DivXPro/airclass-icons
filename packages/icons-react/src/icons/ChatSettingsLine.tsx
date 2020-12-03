// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ChatSettingsLineSvg from '@airclass/icons-svg/lib/asn/ChatSettingsLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChatSettingsLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ChatSettingsLineSvg} />;

ChatSettingsLine.displayName = 'ChatSettingsLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ChatSettingsLine);