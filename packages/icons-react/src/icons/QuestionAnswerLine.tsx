// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import QuestionAnswerLineSvg from '@airclass/icons-svg/lib/asn/QuestionAnswerLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const QuestionAnswerLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={QuestionAnswerLineSvg} />;

QuestionAnswerLine.displayName = 'QuestionAnswerLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(QuestionAnswerLine);