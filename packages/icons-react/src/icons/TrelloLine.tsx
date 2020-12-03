// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TrelloLineSvg from '@airclass/icons-svg/lib/asn/TrelloLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TrelloLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TrelloLineSvg} />;

TrelloLine.displayName = 'TrelloLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TrelloLine);