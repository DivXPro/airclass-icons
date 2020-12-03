// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import NewspaperLineSvg from '@airclass/icons-svg/lib/asn/NewspaperLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NewspaperLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={NewspaperLineSvg} />;

NewspaperLine.displayName = 'NewspaperLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(NewspaperLine);