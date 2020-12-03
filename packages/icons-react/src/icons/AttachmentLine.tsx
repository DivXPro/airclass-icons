// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AttachmentLineSvg from '@airclass/icons-svg/lib/asn/AttachmentLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AttachmentLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AttachmentLineSvg} />;

AttachmentLine.displayName = 'AttachmentLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AttachmentLine);