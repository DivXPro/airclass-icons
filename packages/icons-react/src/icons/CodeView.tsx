// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CodeViewSvg from '@airclass/icons-svg/lib/asn/CodeView';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CodeView = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CodeViewSvg} />;

CodeView.displayName = 'CodeView';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CodeView);