// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import QuestionMarkSvg from '@airclass/icons-svg/lib/asn/QuestionMark';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const QuestionMark = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={QuestionMarkSvg} />;

QuestionMark.displayName = 'QuestionMark';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(QuestionMark);