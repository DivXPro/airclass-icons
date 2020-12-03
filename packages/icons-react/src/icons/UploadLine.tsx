// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import UploadLineSvg from '@airclass/icons-svg/lib/asn/UploadLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UploadLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UploadLineSvg} />;

UploadLine.displayName = 'UploadLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UploadLine);