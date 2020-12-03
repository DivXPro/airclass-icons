// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DraftLineSvg from '@airclass/icons-svg/lib/asn/DraftLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DraftLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DraftLineSvg} />;

DraftLine.displayName = 'DraftLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DraftLine);