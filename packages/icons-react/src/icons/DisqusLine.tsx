// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DisqusLineSvg from '@airclass/icons-svg/lib/asn/DisqusLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DisqusLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DisqusLineSvg} />;

DisqusLine.displayName = 'DisqusLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DisqusLine);