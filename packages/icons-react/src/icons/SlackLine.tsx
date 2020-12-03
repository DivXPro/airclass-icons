// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SlackLineSvg from '@airclass/icons-svg/lib/asn/SlackLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SlackLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SlackLineSvg} />;

SlackLine.displayName = 'SlackLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SlackLine);