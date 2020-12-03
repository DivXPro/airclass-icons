// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CodeLineSvg from '@airclass/icons-svg/lib/asn/CodeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CodeLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CodeLineSvg} />;

CodeLine.displayName = 'CodeLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CodeLine);