// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AddLineSvg from '@airclass/icons-svg/lib/asn/AddLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AddLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AddLineSvg} />;

AddLine.displayName = 'AddLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AddLine);