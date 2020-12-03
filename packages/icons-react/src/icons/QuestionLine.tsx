// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import QuestionLineSvg from '@airclass/icons-svg/lib/asn/QuestionLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const QuestionLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={QuestionLineSvg} />;

QuestionLine.displayName = 'QuestionLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(QuestionLine);