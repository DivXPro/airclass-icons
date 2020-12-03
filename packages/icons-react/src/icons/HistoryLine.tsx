// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HistoryLineSvg from '@airclass/icons-svg/lib/asn/HistoryLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HistoryLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HistoryLineSvg} />;

HistoryLine.displayName = 'HistoryLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HistoryLine);