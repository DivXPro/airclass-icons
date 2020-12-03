// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import EmotionLineSvg from '@airclass/icons-svg/lib/asn/EmotionLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EmotionLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={EmotionLineSvg} />;

EmotionLine.displayName = 'EmotionLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(EmotionLine);