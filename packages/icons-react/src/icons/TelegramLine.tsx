// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TelegramLineSvg from '@airclass/icons-svg/lib/asn/TelegramLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TelegramLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TelegramLineSvg} />;

TelegramLine.displayName = 'TelegramLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TelegramLine);