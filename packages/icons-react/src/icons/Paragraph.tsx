// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ParagraphSvg from '@airclass/icons-svg/lib/asn/Paragraph';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Paragraph = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ParagraphSvg} />;

Paragraph.displayName = 'Paragraph';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(Paragraph);