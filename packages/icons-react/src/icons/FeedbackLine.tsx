// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FeedbackLineSvg from '@airclass/icons-svg/lib/asn/FeedbackLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FeedbackLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FeedbackLineSvg} />;

FeedbackLine.displayName = 'FeedbackLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FeedbackLine);