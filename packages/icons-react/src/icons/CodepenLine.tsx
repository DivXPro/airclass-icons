// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CodepenLineSvg from '@airclass/icons-svg/lib/asn/CodepenLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CodepenLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CodepenLineSvg} />;

CodepenLine.displayName = 'CodepenLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CodepenLine);